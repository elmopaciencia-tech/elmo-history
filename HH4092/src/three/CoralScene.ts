import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js';
import type {SceneHandle, SceneOptions} from './types';

// A real coral skeleton (Smithsonian scan of Porites lobata), cut in half.
// The cut face is computed from the mesh itself: triangles are sliced at the
// cut plane, the section is rasterized, and layers are painted by distance
// from the outer surface. Layer depths are schematic, not measurements.
export const CORAL_SRC = 'assets/reef/porites-lobata.glb';

type Section = {canvas: HTMLCanvasElement; minX: number; maxX: number; minY: number; maxY: number; anchors: Record<string, THREE.Vector3>};

function sliceSection(meshes: THREE.Mesh[], root: THREE.Object3D, size = 1024): Section | null {
  const segs: number[] = [];
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  for (const m of meshes) {
    const g = m.geometry as THREE.BufferGeometry, pos = g.attributes.position as THREE.BufferAttribute, idx = g.index;
    const mat = new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld);
    const n = idx ? idx.count : pos.count;
    for (let i = 0; i < n; i += 3) {
      const ia = idx ? idx.getX(i) : i, ib = idx ? idx.getX(i + 1) : i + 1, ic = idx ? idx.getX(i + 2) : i + 2;
      a.fromBufferAttribute(pos, ia).applyMatrix4(mat); b.fromBufferAttribute(pos, ib).applyMatrix4(mat); c.fromBufferAttribute(pos, ic).applyMatrix4(mat);
      const pts: number[] = [];
      for (const [p, q] of [[a, b], [b, c], [c, a]] as const) {
        if ((p.z > 0) !== (q.z > 0)) { const t = p.z / (p.z - q.z); pts.push(p.x + (q.x - p.x) * t, p.y + (q.y - p.y) * t); }
      }
      if (pts.length === 4) segs.push(...pts);
    }
  }
  if (!segs.length) return null;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (let i = 0; i < segs.length; i += 2) { minX = Math.min(minX, segs[i]); maxX = Math.max(maxX, segs[i]); minY = Math.min(minY, segs[i + 1]); maxY = Math.max(maxY, segs[i + 1]); }
  const pad = (maxX - minX) * 0.01; minX -= pad; maxX += pad; minY -= pad; maxY += pad;
  const W = size, H = Math.max(8, Math.round(size * (maxY - minY) / (maxX - minX)));
  const toPx = (x: number) => ((x - minX) / (maxX - minX)) * W;

  // Even-odd scanline fill from unordered segments.
  const inside = new Uint8Array(W * H);
  const xs: number[] = [];
  for (let py = 0; py < H; py++) {
    const yy = maxY - ((py + 0.5) / H) * (maxY - minY);
    xs.length = 0;
    for (let i = 0; i < segs.length; i += 4) {
      const y1 = segs[i + 1], y2 = segs[i + 3];
      if ((y1 > yy) !== (y2 > yy)) xs.push(segs[i] + (segs[i + 2] - segs[i]) * (yy - y1) / (y2 - y1));
    }
    xs.sort((p, q) => p - q);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const x0 = Math.max(0, Math.ceil(toPx(xs[k]) - 0.5)), x1 = Math.min(W - 1, Math.floor(toPx(xs[k + 1]) - 0.5));
      for (let px = x0; px <= x1; px++) inside[py * W + px] = 1;
    }
  }
  // Two-pass chamfer distance (pixels) from the outside.
  const D = new Float32Array(W * H);
  for (let i = 0; i < D.length; i++) D[i] = inside[i] ? 1e6 : 0;
  const d1 = 1, d2 = 1.4142;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x; if (!D[i]) continue;
    let v = D[i];
    if (x > 0) v = Math.min(v, D[i - 1] + d1); else v = Math.min(v, d1);
    if (y > 0) v = Math.min(v, D[i - W] + d1, x > 0 ? D[i - W - 1] + d2 : d1, x < W - 1 ? D[i - W + 1] + d2 : d1); else v = Math.min(v, d1);
    D[i] = v;
  }
  for (let y = H - 1; y >= 0; y--) for (let x = W - 1; x >= 0; x--) {
    const i = y * W + x; if (!D[i]) continue;
    let v = D[i];
    if (x < W - 1) v = Math.min(v, D[i + 1] + d1); else v = Math.min(v, d1);
    if (y < H - 1) v = Math.min(v, D[i + W] + d1, x < W - 1 ? D[i + W + 1] + d2 : d1, x > 0 ? D[i + W - 1] + d2 : d1); else v = Math.min(v, d1);
    D[i] = v;
  }
  // Paint layers by depth below the surface (schematic thicknesses).
  const k = W / 1024;
  const T = {tissue: 9 * k, band1: [22 * k, 36 * k], band2: [58 * k, 66 * k]};
  const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
  const g = canvas.getContext('2d')!, img = g.createImageData(W, H);
  let seed = 9; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < D.length; i++) {
    const d = D[i]; if (!d) continue;
    const n = rnd();
    let r = 236, gg = 229, bb = 214;                          // limestone skeleton
    const growth = 0.5 + 0.5 * Math.sin(d / (14 * k));
    r -= growth * 12; gg -= growth * 12; bb -= growth * 14;
    r -= n * 10; gg -= n * 10; bb -= n * 12;
    const mix = (cr: number, cg: number, cb: number, t: number) => { r += (cr - r) * t; gg += (cg - gg) * t; bb += (cb - bb) * t; };
    if (d < T.tissue) mix(140, 104, 62, 0.9);                 // living tissue (animal)
    const bandA = Math.max(0, 1 - Math.abs(d - (T.band1[0] + T.band1[1]) / 2) / ((T.band1[1] - T.band1[0]) / 2));
    const bandB = Math.max(0, 1 - Math.abs(d - (T.band2[0] + T.band2[1]) / 2) / ((T.band2[1] - T.band2[0]) / 2));
    if (bandA) mix(74, 128, 58, Math.min(1, bandA * 1.4) * 0.9);   // skeletal algae (plant)
    if (bandB) mix(110, 150, 86, bandB * 0.55);
    const o = i * 4; img.data[o] = r; img.data[o + 1] = gg; img.data[o + 2] = bb; img.data[o + 3] = 255;
  }
  g.putImageData(img, 0, 0);

  // Label anchors along the column through the section's centre.
  const cx = Math.floor(W / 2); let topRow = -1;
  for (let y = 0; y < H; y++) if (inside[y * W + cx]) { topRow = y; break; }
  const toWorld = (px: number, py: number) => new THREE.Vector3(minX + (px / W) * (maxX - minX), maxY - (py / H) * (maxY - minY), 0);
  const anchors: Record<string, THREE.Vector3> = topRow < 0 ? {} : {
    tissue: toWorld(cx, topRow + T.tissue * 0.5),
    algae: toWorld(cx, topRow + (T.band1[0] + T.band1[1]) / 2),
    skeleton: toWorld(cx, Math.min(H - 1, topRow + 320 * k))
  };
  return {canvas, minX, maxX, minY, maxY, anchors};
}

