import {useCallback, useEffect, useRef, useState} from 'react';
import {deck, slides, config} from '../lib/content';
import {freshTimer, loadShared, saveShared, type TimerState} from '../lib/sync';
import {useReducedMotion} from './hooks';
import {ImagePopup} from '../shared/ImagePopup';
import {ShorthandHeader} from '../shared/ShorthandHeader';
import {ShorthandFooter} from '../shared/ShorthandFooter';
import {imagery} from '../lib/geo';
import {ChapterTitle, runSteppers} from './blocks';
import {Activity, Afterlife, Bibliography, CoralStory, Frame, Hero, Historians, Hook, Ledger, Lineage, MapStory, MartinLimits, MartinStory,
  Pitch, Question, Reading, ReefStory, Verdict, type Ctx} from './sections';

// Four parts: the Odums, their 1955 paper (told as they told it), how three
// historians read it (Golley, Taylor, then Martin at length), and the synthesis.

const ix = (id: string) => slides.findIndex(s => s.id === id);

/** Keys belong to the focused widget when it is a text field or declares data-own-keys. */
function keyOwnedByWidget(e: KeyboardEvent) {
  const el = e.target as HTMLElement | null;
  if (!el || el === document.body) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  if ((tag === 'BUTTON' || tag === 'A') && (e.key === ' ' || e.key === 'Enter')) return true;
  if (tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'INPUT') return true;
  if (e.key === 'PageUp' || e.key === 'PageDown') return false;
  return !!el.closest('[data-own-keys]');
}

type Beat = {el: HTMLElement; slide: number; step: number; card: boolean};
const readBeats = (): Beat[] => [...document.querySelectorAll<HTMLElement>('[data-beat]')].map(el => {
  const [slide, step] = el.dataset.beat!.split(':').map(Number);
  return {el, slide, step, card: el.dataset.beatKind === 'card'};
});
// Cards are centred in a full-screen step, so their step sits at the top; sections start just under the masthead.
const targetOf = (b: Beat) => Math.round(b.el.getBoundingClientRect().top + scrollY - (b.card ? 0 : 8));

function parseHash(hash: string) {
  const m = /^#\/(\d+)(?:\/(\d+))?/.exec(hash);
  return m ? {slide: Number(m[1]) - 1, step: Number(m[2] ?? 0)} : null;
}

