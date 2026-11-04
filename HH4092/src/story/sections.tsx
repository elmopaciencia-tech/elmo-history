import {useEffect, useRef, useState} from 'react';
import QRCode from 'qrcode';
import {deck, slides, sources, config, citedIds, type Slide} from '../lib/content';
import {rich} from '../lib/rich';
import {imagery} from '../lib/geo';
import {type TimerState} from '../lib/sync';
import {Poster} from '../three/Poster';
import type {SceneHandle} from '../three/types';
import {MapFallback, ReefFallback, CoralFallback} from './fallbacks';
import {beat, ChapterTitle, Cite, Crossfade, hold, Notes, Reveal, Scene, Scrollmation, SideScroll, useNear} from './blocks';

export type Ctx = {
  reduced: boolean;
  timer: TimerState;
  onToggleTimer: () => void;
  openReader: (doc: string, pdf: number) => void;
};

const ix = (id: string) => slides.findIndex(s => s.id === id);
const S = (id: string): Slide => slides[ix(id)];

const loadMap = () => import('../three/MapScene').then(m => m.createMapScene);
const loadReef = () => import('../three/ReefScene').then(m => m.createReefScene);
const loadCoral = () => import('../three/CoralScene').then(m => m.createCoralScene);

// Small section labels ("Part 1 · …") removed at the user's request.
const Kicker = (_: {children: React.ReactNode}) => null;

/** An explicit pointer to a course concept: a labelled strip under the content it explains. */
export function CourseLink({link, dark}: {link?: {week: string; t: string; refs?: any[]}; dark?: boolean}) {
  if (!link) return null;
  return (
    <Reveal as="aside" className={`course-tag ${dark ? 'dark' : ''}`} aria-label="Link to the course">
      <span className="ct-week">{link.week}</span>
      <p>{link.t} {link.refs?.map(r => <Cite key={r.join()} r={r} />)}</p>
    </Reveal>
  );
}

/* ── Title section ─────────────────────────────────────────────── */
export function Hero({reduced}: Ctx) {
  const s = S('title');
  const ref = useRef<HTMLElement>(null);
  const near = useNear(ref, '0px');
  const names = config.presenters.length ? config.presenters.join(' · ') : 'Presenter: set name in config.json';
  const date = config.presentationDate ? `${config.presentationDate}${config.dateApproved ? '' : ' (date to be confirmed)'}` : null;
  return (
    <header ref={ref} id="top" className="hero paper" data-beat={beat(ix('title'))} data-chapter="intro">
      <p className="hero-kicker">{deck.course}</p>
      <h1 className="hero-title">{s.title}</h1>
      <div className="hero-object">
        <Scene near={near} load={loadCoral} step={0} reduced={reduced} className="hero-coral" label="A coral head, Porites lobata, turning slowly"
          fallback={<img className="hero-fallback" src={imagery.japtanClose.src} alt="" />} />
      </div>
      <p className="hero-sub">{s.subtitle}</p>
      <p className="hero-meta">{date ? `${names} · ${date}` : names}</p>
      <span className="scroll-cue" aria-hidden="true">Scroll</span>
    </header>
  );
}

export function Question() {
  return (
    <section className="text-section paper centered question-sec" data-beat={beat(ix('title'))} data-chapter="intro">
      <Reveal>
        <p className="big-q">{deck.question}</p>
      </Reveal>
    </section>
  );
}

export function Hook() {
  const s = S('title');
  const h = s.hook;
  return (
    <section className="hook paper" data-beat={beat(ix('title'))} data-chapter="intro">
      {h.lead && <Reveal as="h2" className="section-h">{h.lead}</Reveal>}
      <div className="collage three">
        {h.figures.map((f: any, i: number) => (
          <Reveal as="figure" key={f.img} className={`photo document ${['tilt-l', 'tilt-0', 'tilt-r'][i]}`} delay={i * 180}>
            <img src={f.img} alt={f.alt} />
            <figcaption><b>{f.label}</b><span>{f.date}</span><em>{f.credit}</em></figcaption>
          </Reveal>
        ))}
      </div>
      <div className="text-col">
        <Notes refs={s.refs} />
      </div>
    </section>
  );
}

/** One screen: the chart large on the left, every card along the bottom.
 *  Clicking a card, or → / ←, changes what the chart highlights. */
