import * as THREE from 'three';
import {imagery, places, type BBox, type LatLon} from '../lib/geo';
import type {SceneHandle, SceneOptions} from './types';

// A real-scale globe (units: km). Imagery patches are sphere segments that
// share the globe's equirectangular mapping, so every image sits exactly on
// its own latitude/longitude footprint. Patches draw without depth testing,
// in a fixed order, and are hidden whenever the camera is far from them.
const R = 6371;

type CamStop = {lat: number; lon: number; alt: number; tilt: number; heading: number};
export const MAP_STOPS: CamStop[] = [
  {lat: 14, lon: 172, alt: 15500, tilt: 0, heading: 0},              // Pacific
  {lat: 9.5, lon: 166.1, alt: 1900, tilt: 0, heading: 0},           // Marshall Islands
  {lat: 11.505, lon: 162.215, alt: 72, tilt: 0, heading: 0},          // Enewetak Atoll
  {lat: 11.4285, lon: 162.3855, alt: 3.4, tilt: 0, heading: 0},       // Japtan
  {lat: 11.6685, lon: 162.1925, alt: 4.2, tilt: 0, heading: 0},       // Ivy Mike crater
  {lat: 11.5535, lon: 162.3470, alt: 3.4, tilt: 0, heading: 0}        // Runit Dome
];

type Label = {id: string; p: LatLon; text: string; sub?: string; kind: 'place' | 'focus' | 'test' | 'people' | 'lab' | 'note'; stops: number[]; align?: 'left' | 'right'};
const LABELS: Label[] = [
  {id: 'ene0', p: places.enewetak, text: 'Enewetak', kind: 'focus', stops: [0]},
  {id: 'hnl', p: places.honolulu, text: 'Hawaiʻi', sub: '4,380 km', kind: 'place', stops: [0]},
  {id: 'gum', p: places.guam, text: 'Guam', sub: '1,900 km', kind: 'place', stops: [0]},
  {id: 'tyo', p: places.tokyo, text: 'Japan', sub: 'mandate power, 1914–44', kind: 'place', stops: [0]},
  {id: 'mh', p: {lat: 8.3, lon: 168.6}, text: 'Marshall Islands', kind: 'note', stops: [0]},
  {id: 'ene1', p: places.enewetak, text: 'Enewetak', sub: '43 tests, 1948–58', kind: 'test', stops: [1], align: 'left'},
  {id: 'bik', p: places.bikini, text: 'Bikini', sub: 'Castle Bravo, 1 Mar 1954', kind: 'test', stops: [1], align: 'left'},
  {id: 'uje', p: places.ujelang, text: 'Ujelang', sub: 'dri-Enewetak in exile, 1947–80', kind: 'people', stops: [1], align: 'left'},
  {id: 'ron', p: places.rongerik, text: 'Rongerik', sub: 'Bikinians moved here, 1946', kind: 'people', stops: [1]},
  {id: 'rgl', p: places.rongelap, text: 'Rongelap', sub: 'Bravo fallout', kind: 'test', stops: [1], align: 'left'},
  {id: 'uti', p: places.utirik, text: 'Utirik', sub: 'Bravo fallout', kind: 'test', stops: [1]},
  {id: 'kwa', p: places.kwajalein, text: 'Kwajalein', kind: 'place', stops: [1]},
  {id: 'maj', p: places.majuro, text: 'Majuro', kind: 'place', stops: [1]},
  {id: 'jap2', p: places.japtan, text: 'Japtan', sub: 'research reef', kind: 'focus', stops: [2]},
  {id: 'med2', p: places.medren, text: 'Medren (Parry)', sub: 'marine laboratory', kind: 'lab', stops: [2, 3], align: 'left'},
  {id: 'eni2', p: places.enewetakIsland, text: 'Enewetak Island', kind: 'place', stops: [2], align: 'left'},
  {id: 'mik2', p: places.mikeCrater, text: 'Ivy Mike crater', sub: '1 Nov 1952', kind: 'test', stops: [2]},
  {id: 'run2', p: places.runitDome, text: 'Runit Dome', kind: 'test', stops: [2]},
  {id: 'jap3', p: places.japtan, text: 'Japtan', kind: 'place', stops: [3], align: 'left'},
  {id: 'mik4', p: places.mikeCrater, text: 'Ivy Mike crater', sub: 'Elugelab island, removed 1 Nov 1952', kind: 'test', stops: [4], align: 'left'},
  {id: 'koa4', p: places.koaCrater, text: 'KOA crater', sub: 'later test', kind: 'place', stops: [4]},
  {id: 'run5', p: places.runitDome, text: 'Runit Dome', sub: 'concrete cap over contaminated soil', kind: 'test', stops: [5]}
];

