import deckJson from '../content/slides.json';
import sourcesJson from '../content/sources.json';
import configJson from '../content/config.json';

export type Ref = [sourceId: string, locator: string];
export type Stop = {id: string; label: string; caption: string; refs: Ref[]};

// Slides are data-driven: each layout reads the fields it needs from its own
// entry in slides.json. Unknown fields are ignored, so content edits are safe.
export type Slide = {
  id: string;
  layout: string;
  kicker: string;
  title: string;
  subtitle?: string;
  minutes: number;
  cuttable?: boolean;
  refs: Ref[];
  notes: string;
  cues: string[];
  stops?: Stop[];
  matrix?: {element: string; cells: string[]}[];
  [key: string]: any;
};

export type Source = {
  id: string; group: string; bib: string; short: string; url?: string;
  status: 'inspected' | 'inspected-earlier' | 'data' | 'plan-cited' | 'bibliography-only';
  note?: string; file?: string;
};

export const deck = deckJson.deck;
export const slides = deckJson.slides as unknown as Slide[];
export const sources = sourcesJson.sources as Source[];
export const assets = sourcesJson.assets;
export const statusLegend = sourcesJson.statusLegend as Record<Source['status'], string>;
export const config = configJson as {
  presenters: string[]; presentationDate: string | null; dateApproved: boolean;
  activityUrl: string | null; activityShortUrl: string | null; responseBoardUrl: string | null;
  activityMinutes: number; showMartinLimits?: boolean;
};

const byId = new Map(sources.map(s => [s.id, s]));
export const sourceById = (id: string) => byId.get(id);

/** Number of in-slide steps beyond the first view (camera stops, matrix rows). */
export function maxStep(slide: Slide): number {
  if (slide.stops) return slide.stops.length - 1;
  if (slide.layout === 'closeReading' && slide.matrix) return slide.matrix.length;
  return 0;
}

/** Chicago short note, e.g. “Golley, History of the Ecosystem Concept, 82–83.” */
export function noteText([id, loc]: Ref): string {
  const s = byId.get(id);
  if (!s) return `${id}${loc ? ', ' + loc : ''}.`;
  // Short forms end with the comma that precedes a locator (“Title,” 83.).
  if (loc) return `${s.short} ${loc}.`;
  return s.short.replace(/,”$/, '.”').replace(/,$/, '.');
}

/** Unique refs for the footer of a slide, in first-cited order. */
export function slideRefs(slide: Slide, step = 0): Ref[] {
  const out: Ref[] = [];
  const seen = new Set<string>();
  const add = (r: Ref) => { const k = r[0] + '|' + r[1]; if (!seen.has(k)) { seen.add(k); out.push(r); } };
  if (slide.stops) slide.stops[Math.min(step, slide.stops.length - 1)].refs.forEach(add);
  else slide.refs.forEach(add);
  return out;
}

/** Source ids cited anywhere in the rendered slide text (speaker notes excluded). */
export const citedIds = (() => {
  const known = new Set(sources.map(s => s.id));
  const found = new Set<string>();
  const walk = (o: unknown): void => {
    if (Array.isArray(o)) {
      if (typeof o[0] === 'string' && known.has(o[0])) found.add(o[0]);
      o.forEach(walk);
    } else if (o && typeof o === 'object') {
      for (const [k, v] of Object.entries(o)) if (k !== 'notes') walk(v);
    }
  };
  slides.filter(s => s.id !== 'activity').forEach(walk);
  return found;
})();

export const registerHref = (id: string) => `sources.html#${id}`;

export const sourceStatusLabel: Record<Source['status'], string> = {
  'inspected': '',
  'inspected-earlier': '',
  'data': 'data',
  'plan-cited': '',
  'bibliography-only': 'record only'
};
