import * as THREE from 'three';
import {ZONES, profilePx, FIG, QUADRATS, SAMPLE_UP, SAMPLE_DOWN} from './reef-data';
import {OrbitRig, type View} from './orbit';
import type {SceneHandle, SceneOptions} from './types';

// Reef-flat cross-section. x runs along the transect: lagoon at -X, sea at +X,
// matching the 1957 figure. Units are arbitrary (unscaled); vertical
// proportions follow the figure's side view, which is itself exaggerated.
const L = 24, HALF = L / 2, W = 7, ZF = W / 2, WATER = 0.28;
const S = L / FIG.pxLength;                       // units per figure pixel
const BASE = -66 * S - 0.2;                       // the figure's base line, 66 px below low tide
const xOf = (u: number) => -HALF + u * L;
const yOf = (u: number) => profilePx(u) * S;

export const REEF_VIEWS: Record<string, View> = {
  side: {azimuth: 0, polar: 86, radius: 60, target: [3, -2.2, 0], fov: 26},
  aerial: {azimuth: 0, polar: 0.01, radius: 62, target: [3, -0.5, 0], fov: 28},
  quadrats: {azimuth: -12, polar: 54, radius: 40, target: [-2, -0.4, 0], fov: 30},
  oblique: {azimuth: -26, polar: 60, radius: 48, target: [2.5, -1.2, 0], fov: 30},
  downstream: {azimuth: 64, polar: 64, radius: 32, target: [-0.5, -0.8, 0], fov: 32},
  census: {azimuth: -14, polar: 44, radius: 25, target: [3.5, -0.6, 0], fov: 30}
};
const STOP_VIEW = ['side', 'quadrats', 'downstream', 'oblique', 'census'];

function rng(seed: number) { return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }

