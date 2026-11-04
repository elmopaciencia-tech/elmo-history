import regionPaths from '../content/region-paths.json';
import {imagery, places, frac, type LatLon} from '../lib/geo';
import {ZONES, profilePx, QUADRATS, SAMPLE_UP, SAMPLE_DOWN} from '../three/reef-data';

// Flat 2D versions of the map, reef and coral, shown when there is no WebGL and
// no captured still for a stop. Moved here from the retired slide deck.

/* ── Map ── */
const REGION_LABELS: {p: LatLon; t: string; s?: string; k: string; left?: boolean; stops: number[]}[] = [
  {p: places.enewetak, t: 'Enewetak', s: '43 tests, 1948–58', k: 'test', left: true, stops: [0, 1]},
  {p: places.bikini, t: 'Bikini', s: 'Castle Bravo, 1 Mar 1954', k: 'test', stops: [1]},
  {p: places.ujelang, t: 'Ujelang', s: 'dri-Enewetak in exile, 1947–80', k: 'people', left: true, stops: [1]},
  {p: places.rongerik, t: 'Rongerik', s: 'Bikinians moved here, 1946', k: 'people', stops: [1]},
  {p: places.rongelap, t: 'Rongelap', s: 'Bravo fallout', k: 'test', left: true, stops: [1]},
  {p: places.utirik, t: 'Utirik', s: 'Bravo fallout', k: 'test', stops: [1]},
  {p: places.kwajalein, t: 'Kwajalein', k: 'place', stops: [0, 1]},
  {p: places.majuro, t: 'Majuro', k: 'place', stops: [0, 1]}
];

function RegionMap({step}: {step: number}) {
  const {bbox, width: W, height: H} = regionPaths;
  const P = (p: LatLon) => [((p.lon - bbox.west) / (bbox.east - bbox.west)) * W, ((bbox.north - p.lat) / (bbox.north - bbox.south)) * H];
  const arc = (a: LatLon, b: LatLon) => {
    const [ax, ay] = P(a), [bx, by] = P(b), mx = (ax + bx) / 2, my = (ay + by) / 2;
    return `M${ax} ${ay} Q${mx - (by - ay) * 0.3} ${my + (bx - ax) * 0.3} ${bx} ${by}`;
  };
  const grid = [];
  for (let lon = 158; lon <= 172; lon += 2) { const [x] = P({lat: 0, lon}); grid.push(<g key={'x' + lon}><line x1={x} x2={x} y1={0} y2={H} /><text x={x + 4} y={H - 8}>{lon}°E</text></g>); }
  for (let lat = 6; lat <= 15; lat += 2) { const [, y] = P({lat, lon: 0}); grid.push(<g key={'y' + lat}><line x1={0} x2={W} y1={y} y2={y} /><text x={6} y={y - 5}>{lat}°N</text></g>); }
  return (
    <svg className="region-map" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Map of the Marshall Islands: Enewetak in the northwest, Ujelang to its southwest, Bikini, Rongerik, Rongelap and Utirik to the east.">
      <rect width={W} height={H} fill="#0b2431" />
      <g className="rm-grid">{grid}</g>
      <g className="rm-land">{regionPaths.land.map((d, i) => <path key={i} d={d} />)}</g>
      <g className="rm-reef">{regionPaths.reefs.map((d, i) => <path key={i} d={d} />)}</g>
      {step === 1 && (
        <g className="rm-routes">
          <path d={arc(places.enewetak, places.ujelang)} /><path d={arc(places.bikini, places.rongerik)} />
          <text x={P(places.ujelang)[0] + 60} y={(P(places.ujelang)[1] + P(places.enewetak)[1]) / 2 + 6}>Dec 1947 · about 145 people</text>
          <text x={(P(places.bikini)[0] + P(places.rongerik)[0]) / 2 - 10} y={P(places.rongerik)[1] + 34}>1946</text>
        </g>
      )}
      {REGION_LABELS.filter(l => l.stops.includes(step)).map(l => {
        const [x, y] = P(l.p);
        return (
          <g key={l.t} className={`rm-label k-${l.k}`} transform={`translate(${x} ${y})`}>
            <circle r={7} />
            <text x={l.left ? -14 : 14} y={-2} textAnchor={l.left ? 'end' : 'start'}>{l.t}</text>
            {l.s && <text className="sub" x={l.left ? -14 : 14} y={18} textAnchor={l.left ? 'end' : 'start'}>{l.s}</text>}
          </g>
        );
      })}
      {step === 0 && (
        <g className="rm-edge">
          <text x={W - 16} y={40} textAnchor="end">Hawaiʻi 4,380 km →</text>
          <text x={16} y={40}>← Guam 1,900 km</text>
          <text x={16} y={64}>↖ Japan 3,500 km</text>
        </g>
      )}
      <g className="rm-scale" transform={`translate(${W - 230} ${H - 40})`}>
        <line x1={0} x2={(200 / 111.32 / Math.cos((10.5 * Math.PI) / 180)) / (bbox.east - bbox.west) * W} y1={0} y2={0} />
        <text x={0} y={-10}>200 km</text>
      </g>
    </svg>
  );
}

