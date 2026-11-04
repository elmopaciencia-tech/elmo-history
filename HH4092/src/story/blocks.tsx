import {useEffect, useRef, useState, type ReactNode} from 'react';
import {noteText, registerHref, type Ref} from '../lib/content';
import {rich} from '../lib/rich';
import {Viewport3D} from '../three/Viewport3D';
import type {SceneFactory, SceneHandle} from '../three/types';

// Shorthand-style building blocks: title sections, scrollmations (sticky media
// with cards scrolling over it), reveal-on-scroll text, and source notes.
// `data-beat="slide:step"` marks the points the keyboard / clicker stops at;
// the slide:step pair also names the beat in the URL (#/5/3).

export const beat = (slide: number, step = 0) => `${slide}:${step}`;

/** True while the element is within `margin` of the viewport. */
export function useNear(ref: React.RefObject<HTMLElement | null>, margin = '60% 0px') {
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setNear(e.isIntersecting), {rootMargin: margin});
    io.observe(el);
    return () => io.disconnect();
  }, [ref, margin]);
  return near;
}

/** Fades its children up the first time they scroll into view. */
export function Reveal({children, className = '', as: Tag = 'div', delay = 0, ...rest}: {children: ReactNode; className?: string; as?: any; delay?: number; [k: string]: any}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, {rootMargin: '0px 0px -12% 0px'});
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={delay ? {transitionDelay: `${delay}ms`} : undefined} {...rest}>{children}</Tag>;
}

export const Cite = ({r}: {r?: Ref}) =>
  r ? <a className="cite" href={registerHref(r[0])} target="_blank" rel="noreferrer">{rich(noteText(r))}</a> : null;

