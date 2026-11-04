import {useEffect, useRef, useState, type ReactNode} from 'react';
import {webglAvailable, type SceneFactory, type SceneHandle} from './types';

type Props = {
  load: () => Promise<SceneFactory>;
  step: number;
  reduced: boolean;
  fallback: ReactNode;
  label: string;
  keysHelp?: string;
  className?: string;
  onHandle?: (h: SceneHandle | null) => void;
};

type Status = 'loading' | 'ready' | 'fallback' | 'lost';

/** Hosts a Three.js scene with honest fallbacks: no WebGL → 2D fallback;
 *  context loss → 2D fallback plus a retry. The canvas never sits blank. */
export function Viewport3D({load, step, reduced, fallback, label, keysHelp, className, onHandle}: Props) {
  const box = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const handle = useRef<SceneHandle | null>(null);
  const stepRef = useRef(step); stepRef.current = step;
  const [status, setStatus] = useState<Status>(() => (webglAvailable() ? 'loading' : 'fallback'));
  const [attempt, setAttempt] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'fallback' || status === 'lost') return;
    let cancelled = false;
    const canvas = canvasRef.current!, overlay = overlayRef.current!, el = box.current!;
    let ro: ResizeObserver | null = null;
    const onLost = (e: Event) => { e.preventDefault(); handle.current?.stop(); setStatus('lost'); };
    canvas.addEventListener('webglcontextlost', onLost);
    load().then(factory => {
      if (cancelled) return;
      try {
        const h = factory(canvas, overlay, {reduced, onReady: () => !cancelled && setStatus('ready'), onError: m => setError(m)});
        handle.current = h; onHandle?.(h);
        const fit = () => {
          const w = el.clientWidth, hgt = el.clientHeight, screen = el.getBoundingClientRect().width / Math.max(1, w);
          h.renderer.setPixelRatio(Math.min(2, Math.max(0.5, devicePixelRatio * screen)));
          h.resize(w, hgt);
        };
        ro = new ResizeObserver(fit); ro.observe(el); fit();
        h.setStop(stepRef.current, true);
        h.start();
        // Some scenes have no async assets; mark ready after first frame.
        requestAnimationFrame(() => !cancelled && setStatus(s => (s === 'loading' ? 'ready' : s)));
      } catch (err) {
        setError(String(err)); setStatus('fallback');
      }
    }).catch(err => { setError(String(err)); setStatus('fallback'); });
    return () => {
      cancelled = true; ro?.disconnect();
      canvas.removeEventListener('webglcontextlost', onLost);
      handle.current?.dispose(); handle.current = null; onHandle?.(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt, status === 'fallback' || status === 'lost']);

  useEffect(() => { handle.current?.setStop(step); }, [step]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { (document.activeElement as HTMLElement)?.blur(); e.stopPropagation(); return; }
    if (handle.current?.onKey?.(e.nativeEvent)) e.preventDefault();
  };

  const live = status === 'loading' || status === 'ready';
  return (
    <div className={`viewport3d ${className ?? ''} status-${status}`}>
      {live && (
        <div ref={box} className="vp-box" tabIndex={0} data-own-keys role="application" aria-label={`${label}. ${keysHelp ?? ''} Press Escape to return to the slides.`}
          onKeyDown={onKeyDown} onMouseDown={e => e.preventDefault()}>
          <canvas ref={canvasRef} />
          <div ref={overlayRef} className="vp-overlay" aria-hidden="true" />
          {status === 'loading' && <div className="vp-loading">Loading 3D…</div>}
        </div>
      )}
      {!live && (
        <div className="vp-fallback">
          {fallback}
          {status === 'lost' && (
            <div className="vp-notice" role="status">
              The graphics context was lost, so this view switched to its 2D version.
              <button className="btn" onClick={() => { setStatus('loading'); setAttempt(a => a + 1); }}>Retry 3D</button>
            </div>
          )}
        </div>
      )}
      {error && live && <div className="vp-notice small" role="status">{error}</div>}
    </div>
  );
}