export function createCoralScene(canvas: HTMLCanvasElement, overlay: HTMLElement, opts: SceneOptions): SceneHandle {
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: true, powerPreference: 'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
  renderer.setClearColor(0x000000, 0);
  renderer.localClippingEnabled = true;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
  camera.position.set(0, 0.5, 5.2); camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight('#e8f4f2', '#3a3328', 1.4));
  const key = new THREE.DirectionalLight('#fff1da', 2.6); key.position.set(3, 5, 4); scene.add(key);
  const rimL = new THREE.DirectionalLight('#7fe3d6', 1.1); rimL.position.set(-4, 2, -3); scene.add(rimL);

  const spin = new THREE.Group(); scene.add(spin);         // auto-rotation + user yaw/pitch
  const halves = new THREE.Group(); spin.add(halves);
  const backHalf = new THREE.Group(), frontHalf = new THREE.Group();
  halves.add(backHalf, frontHalf);
  const keepBack = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0), keepFront = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const worldBack = keepBack.clone(), worldFront = keepFront.clone();
  let cap: THREE.Mesh | null = null, anchors: Record<string, THREE.Vector3> = {};
  const frontMats: THREE.MeshStandardMaterial[] = [];

  overlay.innerHTML = '';
  const labelDefs = [
    {id: 'tissue', html: '<b>Polyp tissue</b><em>animal</em>'},
    {id: 'algae', html: '<b>Green bands of skeletal algae</b><em>plant</em>'},
    {id: 'skeleton', html: '<b>Limestone skeleton</b>'}
  ];
  const labelEls = labelDefs.map(d => { const el = document.createElement('div'); el.className = `coral-label l-${d.id}`; el.innerHTML = `<i></i><span>${d.html}</span>`; overlay.appendChild(el); return el; });

  const draco = new DRACOLoader().setDecoderPath('assets/draco/');
  const loader = new GLTFLoader().setDRACOLoader(draco);
  loader.load(CORAL_SRC, gltf => {
    const model = gltf.scene;
    const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
    const s = 2.3 / Math.max(size.x, size.y, size.z);
    const wrap = new THREE.Group(); wrap.add(model);
    model.position.sub(centre); wrap.scale.setScalar(s);
    // Massive heads read best with the broad axis horizontal; keep the scan as delivered otherwise.
    wrap.updateMatrixWorld(true);
    const meshes: THREE.Mesh[] = [];
    model.traverse(o => { if ((o as THREE.Mesh).isMesh) meshes.push(o as THREE.Mesh); });
    const make = (keep: THREE.Plane, front: boolean) => {
      const w = wrap.clone(true);
      w.traverse(o => {
        const m = o as THREE.Mesh; if (!m.isMesh) return;
        const src = m.material as THREE.MeshStandardMaterial;
        const mat = src.clone(); mat.clippingPlanes = [keep]; mat.side = THREE.DoubleSide; mat.roughness = Math.max(0.75, mat.roughness ?? 0.8);
        if (front) { mat.transparent = true; frontMats.push(mat); }
        m.material = mat;
      });
      return w;
    };
    backHalf.add(make(worldBack, false));
    frontHalf.add(make(worldFront, true));
    const sec = sliceSection(meshes, wrap);
    if (sec) {
      const t = new THREE.CanvasTexture(sec.canvas); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const geo = new THREE.PlaneGeometry(sec.maxX - sec.minX, sec.maxY - sec.minY);
      // Alpha from the painted section (unpainted pixels are transparent).
      cap = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({map: t, transparent: true, alphaTest: 0.5, roughness: 0.9, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1}));
      cap.position.set((sec.minX + sec.maxX) / 2, (sec.minY + sec.maxY) / 2, 0.001);
      cap.scale.setScalar(1); wrap.updateMatrixWorld(true);
      // Section coordinates are in the wrapper's (scaled) space.
      const capWrap = new THREE.Group(); capWrap.scale.setScalar(s); capWrap.add(cap); backHalf.add(capWrap);
      anchors = Object.fromEntries(Object.entries(sec.anchors).map(([k2, v]) => [k2, v.clone().multiplyScalar(s)]));
    }
    draco.dispose();
    opts.onReady?.(); invalidate();
  }, undefined, () => opts.onError?.('Could not load the coral model.'));

  // ---- state ----
  let stop = 0, width = 1, height = 1, autoYaw = 0, userYaw = 0, userPitch = 0;
  let cut = 0, cutGoal = 0, yawGoal = 0;
  const drag = {on: false, x: 0, y: 0};
  const el = canvas;
  const down = (e: PointerEvent) => { drag.on = true; drag.x = e.clientX; drag.y = e.clientY; el.setPointerCapture(e.pointerId); };
  const move = (e: PointerEvent) => { if (!drag.on) return; userYaw += (e.clientX - drag.x) * 0.008; userPitch = Math.max(-0.6, Math.min(0.6, userPitch + (e.clientY - drag.y) * 0.006)); drag.x = e.clientX; drag.y = e.clientY; invalidate(); };
  const up = () => { drag.on = false; };
  el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move); el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
  el.style.touchAction = 'none'; el.style.cursor = 'grab';
  let rotate = true;

  const v = new THREE.Vector3();
  function drawLabels() {
    labelDefs.forEach((d, i) => {
      const a = anchors[d.id]; const elx = labelEls[i];
      const on = !!a && cut > 0.92 && stop >= 1;
      if (a) {
        v.copy(a); backHalf.localToWorld(v); v.project(camera);
        elx.style.transform = `translate(${((v.x * 0.5 + 0.5) * width).toFixed(1)}px, ${((-v.y * 0.5 + 0.5) * height).toFixed(1)}px)`;
      }
      elx.classList.toggle('on', on);
      elx.classList.toggle('pulse', on && d.id === 'algae' && stop >= 2);
    });
  }

  let raf = 0, running = false, disposed = false, last = performance.now();
  function frame(now: number) {
    raf = 0; if (disposed) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    let busy = false;
    const k = opts.reduced ? 1 : Math.min(1, dt * 3.2);
    if (Math.abs(cutGoal - cut) > 0.001) { cut += (cutGoal - cut) * k; busy = true; } else cut = cutGoal;
    if (stop === 0 && rotate && !opts.reduced && !drag.on) { autoYaw += dt * 0.35; busy = true; }
    if (stop > 0) { // face the cut toward the viewer
      const target = Math.round((autoYaw - yawGoal) / (Math.PI * 2)) * Math.PI * 2 + yawGoal;
      const d = target - autoYaw; if (Math.abs(d) > 0.001) { autoYaw += d * k; busy = true; } else autoYaw = target;
    }
    spin.rotation.set(userPitch + 0.18, autoYaw + userYaw, 0);
    frontHalf.position.z = cut * 1.6; frontHalf.position.x = cut * 0.5;
    for (const m of frontMats) { m.opacity = 1 - cut; m.depthWrite = cut < 0.5; }
    frontHalf.visible = cut < 0.995;
    if (cap) cap.visible = cut > 0.02;
    spin.updateMatrixWorld(true);
    worldBack.copy(keepBack).applyMatrix4(halves.matrixWorld);
    worldFront.copy(keepFront).applyMatrix4(frontHalf.matrixWorld);
    renderer.render(scene, camera);
    drawLabels();
    if (running && (busy || drag.on)) raf = requestAnimationFrame(frame);
  }
  function invalidate() { if (!raf && running && !disposed) { last = performance.now(); raf = requestAnimationFrame(frame); } }

  return {
    setStop(i, instant) {
      stop = Math.max(0, Math.min(3, i));
      cutGoal = stop >= 1 ? 1 : 0;
      if (stop >= 1) { userYaw = 0; userPitch = 0; }
      if (instant) cut = cutGoal;
      invalidate();
    },
    setOption(name, value) {
      if (name === 'rotate') { rotate = !!value; invalidate(); }
      if (name === 'cut') { cutGoal = value ? 1 : 0; invalidate(); }
    },
    onKey(e) {
      const s = e.shiftKey ? 0.3 : 0.12;
      if (e.key === 'ArrowLeft') userYaw -= s; else if (e.key === 'ArrowRight') userYaw += s;
      else if (e.key === 'ArrowUp') userPitch = Math.max(-0.6, userPitch - s); else if (e.key === 'ArrowDown') userPitch = Math.min(0.6, userPitch + s);
      else return false;
      invalidate(); return true;
    },
    resize(w, h) {
      width = w; height = h; renderer.setSize(w, h, false); camera.aspect = w / h;
      camera.position.set(0, 0.45, w / h < 1 ? 6.2 : 5.0); camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix(); invalidate();
    },
    start() { running = true; invalidate(); },
    stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
    dispose() {
      disposed = true; if (raf) cancelAnimationFrame(raf);
      el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up);
      scene.traverse(o => { const m = o as THREE.Mesh; m.geometry?.dispose(); const mt = m.material as THREE.MeshStandardMaterial | undefined; mt?.map?.dispose(); mt?.dispose?.(); });
      renderer.dispose(); overlay.innerHTML = '';
    },
    renderer
  };
}