/** The grant pitch traced from AEC memo to letter to the printed page. */
export function Pitch({openReader}: Ctx) {
  const s = S('patron');
  const p = s.pitch;
  return (
    <section className="pitch paper" data-beat={beat(ix('patron'))} data-chapter="one">
      <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{p.h}</h2></Reveal>
      <ol className="pitch-chain">
        {p.items.map((it: any, i: number) => (
          <Reveal as="li" key={it.label} delay={i * 150} className={i === p.items.length - 1 ? 'print' : ''}>
            <span className="u-head">{it.label}</span>
            <p>{it.t}</p>
            <p className="card-cites"><Cite r={it.ref} /></p>
            {it.page && <button type="button" className="chip" onClick={() => openReader(it.page.doc, it.page.pdf)}>Open the page</button>}
          </Reveal>
        ))}
      </ol>
      <Reveal as="p" className="callout">{p.after} <Cite r={p.afterRef} /></Reveal>
      <CourseLink link={s.courseLink} />
      <Notes refs={s.refs} />
    </section>
  );
}

/* ── The fly-in map ────────────────────────────────────────────── */
/** The fly-in, laid out like the slide: a fixed panel on the left whose
 *  captions slide sideways as you scroll, the globe flying to each stop. */
export function MapStory({reduced}: Ctx) {
  const s = S('map');
  const n = ix('map');
  const stops = s.stops!;
  return (
    <SideScroll count={stops.length} id="map" className="map-side" chapter="one" beatFor={i => beat(n, i)}>
      {({t, active, near, goTo}) => {
        const x = hold(t);
        return (
          <>
            {/* Frame each stop a little higher and wider than the slide does, clear of the slider bar. */}
            <Scene near={near} load={loadMap} step={active} reduced={reduced} label="3D map: globe to Enewetak Atoll"
              onHandle={h => { h?.setOption?.('altScale', 1.1); h?.setOption?.('liftY', 0.045); }}
              fallback={<Poster slideId="map" step={active} fallback={<MapFallback step={active} />} />} />
            <div className="map-panel">
              <Kicker>{s.kicker}</Kicker>
              <h2 className="map-title">{s.title}</h2>
              <div className="side-track-wrap">
                <div className="side-track" style={{transform: `translateX(${-x * 100}%)`}}>
                  {stops.map((st, i) => (
                    <article key={st.id} className="side-slide" aria-hidden={i !== active} style={{opacity: 1 - Math.min(1, Math.abs(i - x)) * 0.85}}>
                      <p className="stop-caption">{st.caption}</p>
                      <p className="card-cites">{st.refs.map(r => <Cite key={r.join()} r={r} />)}</p>
                      {(st as any).courseLink && <p className="stop-course"><b>{(st as any).courseLink.week}</b>{(st as any).courseLink.t}</p>}
                    </article>
                  ))}
                </div>
              </div>
            </div>
            {/* The stops as points on a full-width progress slider; each one flies the map there. */}
            <div className="side-bar">
              <ol className="side-slider" aria-label="Map stops">
                <span className="ss-line" aria-hidden="true"><span style={{transform: `scaleX(${x / (stops.length - 1)})`}} /></span>
                {stops.map((st, i) => (
                  <li key={st.id} className={`ss-pt ${i < active ? 'past' : ''} ${i === active ? 'on' : ''}`} style={{left: `${(i / (stops.length - 1)) * 100}%`}}>
                    <button type="button" aria-current={i === active} onClick={() => goTo(i)}>
                      <i aria-hidden="true" />
                      <span><b>{i + 1}</b>{st.label}</span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="side-hint" aria-hidden="true">{active < stops.length - 1 ? 'Scroll to go to the next stop →' : 'Continue down ↓'}</p>
            </div>
            <p className="media-credit">{active >= 2 ? 'Imagery: Esri World Imagery · Vantor WorldView-3, 4 Jan 2026. Present-day imagery, not 1954.' : 'Coastlines and reefs: Natural Earth (public domain).'} Labels are orientation, not survey positions.</p>
          </>
        );
      }}
    </SideScroll>
  );
}

/* ── The Odums: two routes that meet in one paper ──────────────── */
const Cites = ({refs}: {refs: any[]}) => <>{refs.map(r => <Cite key={r.join()} r={r} />)}</>;

/** Act I: the toolkit the Odums carried, then the two brothers who carried it. */
export function Lineage() {
  const s = S('lineage');
  return (
    <section className="people paper" data-beat={beat(ix('lineage'))} data-chapter="one">
      <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2>{s.lead && <p className="lg-lead">{s.lead}</p>}</Reveal>
      <div className="inherit">
        <div className="before-row">
          <b className="before-h">{s.beforeHead ?? 'Earlier ideas the study drew on'}</b>
          <ol className="four">
            {s.before.map((b: any, i: number) => (
              <Reveal as="li" key={b.year} delay={i * 120}><b>{b.year}</b><p>{b.t}</p><Cites refs={b.refs} /></Reveal>
            ))}
          </ol>
        </div>
        {s.footer && <p className="aside-note">{s.footer}</p>}
        <span className="u-head">Family background</span>
        <Reveal className="shared">
          <b>{s.shared.h} · {s.shared.name}</b>
          <p>{s.shared.t}</p>
          <p className="card-cites"><Cites refs={s.shared.refs} /></p>
        </Reveal>
        <CourseLink link={s.shared.courseLink} />
      </div>
      <div className="routes">
        {s.people.map((p: any, i: number) => (
          <Reveal as="article" key={p.name} className="route" delay={i * 150}>
            <img className="odum-portrait" src={`media/portraits/${i === 0 ? 'eugene' : 'howard'}-odum.jpg`}
              alt={`Photograph of ${p.name}`} width={i === 0 ? 688 : 768} height="1024" loading="lazy" decoding="async" />
            <div className="band odum-caption">
              <h3>{p.name}</h3>
            </div>
            <p className="odum-photo-credit">{i === 0
              ? <a href="https://www.georgiaencyclopedia.org/articles/geography-environment/eugene-odum-1913-2002/" target="_blank" rel="noreferrer">University of Georgia Photographic Services / New Georgia Encyclopedia</a>
              : <a href="https://floridaspringsinstitute.org/howard-t-odum/" target="_blank" rel="noreferrer">Courtesy of Robert Knight / Florida Springs Institute</a>}</p>
            <div className="route-body">
              <span className="u-head">Background</span>
              <ol className="route-steps">{p.route.map((r: string) => <li key={r}>{r}</li>)}</ol>
              <p className="card-cites"><Cites refs={p.routeRefs} /></p>
              <span className="u-head brought-h">Contribution to the paper</span>
              {p.brought.map((x: any) => (
                <div key={x.h} className="brought"><b>{x.h}</b><p>{x.t}</p><p className="card-cites"><Cites refs={x.refs} /></p></div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="merge"><svg className="merge-arrows" viewBox="0 0 120 44" aria-hidden="true"><path d="M8 4 L56 38 M112 4 L64 38 M48 38 L58 40 L54 30 M72 38 L62 40 L66 30" /></svg>
        <p>{s.merge}</p><p className="card-cites"><Cites refs={s.mergeRefs} /></p></Reveal>
      <Reveal as="blockquote" className="pull small"><span className="tag">Who led?</span>{s.contested}</Reveal>
      <Notes refs={s.refs} />
    </section>
  );
}

/* ── Method: the reef cross-section ────────────────────────────── */
const PRESETS: [string, string][] = [['side', 'Side · as fig. 1'], ['aerial', 'Aerial'], ['oblique', 'Oblique'], ['downstream', 'Down-current']];

export function ReefStory({reduced, openReader}: Ctx) {
  const s = S('method');
  const n = ix('method');
  const handle = useRef<SceneHandle | null>(null);
  return (
    <>
      <Scrollmation className="reef-sm ink" side="right" id="method" chapter="two"
        media={(active, near) => (
          <Scene near={near} load={loadReef} step={active} reduced={reduced} label="3D cross-section of the Japtan reef flat" onHandle={h => (handle.current = h)}
            fallback={<Poster slideId="method" step={active} fallback={<ReefFallback step={active} />} />} />
        )}
        cards={s.stops!.map((st, i) => ({key: st.id, beat: beat(n, i), node: <>
          {i === 0 && <><Kicker>{s.kicker}</Kicker><h2 className="card-title">{s.title}</h2></>}
          <span className="card-k">{String(i + 1).padStart(2, '0')} · {st.label}</span>
          <p>{st.caption}</p>
          <p className="card-cites">{st.refs.map(r => <Cite key={r.join()} r={r} />)}</p>
          {i === 0 && (
            <div className="chips" role="group" aria-label="Camera views">
              {PRESETS.map(([id, label]) => <button key={id} type="button" className="chip" onClick={() => handle.current?.setPreset?.(id)}>{label}</button>)}
              <button type="button" className="chip" onClick={() => openReader('odum1957', 6)}>1957 figure <kbd>S</kbd></button>
            </div>
          )}
        </>}))}
      />
      <section className="media-text paper" data-beat={beat(n, 4)} data-chapter="two">
        <Reveal as="figure" className="photo document wide">
          <img src="assets/source/odum1957-pdf6.webp" alt="Odum and Odum 1957, Figure 1: diagram of the Japtan reef transect, side view above and aerial view below, lagoon at left and sea at right, current flowing toward the lagoon." />
          <figcaption><b>The 1957 diagram the model is based on</b><em>Odum and Odum, “Zonation of Corals,” fig. 1 (1957), unaltered scan</em></figcaption>
        </Reveal>
        <Reveal className="legend-text">
          <h3>Which parts of the model are documented</h3>
          <div className="legend-cols">
            <div><span className="lg doc">Documented</span><ul>{s.legend.documented.map((d: string) => <li key={d}>{d}</li>)}</ul></div>
            <div><span className="lg ill">Illustrative</span><ul>{s.legend.illustrative.map((d: string) => <li key={d}>{d}</li>)}</ul></div>
          </div>
          <Notes refs={s.refs} />
        </Reveal>
      </section>
    </>
  );
}

/* ── Findings: the coral cut open ──────────────────────────────── */
export function CoralStory({reduced}: Ctx) {
  const s = S('findings');
  const n = ix('findings');
  return (
    <>
      <Scrollmation className="coral-sm ink" side="left" id="findings" chapter="two"
        media={(active, near) => (
          <>
            <Scene near={near} load={loadCoral} step={active} reduced={reduced} className="coral-vp" label="3D coral head, Porites lobata, with a cut-away interior"
              fallback={<Poster slideId="findings" step={active} fallback={<CoralFallback step={active} />} />} />
            <p className="media-credit">Specimen: <i>Porites lobata</i>, USNM 646, Smithsonian NMNH 3D scan. A modern museum specimen, not from Japtan. Interior layers are a labelled schematic; band depths are illustrative.</p>
          </>
        )}
        cards={s.stops!.map((st, i) => ({key: st.id, beat: beat(n, i), node: <>
          {i === 0 && <><Kicker>{s.kicker}</Kicker><h2 className="card-title">{s.title}</h2></>}
          <span className="card-k">{String(i + 1).padStart(2, '0')} · {st.label}</span>
          <p>{st.caption}</p>
          <p className="card-cites">{st.refs.map(r => <Cite key={r.join()} r={r} />)}</p>
        </>}))}
      />
      <section className="findings-list ink" data-beat={beat(n, 3)} data-chapter="two">
        <div className="fl-in">
          <h2 className="fl-title">What they found</h2>
          {s.findings.map((f: any, i: number) => (
            <Reveal as="article" key={f.h} className={`fl ${f.h === 'What it left out' ? 'omission' : ''}`} delay={i * 80}>
              <h3>{f.h}</h3><p>{f.t}</p>
            </Reveal>
          ))}
          <Notes dark refs={s.refs} />
        </div>
      </section>
    </>
  );
}

/* ── The account book: pyramid, Table 17, derived figures ──────── */
export function Ledger({openReader}: Ctx) {
  const s = S('ledger');
  const {pyramid: py, sheet} = s;
  const max = Math.max(...py.levels.map((l: any) => l.v));
  const row = ([h, v]: string[]) => <tr key={h}><th scope="row">{h}</th><td>{v}</td></tr>;
  return (
    <section className="ledger paper" data-beat={beat(ix('ledger'))} data-chapter="two">
      <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2>{s.lead && <p className="lg-lead">{s.lead}</p>}</Reveal>
      <ol className="lg-steps">
        {s.steps.map((st: any, i: number) => (
          <Reveal as="li" key={st.h} delay={i * 120}><span>{i + 1}</span><b>{st.h}</b><p>{st.t}</p></Reveal>
        ))}
      </ol>
      <div className="lg-grid">
        <Reveal as="figure" className="lg-pyramid">
          <figcaption className="u-head">Weight of each level · fig. 10</figcaption>
          <div className="pyr" role="img" aria-label={py.levels.map((l: any) => `${l.h} ${l.v} grams`).join(', ')}>
            {py.levels.map((l: any) => (
              <div key={l.h} className="pyr-row">
                <span className="pyr-bar" style={{width: `max(6px, ${(l.v / max) * 100}%)`}} />
                <span className="pyr-lab"><b>{l.v}</b> g · {l.h}</span>
              </div>
            ))}
          </div>
          <p className="lg-small">{py.unit}. {py.ratios}.</p>
          <Cite r={py.ref} />
        </Reveal>
        <Reveal as="figure" className="lg-sheet" delay={150}>
          <figcaption className="u-head">{sheet.caption}</figcaption>
          <table>
            <tbody className="in">
              <tr className="sec"><th colSpan={2}>Income</th></tr>
              {sheet.income.map(row)}
              <tr className="tot"><th scope="row">Total income</th><td>{sheet.incomeTotal}</td></tr>
            </tbody>
            <tbody className="out">
              <tr className="sec"><th colSpan={2}>Outgo</th></tr>
              {sheet.outgo.map(row)}
              <tr className="tot"><th scope="row">Total outgo</th><td>{sheet.outgoTotal}</td></tr>
            </tbody>
          </table>
          <Cite r={sheet.ref} />
          <button type="button" className="chip" onClick={() => openReader('odum1955', 27)}>Open Table 17 (p. 316)</button>
        </Reveal>
      </div>
      <div className="lg-derived">
        {s.derived.map((x: any, i: number) => (
          <Reveal key={x.n} className="lg-stat" delay={i * 120}>
            <span className="lg-n">{x.n}</span><span className="lg-u">{x.u}</span><p>{x.t}</p><Cite r={x.ref} />
          </Reveal>
        ))}
      </div>
      <div className="lg-summary">
        <span className="u-head">{s.summary.h}</span>
        <ul>
          {s.summary.paras.map((x: any) => (
            <Reveal as="li" key={x.t}>{x.t} <Cites refs={x.refs} /></Reveal>
          ))}
        </ul>
      </div>
      <Notes refs={s.refs} />
    </section>
  );
}

/* ── Afterlives ────────────────────────────────────────────────── */
function CountUp({to, reduced}: {to: number; reduced: boolean}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(reduced ? to : 1);
  useEffect(() => {
    if (reduced) { setV(to); return; }
    const el = ref.current!;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => { const k = Math.min(1, (t - t0) / 1600); setV(Math.round(1 + (to - 1) * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    }, {threshold: 0.6});
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, reduced]);
  return <span ref={ref}>{v}</span>;
}

export function Afterlife({reduced}: Ctx) {
  const s = S('afterlife');
  const st = s.stat;
  return (
    <section className="mainstream paper" data-beat={beat(ix('afterlife'))} data-chapter="three">
      <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2></Reveal>
      <div className="bigstat">
        <div><span className="bs-n small">{st.from.value}</span><span className="bs-y">{st.from.year}</span></div>
        <span className="bs-arrow" aria-hidden="true">→</span>
        <div><span className="bs-n"><CountUp to={st.to.value} reduced={reduced} /></span><span className="bs-y">{st.to.year}</span></div>
        <p className="bs-label">{st.label}</p>
        <p className="bs-note">{st.note} <Cite r={st.ref} /></p>
      </div>
      <ol className="vtimeline">
        {s.events.map((e: any) => (
          <Reveal as="li" key={e.years}>
            <span className="vt-years">{e.years}</span>
            <div><h3>{e.h}</h3><p>{e.t}</p><Cite r={e.ref} /></div>
          </Reveal>
        ))}
      </ol>
      <Reveal as="blockquote" className="pull">{s.why}</Reveal>
      <CourseLink link={s.courseLink} />
      <div className="critics">
        <span className="u-head">Criticism</span>
        <div className="card-row">
          {s.critics.map((c: any, i: number) => (
            <Reveal as="article" key={c.h} className="tall-card" delay={i * 120}>
              <span className="tc-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{c.h}</h3><p>{c.t}</p><Cite r={c.ref} />
            </Reveal>
          ))}
        </div>
      </div>
      <Notes refs={s.refs} />
    </section>
  );
}

/** Three historians as columns, the same three questions as rows. */
export function Historians({id = 'historians', chapter = 'three'}: {id?: string; chapter?: string}) {
  const s = S(id);
  const n = ix(id);
  const col = (c: any) => `cmp-col ${c.main ? 'main' : ''} ${c.other ? 'other' : ''}`;
  return (
    <section className="historians paper" data-chapter={chapter}>
      <Reveal className="section-head" data-beat={beat(n)}><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2></Reveal>
      <div className="mx cmp" role="table" aria-label="Three historians compared">
        <div className="mx-row mx-head" role="row">
          <span role="columnheader" />
          {s.columns.map((c: any) => (
            <div key={c.name} role="columnheader" className={col(c)}>
              <h3>{c.name}</h3><span className="hr-work">{c.work}</span>
            </div>
          ))}
        </div>
        {s.rows.map((r: any) => (
          <Reveal key={r.element} className="mx-row" role="row" data-beat={beat(n)}>
            <b role="rowheader">{r.element}</b>
            {r.cells.map((c: any, j: number) => (
              <span key={j} role="cell" className={col(s.columns[j])}><i className="cmp-who">{s.columns[j].name}</i>{c.t} <Cite r={c.ref} /></span>
            ))}
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="callout">{s.also} <span className="card-cites">{(s.alsoRefs ?? []).map((r: any) => <Cite key={r.join()} r={r} />)}</span></Reveal>
      <Notes refs={s.refs} />
    </section>
  );
}

/* ── Part 3: the historians ────────────────────────────────────── */
/** Opener for Part 3: the internalist–externalist line, the three historians on it, and Martin’s footnote 3. */
export function Frame() {
  const s = S('frame');
  return (
    <section className="frame paper" data-beat={beat(ix('frame'))} data-chapter="three">
      <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2>{s.lead && <p className="lg-lead">{s.lead}</p>}</Reveal>
      <CourseLink link={s.courseLink} />
      <div className="spectrum">
        <div className="sp-axis" aria-hidden="true"><span>Inside the science</span><span>Outside: society, money, matter</span></div>
        <ol>
          {s.positions.map((p: any, i: number) => (
            <Reveal as="li" key={p.name} delay={i * 140}>
              <span className="sp-place">{p.place}</span>
              <h3>{p.name}</h3>
              <p>{p.t} <Cite r={p.ref} /></p>
            </Reveal>
          ))}
        </ol>
      </div>
      <Reveal as="p" className="pull small frame-q">{s.question}</Reveal>
      <Notes refs={s.refs} />
    </section>
  );
}

const HISTORIAN_PORTRAITS: Record<string, {file: string; source: string; credit: string; width: number; height: number}> = {
  golley: {file: 'frank-golley', source: 'https://news.uga.edu/frank-golley-institute-of-ecology-emeritus-professor-dies-at-age-76/', credit: 'University of Georgia / UGA Today, 16 October 2006', width: 1429, height: 2000},
  taylor: {file: 'peter-taylor', source: 'https://pjt111.wordpress.com/about/', credit: 'Peter J. Taylor, “About,” Intersecting Processes', width: 289, height: 348},
  martin: {file: 'laura-martin', source: 'https://www.ljanemartin.com/', credit: 'Laura J. Martin, official author website', width: 1000, height: 1259}
};

function HistorianProfile({id, band}: {id: string; band: {name: string; work: string; place: string}}) {
  const portrait = HISTORIAN_PORTRAITS[id];
  return <Reveal as="figure" className="historian-profile">
    <img className={`historian-portrait portrait-${id}`} src={`media/portraits/${portrait.file}.jpg`}
      alt={`Photograph of ${band.name}`} width={portrait.width} height={portrait.height} loading="lazy" decoding="async" />
    <div className="band rd-band historian-caption">
      <h3>{band.name}</h3>
      <span className="rd-work">{band.work}</span>
    </div>
    <figcaption className="odum-photo-credit"><a href={portrait.source} target="_blank" rel="noreferrer">{portrait.credit}</a></figcaption>
  </Reveal>;
}

/** One historian’s reading: a portrait and biography, then claim rows and their view of the Odums. */
export function Reading({id}: {id: string; band?: number}) {
  const s = S(id);
  return (
    <section className="reading paper" data-beat={beat(ix(id))} data-chapter="three">
      <div className="rd-head">
        <HistorianProfile id={id} band={s.band} />
        <Reveal className="rd-intro">
          <h2>{s.title}</h2>
          <p>{s.lead} <Cites refs={s.leadRefs ?? []} /></p>
        </Reveal>
      </div>
      <div className="lg-law rd-rows">
        {s.rows.map((r: any) => (
          <Reveal key={r.h} className="law-row">
            <h3>{r.h}</h3>
            <div><blockquote>“{r.q}”</blockquote><p>{r.e} <Cite r={r.ref} /> {r.ref2 && <Cite r={r.ref2} />}</p></div>
          </Reveal>
        ))}
      </div>
      <CourseLink link={s.courseLink} />
      <Reveal as="p" className="rd-view"><span className="tag">How they view the Odums’ work</span>{s.view}</Reveal>
      <Notes refs={s.refs} />
    </section>
  );
}

/** Media behind each Martin card: archive figures, a typographic quote, the atoll, the textbook diff. */
function MartinMedia({stop, s}: {stop: any; s: Slide}) {
  const fig = (src: string, cap: string, alt: string) => (
    <div className="scan-plate"><figure className="photo document scan mt-fig"><img src={src} alt={alt} /><figcaption><em>{cap}</em></figcaption></figure></div>
  );
  switch (stop.media) {
    case 'martin-fig3': return fig('assets/source/martin2018-fig3.webp', 'Radioautograph of a wrasse collected after Test Baker, Bikini. Martin, “Proving Grounds,” fig. 3 (University of Washington Libraries).', 'A wrasse photographed beside its radioautograph; the radioactivity glows white in the gut.');
    case 'martin-fig4': return fig('assets/source/martin2018-fig4.webp', 'Quadrat B: the Odums’ field sketch (left) and the map published in 1955 (right). Martin, “Proving Grounds,” fig. 4 (Hargrett Library, University of Georgia).', 'Two maps of the same quadrat: a pencil field sketch full of small colonies, and a cleaner published version with smoothed edges.');
    case 'odum-fig9': return fig('assets/source/odum1955-pdf12.webp', 'Odum and Odum 1955, p. 301, fig. 9: radioautograph of a coral head. Shown earlier; read here as Martin reads it.', 'Page 301 of the 1955 paper with the coral radioautograph.');
    case 'quote': return (
      <div className="scan-plate"><blockquote className="mt-quote">“{stop.quote}”<cite>{stop.quoteBy} · <Cite r={['martin2018', '576']} /></cite></blockquote></div>
    );
    case 'atoll': return (
      <div className="mt-full">
        <img src={imagery.atoll.src} alt="" />
        <div className="mt-versus">
          <p><span>Odum and Odum, 1955</span>“a relatively isolated system … little affected by nuclear explosions”</p>
          <p><span>Martin, 2018</span>“the atolls were neither isolated nor pristine”</p>
        </div>
        <p className="media-credit">Enewetak Atoll · Esri World Imagery, Vantor WorldView-3, 2026. Present-day imagery.</p>
      </div>
    );
    case 'diff': {
      const df = s.diff;
      return (
        <div className="scan-plate">
          <div className="mt-diff">
            <span className="u-head">{df.h}</span>
            <p><b>{df.a.ed}</b>“…balances <del>the possible troubles he may have</del> with environmental contamination.”</p>
            <p><b>{df.b.ed}</b>“…balances <ins>to some extent</ins> the troubles <ins>he is having</ins> with environmental contamination.”</p>
            <Cite r={df.ref} />
          </div>
        </div>
      );
    }
    default: return null;
  }
}

/** Martin: who she is and what she claims, then a scrollmation through her argument (hydroids, a–e). */
export function MartinStory() {
  const s = S('martin');
  const n = ix('martin');
  const stops = s.stops as any[];
  return (
    <>
      <section className="reading martin-intro paper" data-beat={beat(n)} data-chapter="three">
        <div className="rd-head">
          <HistorianProfile id="martin" band={s.band} />
          <Reveal className="rd-intro">
            <h2>{s.title}</h2>
            <blockquote className="mt-claim">{s.claim} <Cite r={s.claimRef} /></blockquote>
            <p>{s.method} <Cites refs={s.methodRefs} /></p>
          </Reveal>
        </div>
        <Reveal as="p" className="mt-punch">“{s.punch}” <Cite r={s.punchRef} /></Reveal>
      </section>
      <Scrollmation className="martin-sm ink" side="left" id="martin" chapter="three"
        media={active => <Crossfade active={active} layers={stops.map(st => <MartinMedia key={st.id} stop={st} s={s} />)} />}
        cards={stops.map((st, i) => ({key: st.id, beat: beat(n, i + 1), node: <>
          <span className="card-k">{st.label}</span>
          <p>{st.caption}</p>
          {st.courseLink && <p className="card-course"><b>{st.courseLink.week}</b>{st.courseLink.t}</p>}
          <p className="card-cites">{st.refs.map((r: any) => <Cite key={r.join()} r={r} />)}</p>
        </>}))}
      />
      <section className="martin-view ink" data-chapter="three">
        <Reveal as="p" className="rd-view dark"><span className="tag">How she views the Odums’ work</span>{s.view}</Reveal>
        <Notes dark refs={s.refs} />
      </section>
    </>
  );
}

/** Optional: my limits on Martin. Off with showMartinLimits=false in config.json; one card off with "hide": true. */
export function MartinLimits() {
  if (config.showMartinLimits === false) return null;
  const s = S('martin-limits');
  const items = (s.items as any[]).filter(it => !it.hide);
  return (
    <section className="limits kraft" data-beat={beat(ix('martin-limits'))} data-chapter="three">
      <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2>{s.lead && <p className="lg-lead">{s.lead}</p>}</Reveal>
      <ol className="limit-grid">
        {items.map((it, i) => (
          <Reveal as="li" key={it.id} className={`limit-card ${it.ours ? 'ours' : ''}`} delay={(i % 3) * 110}>
            <span className="tc-n">{it.ours ? 'My critique' : String(i + 1).padStart(2, '0')}</span>
            <h3>{it.h}</h3>
            <p>{it.t}</p>
            {it.fair && <p className="fair"><b>In fairness:</b> {it.fair}</p>}
            <p className="card-cites"><Cites refs={it.refs} /></p>
          </Reveal>
        ))}
      </ol>
      <Notes refs={s.refs} />
    </section>
  );
}

/* ── Part 4: verdict and close ─────────────────────────────────── */
export function Verdict() {
  const s = S('verdict');
  const n = ix('verdict');
  return (
    <>
      <section className="assessment verdict kraft" data-beat={beat(n)} data-chapter="four">
        <Reveal className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2></Reveal>
        <div className="assess-cols">
          <Reveal className="ac right"><span className="u-head">{s.right.h}</span><ol>{s.right.items.map((d: string) => <li key={d}>{d}</li>)}</ol></Reveal>
          <Reveal className="ac over" delay={150}><span className="u-head">{s.over.h}</span><ol>{s.over.items.map((d: string) => <li key={d}>{d}</li>)}</ol></Reveal>
        </div>
        <div className="text-col">
          <Reveal as="p" className="dropcap">{s.ours}</Reveal>
        </div>
        <Notes refs={s.refs} />
      </section>
    </>
  );
}

/* ── Reading the reef: sources, activity, close ────────────────── */
function useQr(url: string | null) {
  const [svg, setSvg] = useState<string | null>(null);
  useEffect(() => {
    if (!url) { setSvg(null); return; }
    QRCode.toString(url, {type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: {dark: '#08182a', light: '#f3ecdc'}}).then(setSvg).catch(() => setSvg(null));
  }, [url]);
  return svg;
}

/* ── Class activity: a QR code and a link to the shared Google Doc (config.activityUrl). ── */
export function Activity(_: Ctx) {
  const s = S('activity');
  const url = config.activityUrl;
  const qr = useQr(url);
  return (
    <section id="activity" className="activity ink" data-beat={beat(ix('activity'))} data-chapter="four">
      <div className="section-head"><Kicker>{s.kicker}</Kicker><h2>{s.title}</h2></div>
      <div className="act-simple">
        <div className={`qr ${qr ? '' : 'missing'}`}>
          {qr ? <div className="qr-img" dangerouslySetInnerHTML={{__html: qr}} role="img" aria-label="QR code for the class activity Google Doc" />
            : <div className="qr-missing"><b>Activity link not set</b><span>Add the Google Doc URL as <code>activityUrl</code> in config.json.</span></div>}
        </div>
        <div className="act-simple-copy">
          <p className="act-task">{s.task}</p>
          {url && <a className="act-link" href={url} target="_blank" rel="noreferrer">{config.activityShortUrl ?? 'Open the Google Doc'}</a>}
        </div>
      </div>
    </section>
  );
}

export function Bibliography() {
  return (
    <section id="bibliography" className="biblio paper" data-beat={beat(ix('bibliography'))} data-chapter="four">
      <div className="section-head"><h2>Bibliography</h2></div>
      <div className="bib-cols">
        {sources.filter(s => citedIds.has(s.id)).sort((a, b) => a.bib.localeCompare(b.bib)).map(s => (
          <p key={s.id} className="bib-entry">{rich(s.bib)}</p>
        ))}
      </div>
    </section>
  );
}

export {ChapterTitle};
