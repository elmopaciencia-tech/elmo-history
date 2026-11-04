// Primary-source page images and transcriptions for the reader.
// Page labels give both the printed page and the PDF page, as in the register.

export type DocPage = {pdf: number; printed: string; src: string; landscape?: boolean};
export type Doc = {
  id: string; title: string; short: string; date: string; pages: DocPage[];
  transcription: {page: number; heading: string; paragraphs: string[]}[];
  rights: string;
};

const src = (id: string, n: number) => `assets/source/${id}-pdf${n}.webp`;

export const DOCS: Doc[] = [
  {
    id: 'odum1955',
    title: 'Trophic Structure and Productivity of a Windward Coral Reef Community on Eniwetok Atoll',
    short: 'Odum and Odum, Ecological Monographs 25 (1955)',
    date: 'July 1955 · class excerpt, 8 of 30 pages',
    rights: 'JSTOR copy · excerpt for class discussion; do not post the full PDF',
    pages: [
      {pdf: 2, printed: 'p. 291 · Introduction', src: src('odum1955', 2)},
      {pdf: 12, printed: 'p. 301 · Fig. 9', src: src('odum1955', 12)},
      {pdf: 22, printed: 'p. 311 · Fig. 10', src: src('odum1955', 22)},
      {pdf: 25, printed: 'p. 314 · flow method', src: src('odum1955', 25)},
      {pdf: 27, printed: 'p. 316 · Table 17', src: src('odum1955', 27)},
      {pdf: 28, printed: 'p. 317 · balance sheet', src: src('odum1955', 28)},
      {pdf: 29, printed: 'p. 318 · efficiency', src: src('odum1955', 29)},
      {pdf: 30, printed: 'p. 319 · Summary', src: src('odum1955', 30)}
    ],
    transcription: [
      {page: 2, heading: 'p. 291, Introduction, paragraphs 1–2', paragraphs: [
        'The coral reef communities of the world are tremendously varied associations of plants and animals growing luxuriantly in tropical waters of impoverished plankton content. Under intense equatorial insolation the plants apparently grow rapidly and are eaten rapidly. Save for fluctuations the reef seems unchanged year after year, and reefs apparently persist, at least intermittently, for millions of years. …',
        'Perhaps in the structure of organization of this relatively isolated system man can learn about optima for utilizing sunlight and raw materials, for mankind’s great civilization is not in steady state and its relation with nature seems to fluctuate erratically and dangerously. What, then, is the relationship between organic productivity, energetic efficiency, and the standing crop structure of a coral reef community? How are steady state equilibria such as the reef ecosystem self adjusted?'
      ]},
      {page: 2, heading: 'p. 291, Introduction, paragraph 3', paragraphs: [
        'Since nuclear explosion tests are being conducted in the vicinity of these inherently stable reef communities, a unique opportunity is provided for critical assays of the effects of radiations due to fission products on whole populations and entire ecological systems in the field [italics in original]. In the present paper some results are presented of a variety of measurements made on an Eniwetok Atoll reef which as yet has been little affected by nuclear explosions. These measurements represent both a multiple approach to the problem of obtaining practical assays of total function which will aid future comparisons between the normal and the irradiated reef ecosystems, and also a continuing effort by many to answer the questions posed in the preceding paragraph.'
      ]},
      {page: 12, heading: 'p. 301, Fig. 9 and right column', paragraphs: [
        'Fig. 9. A positive print of an autoradiogram of a section of a coral head (Goniastrea) after two days’ exposure; light areas indicate exposed and dark areas unexposed film. Note that the surface polyp zone, but not the subsurface algal bands (see Fig. 7), exhibited considerable radioactivity.',
        '… Thus the coral reef is like most known self-sufficient ecosystems in having a much greater weight of plant biomass than animal biomass.',
        'An internal use and reuse of nutrients in a living coral is suggested by the autoradiogram (positive) in Figure 9 which is typical of ten made from corals from the generally (low level) radioactive Japtan reef. The radioactivity is entirely restricted to the animal polyp zone. Whereas algae on dead reef surfaces were intensely radioactive, these forms beneath the corals are apparently not in nutrient contact with the outside water except through the coelenterate tissues. …'
      ]},
      {page: 22, heading: 'p. 311, Figure 10 (mean values)', paragraphs: [
        'Mean dry biomass in grams per square metre: producers 703; herbivores (H) 132; carnivores (C) 11. H/P = 18.9%; C/H = 8.3%.',
        'Figure 10. Pyramids of biomass resulting from estimates of the dry weight of living materials (excluding, of course, dead skeletal materials associated with protoplasm). For each quadrat, A–F, the weight of “producers” (bottom layer of pyramid), the “herbivores” (middle layer), and the “carnivores” (top layer) is shown, and also the average dry biomass for the reef.'
      ]},
      {page: 25, heading: 'p. 314, Production and respiration by the flow method', paragraphs: [
        '… The oxygen content of the water upstream and downstream is measured simultaneously. The oxygen increase between stations during the day is the net photosynthetic production of the community. The oxygen decrease between stations during the night is the total respiration of the community. By taking a series of measurements over the daily cycle, one obtains the course of production during the day. Measurement of the current transport permits calculation of total reef metabolism. …',
        '… (1) The productivity of the reef is very high, greater than 24 gms/m²/day or 74,300 lbs/Acre/yr. … In comparison to the open tropical waters such as that flowing onto the reef (.2 gms/m²/day; Sargent & Austin 1949), this reef is 120 times more productive. (3) The Japtan reef has twice the production value per area by the flow method as the Rongelap reef studied by Sargent & Austin. …'
      ]},
      {page: 27, heading: 'p. 316, Table 17. Balance sheet for the Japtan inter-island reef in July (gm/m²/day)', paragraphs: [
        'Income. Planktonic organic matter (Table 13) from breaker zone: 2.0. Primary production (measured as oxygen, calculated as glucose): net (uncorrected) daytime production 14.0; respiration during daytime 10.0. Total income: 26.0.',
        'Losses. Planktonic organic matter lost to lagoon (Table 13): 0.4. Total respiration in 24 hr: 24.0. Total outgo: 24.4.',
        'Right column: … The reef surfaces, living coral, living calcareous algae, and dead skeletons all act as a kind of soil in that they conserve phosphorus nutrients and permit plant biota to burrow in to reach these nutrients. … Certainly the reef has concentrated radioactivity of multiple types in water that is barely above background as it drifts in 200 mi. from Bikini.'
      ]},
      {page: 28, heading: 'p. 317, Balance sheet for the reef community', paragraphs: [
        'Having made various measurements and estimates of photosynthetic rates and metabolic processes, we may now consider the data as a whole to see how nearly balanced are the gains and losses of organic matter on one reef section. In Table 17 the sources of energy storage gain are estimated, including primary photosynthetic production and influx of organic matter in the water. The losses of energy are also listed, including respiration, and outflow of organic matter. The gains and losses are only 4% apart. In view of the rough nature of some of the estimates it is not certain whether this is a significant difference or whether the community is in a perfect steady state with losses matching gains. With the 15–20% lower total insolation in winter … at this latitude than when these measurements were made in July, a lower production but relatively unchanged respiration may be expected to make an annual balance between production and respiration.'
      ]},
      {page: 29, heading: 'p. 318, climax, efficiency and turnover', paragraphs: [
        'We may tentatively conclude, at least, that the Japtan reef is a true climax community, in the ecological sense, under present ocean level conditions, since there is little if any net increase in living biomass.',
        '… these approximations indicate about 1650 KCal/m²/day incoming energy reaching the community. Relative to the 96 KCal/m²/day (24 gm × 4.0 KCal/gm) primary production estimated from oxygen measurements in Table 16 this is about 5.8% efficiency of primary production. That this efficiency is a low one in comparison to some laboratory experiments (Rabinowitch 1951) and yet higher than average terrestrial agriculture is an important result. Here is an ecosystem which has had millions of years to evolve an effective composition, which is built for a low efficiency. This may be support for the hypothesis (Odum & Pinkerton 1955) that there is an optimum but relatively low efficiency that produces the most effective trophic structure whose survival is based on a high primary productivity.',
        'In the previous sections a standing crop of living biomass of about 700 gm/m² was found and a total primary productivity (glucose) of 24 gm/m²/day or 8760 gm/m²/yr. The ratio of annual primary production to standing crop is therefore about 12.5 to 1. This ratio can be called the turnover.'
      ]},
      {page: 30, heading: 'p. 319, Summary, items 9–12 and 20', paragraphs: [
        '9. In all zones of the reef a trophic structure with a pyramid of biomass was found (Fig. 10). … The mean standing crop for the reef as a whole in gm/m² was: producers, 703; herbivores, 132; and carnivores, 11. …',
        '10. A very high total production of about 74,000 lbs/acre/year was obtained with the flow rate method. This represents a turnover … of about 12.5 times per year of existing biomass. The figures and the production curve (Fig. 12) provide quantitative criteria for assaying the future effect of nuclear explosions, continued low-level radioactivity, or other factors on the community as a whole.',
        '11. The production on the reef seems to about balance the respiration on the reef (Table 17). The corals do not constitute a dominant part of the whole metabolism. It is concluded that the reef community is, under present ocean levels, a true ecological climax or open steady-state system.',
        '12. The efficiency of primary production computed in terms of the visible light reaching the underwater community is about 6%. This is support for the advocated theory that steady state communities adjust to a moderately low efficiency as a necessary compensation for high total productivity.',
        '20. … like other communities studied (whether aquatic or terrestrial), the Japtan reef has a large predominance of living plant biomass, even though organisms classified as animals are more conspicuous.'
      ]}
    ]
  },
  {
    id: 'odum1957',
    title: 'Zonation of Corals on Japtan Reef, Eniwetok Atoll',
    short: 'Odum and Odum, Atoll Research Bulletin 52 (1957)',
    date: 'Issued 15 September 1957',
    rights: 'Smithsonian Research Online · No Copyright – United States',
    pages: [
      {pdf: 1, printed: 'cover', src: src('odum1957', 1)},
      {pdf: 2, printed: 'p. 1', src: src('odum1957', 2)},
      {pdf: 3, printed: 'p. 2 · Table 1', src: src('odum1957', 3)},
      {pdf: 4, printed: 'p. 3', src: src('odum1957', 4)},
      {pdf: 5, printed: 'Figure 1 caption', src: src('odum1957', 5)},
      {pdf: 6, printed: 'Figure 1', src: src('odum1957', 6), landscape: true}
    ],
    transcription: [
      {page: 2, heading: 'Printed p. 1, paragraph 2', paragraphs: [
        'Upon his return from an overseas trip, Dr. John W. Wells of Cornell University, kindly consented to examine our collections during the summer of 1955. He has returned the material to us with his determinations of species. Since the Japtan Reef which we studied is located near the Marine Laboratory on Parry Island and may be frequently visited by workers at the laboratory it seems especially desirable to make available the final identifications. The Japtan reef, being relatively undisturbed, can serve as a “control” for studies of reefs more directly affected by nuclear weapons tests.'
      ]},
      {page: 2, heading: 'Printed p. 1, paragraphs 3–4', paragraphs: [
        'The series of corals was collected in a transect across the windward, inter-island reef about one-fourth mile north of Japtan (Muti) Island on Eniwetok Atoll, Marshall Islands. This reef, the physiographic zonation, and the location of sample quadrats have been fully described and pictured in the above mentioned paper. As shown in Figure 1, the reef at the study transect point exhibited 6 distinct zones. No collections could be made from the windward buttress zone. The other 5 zones are designated in Figure 1 and Table 1 as follows: A. Coral-algal ridge (breaker zone). B. Encrusting zone. C. Zone of small heads. D. Zone of large heads. E. Zone of sand and shingle with scattered large heads.',
        'As would be expected, the gradients (from sea to lagoon) in depth of from about 6 inches to 30 feet and more and in current velocity from about 0.5 meter to less than 0.1 meter per second at “average” tide conditions result in sharp changes in species composition along the reef transect. … Porites lobata appeared to tolerate the widest range of conditions as it could be found over most of the reef.'
      ]}
    ]
  },
  {
    id: 'aec1955',
    title: 'Eighteenth Semiannual Report, January–June 1955 (excerpts)',
    short: 'U.S. Atomic Energy Commission (1955)',
    date: '1955 · typescript excerpts, report pp. 31, 32, 90',
    rights: 'US government work · scan via RMI Nuclear Documents (ICAAD)',
    pages: [
      {pdf: 1, printed: 'report pp. 31, 32, 90', src: src('aec1955', 1)},
      {pdf: 2, printed: 'report p. 90 (cont.)', src: src('aec1955', 2)}
    ],
    transcription: [
      {page: 1, heading: 'Report pp. 31, 32, 90, PDF p. 1 ([?] = smudged)', paragraphs: [
        'Military Application. Immediately following Operation CASTLE, the test series held at the AEC’s Pacific Proving Ground in the spring of 1954, the weapons program was directed toward development of weapons whose design was based on results of those tests. During the first 6 months of 1955, weapons produced in accordance with the President’s directive included types incorporating such designs.',
        'Operation WIGWAM. In addition to Operation TEAPOT, a joint AEC–Department of Defense test (Operation WIGWAM) was conducted in the Eastern Pacific ocean in mid-May. The principal purpose of the test was to study effects of a deep underwater detonation. The Commission participated in the test by furnishing the device, assisting in its final assembly and placement, and conducting diagnostic measurements. As forecast, indications are that the test involved no health hazard to mainland or island inhabitants or consumers of fish.',
        'p. 90. [Section heading and first paragraph largely illegible; the paragraph names the Eniwetok Marine Biological Laboratory.]',
        'Coral reefs represent the ultimate in stable [?] natural communities with [histories?] of thousands of years of constant adjustment between organisms and environment. Effects of radiation on these reefs cannot be evaluated unless the structure and function …'
      ]},
      {page: 2, heading: 'Report p. 90 (continued), PDF p. 2', paragraphs: [
        '… under normal conditions are known. Thus, the initial work included experimental assaying methods in order to measure the “basal metabolism” and the overall trophic or “food-chain” structure of a coral reef community as a whole not affected by nuclear explosions. This was similar to assaying the metabolism of animals or humans under normal conditions. For example, it was found that a healthy Eniwetok reef had a production rate of about 74,000 pounds of glucose (a sugar) per acre per year. This exceeds man’s best agricultural efforts in most parts of the world. The critical assay methods devised can be completed in a few weeks. The significant changes in this measurable “basal community production rate” can readily be observed if important effects are produced.',
        'These assays revealed that corals and the algae growing in the skeleton of the coral colony live together to their mutual advantage (symbiosis). Although observations of skeletal algae were made previously, this is the first study to determine quantitatively the amount of algae present in different species of corals. A very definite ratio between algal (plant) and coral (animal) tissue was found. The amount of plant tissue was greater than the amount of animal tissue per unit of surface area. This marked development of symbiosis between plant and animal components achieves excellent “conservation” and cyclic use and reuse of critical nutrients. This enables the coral reef to achieve a high rate of productivity in waters which in themselves have a very low fertility.',
        'These results are significant in physiological applications to other plants and animals which man requires for food. They provide a fertile field for scientific study of nuclear radiation effects on the “metabolism” of highly integrated systems.',
        'The biological assays will be extended for related research investigations carried on by the AEC. College or university biologists, and the Commission contractors interested in radiological data of this type are invited to participate, using the facilities of the Marine Biological Laboratory.'
      ]}
    ]
  },
  {
    id: 'bugher1952',
    title: 'Permanent Biology Program for the Eniwetok Area',
    short: 'Bugher to Wilbur, AEC memorandum (1952)',
    date: '22 September 1952',
    rights: 'US government work · scan via RMI Nuclear Documents (ICAAD)',
    pages: [
      {pdf: 1, printed: 'p. 1', src: src('bugher1952', 1)},
      {pdf: 2, printed: 'p. 2', src: src('bugher1952', 2)}
    ],
    transcription: [
      {page: 1, heading: 'p. 1', paragraphs: [
        'All of these persons felt that the AEC would be rendering a very considerable service in making the Eniwetok area available to biologists. …',
        '2. Studies of coral reef formation could be profitably studied both by following growth of corals marked by fission products and by geological studies. …',
        '4. Continuing studies of the distribution and fate of fission products are desirable in their own right and to provide training for individuals in this general line of study.'
      ]}
    ]
  }
];

export const docById = (id: string) => DOCS.find(d => d.id === id)!;