function strataTexture() {
  const c = document.createElement('canvas'); c.width = 2048; c.height = 512;
  const g = c.getContext('2d')!;
  const grad = g.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, '#d9ccb0'); grad.addColorStop(0.35, '#c8b894'); grad.addColorStop(1, '#8f8068');
  g.fillStyle = grad; g.fillRect(0, 0, 2048, 512);
  const r = rng(7);
  for (let i = 0; i < 46; i++) {           // growth strata
    const y = 20 + i * 10.6 + r() * 4;
    g.strokeStyle = `rgba(70,58,40,${0.05 + r() * 0.08})`; g.lineWidth = 1 + r() * 2;
    g.beginPath(); g.moveTo(0, y);
    for (let x = 0; x <= 2048; x += 64) g.lineTo(x, y + Math.sin(x / 210 + i) * 3 + (r() - 0.5) * 2);
    g.stroke();
  }
  for (let i = 0; i < 1400; i++) {          // rubble and fossil fragments
    g.fillStyle = `rgba(${r() > 0.5 ? '250,244,230' : '90,76,58'},${0.08 + r() * 0.18})`;
    const x = r() * 2048, y = r() * 512, s = 1 + r() * 4;
    g.beginPath(); g.ellipse(x, y, s * 1.6, s, r() * 3, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

function zoneColor(u: number, n: number) {
  const sand = new THREE.Color('#e3d7bb'), rubble = new THREE.Color('#cbbd9b'), crust = new THREE.Color('#b99a86'), buttress = new THREE.Color('#7f8a7c');
  let c = sand;
  if (u > 0.313) c = sand.clone().lerp(rubble, 0.55);
  if (u > 0.529) c = rubble;
  if (u > 0.72) c = rubble.clone().lerp(crust, 0.5);
  if (u > 0.822) c = crust;
  if (u > 0.86) c = crust.clone().lerp(buttress, Math.min(1, (u - 0.86) / 0.06));
  return c.clone().offsetHSL(0, 0, (n - 0.5) * 0.06);
}

function headGeometry(seed: number, detail = 1) {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const r = rng(seed), p = g.attributes.position as THREE.BufferAttribute, v = new THREE.Vector3();
  const a = r() * 6, b = r() * 6;
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const n = 1 + 0.16 * Math.sin(v.x * 3.1 + a) * Math.cos(v.z * 2.7 + b) + 0.07 * Math.sin(v.y * 7 + a);
    v.multiplyScalar(n);
    if (v.y < -0.15) v.y = -0.15;          // flat base sits on the substrate
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

export function createReefScene(canvas: HTMLCanvasElement, overlay: HTMLElement, opts: SceneOptions): SceneHandle {
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true, powerPreference: 'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0b2031');
  scene.fog = new THREE.Fog('#0b2031', 48, 90);
  const camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.1, 200);

  scene.add(new THREE.HemisphereLight('#d7eef0', '#30413f', 1.25));
  const sun = new THREE.DirectionalLight('#fff0d2', 2.4); sun.position.set(14, 22, 16); scene.add(sun);
  const fill = new THREE.DirectionalLight('#7fd3ff', 0.5); fill.position.set(-20, 8, -10); scene.add(fill);

  const root = new THREE.Group(); scene.add(root);
  const N = 240;

  // --- Reef top surface, following the figure's profile ---
  const top = new THREE.PlaneGeometry(L, W, N, 14); top.rotateX(-Math.PI / 2);
  {
    const p = top.attributes.position as THREE.BufferAttribute, col = new Float32Array(p.count * 3), r = rng(3);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i), u = (x + HALF) / L, n = r();
      const rough = u > 0.86 ? 0.05 * Math.sin(z * 4.4) : 0.035 * Math.sin(x * 2.3 + z * 1.7);
      p.setY(i, yOf(u) + rough);
      zoneColor(u, n).toArray(col, i * 3);
    }
    top.setAttribute('color', new THREE.BufferAttribute(col, 3)); top.computeVertexNormals();
  }
  root.add(new THREE.Mesh(top, new THREE.MeshStandardMaterial({vertexColors: true, roughness: 0.96, metalness: 0})));

  // --- Spur-and-groove ribs on the buttress (the figure's wavy lines) ---
  const ribMat = new THREE.MeshStandardMaterial({color: '#8d8c78', roughness: 0.9, flatShading: true});
  for (let k = 0; k < 7; k++) {
    const z = -ZF + 0.55 + k * ((W - 1.1) / 6), pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 16; i++) { const u = 0.84 + (i / 16) * 0.16; pts.push(new THREE.Vector3(xOf(u), yOf(u) + 0.18, z + Math.sin(i * 0.8 + k) * 0.06)); }
    const rib = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.17, 5), ribMat);
    root.add(rib);
  }

  // --- Cut face (front) and ends: the section through the reef ---
  const shape = new THREE.Shape();
  shape.moveTo(-HALF, BASE);
  shape.lineTo(-HALF, yOf(0));
  for (let i = 1; i <= N; i++) { const u = i / N; shape.lineTo(xOf(u), yOf(u)); }
  shape.lineTo(HALF, BASE); shape.closePath();
  const face = new THREE.ShapeGeometry(shape, 1);
  {
    const p = face.attributes.position as THREE.BufferAttribute, uv = face.attributes.uv as THREE.BufferAttribute;
    for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getX(i) + HALF) / L, (p.getY(i) - BASE) / (1.2 - BASE));
  }
  const faceMat = new THREE.MeshStandardMaterial({map: strataTexture(), roughness: 1});
  const front = new THREE.Mesh(face, faceMat); front.position.z = ZF; root.add(front);
  const back = new THREE.Mesh(face, new THREE.MeshStandardMaterial({color: '#6f6656', roughness: 1})); back.position.z = -ZF; back.rotation.y = Math.PI; back.scale.x = -1; root.add(back);
  const endMat = new THREE.MeshStandardMaterial({color: '#a3957a', roughness: 1});
  const lagoonEnd = new THREE.Mesh(new THREE.PlaneGeometry(W, yOf(0) - BASE), endMat);
  lagoonEnd.rotation.y = -Math.PI / 2; lagoonEnd.position.set(-HALF, (yOf(0) + BASE) / 2, 0); root.add(lagoonEnd);
  const seaEnd = new THREE.Mesh(new THREE.PlaneGeometry(W, yOf(1) - BASE), endMat);
  seaEnd.rotation.y = Math.PI / 2; seaEnd.position.set(HALF, (yOf(1) + BASE) / 2, 0); root.add(seaEnd);

  // Low-tide line on the cut face, dashed as in the figure.
  const lt = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-HALF, 0, ZF + 0.02), new THREE.Vector3(HALF - 1.2, 0, ZF + 0.02)]),
    new THREE.LineDashedMaterial({color: '#f3ecdc', dashSize: 0.28, gapSize: 0.2, transparent: true, opacity: 0.85}));
  lt.computeLineDistances(); root.add(lt);

  // --- Coral heads: density and size by zone, following the aerial strip ---
  const heads = new THREE.Group(); root.add(heads);
  const r = rng(11);
  const palettes = ['#b79f6c', '#a08a5e', '#c2a882', '#8a7c58', '#a98266', '#9c9a74', '#b08a7a'];
  const geos = [headGeometry(1, 2), headGeometry(2, 2), headGeometry(3, 2), headGeometry(4, 1)];
  const mats = palettes.map(c => new THREE.MeshStandardMaterial({color: c, roughness: 0.78}));
  const place = (u0: number, u1: number, count: number, rMin: number, rMax: number, toTide: boolean, squash = 0.7) => {
    for (let i = 0; i < count; i++) {
      const u = u0 + r() * (u1 - u0), z = (r() - 0.5) * (W - 0.6), rad = rMin + r() * (rMax - rMin);
      const m = new THREE.Mesh(geos[Math.floor(r() * geos.length)], mats[Math.floor(r() * mats.length)]);
      const y0 = yOf(u);
      // Zone D heads reach the low-tide line (1957, p. 1): flat-topped like microatolls.
      const h = toTide ? Math.min(Math.max(rad * squash, -y0 + 0.02 + r() * 0.12), 1.15) : rad * squash;
      m.scale.set(rad * (0.9 + r() * 0.3), h, rad * (0.9 + r() * 0.3));
      m.position.set(xOf(u), y0, z); m.rotation.y = r() * 6;
      heads.add(m);
    }
  };
  place(0.12, 0.313, 16, 0.18, 0.42, false, 0.8);       // E: scattered large heads
  place(0.313, 0.529, 46, 0.38, 0.78, true, 0.8);       // D: large heads to low tide
  place(0.529, 0.72, 150, 0.07, 0.17, false, 0.9);      // C: small heads
  // B: small “doughnut-shaped” heads and encrusting patches
  const torus = new THREE.TorusGeometry(0.1, 0.045, 6, 12); torus.rotateX(Math.PI / 2);
  for (let i = 0; i < 70; i++) {
    const u = 0.72 + r() * 0.1, z = (r() - 0.5) * (W - 0.6);
    const m = new THREE.Mesh(i % 3 ? torus : geos[3], mats[(i % 4) + 1]);
    const s = 0.7 + r() * 0.9; m.scale.setScalar(i % 3 ? s : s * 0.09); m.position.set(xOf(u), yOf(u) + 0.03, z); heads.add(m);
  }
  // A: coral-algal ridge, a low crust
  const ridge = new THREE.Mesh(new THREE.BoxGeometry(xOf(0.856) - xOf(0.82), 0.16, W - 0.1), new THREE.MeshStandardMaterial({color: '#c08f7f', roughness: 0.9}));
  ridge.position.set((xOf(0.82) + xOf(0.856)) / 2, 0.05, 0); root.add(ridge);

  // --- Water: surface sheet and cut-face column ---
  const waterUniforms = {time: {value: 0}, shallow: {value: new THREE.Color('#5fd6c8')}, deep: {value: new THREE.Color('#0e3a4e')}};
  const surf = new THREE.Mesh(new THREE.PlaneGeometry(L + 6, W, 120, 20).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, uniforms: waterUniforms,
    vertexShader: `uniform float time; varying vec3 vW; varying float vH;
      void main(){ vec3 p = position; float h = 0.025*sin(p.x*1.7 + time*1.3) + 0.018*sin(p.z*2.3 - time*0.9 + p.x*0.4);
        p.y += h; vH = h; vec4 w = modelMatrix*vec4(p,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
    fragmentShader: `uniform vec3 shallow; uniform vec3 deep; uniform float time; varying vec3 vW; varying float vH;
      void main(){ float sea = smoothstep(9.0, 13.5, vW.x); vec3 c = mix(shallow, deep, sea*0.85);
        float glint = smoothstep(0.036, 0.043, vH) * 0.12;
        vec3 V = normalize(cameraPosition - vW); float fres = pow(1.0 - abs(V.y), 3.0);
        gl_FragColor = vec4(c + glint + fres*0.12, 0.34 + 0.25*sea + fres*0.25); }`
  }));
  surf.position.set(3, WATER, 0); surf.renderOrder = 5; root.add(surf);

  const wshape = new THREE.Shape();
  wshape.moveTo(-HALF, WATER); wshape.lineTo(HALF + 6, WATER); wshape.lineTo(HALF + 6, BASE); wshape.lineTo(HALF, BASE);
  for (let i = N; i >= 0; i--) { const u = i / N; wshape.lineTo(xOf(u), Math.min(yOf(u), WATER - 0.001)); }
  wshape.closePath();
  const wcol = new THREE.Mesh(new THREE.ShapeGeometry(wshape, 1), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: waterUniforms,
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: `uniform vec3 shallow; uniform vec3 deep; varying vec3 vW;
      void main(){ float d = clamp(-vW.y/5.0, 0.0, 1.0); vec3 c = mix(shallow, deep, pow(d,0.6));
        gl_FragColor = vec4(c, 0.42 + 0.4*d); }`
  }));
  wcol.position.z = ZF + 0.01; wcol.renderOrder = 4; root.add(wcol);
  // Deep water beyond the buttress (floor of the scene).
  const deepFloor = new THREE.Mesh(new THREE.PlaneGeometry(6, W).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({color: '#183a46', roughness: 1}));
  deepFloor.position.set(HALF + 3, BASE, 0); root.add(deepFloor);

  // --- Overlays: quadrats, current, sampling points ---
  // Quadrats A–F (1955, fig. 2): 20 × 20 ft squares "marked by iron stakes",
  // in a line parallel to the current. Drawn oversized (true scale ≈ 0.2 units).
  const quadGroup = new THREE.Group(); root.add(quadGroup);
  const QS = 1.25, qy = (u: number) => yOf(u) + 0.05;
  const stakeMat = new THREE.MeshStandardMaterial({color: '#6b4a36', roughness: 0.55, metalness: 0.45, transparent: true});
  const capMat = new THREE.MeshBasicMaterial({color: '#df7c52', transparent: true});
  const quadMats: Record<string, {edge: THREE.MeshBasicMaterial; fill: THREE.MeshBasicMaterial}> = {};
  const edgeX = new THREE.BoxGeometry(QS + 0.05, 0.05, 0.05), edgeZ = new THREE.BoxGeometry(0.05, 0.05, QS + 0.05);
  const stakeGeo = new THREE.CylinderGeometry(0.035, 0.035, 1, 8), capGeo = new THREE.SphereGeometry(0.065, 10, 8);
  QUADRATS.forEach(q => {
    const x = xOf(q.u), y = qy(q.u);
    const edge = new THREE.MeshBasicMaterial({color: '#fff6e2', transparent: true, depthTest: false});
    const fill = new THREE.MeshBasicMaterial({color: '#fff6e2', transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide});
    quadMats[q.id] = {edge, fill};
    for (const sgn of [-1, 1]) {
      const ex = new THREE.Mesh(edgeX, edge); ex.position.set(x, y, sgn * QS / 2); ex.renderOrder = 7; quadGroup.add(ex);
      const ez = new THREE.Mesh(edgeZ, edge); ez.position.set(x + sgn * QS / 2, y, 0); ez.renderOrder = 7; quadGroup.add(ez);
    }
    const f = new THREE.Mesh(new THREE.PlaneGeometry(QS, QS).rotateX(-Math.PI / 2), fill); f.position.set(x, y, 0); f.renderOrder = 7; quadGroup.add(f);
    // Iron stakes at the four corners, tall enough to break the surface here so they read.
    const topY = Math.max(y + 0.7, WATER + 0.22), h = topY - (y - 0.15);
    for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
      const st = new THREE.Mesh(stakeGeo, stakeMat); st.scale.y = h; st.position.set(x + dx * QS / 2, y - 0.15 + h / 2, dz * QS / 2); quadGroup.add(st);
      const cap = new THREE.Mesh(capGeo, capMat); cap.position.set(st.position.x, topY, st.position.z); quadGroup.add(cap);
    }
  });

  // Field scene for the quadrat stop: the line of quadrats.
  const fieldGroup = new THREE.Group(); root.add(fieldGroup);
  const lineMat = new THREE.LineDashedMaterial({color: '#fff6e2', dashSize: 0.22, gapSize: 0.14, transparent: true, opacity: 0.8, depthTest: false});
  {
    const u0 = QUADRATS[QUADRATS.length - 1].u, u1 = QUADRATS[0].u, pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 80; i++) { const u = u0 + (u1 - u0) * i / 80; pts.push(new THREE.Vector3(xOf(u), qy(u) + 0.01, 0)); }
    const ln = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat); ln.computeLineDistances(); ln.renderOrder = 7; fieldGroup.add(ln);
  }
  // Quadrat A lay in the breakers ("brief glimpses from a helicopter"); only the label marks it.
  const QA = QUADRATS[0], LABEL_A = new THREE.Vector3(xOf(QA.u), qy(QA.u) + 2.4, 0);

  const currentGroup = new THREE.Group(); root.add(currentGroup);
  {
    const a = new THREE.Shape(); const y = 0;
    a.moveTo(9.5, y - 0.22); a.lineTo(-8.6, y - 0.22); a.lineTo(-8.6, y - 0.62); a.lineTo(-10.4, y); a.lineTo(-8.6, y + 0.62); a.lineTo(-8.6, y + 0.22); a.lineTo(9.5, y + 0.22); a.closePath();
    const arrow = new THREE.Mesh(new THREE.ShapeGeometry(a), new THREE.MeshBasicMaterial({color: '#b9ece4', transparent: true, opacity: 0.92, side: THREE.DoubleSide, depthWrite: false}));
    arrow.rotation.x = -Math.PI / 2; arrow.position.set(0, 1.9, 0); arrow.renderOrder = 6; currentGroup.add(arrow);
  }
  // Flow streaks on the water: speed falls from ~0.5 m/s (sea) to <0.1 (lagoon); qualitative.
  const streakCount = 54, streaks: {m: THREE.Mesh; u: number; z: number}[] = [];
  const streakGeo = new THREE.PlaneGeometry(0.9, 0.05).rotateX(-Math.PI / 2);
  const streakMat = new THREE.MeshBasicMaterial({color: '#e9fffb', transparent: true, opacity: 0.75, depthWrite: false});
  for (let i = 0; i < streakCount; i++) {
    const m = new THREE.Mesh(streakGeo, streakMat); m.renderOrder = 6;
    const s = {m, u: r(), z: (r() - 0.5) * (W - 0.8)}; streaks.push(s); currentGroup.add(m);
  }
  const placeStreaks = (dt: number) => {
    for (const s of streaks) {
      const speed = 0.012 + 0.07 * s.u * s.u;  // faster seaward
      s.u -= speed * dt; if (s.u < 0.02) s.u = 0.86 + Math.random() * 0.1;
      const len = 0.35 + 1.4 * s.u;
      s.m.scale.x = len; s.m.position.set(xOf(s.u), WATER + 0.04, s.z);
    }
  };
  placeStreaks(0);

  const sampleGroup = new THREE.Group(); root.add(sampleGroup);
  const poleMat = new THREE.MeshStandardMaterial({color: '#f3ecdc', roughness: 0.6});
  const bottleMat = new THREE.MeshStandardMaterial({color: '#df7c52', roughness: 0.5, emissive: '#3a1406'});
  [SAMPLE_UP, SAMPLE_DOWN].forEach(u => {
    const x = xOf(u), y = yOf(u);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 2.6 - y, 8), poleMat); pole.position.set(x, (y + 2.6) / 2, ZF - 0.9); sampleGroup.add(pole);
    const bottle = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.32, 4, 10), bottleMat); bottle.position.set(x, WATER - 0.12, ZF - 0.9); sampleGroup.add(bottle);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.025, 6, 40).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({color: '#df7c52'})); ring.position.set(x, WATER + 0.03, ZF - 0.9); sampleGroup.add(ring);
  });
  const bracket = new THREE.Line(new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(xOf(SAMPLE_UP), 2.6, ZF - 0.9), new THREE.Vector3(xOf(SAMPLE_UP), 2.9, ZF - 0.9),
    new THREE.Vector3(xOf(SAMPLE_DOWN), 2.9, ZF - 0.9), new THREE.Vector3(xOf(SAMPLE_DOWN), 2.6, ZF - 0.9)]), new THREE.LineBasicMaterial({color: '#df7c52'}));
  sampleGroup.add(bracket);

  // --- HTML labels ---
  overlay.innerHTML = '';
  type Lab = {el: HTMLElement; p: THREE.Vector3; stops: number[] | 'all'};
  const labs: Lab[] = [];
  const addLab = (html: string, p: THREE.Vector3, stops: number[] | 'all', cls = '') => {
    const el = document.createElement('div'); el.className = `reef-label ${cls}`; el.innerHTML = html; overlay.appendChild(el); labs.push({el, p, stops});
  };
  ZONES.forEach(z => {
    const u = (z.from + z.to) / 2;
    addLab(`${z.letter ? `<b>${z.letter}</b>` : ''}<span>${z.name}</span>`, new THREE.Vector3(xOf(u), z.id === 'X' ? 1.0 : 1.05, ZF), [0], 'zone');
  });
  addLab('<span>← Lagoon</span>', new THREE.Vector3(-HALF + 1.2, BASE - 0.7, ZF), 'all', 'end left');
  addLab('<span>Sea →</span>', new THREE.Vector3(HALF + 3.5, BASE - 0.7, ZF), 'all', 'end right');
  addLab('<span>low tide</span>', new THREE.Vector3(-HALF + 2.2, 0.05, ZF + 0.05), [0], 'tide');
  QUADRATS.forEach(q => addLab(`<b>${q.id}</b>`, new THREE.Vector3(xOf(q.u), Math.max(qy(q.u) + 0.75, WATER + 0.55), QS / 2 + 0.1), [1, 4], 'quad'));
  addLab('<span>Quadrat A, in the breakers:<br/><em>“brief glimpses from a helicopter”</em></span>', LABEL_A, [1], 'note');
  addLab('<span>Snorkellers mapped the others<br/><em>“with pencil on acetate boards”</em></span>', new THREE.Vector3(xOf(0.517), WATER + 1.5, 0), [1], 'note');
  addLab('<span>20 × 20 ft, “marked by iron stakes”<br/><em>six in a line parallel to the current</em></span>', new THREE.Vector3(xOf(0.267), WATER + 1.6, 0), [1], 'note');
  addLab('<span>One more could be reached only<br/><em>in a half-hour window at low tide</em></span>', new THREE.Vector3(xOf(0.69), WATER + 2.5, -ZF + 0.5), [1], 'note');
  addLab('<span>Current · sea → lagoon<br/><em>about 0.5 → under 0.1 m/s</em></span>', new THREE.Vector3(0, 2.6, 0), [2], 'flow');
  addLab('<span>Upstream sample<br/><em>water entering</em></span>', new THREE.Vector3(xOf(SAMPLE_UP), 3.2, ZF - 0.9), [3], 'sample');
  addLab('<span>Downstream sample<br/><em>water leaving</em></span>', new THREE.Vector3(xOf(SAMPLE_DOWN), 3.2, ZF - 0.9), [3], 'sample');
  addLab('<span>Δ dissolved gases = whole-reef production and respiration</span>', new THREE.Vector3(xOf((SAMPLE_UP + SAMPLE_DOWN) / 2), 3.3, ZF - 0.9), [3], 'delta');

  // --- Camera rig ---
  const rig = new OrbitRig(camera, canvas, REEF_VIEWS.side, {azimuth: [-80, 80], polar: [0.01, 88], radius: [12, 44]}, () => invalidate());
  let stop = 0, width = 1, height = 1;
  const vis = {quads: 0, current: 0, sample: 0, field: 0};
  const target = {quads: 0, current: 0, sample: 0, field: 0};

  function applyVis() {
    quadGroup.visible = vis.quads > 0.01;
    for (const [id, m] of Object.entries(quadMats)) {
      const hi = false, dim = 1; void id;
      m.edge.color.set(hi ? '#ffd27a' : '#fff6e2'); m.edge.opacity = vis.quads * dim;
      m.fill.color.set(hi ? '#ffd27a' : '#fff6e2'); m.fill.opacity = (hi ? 0.4 : 0.22) * vis.quads * dim;
    }
    stakeMat.opacity = vis.quads; capMat.opacity = vis.quads;
    fieldGroup.visible = vis.field > 0.5; lineMat.opacity = 0.8 * vis.field;
    currentGroup.visible = vis.current > 0.01; streakMat.opacity = 0.75 * vis.current;
    ((currentGroup.children[0] as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = 0.92 * vis.current;
    sampleGroup.visible = vis.sample > 0.01;
  }

  const v = new THREE.Vector3();
  function drawLabels() {
    for (const l of labs) {
      const on = l.stops === 'all' || l.stops.includes(stop);
      v.copy(l.p).project(camera);
      l.el.style.transform = `translate(${((v.x * 0.5 + 0.5) * width).toFixed(1)}px, ${((-v.y * 0.5 + 0.5) * height).toFixed(1)}px)`;
      l.el.classList.toggle('on', on && v.z < 1);
    }
  }

  let raf = 0, running = false, disposed = false, last = performance.now();
  function frame(now: number) {
    raf = 0; if (disposed) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    let busy = rig.update(opts.reduced);
    for (const k of ['quads', 'current', 'sample', 'field'] as const) {
      const d = target[k] - vis[k];
      if (Math.abs(d) > 0.002) { vis[k] = opts.reduced ? target[k] : vis[k] + d * Math.min(1, dt * 6); busy = true; } else vis[k] = target[k];
    }
    applyVis();
    if (!opts.reduced) { waterUniforms.time.value += dt; if (vis.current > 0.01) placeStreaks(dt * 0.6); busy = true; }
    renderer.render(scene, camera);
    drawLabels();
    if (running && busy) raf = requestAnimationFrame(frame);
  }
  function invalidate() { if (!raf && running && !disposed) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  return {
    setStop(i, instant) {
      stop = Math.max(0, Math.min(4, i));
      target.quads = stop === 1 || stop === 4 ? 1 : 0;
      target.current = stop === 2 || stop === 3 ? 1 : 0;
      target.sample = stop === 3 ? 1 : 0;
      target.field = stop === 1 ? 1 : 0;
      if (instant) Object.assign(vis, target);
      rig.goTo(REEF_VIEWS[STOP_VIEW[stop]], instant || opts.reduced);
      invalidate();
    },
    setPreset(name) { const view = REEF_VIEWS[name]; if (view) { rig.goTo(view, opts.reduced); invalidate(); } },
    onKey(e) { const h = rig.key(e); if (h) invalidate(); return h; },
    resize(w, h) { width = w; height = h; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); invalidate(); },
    start() { running = true; invalidate(); },
    stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
    dispose() {
      disposed = true; if (raf) cancelAnimationFrame(raf); rig.dispose();
      scene.traverse(o => { const m = o as THREE.Mesh; m.geometry?.dispose(); const mt = m.material as THREE.Material | THREE.Material[]; (Array.isArray(mt) ? mt : mt ? [mt] : []).forEach(x => { (x as THREE.MeshStandardMaterial).map?.dispose(); x.dispose(); }); });
      renderer.dispose(); overlay.innerHTML = '';
    },
    renderer
  };
}
