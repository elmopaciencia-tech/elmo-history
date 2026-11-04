// Spatial relationships derived from Odum and Odum 1957, Figure 1 (PDF p. 6).
// The aerial strip runs from x=177 px (lagoon) to x=570 px (sea) at 60 dpi;
// zone boundaries are the figure's dashed lines, as fractions of that strip.
// u = 0 is the lagoon end, u = 1 the seaward end. Current flows from u=1 to u=0.

export type Zone = {id: string; letter: string; name: string; from: number; to: number; note: string};

export const ZONES: Zone[] = [
  {id: 'E', letter: 'E', name: 'Sand and shingle', from: 0.0, to: 0.313, note: 'scattered large heads'},
  {id: 'D', letter: 'D', name: 'Large heads', from: 0.313, to: 0.529, note: 'heads may stand a foot above low spring tide'},
  {id: 'C', letter: 'C', name: 'Small heads', from: 0.529, to: 0.72, note: 'massive Favids and Porites'},
  {id: 'B', letter: 'B', name: 'Encrusting', from: 0.72, to: 0.822, note: 'encrusting Acropora and Millepora'},
  {id: 'A', letter: 'A', name: 'Ridge', from: 0.822, to: 0.852, note: 'breaker zone, largely covered by algae'},
  {id: 'X', letter: '', name: 'Buttress', from: 0.852, to: 1.0, note: 'no collections could be made'}
];

/** Side-view profile from the figure's upper panel, in figure pixels below
 *  the low-tide line: 28 px at the lagoon end rising to 0 at the ridge,
 *  then the buttress drops ~58 px to the seaward edge. */
export function profilePx(u: number): number {
  if (u <= 0.84) return -28 * (1 - u / 0.84) * (1 - 0.18 * Math.sin(Math.PI * u / 0.84));
  if (u <= 0.86) return 0.6;
  const t = (u - 0.86) / 0.14;
  return -58 * Math.pow(t, 0.75);
}

export const FIG = {pxLength: 393};

// Odum and Odum 1955, fig. 2 (p. 293): "the approximate location of the 6
// quadrats is indicated in the upper diagram", lettered A (ridge, seaward) to
// F (sand-shingle, lagoonward). Positions are read off that diagram relative
// to its zone boundaries, then mapped onto the 1957 zones above. Each quadrat
// was a 20 x 20 ft square marked by iron stakes (1955, 293); Martin 2018, 577.
export type Quadrat = {id: string; u: number};
export const QUADRATS: Quadrat[] = [
  {id: 'A', u: 0.835},   // on the ridge, in the breakers
  {id: 'B', u: 0.773},   // encrusting zone
  {id: 'C', u: 0.583},   // small heads
  {id: 'D', u: 0.451},   // large heads
  {id: 'E', u: 0.297},   // edge of sand-shingle, by the large heads
  {id: 'F', u: 0.238}    // sand-shingle
];

// Illustrative sampling points for the flowing-water method.
export const SAMPLE_UP = 0.835;
export const SAMPLE_DOWN = 0.05;