// Lines drawn in the overlay: displacement routes and the research transect.
type Route = {id: string; a: LatLon; b: LatLon; text: string; stops: number[]; kind: 'people' | 'transect'};
const ROUTES: Route[] = [
  {id: 'r-uje', a: places.enewetak, b: places.ujelang, text: 'Dec 1947 · about 145 people', stops: [1], kind: 'people'},
  {id: 'r-ron', a: places.bikini, b: places.rongerik, text: '1946', stops: [1], kind: 'people'},
  // About a quarter mile north of Japtan, across the windward reef from sea (east) to lagoon (west).
  {id: 'transect', a: {lat: 11.4310, lon: 162.3895}, b: {lat: 11.4322, lon: 162.3822}, text: 'Odums’ transect (approx.)', stops: [2, 3], kind: 'transect'}
];

function vec(p: LatLon, h = 0, out = new THREE.Vector3()) {
  const phi = ((p.lon + 180) / 360) * Math.PI * 2, theta = ((90 - p.lat) / 180) * Math.PI, r = R + h;
  return out.set(-r * Math.cos(phi) * Math.sin(theta), r * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta));
}
function enu(p: LatLon) {
  const up = vec(p).normalize();
  const phi = ((p.lon + 180) / 360) * Math.PI * 2;
  const east = new THREE.Vector3(Math.sin(phi), 0, Math.cos(phi)).normalize();
  const north = new THREE.Vector3().crossVectors(up, east).normalize();
  return {up, east, north};
}

function featherTexture(edge = 0.12) {
  const n = 256, c = document.createElement('canvas'); c.width = c.height = n;
  const g = c.getContext('2d')!, img = g.createImageData(n, n);
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    const d = Math.min(x, y, n - 1 - x, n - 1 - y) / (n * edge);
    const a = Math.max(0, Math.min(1, d)); const s = a * a * (3 - 2 * a);
    const i = (y * n + x) * 4; img.data[i] = img.data[i + 1] = img.data[i + 2] = Math.round(s * 255); img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.NoColorSpace; return t;
}

function segment(b: BBox, segs = 12) {
  return new THREE.SphereGeometry(R, segs, segs,
    ((b.west + 180) / 360) * Math.PI * 2, ((b.east - b.west) / 360) * Math.PI * 2,
    ((90 - b.north) / 180) * Math.PI, ((b.north - b.south) / 180) * Math.PI);
}

