import type * as THREE from 'three';

export type SceneOptions = {
  reduced: boolean;
  onReady?: () => void;
  onError?: (message: string) => void;
};

export type SceneHandle = {
  setStop(index: number, instant?: boolean): void;
  resize(width: number, height: number): void;
  start(): void;
  stop(): void;
  dispose(): void;
  /** Optional keyboard control while the viewport has focus; return true if handled. */
  onKey?(e: KeyboardEvent): boolean;
  setPreset?(name: string): void;
  setOption?(name: string, value: unknown): void;
  renderer: THREE.WebGLRenderer;
};

export type SceneFactory = (canvas: HTMLCanvasElement, overlay: HTMLElement, opts: SceneOptions) => SceneHandle;

/** WebGL availability, with ?nowebgl for testing the 2D fallback. */
export function webglAvailable(): boolean {
  if (new URLSearchParams(location.search).has('nowebgl')) return false;
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}
