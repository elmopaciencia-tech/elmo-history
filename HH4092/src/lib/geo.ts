// Geographic constants shared by the 3D map and the 2D fallback.
// Coordinates are decimal degrees (north positive, east positive).

export type LatLon = {lat: number; lon: number};
export type BBox = {west: number; east: number; south: number; north: number};

export const places = {
  enewetak: {lat: 11.50, lon: 162.24},          // atoll centre
  enewetakIsland: {lat: 11.35, lon: 162.35},
  medren: {lat: 11.40, lon: 162.367},            // Medren (Parry) Island, marine lab
  japtan: {lat: 11.424, lon: 162.384},
  transect: {lat: 11.4316, lon: 162.3858},       // ~¼ mile north of Japtan (Odum and Odum 1957, 1)
  mikeCrater: {lat: 11.668, lon: 162.1885},
  koaCrater: {lat: 11.671, lon: 162.199},
  runitDome: {lat: 11.5526, lon: 162.3472},
  ujelang: {lat: 9.82, lon: 160.91},
  bikini: {lat: 11.58, lon: 165.38},
  rongerik: {lat: 11.35, lon: 167.45},
  rongelap: {lat: 11.16, lon: 166.89},
  utirik: {lat: 11.23, lon: 169.80},
  kwajalein: {lat: 9.10, lon: 167.34},
  majuro: {lat: 7.09, lon: 171.38},
  honolulu: {lat: 21.31, lon: -157.86},
  guam: {lat: 13.44, lon: 144.79},
  tokyo: {lat: 35.68, lon: 139.69}
} satisfies Record<string, LatLon>;

/** Imagery footprints (equirectangular exports, EPSG:4326). */
export const imagery = {
  atoll: {src: 'assets/map/enewetak-atoll.webp', bbox: {west: 162.00, east: 162.43, south: 11.30, north: 11.72}},
  japtanWide: {src: 'assets/map/japtan-worldview-2026.webp', bbox: {west: 162.368, east: 162.398, south: 11.413, north: 11.443}},
  japtanClose: {src: 'assets/map/japtan-worldview-close-2026.webp', bbox: {west: 162.375, east: 162.394, south: 11.416, north: 11.435}},
  mike: {src: 'assets/map/mike-crater-2026.webp', bbox: {west: 162.172, east: 162.206, south: 11.652, north: 11.686}},
  runit: {src: 'assets/map/runit-dome-2026.webp', bbox: {west: 162.330, east: 162.364, south: 11.537, north: 11.571}},
  region: {src: 'assets/map/region.webp', bbox: {west: 150, east: 180, south: 0, north: 22}},
  globe: {src: 'assets/map/globe.webp', bbox: {west: -180, east: 180, south: -90, north: 90}}
} satisfies Record<string, {src: string; bbox: BBox}>;

/** Position inside a bbox as 0..1 fractions (x east, y south). */
export function frac(p: LatLon, b: BBox) {
  return {x: (p.lon - b.west) / (b.east - b.west), y: (b.north - p.lat) / (b.north - b.south)};
}
