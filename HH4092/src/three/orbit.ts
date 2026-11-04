import * as THREE from 'three';

export type View = {azimuth: number; polar: number; radius: number; target: [number, number, number]; fov: number};
type Bounds = {azimuth: [number, number]; polar: [number, number]; radius: [number, number]};

const clamp = (v: number, [a, b]: [number, number]) => Math.min(b, Math.max(a, v));
const D2R = Math.PI / 180;

/** A bounded orbit camera: presets, drag, wheel and keyboard, with smoothing
 *  that can be interrupted at any time. Angles in degrees. */
export class OrbitRig {
  cur: View; goal: View;
  private drag: {x: number; y: number; id: number} | null = null;
  private off: (() => void)[] = [];

  constructor(private camera: THREE.PerspectiveCamera, el: HTMLElement, start: View, private bounds: Bounds, private onChange: () => void) {
    this.cur = structuredClone(start); this.goal = structuredClone(start);
    const down = (e: PointerEvent) => { this.drag = {x: e.clientX, y: e.clientY, id: e.pointerId}; el.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => {
      if (!this.drag || e.pointerId !== this.drag.id) return;
      const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y; this.drag.x = e.clientX; this.drag.y = e.clientY;
      this.nudge(-dx * 0.25, -dy * 0.2, 0);
    };
    const up = () => { this.drag = null; };
    const wheel = (e: WheelEvent) => { e.preventDefault(); this.nudge(0, 0, e.deltaY * 0.02); };
    el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', wheel, {passive: false});
    el.style.touchAction = 'none'; el.style.cursor = 'grab';
    this.off.push(() => { el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up); el.removeEventListener('wheel', wheel); });
    this.apply();
  }

  nudge(dAz: number, dPolar: number, dR: number) {
    this.goal.azimuth = clamp(this.goal.azimuth + dAz, this.bounds.azimuth);
    this.goal.polar = clamp(this.goal.polar + dPolar, this.bounds.polar);
    this.goal.radius = clamp(this.goal.radius + dR, this.bounds.radius);
    this.onChange();
  }

  goTo(v: View, instant = false) {
    this.goal = structuredClone(v);
    if (instant) { this.cur = structuredClone(v); this.apply(); }
    this.onChange();
  }

  key(e: KeyboardEvent): boolean {
    const step = e.shiftKey ? 12 : 5;
    switch (e.key) {
      case 'ArrowLeft': this.nudge(-step, 0, 0); return true;
      case 'ArrowRight': this.nudge(step, 0, 0); return true;
      case 'ArrowUp': this.nudge(0, -step, 0); return true;
      case 'ArrowDown': this.nudge(0, step, 0); return true;
      case '+': case '=': this.nudge(0, 0, -2); return true;
      case '-': case '_': this.nudge(0, 0, 2); return true;
      default: return false;
    }
  }

  /** Advance toward the goal; returns true while still moving. */
  update(instant: boolean): boolean {
    const k = instant ? 1 : 0.11;
    let moving = false;
    const step = (a: number, b: number, eps: number) => { const d = b - a; if (Math.abs(d) > eps) { moving = true; return a + d * k; } return b; };
    this.cur.azimuth = step(this.cur.azimuth, this.goal.azimuth, 0.02);
    this.cur.polar = step(this.cur.polar, this.goal.polar, 0.02);
    this.cur.radius = step(this.cur.radius, this.goal.radius, 0.005);
    this.cur.fov = step(this.cur.fov, this.goal.fov, 0.01);
    for (let i = 0; i < 3; i++) this.cur.target[i] = step(this.cur.target[i], this.goal.target[i], 0.002);
    this.apply();
    return moving;
  }

  private apply() {
    const {azimuth, polar, radius, target, fov} = this.cur;
    const az = azimuth * D2R, po = polar * D2R;
    const t = new THREE.Vector3(...target);
    this.camera.position.set(t.x + radius * Math.sin(po) * Math.sin(az), t.y + radius * Math.cos(po), t.z + radius * Math.sin(po) * Math.cos(az));
    const k = THREE.MathUtils.smoothstep(polar, 2, 20);
    const away = new THREE.Vector3(-Math.sin(az), 0, -Math.cos(az));
    this.camera.up.set(0, 1, 0).multiplyScalar(k).addScaledVector(away, 1 - k).normalize();
    this.camera.lookAt(t);
    if (this.camera.fov !== fov) { this.camera.fov = fov; this.camera.updateProjectionMatrix(); }
  }

  dispose() { this.off.forEach(f => f()); }
}