// Quadratic in-out: gets moving straight away rather than creeping off the mark.
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// Smooth pan-and-zoom between stops (van Wijk and Nuij 2003, as in d3.interpolateZoom):
// zoom out just enough to see where you are going, pan across, zoom in, with the
// ground crossing the screen at a steady speed. RHO sets how much it zooms out
// against how much it pans; below d3's √2 so it climbs less and pans more.
// u is the fraction of the ground distance covered; w the visible width (∝ altitude).
const RHO = 1.1;
const VIEW = 1.2;   // visible width per km of altitude
type Flight = {S: number; at: (t: number) => {u: number; w: number}};
function flight(a: CamStop, b: CamStop): Flight {
  const d = vec(a).distanceTo(vec(b)), w0 = a.alt * VIEW, w1 = b.alt * VIEW;
  if (d < 1e-6) {
    const S = Math.log(w1 / w0) / RHO;
    return {S, at: t => ({u: 1, w: w0 * Math.exp(RHO * t * S)})};
  }
  const b0 = (w1 * w1 - w0 * w0 + RHO ** 4 * d * d) / (2 * w0 * RHO ** 2 * d);
  const b1 = (w1 * w1 - w0 * w0 - RHO ** 4 * d * d) / (2 * w1 * RHO ** 2 * d);
  const r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
  const S = (r1 - r0) / RHO;
  return {S, at: t => {
    if (t >= 1) return {u: 1, w: w1};
    const s = t * S;
    return {u: (w0 / (RHO ** 2 * d)) * (Math.cosh(r0) * Math.tanh(RHO * s + r0) - Math.sinh(r0)), w: (w0 * Math.cosh(r0)) / Math.cosh(RHO * s + r0)};
  }};
}
const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function createMapScene(canvas: HTMLCanvasElement, overlay: HTMLElement, opts: SceneOptions): SceneHandle {
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: false, powerPreference: 'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setClearColor(0x051018, 1);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 16 / 9, 1, 60000);
  const loader = new THREE.TextureLoader();
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  let pending = 0;
  const tex = (src: string) => {
    pending++;
    const t = loader.load(src, () => { pending--; invalidate(); if (pending === 0) opts.onReady?.(); }, undefined, () => { pending--; opts.onError?.(`Could not load ${src}`); });
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = maxAniso; return t;
  };

  // Globe with a soft atmospheric rim.
  const globe = new THREE.Mesh(new THREE.SphereGeometry(R, 192, 96), new THREE.MeshBasicMaterial({map: tex(imagery.globe.src)}));
  scene.add(globe);
  const rim = new THREE.Mesh(new THREE.SphereGeometry(R * 1.035, 96, 48), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide,
    uniforms: {color: {value: new THREE.Color('#4fcfc0')}},
    vertexShader: 'varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vec4 mv = modelViewMatrix*vec4(position,1.0); vP = mv.xyz; gl_Position = projectionMatrix*mv; }',
    fragmentShader: 'uniform vec3 color; varying vec3 vN; varying vec3 vP; void main(){ float f = pow(1.0 - abs(dot(normalize(-vP), vN)), 5.0); gl_FragColor = vec4(color, f*0.55); }'
  }));
  scene.add(rim);

  const feather = featherTexture(0.1);
  type Patch = {mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; show: (alt: number) => number};
  const patches: Patch[] = [];
  // Display treatment for satellite patches: only deep-water pixels (dark and
  // blue-dominant) are evened toward the globe's ink, hiding the straight
  // tonal seams of Esri's lagoon mosaic. Reef, islands and shallows are untouched.
  const tone = (m: THREE.MeshBasicMaterial) => {
    m.onBeforeCompile = sh => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
        float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
        float deep = smoothstep(0.16, 0.06, lum) * step(diffuseColor.g, diffuseColor.b + 0.02);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.0034, 0.0176, 0.0284), deep * 0.9);`);
    };
  };
  const addPatch = (src: string, b: BBox, order: number, show: (alt: number) => number, segs = 12, edge?: THREE.Texture, toned = true) => {
    const mat = new THREE.MeshBasicMaterial({map: tex(src), alphaMap: edge ?? feather, transparent: true, depthTest: false, depthWrite: false});
    if (toned) tone(mat);
    const mesh = new THREE.Mesh(segment(b, segs), mat);
    mesh.renderOrder = order; scene.add(mesh); patches.push({mesh, mat, show});
  };
  addPatch(imagery.region.src, imagery.region.bbox, 1, a => smooth(9000, 4500, a) * smooth(60, 160, a), 48, featherTexture(0.06), false);
  addPatch(imagery.atoll.src, imagery.atoll.bbox, 2, a => smooth(900, 260, a), 16, featherTexture(0.035));
  addPatch(imagery.japtanWide.src, imagery.japtanWide.bbox, 3, a => smooth(30, 9, a));
  addPatch(imagery.japtanClose.src, imagery.japtanClose.bbox, 4, a => smooth(9, 5, a));
  addPatch(imagery.mike.src, imagery.mike.bbox, 3, a => smooth(30, 9, a));
  addPatch(imagery.runit.src, imagery.runit.bbox, 3, a => smooth(30, 9, a));

  // ---- Camera path ----
  let cur: CamStop = {...MAP_STOPS[0]};
  let from: CamStop = cur, to: CamStop = cur, t0 = 0, dur = 0, stopIndex = 0;
  // Framing options (setOption): pull every stop back by altScale, and raise the
  // picture by liftY of the screen height, to clear a bar along the bottom.
  let altScale = 1, liftY = 0;
  let path: Flight = flight(cur, cur);
  let width = 1, height = 1;

  function place(c: CamStop) {
    const target = vec(c);
    const {up, north, east} = enu(c);
    const tilt = THREE.MathUtils.degToRad(c.tilt), hd = THREE.MathUtils.degToRad(c.heading);
    const fwd = north.clone().multiplyScalar(Math.cos(hd)).addScaledVector(east, Math.sin(hd));
    const pos = target.clone().addScaledVector(up, c.alt * Math.cos(tilt)).addScaledVector(fwd, -c.alt * Math.sin(tilt));
    camera.position.copy(pos);
    camera.up.copy(tilt > 0.01 ? up : fwd);
    camera.lookAt(target);
    camera.near = Math.max(0.05, c.alt * 0.2);
    camera.far = c.alt + R * 2;
    camera.updateProjectionMatrix();
  }

  function interp(a: CamStop, b: CamStop, f: Flight, t: number): CamStop {
    const e = ease(t);
    const {u, w} = f.at(e);
    return {
      lat: a.lat + (b.lat - a.lat) * u, lon: a.lon + (b.lon - a.lon) * u,
      alt: w / VIEW,
      tilt: a.tilt + (b.tilt - a.tilt) * e, heading: a.heading + (b.heading - a.heading) * e
    };
  }

  // ---- HTML overlay: labels and routes ----
  overlay.innerHTML = '';
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'map-routes'); overlay.appendChild(svg);
  const labelEls = LABELS.map(l => {
    const el = document.createElement('div');
    el.className = `map-label k-${l.kind} ${l.align === 'left' ? 'left' : ''}`;
    el.innerHTML = `<i></i><span><b>${l.text}</b>${l.sub ? `<em>${l.sub}</em>` : ''}</span>`;
    overlay.appendChild(el); return el;
  });
  const routeEls = ROUTES.map(r => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', `route k-${r.kind}`);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.textContent = r.text; g.append(path, text); svg.appendChild(g); return {g, path, text};
  });

  const tmp = new THREE.Vector3(), camDir = new THREE.Vector3();
  function project(p: LatLon) {
    vec(p, 0, tmp);
    const normal = tmp.clone().normalize();
    camDir.copy(tmp).sub(camera.position);
    const facing = normal.dot(camDir) < 0;
    tmp.project(camera);
    return {x: (tmp.x * 0.5 + 0.5) * width, y: (-tmp.y * 0.5 + 0.5) * height, ok: facing && tmp.z < 1};
  }

  function drawOverlay(alt: number) {
    const atStop = dur === 0 || performance.now() - t0 >= dur;
    LABELS.forEach((l, i) => {
      const el = labelEls[i];
      const on = atStop && l.stops.includes(stopIndex);
      const q = project(l.p);
      el.style.transform = `translate(${q.x.toFixed(1)}px, ${q.y.toFixed(1)}px)`;
      el.classList.toggle('on', on && q.ok);
    });
    ROUTES.forEach((r, i) => {
      const {g, path, text} = routeEls[i];
      const on = atStop && r.stops.includes(stopIndex) && (r.kind !== 'transect' || alt < 120);
      g.classList.toggle('on', on);
      if (!on) return;
      const a = project(r.a), b = project(r.b);
      if (r.kind === 'transect') {
        path.setAttribute('d', `M${a.x},${a.y} L${b.x},${b.y}`);
        text.setAttribute('x', String((a.x + b.x) / 2)); text.setAttribute('y', String(Math.min(a.y, b.y) - 18));
      } else {
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, dx = b.x - a.x, dy = b.y - a.y;
        const cx = mx - dy * 0.28, cy = my + dx * 0.28;
        path.setAttribute('d', `M${a.x},${a.y} Q${cx},${cy} ${b.x},${b.y}`);
        text.setAttribute('x', String(cx)); text.setAttribute('y', String(cy + (dx > 0 ? -10 : 26)));
      }
    });
  }

  // ---- Render loop: runs only while something moves ----
  let raf = 0, running = false, disposed = false;
  function frame() {
    raf = 0;
    if (disposed) return;
    const now = performance.now();
    let moving = false;
    if (dur > 0) {
      const t = Math.min(1, (now - t0) / dur);
      cur = interp(from, to, path, t);
      moving = t < 1;
      if (!moving) { cur = {...to}; dur = 0; }
    }
    render();
    drawOverlay(cur.alt);
    if (moving && running) raf = requestAnimationFrame(frame);
  }
  function render() {
    place(cur);
    for (const p of patches) {
      const o = p.show(cur.alt);
      p.mesh.visible = o > 0.002; p.mat.opacity = o;
    }
    rim.visible = cur.alt > 1500;
    renderer.render(scene, camera);
  }
  function invalidate() { if (!raf && running && !disposed) raf = requestAnimationFrame(frame); }

  return {
    setStop(i, instant) {
      const stop = MAP_STOPS[Math.max(0, Math.min(MAP_STOPS.length - 1, i))];
      const target = {...stop, alt: stop.alt * altScale};
      stopIndex = i;
      if (instant || opts.reduced) { cur = {...target}; dur = 0; }
      else {
        from = {...cur}; to = {...target}; t0 = performance.now();
        path = flight(from, to);
        // Duration follows the length of the zoom path: about 0.65–1 s.
        dur = Math.min(1050, 300 + Math.abs(path.S) * 190);
      }
      invalidate();
    },
    resize(w, h) {
      width = w; height = h;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      // Shift the projection centre right so each stop sits clear of the text panel.
      camera.setViewOffset(w, h, -w * 0.19, h * liftY, w, h);
      camera.updateProjectionMatrix();
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      invalidate();
    },
    setOption(name, value) {
      if (name === 'altScale') altScale = Number(value) || 1;
      else if (name === 'liftY') {
        liftY = Number(value) || 0;
        camera.setViewOffset(width, height, -width * 0.19, height * liftY, width, height);
        camera.updateProjectionMatrix();
      }
      invalidate();
    },
    start() { running = true; invalidate(); },
    stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
    dispose() {
      disposed = true; if (raf) cancelAnimationFrame(raf);
      scene.traverse(o => { const m = o as THREE.Mesh; m.geometry?.dispose(); const mat = m.material as THREE.Material & {map?: THREE.Texture}; mat?.map?.dispose(); mat?.dispose?.(); });
      renderer.dispose(); overlay.innerHTML = '';
    },
    renderer
  };
}