const DETAIL: Record<number, {img: keyof typeof imagery; labels: {p: LatLon; t: string; k: string}[]; alt: string}> = {
  2: {img: 'atoll', alt: 'Satellite image of Enewetak Atoll, a ring of reef and islands around a deep lagoon.', labels: [
    {p: places.japtan, t: 'Japtan · research reef', k: 'focus'}, {p: places.medren, t: 'Medren (Parry) · lab', k: 'lab'},
    {p: places.enewetakIsland, t: 'Enewetak Island', k: 'place'}, {p: places.mikeCrater, t: 'Ivy Mike crater', k: 'test'}, {p: places.runitDome, t: 'Runit Dome', k: 'test'}]},
  3: {img: 'japtanClose', alt: 'Close satellite image of Japtan island and the reef north of it.', labels: [{p: places.japtan, t: 'Japtan', k: 'place'}, {p: places.transect, t: 'Transect (approx.)', k: 'focus'}]},
  4: {img: 'mike', alt: 'Satellite image of the Ivy Mike crater, a deep blue basin in the reef.', labels: [{p: places.mikeCrater, t: 'Ivy Mike crater', k: 'test'}, {p: places.koaCrater, t: 'KOA crater', k: 'place'}]},
  5: {img: 'runit', alt: 'Satellite image of Runit island with the round concrete dome.', labels: [{p: places.runitDome, t: 'Runit Dome', k: 'test'}]}
};

export function MapFallback({step}: {step: number}) {
  if (step <= 1) return <div className="map-fallback"><RegionMap step={step} /></div>;
  const d = DETAIL[step];
  const im = imagery[d.img];
  return (
    <div className="map-fallback detail">
      <div className="detail-frame">
        <img src={im.src} alt={d.alt} />
        {d.labels.map(l => { const f = frac(l.p, im.bbox); return (
          <span key={l.t} className={`dl k-${l.k}`} style={{left: `${f.x * 100}%`, top: `${f.y * 100}%`}}><i /><b>{l.t}</b></span>
        ); })}
      </div>
    </div>
  );
}

/* ── Reef ── */
export const FIGURE_SRC = 'assets/source/odum1957-pdf6.webp';