export function Story() {
  const reduced = useReducedMotion();
  const [timer, setTimer] = useState<TimerState>(() => loadShared()?.timer ?? freshTimer(config.activityMinutes));
  const [reader, setReader] = useState<{doc: string; pdf: number} | null>(null);
  const [blackout, setBlackout] = useState(false);
  const [chapter, setChapter] = useState('intro');
  const [mastHidden, setMastHidden] = useState(false);
  const posRef = useRef({slide: 0, step: 0});

  const scrollToY = useCallback((top: number, instant = false) => {
    window.scrollTo({top: Math.max(0, top), behavior: instant || reduced ? 'instant' : 'smooth'});
  }, [reduced]);

  /** Scroll to the first beat for a slide/step (deep links such as #/5/3 speak slide:step). */
  const goToBeat = useCallback((slide: number, step: number, instant = false) => {
    const beats = readBeats();
    const b = beats.find(x => x.slide === slide && x.step === step)
      ?? beats.filter(x => x.slide === slide && x.step <= step).pop()
      ?? beats.find(x => x.slide >= slide);
    if (!b) return;
    posRef.current = {slide: b.slide, step: b.step};
    scrollToY(targetOf(b), instant);
  }, [scrollToY]);

  const move = useCallback((dir: 1 | -1) => {
    const y = scrollY, vh = innerHeight;
    const beats = readBeats().map(b => ({...b, t: targetOf(b)}));
    const cand = dir > 0 ? beats.find(b => b.t > y + 4) : [...beats].reverse().find(b => b.t < y - 4);
    // Long sections: page through them rather than jumping past their content.
    if (!cand) { scrollToY(y + dir * vh * 0.85); return; }
    const far = Math.abs(cand.t - y) > vh * 1.2;
    const inCards = cand.card || beats.some(b => b.card && Math.abs(b.t - y) < 4);
    scrollToY(far && !inCards ? y + dir * vh * 0.85 : cand.t);
  }, [scrollToY]);

  // Scroll state: active beat (kept in the URL), chapter, progress, masthead.
  useEffect(() => {
    let raf = 0, lastY = scrollY;
    const update = () => {
      raf = 0;
      const y = scrollY, vh = innerHeight;
      setMastHidden(y > 200 && y > lastY + 2 ? true : y < lastY - 2 ? false : (h => h));
      lastY = y;
      const chapters = [...document.querySelectorAll<HTMLElement>('[data-chapter]')];
      const ch = chapters.filter(el => el.getBoundingClientRect().top <= vh * 0.4).pop();
      setChapter(ch?.dataset.chapter ?? 'intro');
      const b = readBeats().filter(x => x.el.getBoundingClientRect().top <= vh * 0.5).pop();
      const pos = b ? {slide: b.slide, step: b.step} : {slide: 0, step: 0};
      if (pos.slide === posRef.current.slide && pos.step === posRef.current.step) return;
      posRef.current = pos;
      history.replaceState(null, '', `#/${pos.slide + 1}${pos.step ? '/' + pos.step : ''}`);
      document.title = `${slides[pos.slide].title} · ${deck.title}`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    addEventListener('scroll', onScroll, {passive: true});
    addEventListener('resize', onScroll);
    update();
    return () => { removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);

  // Deep link on load (#/5/2 = slide 5, step 2), once fonts and images have settled.
  useEffect(() => {
    const p = parseHash(location.hash);
    if (!p || p.slide <= 0) return;
    const go = () => goToBeat(p.slide, p.step, true);
    const t = setTimeout(go, 150);
    addEventListener('load', go, {once: true});
    return () => { clearTimeout(t); removeEventListener('load', go); };
  }, [goToBeat]);
  useEffect(() => {
    const onHash = () => { const p = parseHash(location.hash); if (p) goToBeat(p.slide, p.step); };
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, [goToBeat]);

  // The activity timer survives a reload.
  useEffect(() => { saveShared({...posRef.current, timer}); }, [timer]);

  const toggleTimer = useCallback(() => {
    setTimer(t => {
      const now = Date.now();
      return t.running ? {...t, running: false, elapsedBefore: t.elapsedBefore + now - t.startedAt} : {...t, running: true, startedAt: now};
    });
  }, []);

  const closeReader = useCallback(() => setReader(null), []);
  const openReader = useCallback((doc: string, pdf: number) => setReader({doc, pdf}), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || keyOwnedByWidget(e)) return;
      const k = e.key;
      if (k === 'ArrowRight' || k === 'PageDown') { e.preventDefault(); if (!runSteppers(1)) move(1); }
      else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); if (!runSteppers(-1)) move(-1); }
      else if (k === 'f' || k === 'F') { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); else document.documentElement.requestFullscreen?.().catch(() => {}); }
      else if (k === 'b' || k === 'B' || k === '.') setBlackout(b => !b);
      else if (k === 't' || k === 'T') toggleTimer();
      else if (k === 'r' || k === 'R') setReader(r => (r ? null : {doc: 'odum1955', pdf: 2}));
      else if (k === 's' || k === 'S') setReader(r => (r ? null : {doc: 'odum1957', pdf: 6}));
      else if (k === 'Escape') { setReader(null); setBlackout(false); }
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [move, toggleTimer]);

  const ctx: Ctx = {reduced, timer, onToggleTimer: toggleTimer, openReader};

  return (
    <div className={`story ${reduced ? 'reduced' : ''}`}>
      <a className="skip" href="#ch-two">Skip to the 1955 paper</a>
      <ShorthandHeader chapter={chapter} hidden={mastHidden} />

      <main>
        <Hero {...ctx} />
        <Question />
        <Hook />

        <ChapterTitle id="ch-one" title="The Odums" slide={ix('lineage')}
          lead="Who they were, who paid for the study, and where it took place."
          img={imagery.atoll.src} credit="Enewetak Atoll · Esri World Imagery, Vantor WorldView-3, 2026" />
        <Lineage />
        <Pitch {...ctx} />
        <MapStory {...ctx} />

        <ChapterTitle id="ch-two" title="The 1955 paper" slide={ix('method')}
          lead="Odum and Odum, “Trophic Structure and Productivity of a Windward Coral Reef Community on Eniwetok Atoll,” Ecological Monographs, July 1955. Methods, findings, conclusions and impact."
          img={imagery.japtanWide.src} credit="Japtan, Enewetak · Esri World Imagery, Vantor WorldView-3, 4 Jan 2026" />
        <ReefStory {...ctx} />
        <CoralStory {...ctx} />
        <Ledger {...ctx} />
        <Afterlife {...ctx} />

        <ChapterTitle id="ch-three" title="How historians read the paper" slide={ix('frame')}
          lead="Golley, Taylor and Martin."
          img={imagery.runit.src} credit="Runit Dome, Enewetak · Esri World Imagery, Vantor WorldView-3, 4 Jan 2026" />
        <Frame />
        <Reading id="golley" band={1} />
        <Reading id="taylor" band={0} />
        <MartinStory />
        <MartinLimits />

        <ChapterTitle id="ch-four" title="Synthesis" slide={ix('perspectives')}
          img={imagery.japtanClose.src} credit="Japtan reef flat · Esri World Imagery, Vantor WorldView-3, 4 Jan 2026" />
        <Historians id="perspectives" chapter="four" />
        <Activity {...ctx} />
        <Verdict />
        <Bibliography />
      </main>

      <ShorthandFooter />

      {reader && <ImagePopup key={reader.doc + reader.pdf} docId={reader.doc} pdf={reader.pdf} onClose={closeReader} />}
      {blackout && <div className="blackout" onClick={() => setBlackout(false)}>B to return</div>}
    </div>
  );
}