/** The small “Sources” line Shorthand stories run under a section. */
export function Notes({refs, dark}: {refs: Ref[]; dark?: boolean}) {
  const seen = new Set<string>();
  const list = refs.filter(r => { const k = r.join('|'); if (seen.has(k)) return false; seen.add(k); return true; });
  if (!list.length) return null;
  return (
    <aside className={`notes ${dark ? 'dark' : ''}`} aria-label="Sources for this section">
      <span className="notes-h">Sources</span>
      <ol>
        {list.map(r => {
          return (
            <li key={r.join('|')}>
              <a href={registerHref(r[0])} target="_blank" rel="noreferrer">{rich(noteText(r))}</a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

/** Full-bleed chapter opener: the image holds still while the title scrolls over it. */
export function ChapterTitle({id, title, lead, img, credit, slide, position = 'center'}: {
  id: string; n?: string; title: string; lead?: string; img: string; credit: string; slide: number; position?: string;
}) {
  return (
    <section id={id} className="chapter-title" data-beat={beat(slide)} data-chapter={id.replace(/^ch-/, '')}>
      <div className="ct-media">
        <img src={img} alt="" style={{objectPosition: position}} />
        <span className="ct-credit">{credit}</span>
      </div>
      <div className="ct-copy">
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  );
}

export type Card = {key: string; beat?: string; node: ReactNode; className?: string};

/** Shorthand “scrollmation”: a sticky full-screen background whose state
 *  follows the card crossing the middle of the screen. */
export function Scrollmation({media, cards, side = 'left', className = '', id, chapter}: {
  media: (active: number, near: boolean) => ReactNode; cards: Card[]; side?: 'left' | 'right' | 'center';
  className?: string; id?: string; chapter?: string;
}) {
  const root = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const near = useNear(root);

  useEffect(() => {
    const steps = [...root.current!.querySelectorAll<HTMLElement>(':scope > .sm-steps > .sm-step')];
    const io = new IntersectionObserver(entries => {
      for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
    }, {rootMargin: '-50% 0px -50% 0px'});
    steps.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [cards.length]);

  // The background is not a scroll target: stop 3D views from swallowing the wheel.
  useEffect(() => {
    const el = sticky.current; if (!el) return;
    const stop = (e: WheelEvent) => e.stopPropagation();
    el.addEventListener('wheel', stop, {capture: true});
    return () => el.removeEventListener('wheel', stop, {capture: true});
  }, []);

  return (
    <section ref={root} id={id} className={`sm sm-${side} ${className}`} data-chapter={chapter}>
      <div ref={sticky} className="sm-sticky">{media(active, near)}</div>
      <div className="sm-steps">
        {cards.map((c, i) => (
          <div key={c.key} className={`sm-step ${i === active ? 'is-active' : ''}`} data-i={i} data-beat={c.beat} data-beat-kind="card">
            <div className={`sm-card ${c.className ?? ''}`}>{c.node}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Sections that step through states in place (no scrolling) claim → / ← while
// they fill the screen; the story asks them first before moving to the next beat.
type Stepper = (dir: 1 | -1) => boolean;
const steppers = new Set<Stepper>();
export const runSteppers = (dir: 1 | -1) => [...steppers].some(s => s(dir));

export function useStepper(ref: React.RefObject<HTMLElement | null>, count: number, setStep: React.Dispatch<React.SetStateAction<number>>, step: number) {
  const cur = useRef(step); cur.current = step;
  useEffect(() => {
    const fn: Stepper = dir => {
      const el = ref.current;
      if (!el || Math.abs(el.getBoundingClientRect().top) > innerHeight * 0.35) return false;
      const next = cur.current + dir;
      if (next < 0 || next >= count) return false;
      setStep(next);
      return true;
    };
    steppers.add(fn);
    return () => { steppers.delete(fn); };
  }, [ref, count, setStep]);
}

/** Eases a continuous stop position so each stop holds still for most of its
 *  scroll distance and slides to the next in between. */
export function hold(t: number) {
  const f = Math.floor(t), k = Math.min(1, Math.max(0, (t - f - 0.3) / 0.4));
  return f + k * k * (3 - 2 * k);
}

/** Shorthand horizontal scroll: the section pins, and scrolling down moves it
 *  sideways through `count` stops, one screen-height of scroll per stop. */
export function SideScroll({count, id, className = '', chapter, beatFor, children}: {
  count: number; id?: string; className?: string; chapter?: string; beatFor: (i: number) => string;
  children: (s: {t: number; active: number; near: boolean; goTo: (i: number) => void}) => ReactNode;
}) {
  const root = useRef<HTMLElement>(null);
  const near = useNear(root);
  const [t, setT] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const top = root.current!.getBoundingClientRect().top;
      setT(Math.min(count - 1, Math.max(0, -top / innerHeight)));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    addEventListener('scroll', on, {passive: true});
    addEventListener('resize', on);
    update();
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, [count]);
  const goTo = (i: number) => {
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollTo({top: root.current!.getBoundingClientRect().top + scrollY + i * innerHeight, behavior: smooth ? 'smooth' : 'instant'});
  };
  // Height: one screen per stop, plus a short dwell on the last one before the section lets go.
  return (
    <section ref={root} id={id} className={`side ${className}`} data-chapter={chapter} style={{height: `${(count + 0.4) * 100}vh`}}>
      {Array.from({length: count}, (_, i) => (
        <i key={i} className="side-beat" data-beat={beatFor(i)} data-beat-kind="card" style={{top: `${i * 100}vh`}} aria-hidden="true" />
      ))}
      <div className="side-sticky">{children({t, active: Math.round(t), near, goTo})}</div>
    </section>
  );
}

/** A 3D scene that only exists while its section is near the screen;
 *  otherwise (and without WebGL) the captured still stands in. */
export function Scene({near, load, step, reduced, fallback, label, className, onHandle}: {
  near: boolean; load: () => Promise<SceneFactory>; step: number; reduced: boolean; fallback: ReactNode;
  label: string; className?: string; onHandle?: (h: SceneHandle | null) => void;
}) {
  if (!near) return <div className={`viewport3d status-fallback ${className ?? ''}`}><div className="vp-fallback">{fallback}</div></div>;
  return <Viewport3D load={load} step={step} reduced={reduced} fallback={fallback} label={label} className={className} onHandle={onHandle}
    keysHelp="The view follows the story as you scroll." />;
}

/** Crossfading stack of backgrounds (Shorthand “reveal”). */
export function Crossfade({active, layers}: {active: number; layers: ReactNode[]}) {
  return (
    <div className="xfade">
      {layers.map((l, i) => <div key={i} className={`xf-layer ${i === active ? 'on' : ''}`} aria-hidden={i !== active}>{l}</div>)}
    </div>
  );
}