/** 2D version: a schematic built from the same data, beside the source figure. */
export function ReefFallback({step}: {step: number}) {
  const W = 1200, X0 = 40, X1 = 1160, sx = (u: number) => X0 + u * (X1 - X0);
  const k = (X1 - X0) / 393, sy = (u: number) => 170 - profilePx(u) * k * 0.9;
  const prof = Array.from({length: 121}, (_, i) => i / 120);
  const top = prof.map(u => `${sx(u)},${sy(u)}`).join(' ');
  const showQ = step === 1 || step === 4, showC = step === 2 || step === 3, showS = step === 3;
  return (
    <div className="reef-fallback">
      <svg viewBox={`0 0 ${W} 520`} role="img" aria-label="Schematic cross-section and plan of the reef transect from lagoon (left) to sea (right), zones E to A and the buttress.">
        <defs>
          <linearGradient id="rfw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5fd6c8" stopOpacity=".55" /><stop offset="1" stopColor="#0e3a4e" stopOpacity=".9" /></linearGradient>
          <marker id="rfa" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#b9ece4" /></marker>
        </defs>
        <rect x={X0} y={150} width={X1 - X0} height={160} fill="url(#rfw)" />
        <polygon points={`${X0},310 ${top} ${X1},310`} fill="#cbbd9b" stroke="#efe6d2" strokeWidth="1.5" />
        <line x1={X0} x2={X1 - 120} y1={170} y2={170} stroke="#f3ecdc" strokeDasharray="8 6" opacity=".8" />
        <text x={X0 + 6} y={162} className="rf-small">low tide</text>
        {ZONES.map(z => (
          <g key={z.id}>
            <line x1={sx(z.from)} x2={sx(z.from)} y1={60} y2={470} stroke="#f3ecdc" strokeDasharray="4 6" opacity=".35" />
            <text x={(sx(z.from) + sx(z.to)) / 2} y={step === 0 ? 92 : 112} textAnchor="middle" className="rf-zone">{z.letter ? `${z.letter} · ` : ''}{z.name}</text>
          </g>
        ))}
        <rect x={X0} y={350} width={X1 - X0} height={110} fill="#e3d7bb" opacity=".9" />
        {ZONES.slice(0, 5).map(z => <rect key={z.id} x={sx(z.from)} y={350} width={sx(z.to) - sx(z.from)} height={110} fill={['#e6dcc3', '#cdbf9f', '#d4c7a8', '#c7b496', '#c19a88'][ZONES.indexOf(z)]} opacity=".85" />)}
        <rect x={sx(0.852)} y={350} width={sx(1) - sx(0.852)} height={110} fill="#7f8a7c" />
        <text x={X0} y={44} className="rf-end">← Lagoon</text>
        <text x={X1} y={44} textAnchor="end" className="rf-end">Sea →</text>
        {showQ && <line x1={sx(QUADRATS[5].u)} x2={sx(QUADRATS[0].u)} y1={405} y2={405} stroke="#fff6e2" strokeDasharray="5 5" opacity=".7" />}
        {showQ && QUADRATS.map(q => {
          const hi = false;
          return <g key={q.id} ><rect x={sx(q.u) - 11} y={394} width={22} height={22} fill={hi ? 'rgba(255,210,122,.4)' : 'rgba(255,246,226,.25)'} stroke={hi ? '#ffd27a' : '#fff6e2'} strokeWidth="2" />
            {[[-11, -11], [11, -11], [-11, 11], [11, 11]].map(([dx, dy]) => <circle key={`${dx}${dy}`} cx={sx(q.u) + dx} cy={405 + dy} r={2.6} fill="#df7c52" />)}
            <text x={sx(q.u)} y={384} textAnchor="middle" className="rf-q">{q.id}</text></g>;
        })}
        {showQ && step === 1 && <text x={sx(QUADRATS[0].u)} y={344} textAnchor="middle" className="rf-small">A: helicopter glimpses only</text>}
        {showC && <line x1={sx(0.95)} x2={sx(0.06)} y1={128} y2={128} stroke="#b9ece4" strokeWidth="8" markerEnd="url(#rfa)" />}
        {showC && <text x={sx(0.5)} y={142} textAnchor="middle" className="rf-small">current · sea → lagoon · about 0.5 → under 0.1 m/s</text>}
        {showS && [SAMPLE_UP, SAMPLE_DOWN].map((u, i) => (
          <g key={u}><circle cx={sx(u)} cy={sy(u) - 4} r={12} fill="#df7c52" /><text x={sx(u)} y={500} textAnchor="middle" className="rf-small">{i ? 'downstream sample' : 'upstream sample'}</text></g>
        ))}
        <text x={X1} y={508} textAnchor="end" className="rf-small">Schematic, unscaled · zones and current from the 1957 figure · quadrat order from the 1955 fig. 2 · sample positions illustrative</text>
      </svg>
      <figure className="rf-source">
        <img src={FIGURE_SRC} alt="Odum and Odum 1957, Figure 1." />
        <figcaption>Source: Odum and Odum, “Zonation of Corals,” fig. 1 (1957)</figcaption>
      </figure>
    </div>
  );
}

/* ── Coral ── */
/** 2D cut-away: same layer order as the 3D cap, explicitly schematic. */
export function CoralFallback({step}: {step: number}) {
  const cut = step >= 1;
  return (
    <svg className="coral-fallback" viewBox="0 0 600 520" role="img" aria-label="Schematic cut-away of a coral head: a thin outer layer of polyp tissue, green bands of skeletal algae just beneath, and a white limestone skeleton.">
      <defs>
        <clipPath id="cf-dome"><path d="M60 420 C60 200 170 90 300 90 C430 90 540 200 540 420 Z" /></clipPath>
      </defs>
      <path d="M60 420 C60 200 170 90 300 90 C430 90 540 200 540 420 Z" fill={cut ? '#ece5d6' : '#c9b48a'} stroke="#8a6a3e" strokeWidth={cut ? 10 : 3} />
      {cut && (
        <g clipPath="url(#cf-dome)" fill="none">
          <path d="M84 420 C84 216 184 112 300 112 C416 112 516 216 516 420" stroke="#4a803a" strokeWidth="16" />
          <path d="M110 420 C110 236 196 140 300 140 C404 140 490 236 490 420" stroke="#6e9656" strokeWidth="7" opacity=".6" />
          {[170, 200, 230, 260].map(r => <path key={r} d={`M${300 - r} 420 C${300 - r} ${420 - r * 1.1} ${300 - r * 0.45} ${420 - r * 1.25} 300 ${420 - r * 1.25} C${300 + r * 0.45} ${420 - r * 1.25} ${300 + r} ${420 - r * 1.1} ${300 + r} 420`} stroke="#d6cdb8" strokeWidth="2" />)}
        </g>
      )}
      <line x1="40" x2="560" y1="420" y2="420" stroke="#9fb6bd" strokeWidth="2" />
      {cut && (
        <g className="cf-labels">
          <text x="300" y="70" textAnchor="middle">Polyp tissue · animal</text>
          <text x="300" y="470" textAnchor="middle" fill="#7fbf63">Green bands of skeletal algae · plant</text>
          <text x="300" y="320" textAnchor="middle" fill="#5a5245">Limestone skeleton</text>
        </g>
      )}
      <text x="300" y="505" textAnchor="middle" className="cf-note">Schematic, not to scale</text>
    </svg>
  );
}
