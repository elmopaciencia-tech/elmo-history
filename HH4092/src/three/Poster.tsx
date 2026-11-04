import {useState, type ReactNode} from 'react';

/** A still captured from the live 3D view (public/assets/posters), shown when a
 *  scene is not running. Falls back to the 2D version if no still exists. */
export function Poster({slideId, step, fallback, className}: {slideId: string; step: number; fallback: ReactNode; className?: string}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return (
    <img className={`poster ${className ?? ''}`} src={`assets/posters/${slideId}-${step}.webp`} alt="" aria-hidden="true"
      onError={() => setFailed(true)} />
  );
}
