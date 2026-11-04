import {useEffect, useState} from 'react';

const forceReduced = new URLSearchParams(location.search).has('reduced');

export function useReducedMotion() {
  const q = '(prefers-reduced-motion: reduce)';
  const [r, setR] = useState(() => forceReduced || matchMedia(q).matches);
  useEffect(() => {
    const m = matchMedia(q);
    const on = () => setR(forceReduced || m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return r;
}

/** Re-render every `ms` while `active`. */
export function useTicker(active: boolean, ms = 250) {
  const [, set] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => set(n => n + 1), ms);
    return () => clearInterval(id);
  }, [active, ms]);
}
