// lib/productdetail.ts
// Source of truth: product.md (Catalogue Rev-6) + industry-standard HVAC engineering context.
// Drives /products listing and /products/[slug] detail pages.

export interface CatalogueSpecRow {
  size: string;
  airflow?: string;
  voltage?: string;
  power?: string;
  rpm?: string;
  sound?: string;
  weight?: string;
}

export interface CatalogueDuctVariant {
  type: string;
  sizeRange: string;
  length: string;
}

export interface CatalogueFAQ {
  q: string;
  a: string;
}

export interface CatalogueProduct {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  /** Long-form overview paragraph for the detail page. */
  overview?: string;
  applications?: string[];
  capacity?: string;
  staticPressure?: string;
  features?: string[];
  /** Why this product, in plain engineering language. */
  whyChooseThis?: string[];
  /** Materials, gauge, balancing, motor type. */
  constructionDetails?: string[];
  /** How to choose the right size / variant. */
  selectionGuide?: string[];
  /** Site-installation notes that affect performance and life. */
  installationNotes?: string[];
  /** Service intervals, wear parts, common maintenance. */
  maintenanceNotes?: string[];
  /** Industries / verticals where this product is typically deployed. */
  industries?: string[];
  /** Performance / construction standards the design follows. */
  standards?: string[];
  /** Buyer-selectable build options / variants (e.g. Spark-resistant, Galvanised, Powder-coated). */
  configurations?: string[];
  /** Common buyer questions. */
  faqs?: CatalogueFAQ[];
  specTable?: CatalogueSpecRow[];
  ductVariants?: CatalogueDuctVariant[];
  specSheet?: { label: string; value: string }[];
  image: string;
  images?: string[];
  notes?: string[];
}

export interface CatalogueCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  /** Order index from the printed catalogue (1-10) */
  order: number;
  /** Category-level intro for buyers landing on the catalogue. */
  description?: string;
  products: CatalogueProduct[];
}

export const CATALOGUE: CatalogueCategory[] = [
  // ─── 1. CENTRIFUGAL FANS ───────────────────────────────────────
  {
    id: 'cat-centrifugal',
    slug: 'centrifugal-fans',
    name: 'Centrifugal Fans',
    tagline: 'High-pressure ducted ventilation for supply, exhaust and pressurisation.',
    order: 1,
    description:
      'Centrifugal fans use a rotating impeller to accelerate air radially, then convert that velocity into static pressure. They are the backbone of ducted HVAC: capable of overcoming high system resistance from filters, coils and long duct runs while staying efficient and quiet. Backward-inclined and backward-curved blades — used across this range — are non-overloading and operate at higher efficiencies than forward-curved or radial designs.',
    products: [
      {
        id: 'p-1-1',
        slug: 'direct-drive-duct-cabinet-inline-fan',
        name: 'Direct Drive Duct Cabinet Inline Fan',
        shortDescription:
          'Compact direct-drive cabinet fan with backward-inclined aluminium impeller for clean-air supply and general ventilation.',
        overview:
          'A direct-drive inline cabinet fan houses a backward-inclined centrifugal impeller in a square sheet-metal cabinet, with the motor coupled directly to the impeller shaft. Eliminating belts, pulleys and bearings reduces maintenance to almost zero, lowers the noise floor, and keeps overall depth shallow enough to drop into a duct run or fit above a false ceiling. The aviation-grade aluminium impeller keeps inertia low, allowing the motor to come up to speed quickly without large starting currents.',
        applications: ['Supply', 'Exhaust', 'Clean Air', 'General Ventilation'],
        capacity: '850 CMH to 10,000 CMH',
        staticPressure: 'up to 30 mmwg',
        features: [
          'Galvanised housing construction',
          'Backward-inclined, aviation-grade aluminium impeller',
          'Low power consumption / low sound level',
          'Compact size, installation flexibility, ease of service',
          'Available in single and three phase',
          'Optional: air pre-filter and 25 mm insulated housing',
        ],
        whyChooseThis: [
          'No belts, no pulleys — virtually maintenance-free drive train',
          'Backward-inclined blades are non-overloading: motor will not overload if system resistance increases',
          'Statically and dynamically balanced impeller for low vibration and longer bearing life',
          'Square cabinet form factor sits flat against duct flanges with no transition pieces required',
        ],
        constructionDetails: [
          'High-GSM galvanised steel cabinet, powder-coated for corrosion resistance',
          'Aviation-grade aluminium impeller — light, rigid, corrosion-resistant',
          'IP 55-rated TEFC induction motor with sealed ball bearings (single or three phase)',
          'Inlet cone matched to impeller eye for stable, low-loss airflow',
          'Optional 25 mm acoustic-thermal liner for noise / heat-loss reduction',
          'Matching rectangular flanges on inlet and outlet for direct duct mating',
        ],
        selectionGuide: [
          'Calculate required airflow (CMH) from room volume × air-change rate',
          'Estimate total static pressure: filters + coils + duct friction + outlet loss',
          'Add 10–15% safety margin to account for filter loading over service life',
          'Match the fan-curve operating point so the fan runs near its peak-efficiency zone',
        ],
        installationNotes: [
          'Mount on vibration-isolating spring or rubber pads to prevent structure-borne noise',
          'Use flexible duct connectors at both inlet and outlet to decouple fan vibration from ducting',
          'Provide minimum 1× duct diameter of straight duct upstream of the inlet for stable flow',
          'Service-clearance: minimum 600 mm on the motor side for routine inspection and removal',
        ],
        maintenanceNotes: [
          'Inspect impeller and inlet cone every 6 months for dust build-up — clean with soft brush',
          'Check motor bearings annually; lubricate if greasable',
          'Tighten impeller hub fasteners on first commissioning and again at 3 months',
        ],
        industries: ['Commercial offices', 'Hotels', 'Hospitals', 'Pharma cleanrooms', 'Cinemas', 'Data centres', 'Education'],
        standards: [
          'Performance tested in line with AMCA 210 / ISO 5801 practice',
          'Galvanised steel to IS 277 / equivalent',
          'Motor designed to IE2/IE3 efficiency class on request',
        ],
        faqs: [
          {
            q: 'When should I pick direct-drive over belt-driven?',
            a: 'Direct-drive is best when system static pressure is below ~30 mmwg, when low maintenance matters, and when the duty is continuous. Belt-driven becomes preferable above ~40 mmwg or where speed change via pulley swap is desired.',
          },
          {
            q: 'Is the 25 mm insulated housing worth it?',
            a: 'Yes for any installation near occupied space, conference rooms, or bedrooms — it cuts breakout noise by 4–8 dBA depending on frequency. It also reduces thermal losses for conditioned-air supply runs.',
          },
          {
            q: 'Can this run continuously 24/7?',
            a: 'Yes. The TEFC motor is rated S1 (continuous duty) and the bearings are sized for L10 ≥ 40,000 hours under typical load.',
          },
        ],
        image: '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
        images: [
           '/products/belt-driven-cabinet-fans/belt-driven-cabinet.jpg',
          '/products/belt-driven-cabinet-fans/belt-driven-cabinet-2.jpg',
           
        ],
      },
      {
        id: 'p-1-2',
        slug: 'belt-driven-cabinet-fan',
        name: 'Belt Driven Cabinet Fans',
        shortDescription:
          'Heavy-duty belt-driven cabinet fan for kitchen, smoke-spill and pressurisation duty — indoor and outdoor.',
        overview:
          'When system resistance climbs above 30 mmwg or when on-site speed changes are needed, the belt-driven cabinet fan steps in. A separately-mounted motor drives the impeller through V-belt(s) and adjustable pulleys, so the same fan can be re-tuned for a different airflow simply by swapping a sheave — no VFD required. The split motor compartment also means the motor never sees the conveyed air, making this design well-suited to kitchen, smoke and contaminated-air duty.',
        applications: ['Supply', 'Exhaust', 'Pressurisation', 'Kitchen', 'Smoke Spill'],
        capacity: '5,000 CMH to 25,000 CMH',
        staticPressure: 'up to 70 mmwg',
        features: [
          'Indoor and outdoor use',
          'Easy installation in ducted and non-ducted systems',
        ],
        whyChooseThis: [
          'Speed adjustment by pulley change — no VFD needed',
          'Motor isolated from the air stream, ideal for kitchen, smoke and contaminated air',
          'Higher static-pressure capability than direct-drive cabinet fans',
          'Outdoor-rated weatherproof variant available',
        ],
        constructionDetails: [
          'Heavy-gauge galvanised steel cabinet with bolted access panels',
          'Backward-inclined, statically + dynamically balanced steel or aluminium impeller',
          'Cast-iron pillow-block bearings rated L10 ≥ 60,000 hours',
          'Adjustable taper-lock pulleys and matched V-belt set',
          'IP 55 TEFC motor mounted on adjustable slide rails for belt-tension setting',
        ],
        selectionGuide: [
          'Use this design when total static pressure is ≥ 40 mmwg or duty is dirty/hot',
          'Select pulley ratio so the fan runs at the rpm matching your design point on its curve',
          'Allow access on the drive side for belt inspection and replacement',
          'For smoke-spill duty, specify a high-temperature variant rated for the building code',
        ],
        installationNotes: [
          'Mount on a concrete inertia base with spring isolators for vibration-sensitive sites',
          'Always install flexible duct connectors at inlet and outlet',
          'Set belt tension so a thumb-press deflects the belt by ~12 mm at midpoint of the span',
          'Check pulley alignment with a straight-edge — misalignment kills belts in weeks',
        ],
        maintenanceNotes: [
          'Inspect belts every 3 months; replace as a matched set when worn',
          'Re-tension belts after first 24 hours of running',
          'Lubricate pillow-block bearings every 6 months with appropriate grease',
        ],
        industries: ['Commercial kitchens', 'Hotels', 'Industrial plants', 'Warehouses', 'Car parks', 'Smoke management systems'],
        standards: [
          'Designed in line with AMCA 99 fan classifications',
          'Smoke-spill variants follow IS 16182 / NBC 2016 guidance where applicable',
          'V-belt drive selection per IS 3142',
        ],
        faqs: [
          {
            q: 'How often do belts need replacing?',
            a: 'Typical V-belt life is 18–36 months under continuous duty, depending on tension, alignment and load. We recommend a yearly inspection and proactive replacement at the first sign of glazing or cracks.',
          },
          {
            q: 'Can the same cabinet handle both supply and smoke-spill duty?',
            a: 'Only if specified up front. Smoke-spill fans need motor and bearings rated for high temperatures (typically 250–300 °C for set durations) — call this out before order.',
          },
        ],
        image: '/products/centrifugal-inline-cubic-fans/direct-drive-cubic.png',
        images: [
           '/products/centrifugal-inline-cubic-fans/direct-drive-cubic.png',
          // '/products/centrifugal-inline-cubic-fans/centrifugal-blower.jpg',
        ],
      },
      {
        id: 'p-1-3',
        slug: 'power-roof-ventilator-upblast',
        name: 'Power Roof Ventilators (Upblast Fan)',
        shortDescription:
          'Roof-mounted upblast ventilator with rhombus hood, weather-tight curb cap and aluminium impeller.',
        overview:
          'A power roof ventilator (PRV) discharges contaminated indoor air vertically away from the building so it does not get re-entrained into outdoor-air intakes or stick to the roof. The upblast configuration — exhaust pointed straight up — is the building-code default for kitchen and grease exhaust because it lifts plumes well above the roofline. Our PRVs use a rhombus-shaped hood with side cooling fins, so the motor stays in the cool, dry, free-air space rather than sitting in the contaminated air stream.',
        capacity: '850 CMH to 10,000 CMH',
        staticPressure: 'up to 30 mmwg',
        features: [
          'Rhombus hood — withstands high-speed wind, with cooling fins for motor longevity',
          'Curb cap — single-piece, weather-tight, with punched mounting holes',
          'Galvanised housing construction',
          'Backward-inclined aluminium impeller',
          'Low power consumption / low sound level',
          'Available in single and three phase',
        ],
        whyChooseThis: [
          'Vertical discharge prevents recirculation through fresh-air intakes — building-code preferred for contaminated exhaust',
          'Motor in the airstream-free zone runs cooler and lasts longer',
          'Single-piece weather-tight curb cap eliminates roof leaks',
          'Hood withstands high wind speed without lift-off',
        ],
        constructionDetails: [
          'Aluminium hood and curb cap — corrosion-resistant for outdoor service',
          'Rhombus-profile hood for low wind loading and structural rigidity',
          'Galvanised steel housing with continuous welded seams',
          'Backward-inclined aluminium impeller with hub-mounted balance plugs',
          'Birdscreen on hood discharge as standard',
        ],
        selectionGuide: [
          'Calculate exhaust airflow per code (e.g. 0.50 m/s capture velocity over hood face for kitchen Type-I hoods)',
          'Add static pressure for grease filter, duct run, and discharge resistance',
          'Provide minimum 3 m horizontal clearance from any fresh-air intake on the same roof',
          'For grease duty, specify spark-resistant construction and easy clean-out access',
        ],
        installationNotes: [
          'Mount on a code-compliant pre-fabricated curb (minimum 200 mm above roof finish)',
          'Seal the curb-to-deck joint with continuous flashing — no fasteners through the field of the membrane',
          'Wire through a gas-tight conduit; provide a service disconnect within sight of the unit',
          'Allow safe roof access — most service is done in place',
        ],
        maintenanceNotes: [
          'Wash hood and impeller every 6 months for grease applications, annually otherwise',
          'Inspect curb gasket and flashing annually for weather seal integrity',
          'Tighten all hood-to-curb fasteners after the first storm season',
        ],
        industries: ['Commercial kitchens', 'Restaurants & food courts', 'Industrial process exhaust', 'Laboratories', 'Hotels'],
        standards: [
          'Designed in line with AMCA 99 / NFPA 96 (kitchen exhaust) where applicable',
          'Curb construction per SMACNA HVAC roof-curb guidance',
        ],
        faqs: [
          {
            q: 'Why upblast and not horizontal discharge?',
            a: 'Upblast lifts the contaminated plume well above the roofline, reducing the chance of re-entrainment into outside-air intakes. Most building codes mandate upblast for grease and lab exhaust.',
          },
          {
            q: 'Can the hood be opened for cleaning?',
            a: 'Yes — the hood is hinged and held by latches so the impeller is fully accessible without removing the unit from the curb.',
          },
        ],
        image: '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator-upblast.png',
        images: [
          '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator-upblast.png',
          '/products/power-roof-ventilators-upblast-fan/power-roof-ventilator.jpg',
          // '/products/power-roof-ventilators-upblast-fan/upblast-fan-2.jpg',
        ],
      },
      {
        id: 'p-1-4',
        slug: 'centrifugal-single-width-fan',
        name: 'Centrifugal Single Width Fan (SISW)',
        shortDescription:
          'Heavy-duty SISW centrifugal blower for commercial and industrial supply, exhaust, smoke-spill, dust collection, fume and grain-drying duty — indoor and outdoor.',
        overview:
          'The Single-Inlet Single-Width (SISW / SWSI) centrifugal blower is the workhorse of high-static, high-flow industrial ventilation. A single inlet feeds one impeller, producing a clean low-turbulence flow profile and supporting very high pressures — making it the right choice for filter banks, long duct runs, smoke-spill ducts, dust collectors, fume scrubbers and grain dryers where smaller cabinet fans run out of pressure. Available in indoor and outdoor weatherproof builds, with spark-resistant construction (AMCA Type A/B/C) on request for hazardous-service duty.',
        applications: [
          'General supply / return / exhaust systems',
          'Emergency smoke exhaust (buildings, car parks, etc.)',
          'Restaurant grease exhaust',
          'Stairwell pressurisation',
          'Dust collectors',
          'Spark-resistant fume exhaust',
          'Corrosive fume exhaust',
          'Grain drying',
          'Commercial & industrial — indoor and outdoor',
        ],
        capacity: '5,000 CMH to 25,000 CMH',
        staticPressure: 'up to 70 mmwg',
        features: [
          'High-pressure capacity for larger ducted systems and filtration',
          'Heavy-duty high-GSM galvanised housing construction',
          'Statically and dynamically balanced impeller',
          'Low power consumption',
          'Three-phase only',
          'Indoor and outdoor (weatherproof) builds available',
        ],
        configurations: [
          'Spark-resistant construction (AMCA Type A / B / C)',
          'Galvanised construction (standard)',
          'Powder-coated finish for corrosive / coastal environments',
          'Stainless-steel impeller / housing for chemical fume duty',
          'Inlet vane damper or VFD-ready motor for airflow regulation',
        ],
        whyChooseThis: [
          'Covers the widest application range in the catalogue — supply, smoke-spill, dust, fume, grain drying',
          'High static-pressure capacity ideal for filter banks, scrubbers and long ducts',
          'Single inlet means cleaner flow path and fewer bearing assemblies than DIDW',
          'Heavy-gauge construction stands up to industrial duty without panel rumble',
          'Spark-resistant variant available for hazardous-service / fume duty',
          'Discharge orientation selectable: top horizontal, top angular, bottom, etc.',
        ],
        constructionDetails: [
          'Heavy-gauge GI scroll housing with internal stiffeners',
          'Statically + dynamically balanced steel impeller (G6.3 grade or better)',
          'Cast-iron pillow-block bearings, regreasable',
          'Three-phase TEFC motor with class F insulation',
          'Inlet cone matched to impeller for high volumetric efficiency',
        ],
        selectionGuide: [
          'Specify required airflow at design static pressure — pick fan from the published curve',
          'For filtered systems, design at the dirty-filter pressure to avoid undersized motor',
          'Choose discharge orientation matching duct path to avoid extra elbows',
          'Specify Arrangement 1, 4 or 9 per AMCA 99 based on motor mounting preference',
        ],
        installationNotes: [
          'Always mount on an inertia base or spring isolators for clean rooms / sensitive sites',
          'Provide flexible duct connectors at both inlet and outlet',
          'Allow at least 3× equivalent diameter of straight duct on the discharge for stable flow',
          'Match motor frame size to bearing supports — never over-belt the design',
        ],
        maintenanceNotes: [
          'Lubricate pillow-block bearings every 6 months',
          'Inspect impeller for build-up — process dust can unbalance the wheel',
          'Re-balance the wheel if vibration exceeds 7 mm/s RMS at the bearing housing',
        ],
        industries: ['Pharma plants', 'Process industries', 'Filtration / dust collection', 'Paint booths', 'Power plants', 'Dryers'],
        standards: [
          'AMCA 99 fan arrangement / classification',
          'Performance tested in line with AMCA 210 / ISO 5801',
          'Balance grade per ISO 1940 G6.3',
        ],
        faqs: [
          {
            q: 'Single-width vs double-width?',
            a: 'Single-width handles up to ~25,000 CMH per fan and is simpler to maintain. Double-width (DIDW) doubles the airflow with two inlets sharing the same shaft — useful when you need >25,000 CMH but does not increase the pressure.',
          },
          {
            q: 'What is the airflow regulation method?',
            a: 'Three options: VFD on the motor (best part-load efficiency), inlet vane dampers (good for occasional turn-down), or outlet damper (cheapest, lowest efficiency).',
          },
        ],
        image: '/products/centrifugal-inline-cubic-fans/centrifugal-single-width-fan.png',
        images: [
          '/products/centrifugal-inline-cubic-fans/centrifugal-single-width-fan.png',
          // '/products/centrifugal-inline-cubic-fans/centrifugal-single-width.jpg',
        ],
      },
      {
        id: 'p-1-5',
        slug: 'circular-inline-fan',
        name: 'Circular Inline Fan',
        shortDescription:
          'External-rotor inline duct fan with backward-curved impeller and overheat-protected motor.',
        overview:
          'A circular inline (mixed-flow) fan combines the airflow profile of an axial fan with the pressure capability of a centrifugal — all packed into a tube the same diameter as the duct it sits in. The motor lives inside the impeller hub (external-rotor design), so the fan is barely longer than a duct coupling and can be dropped into any straight run. Best suited to small-to-medium supply and exhaust loops where a full cabinet fan would be overkill.',
        applications: ['Supply', 'Exhaust'],
        capacity: 'up to 1,880 m³/h (≈ 1,100 CFM)',
        features: [
          'Dynamically balanced backward-curved impeller',
          'Direct-drive external rotor motor with ball bearing',
          'Motor with overheat protection and auto-restart',
          'Mounting brackets supplied as standard',
          'Optional pre-fitted hum-free speed controller',
        ],
        whyChooseThis: [
          'Same diameter as the duct — fits into any straight run with no transitions',
          'Motor overheat protection with auto-restart — survives blocked-inlet faults',
          'External-rotor design = fewer bearings and lower noise floor',
          'Easy retrofit to existing duct systems',
        ],
        constructionDetails: [
          'Galvanised steel body with bolted service flanges',
          'Backward-curved impeller, dynamically balanced for low vibration',
          'External-rotor motor with sealed ball bearings — IP 44 standard',
          'Built-in thermal contact for over-temperature shutdown',
          'Mounting brackets and rubber isolators included',
        ],
        selectionGuide: [
          'Best for small-to-medium loops up to ~1,800 CMH / 1,100 CFM',
          'Pick duct diameter first; the fan slots straight into that size',
          'Add the optional speed controller if duty is intermittent or noise-sensitive',
        ],
        installationNotes: [
          'Hang from threaded rod with the supplied rubber isolators — never rigid-mount',
          'Maintain 1× diameter of straight duct upstream for stable flow',
          'Wire through a service-isolator switch within sight of the fan',
        ],
        maintenanceNotes: [
          'Wipe the impeller and hub once a year — dust accumulates on the hub face',
          'No bearing lubrication required — sealed for life',
        ],
        industries: ['Hotels', 'Offices', 'Restaurants', 'Hospitals', 'Residential MEP'],
        standards: [
          'IP 44 motor protection per IEC 60529',
          'Performance tested in line with ISO 5801 chamber method',
        ],
        faqs: [
          {
            q: 'How is this different from a tube axial fan?',
            a: 'A tube axial uses a straight axial impeller and produces lower static pressure. A circular inline uses a backward-curved (mixed-flow) impeller and can develop two to three times the static pressure for the same diameter.',
          },
          {
            q: 'Does the speed controller introduce hum?',
            a: 'No — we use solid-state hum-free speed controllers tuned for external-rotor motors. Stepless from ~30% to 100%.',
          },
        ],
        image: 
        '/products/centrifugal-inline-cubic-fans/circular-inline-fan.jpg',
        images: [

          '/products/centrifugal-inline-cubic-fans/direct-drive-inline.jpg',
          '/products/centrifugal-inline-cubic-fans/circular-inline-fan.jpg',
    ],
        },
    ],
  },

  // ─── 2. CENTRIFUGAL FUME EXHAUST FANS ───────────────────────────────────────
  {
    id: 'cat-fume-exhaust',
    slug: 'centrifugal-fume-exhaust',
    name: 'Centrifugal Fume Exhaust Fans',
    tagline: 'Built for smoke, grease-laden, humid and hot air up to 120 °C.',
    order: 2,
    description:
      'Fume exhaust fans handle the dirtiest, hottest, wettest air a building produces — restaurant kitchens, laundries, lab fume hoods, plating tanks. They survive what would destroy a general-ventilation fan: greasy condensate that pools on the impeller, humid air that corrodes mild steel, and continuous temperatures that anneal lower-grade aluminium. The design priorities are different too: spark-resistant construction, easy access for cleanout, and motors that never see the air stream.',
    products: [
      {
        id: 'p-2-1',
        slug: 'kitchen-laundry-fan',
        name: 'Kitchen / Laundry Fan',
        shortDescription:
          'Heavy-duty fume exhaust fan for kitchens and laundries — handles hot, humid, grease-laden air up to 120 °C.',
        overview:
          'This is a purpose-built fume fan for the hottest, dirtiest exhaust loads a commercial building produces. The 120 °C-rated impeller and shaft seal hold up under sustained restaurant-kitchen and laundry duty, where lesser fans glaze, warp, or simply fail within a season. Aviation-grade aluminium resists the corrosive condensate that grease and steam produce, and the non-overloading impeller protects the motor when filters load up between cleanings.',
        applications: ['Smoke', 'Grease-laden air', 'Humid & hot air up to 120 °C'],
        capacity: '850 CMH to 25,000 CMH',
        staticPressure: 'up to 70 mmwg',
        features: [
          'Galvanised housing construction',
          'Backward-inclined, non-overloading, balanced aviation-grade aluminium impeller',
          'Low power consumption / low sound level',
          'Installation flexibility / ease of service',
          'Available in single and three phase',
        ],
        whyChooseThis: [
          '120 °C continuous rating — survives kitchen and laundry exhaust without de-rating',
          'Aviation-grade aluminium impeller resists grease- and humidity-induced corrosion',
          'Non-overloading impeller protects the motor as grease filters load',
          'Wide capacity range covers everything from a single-station kitchen to a 25,000 CMH banquet hall',
        ],
        constructionDetails: [
          'Heavy-gauge galvanised steel scroll with welded seams',
          'Backward-inclined, statically + dynamically balanced aluminium impeller',
          'Shaft seal rated for hot, humid, grease-laden service',
          'TEFC motor mounted out of the airstream',
          'Bolted side access for impeller and scroll cleanout',
        ],
        selectionGuide: [
          'Pick airflow based on hood face capture velocity (typically 0.5 m/s for kitchens)',
          'Add static pressure for grease filter, duct run and discharge stack',
          'For grease duty, always include an upstream baffle filter and a clean-out tee on the duct',
          'Specify spark-resistant construction (Type A/B/C per AMCA 99) where local code requires',
        ],
        installationNotes: [
          'Always slope the duct toward a drain point or grease tray — condensate will pool',
          'Use a hinged access door upstream of the fan inlet for cleaning',
          'Discharge well clear of any fresh-air intake (minimum 3 m horizontal)',
          'Provide a wash-down pan under the fan if local code requires',
        ],
        maintenanceNotes: [
          'Clean impeller and scroll every 3 months for kitchen duty (more often for high-volume)',
          'Inspect shaft seal annually; replace if it shows weeping',
          'Replace grease filters monthly to keep system pressure stable',
        ],
        industries: ['Restaurants', 'Hotel kitchens', 'Hospital kitchens', 'Industrial laundries', 'Cafeterias', 'Bakeries'],
        standards: [
          'Designed in line with NFPA 96 / IS 16182 kitchen exhaust guidance where applicable',
          'AMCA 99 spark-resistant construction available on request',
        ],
        faqs: [
          {
            q: 'Can it run continuously above 120 °C?',
            a: 'No — 120 °C is the continuous rating. Brief excursions are tolerated, but sustained operation above the rating will damage the shaft seal and motor bearings. For higher temperatures, specify a high-temp variant up front.',
          },
          {
            q: 'How often does the impeller need cleaning?',
            a: 'Quarterly is typical for restaurant kitchen exhaust; monthly for very greasy duties (frying lines, charbroil). A clean impeller can lose 20–30% of its airflow capacity in a few months without service.',
          },
        ],
        image: '/products/kitchen-exhaust-fan/kitchen-fume-exhaust.png',
        images: [
          // '/products/kitchen-exhaust-fan/kitchen-laundry-fan.jpg',
          '/products/kitchen-exhaust-fan/kitchen-fume-exhaust.png',
          // '/products/kitchen-exhaust-fan/kitchen-exhaust-2.jpg',
        ],
      },
    ],
  },

  // ─── 3. AXIAL FLOW FANS ───────────────────────────────────────
  {
    id: 'cat-axial',
    slug: 'axial-flow-fans',
    name: 'Axial Flow Fans',
    tagline:
      'High-flow, low-resistance ventilation for factories, warehouses, agriculture and data centres.',
    order: 3,
    description:
      'Axial fans push air parallel to the shaft, like a propeller. They move very large volumes against modest static pressure — the right choice when you need to ventilate an open volume rather than push through a duct system. Wall-mount, propeller and tube-axial designs cover the spectrum from the highest-volume agricultural fans down to compact in-duct versions.',
    products: [
      {
        id: 'p-3-1',
        slug: 'direct-drive-wall-mount-fan',
        name: 'Direct Drive Wall Mount Fans',
        shortDescription:
          'Direct-drive wall-mount axial fan with inlet/outlet guards for industrial environments and data centres.',
        overview:
          'A direct-drive wall-mount axial fan is the simplest, most reliable way to move large volumes of air through a wall — the motor sits on the impeller shaft, the impeller has no belts or pulleys to fail, and the whole assembly bolts into a square wall opening in under an hour. Use it for general-purpose factory, warehouse, car-park and data-centre ventilation where airflow matters more than static pressure.',
        applications: ['Factories', 'Warehouses', 'Car parks', 'Industrial environments', 'Data centres'],
        features: [
          'Low power consumption',
          'Inlet and outlet guards for 100% safe operation',
        ],
        whyChooseThis: [
          'No belts, no pulleys, no bearing assemblies — only the motor needs service',
          'Inlet and outlet guards protect personnel and meet typical safety codes',
          'Two sizes (500 / 630 mm) cover most factory bay spacings',
          'Reverses for supply or exhaust simply by reversing motor leads (3-phase)',
        ],
        constructionDetails: [
          'Heavy-gauge GI orifice plate with welded reinforcement',
          'Aluminium-alloy impeller with adjustable-pitch blades on request',
          'IP 55 TEFC motor with class F insulation',
          'Galvanised inlet/outlet guards rated to ISO 13852 finger-protection',
          'Mounting bracket suits both wall and structural-frame mounting',
        ],
        selectionGuide: [
          'Pick by required CMH — open-volume ventilation, not duct work',
          'Provide one fan per ~600 m² of factory floor for typical air-change requirement',
          'Match supply and exhaust opening areas to avoid drawing the building into negative pressure',
        ],
        installationNotes: [
          'Mount at 2.5 m–3.0 m above floor for personnel comfort and safety',
          'Provide an equal-area inlet shutter / louver on the opposite wall',
          'Wire through a service-isolator within sight of the fan',
          'For car parks, follow local CO-control sequencing',
        ],
        maintenanceNotes: [
          'Wash impeller annually with mild detergent — dust unbalances the wheel',
          'Inspect motor bearings every 6 months in dusty environments',
          'Tighten guard fasteners after first month of running',
        ],
        industries: ['Factories', 'Warehouses', 'Car parks', 'Data centres', 'Sports halls', 'Agriculture'],
        standards: [
          'IP 55 motor protection per IEC 60529',
          'Guards designed to ISO 13852 / IS 4691 personnel safety',
        ],
        specTable: [
          { size: '630', airflow: '20,500 CMH', voltage: '220 / 415 V', power: '1,500 W', rpm: '1,450', sound: '< 85 dBA' },
          { size: '500', airflow: '8,500 CMH', voltage: '220 / 415 V', power: '750 W', rpm: '1,450', sound: '< 85 dBA' },
        ],
        faqs: [
          {
            q: 'Can it be used for ducted systems?',
            a: 'Only for very short ducts (< 3 m). Direct-drive wall-mounts are designed for free-air or near-free-air work; ducting them adds static pressure that quickly puts them outside their efficient operating zone.',
          },
          {
            q: 'How loud are they?',
            a: 'The 500 and 630 are rated under 85 dBA at 1 m. Add a discharge guard / mesh cone if you need to bring it down further.',
          },
        ],
        image: '/products/axial-wall-exhaust-supply-fans/Axial_Wall.webp',
        images: [
          // '/products/axial-wall-exhaust-supply-fans/direct-drive-wall-mount.jpg',
          '/products/axial-wall-exhaust-supply-fans/Axial_Wall.webp',
        ],
      },
      {
        id: 'p-3-2',
        slug: 'belt-driven-wall-mount-fan',
        name: 'Belt Driven Wall Mount Fans',
        shortDescription:
          'Large-diameter belt-driven wall-mount fan for high-volume industrial and agricultural ventilation.',
        overview:
          'When you need to move tens of thousands of cubic metres per hour through a wall — the airflow that keeps a poultry house, dairy or large industrial bay liveable — the belt-driven wall-mount fan is the standard tool. Larger diameters spin slower and quieter than direct-drive equivalents while pushing more air, and the belt drive lets you re-pulley for different speeds without replacing motors.',
        applications: ['Factories', 'Poultry farms', 'Agriculture'],
        features: [
          'Statically + dynamically balanced impeller',
          'Galvanised cone discharge for high effective airflow',
          'Cast-iron pillow-block bearings with grease nipples',
          'Adjustable belt-tension slide rails',
        ],
        whyChooseThis: [
          'Diameters up to 1530 mm move five times the air of a direct-drive at the same noise level',
          'Belt drive allows speed change without motor replacement',
          'Galvanised cone discharge boosts effective airflow by 10–15% over a flat orifice',
          'Sized down to 650 mm for small bays or partial-rate replacement',
        ],
        constructionDetails: [
          'Heavy-gauge galvanised orifice and cone',
          'Aluminium impeller with hub-mounted balance plugs',
          'Cast-iron pillow-block bearings, regreasable',
          'IP 55 TEFC motor on adjustable slide rails',
          'Galvanised back grille and pull-chain shutter (optional)',
        ],
        selectionGuide: [
          'Poultry farms: 25–35 air-changes per hour for tunnel ventilation, choose by floor area × ceiling height',
          'Industrial bays: pick by required wind-chill velocity at body level (1.5–3.0 m/s typical)',
          'Match supply / inlet area to avoid pulling the building into negative pressure',
        ],
        installationNotes: [
          'For poultry tunnel ventilation, place fans on the leeward end wall and inlets on the windward end',
          'Install a galvanised cone discharge for maximum effective airflow',
          'Set belt tension after 24 hours of running and re-check every 3 months',
        ],
        maintenanceNotes: [
          'Wash impeller and orifice every season for agricultural duty',
          'Lubricate bearings every 6 months',
          'Replace belts annually as a matched set',
        ],
        industries: ['Poultry farms', 'Dairy farms', 'Greenhouses', 'Industrial workshops', 'Foundries', 'Power-plant turbine halls'],
        standards: [
          'AMCA 99 fan classifications',
          'V-belt drive selection per IS 3142',
        ],
        specTable: [
          { size: '1530', airflow: '55,800 CMH', voltage: '220 / 415 V', power: '1,500 W', rpm: '325', sound: '< 65 dBA' },
          { size: '1380', airflow: '44,000 CMH', voltage: '220 / 415 V', power: '1,100 W', rpm: '440', sound: '< 65 dBA' },
          { size: '1220', airflow: '38,000 CMH', voltage: '220 / 415 V', power: '750 W', rpm: '450', sound: '< 65 dBA' },
          { size: '1000', airflow: '32,000 CMH', voltage: '220 / 415 V', power: '550 W', rpm: '600', sound: '< 65 dBA' },
          { size: '800', airflow: '20,000 CMH', voltage: '220 / 415 V', power: '370 W', rpm: '600', sound: '< 65 dBA' },
          { size: '650', airflow: '16,000 CMH', voltage: '220 / 415 V', power: '370 W', rpm: '600', sound: '< 65 dBA' },
        ],
        faqs: [
          {
            q: 'How many fans for a poultry house?',
            a: 'For tunnel ventilation, target 25–35 air-changes per hour. For a 12 m × 100 m × 3 m house (3,600 m³ volume), that is roughly 90,000–125,000 CMH — three to four 1380 size fans on the end wall.',
          },
          {
            q: 'Why not direct-drive at this size?',
            a: 'A 1530 direct-drive would need a slow-speed multi-pole motor that is significantly heavier and more expensive than a small motor + belt drive. Belt drive is the economical and serviceable choice at this diameter.',
          },
        ],
        image: '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount-fans.png',
        images: [
          // '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount.jpg',
          '/products/axial-wall-exhaust-supply-fans/belt-driven-wall-mount-fans.png',
        ],
      },
      {
        id: 'p-3-3',
        slug: 'propeller-fan',
        name: 'Propeller Fan',
        shortDescription:
          'High-flow, low-resistance propeller fan for supply and exhaust applications.',
        overview:
          'A propeller fan is the most airflow-per-rupee you can get — a simple impeller, a bare orifice, and a guard. It produces almost no static pressure, which means it cannot push through a duct system, but it moves enormous volumes of free air and is unbeatable for spot-cooling, smoke clearance and general workshop ventilation.',
        applications: ['Supply', 'Exhaust — high flow with low resistance'],
        whyChooseThis: [
          'Highest CMH per Watt of any fan type',
          'Compact wall-mount form, four sizes from 200 mm up to 600 mm',
          'Optional auto-shutter prevents back-draft when fan is off',
          'Reversible (3-phase) for either supply or exhaust',
        ],
        constructionDetails: [
          'Aluminium-alloy impeller with steel hub',
          'Galvanised orifice plate with welded reinforcement',
          'Galvanised front and back guards',
          'Single- or three-phase induction motor',
        ],
        selectionGuide: [
          'Use only for free-air or near-free-air mounting — < 3 mmwg static',
          'For workshop spot ventilation, pick fan diameter to match opening; do not under-size',
          'Specify the optional auto-shutter for cold-climate sites',
        ],
        installationNotes: [
          'Mount with the orifice flush to the wall — avoid recessing, which kills airflow',
          'Provide an equal-area inlet on the opposite wall',
          'Wire through a service-isolator within sight',
        ],
        maintenanceNotes: [
          'Wash impeller and orifice annually',
          'Inspect motor leads quarterly in damp environments',
        ],
        industries: ['Workshops', 'Garages', 'Light industry', 'Schools', 'Storerooms'],
        standards: [
          'Guards designed to ISO 13852 / IS 4691 finger-protection',
          'IP 44 motor protection per IEC 60529',
        ],
        specTable: [
          { size: '600', airflow: '10,500 CMH', voltage: '220 V', power: '750 W', rpm: '1,380', sound: '72 dBA' },
          { size: '450', airflow: '4,800 CMH', voltage: '220 V', power: '230 W', rpm: '1,350', sound: '64 dBA' },
          { size: '300', airflow: '2,100 CMH', voltage: '220 V', power: '125 W', rpm: '2,400', sound: '58 dBA' },
          { size: '200', airflow: '900 CMH', voltage: '220 V', power: '50 W', rpm: '2,450', sound: '49 dBA' },
        ],
        faqs: [
          {
            q: 'Why is the small (200 mm) fan louder per CMH?',
            a: 'Smaller diameter = higher rpm to keep tip speed up, and rpm is the dominant noise driver. If quiet is a priority, prefer a larger, slower fan moving the same air.',
          },
          {
            q: 'Can I duct a propeller fan?',
            a: 'No more than 1–2 m of straight duct, and even then expect 30–40% airflow loss. For ducted work, choose a tube-axial or circular inline.',
          },
        ],
        image: '/products/popular fan/Propeller-Fan.jpg',
        images: [
          '/products/popular fan/Propeller-Fan.jpg',
          '/products/axial-wall-exhaust-supply-fans/propeller-fan.jpg',
          // '/products/axial-wall-exhaust-supply-fans/propeller-fan-2.jpg',
        ],
      },
    ],
  },

  // ─── 4. TUBE AXIAL FANS ───────────────────────────────────────
  {
    id: 'cat-tube-axial',
    slug: 'tube-axial-fans',
    name: 'Tube Axial Fans',
    tagline: 'Direct-drive tube axial fans for ducted and non-ducted systems.',
    order: 4,
    description:
      'A tube axial is an axial impeller mounted in a length of round tube — the same diameter as the duct it sits in. It develops more static pressure than a propeller, fits into duct runs without transitions, and works equally well indoor or outdoor. The standard workhorse for car-park ventilation, tunnel ventilation, large smoke-spill systems and big plenum applications.',
    products: [
      {
        id: 'p-4-1',
        slug: 'direct-drive-tube-axial-fan',
        name: 'Direct Drive Tube Axial Fan',
        shortDescription:
          'Indoor / outdoor tube axial fan, 315–1,600 mm diameter, up to 100,000 CFM.',
        overview:
          'Direct-drive tube-axial fans are the standard for ducted axial work — car-park CO control, tunnel ventilation, smoke-spill, plenum boosters. The tube houses the impeller and the motor in line with the duct, with no offset and no belts. Diameters from 315 mm up to 1,600 mm cover almost every application from a single duct branch to a 100,000 CFM main.',
        capacity: 'up to 100,000 CFM',
        features: [
          'Indoor and outdoor use',
          'Easy installation in ducted and non-ducted systems',
          'Size range: 315 mm to 1,600 mm diameter',
        ],
        whyChooseThis: [
          'In-line tube means no transition pieces or extra duct fittings',
          'Direct drive eliminates belts and pulleys',
          'Outdoor-rated weatherproof construction available',
          'Smoke-spill / 250 °C / 300 °C variants available for life-safety duty',
        ],
        constructionDetails: [
          'Heavy-gauge galvanised steel tube with welded mounting feet',
          'Aluminium-alloy impeller with adjustable-pitch blades on request',
          'IP 55 TEFC motor in the airstream (or out-of-airstream variant for high-temperature duty)',
          'Bolted flanges on both ends for direct duct mating',
          'Inlet bell + diffuser available to recover discharge velocity pressure',
        ],
        selectionGuide: [
          'Match the tube diameter to the duct diameter exactly — no transitions',
          'For car parks, follow local CO-control and smoke-extract codes',
          'For smoke-spill, specify the duty (e.g. 300 °C / 60 min) up front',
          'Add an inlet bell for free-air mounting; add a diffuser to recover discharge static',
        ],
        installationNotes: [
          'Hang from drop rods with anti-vibration spring isolators',
          'Provide flexible duct connectors at both ends',
          'Allow 3× duct diameter of straight duct upstream for stable flow',
          'Wire through a service-isolator and (for smoke-spill) a fire-rated cable',
        ],
        maintenanceNotes: [
          'Annual wash of impeller and tube interior',
          'Inspect motor bearings every 12 months',
          'For smoke-spill installations, perform a function test annually',
        ],
        industries: ['Car parks', 'Road tunnels', 'Metro stations', 'Industrial process', 'Smoke management', 'Power plants'],
        standards: [
          'AMCA 99 fan classifications',
          'Smoke-spill variants comply with IS 16182 / EN 12101-3 (250 / 300 °C ratings)',
          'IP 55 motor protection per IEC 60529',
        ],
        faqs: [
          {
            q: 'Is the 100,000 CFM rating per fan?',
            a: 'Yes, that is the maximum airflow at the largest diameter (1,600 mm). For very large ventilation duty, multiple fans in parallel give better redundancy than one giant fan.',
          },
          {
            q: 'Can I get a 300 °C / 60 min smoke-spill version?',
            a: 'Yes — specify the duty class up front. The motor, bearings and shaft seal are upgraded to handle the temperature, and the unit ships with a test certificate.',
          },
        ],
        image: '/products/tube-axial-fans/tube-axial-industrial.png',
        images: [
          // '/products/tube-axial-fans/tube-axial-fan.jpg',
          '/products/tube-axial-fans/tube-axial-industrial.png',
          // '/products/tube-axial-fans/axial-fan-2.jpg',
        ],
      },
    ],
  },

  // ─── 5. INSULATED BOX FANS ───────────────────────────────────────
  {
    id: 'cat-insulated-box',
    slug: 'insulated-box-fans',
    name: 'Insulated Box Fans',
    tagline: 'Silent ceiling exhaust and double-skin insulated housings for buildings where noise must stay below the occupant.',
    order: 5,
    description:
      'An insulated box fan wraps a centrifugal blower and motor in an acoustically and thermally lined cabinet — typically a double-skin sheet-metal shell with PUF or mineral-wool core. The lining cuts breakout noise so the fan can sit directly above or next to occupied space (offices, hospitals, hotels, metros) without the rumble that uninsulated cabinet fans transmit. Two formats: small in-ceiling silent exhaust units up to 1,500 CFM, and large free-standing housings up to 150,000 CMH for ducted commercial-building service.',
    products: [
      /* HIDDEN: Insulated Housing Cabinet Fan
      {
        id: 'p-5-1',
        slug: 'insulated-housing-cabinet-fan',
        name: 'Insulated Housing Cabinet Fan',
        shortDescription:
          'Large double-skin insulated housing with centrifugal blower — capacities up to 150,000 CMH and static pressures up to 1,600 Pa for commercial buildings.',
        overview:
          'The Insulated Housing Cabinet Fan is a free-standing centrifugal blower assembly built into an aluminium-profile double-skin housing with CFC-free polyurethane (PUF) foam insulation. The double-skin construction is what separates it from a basic cabinet fan: inner and outer steel panels with foam between them give simultaneous acoustic and thermal performance — the fan stays quiet at the discharge plenum, conditioned air does not lose energy through the cabinet wall, and condensation does not form on the outside surface in cold-air supply duty. Sized for the bigger end of commercial HVAC: capacities up to 150,000 CMH (88,500 CFM) at static pressures up to 1,600 Pa (6.4 in. wg).',
        applications: [
          'Supply',
          'Exhaust',
          'Offices',
          'Shopping centres',
          'Mid and high-rise buildings',
          'Hospitals and clinics',
          'Hotels',
          'Metros',
        ],
        capacity: 'up to 150,000 CMH (88,500 CFM)',
        staticPressure: 'up to 1,600 Pa (6.4 in. wg)',
        features: [
          'Aluminium profile frame with double-skin pre-coated steel panels',
          'CFC-free PUF foam insulation core for acoustic + thermal performance',
          'Inspection door with viewing glass panel for in-service checks',
          'Inlet and outlet flanges for direct duct connection',
          'Centrifugal blower with motor mounted inside the insulated housing',
          'Optional inlet filter section',
          'Robust operation at low noise levels',
        ],
        whyChooseThis: [
          'Double-skin PUF construction — quiet enough to install above or beside occupied spaces',
          'Capacity ceiling of 150,000 CMH covers floor-plate AHU duty in mid- and high-rise buildings',
          'Static pressure to 1,600 Pa handles long duct runs, filter banks and coils on the same fan',
          'Inspection door with viewing glass means routine checks happen without opening the cabinet',
          'CFC-free insulation meets modern green-building / ozone-friendly procurement requirements',
        ],
        constructionDetails: [
          'Aluminium-profile structural frame with ABS / nylon corner blocks',
          'Double-skin pre-coated galvanised steel panels — typically 25 mm or 50 mm thick',
          'CFC-free polyurethane (PUF) foam core, density 38–45 kg/m³',
          'Backward-inclined centrifugal blower, statically + dynamically balanced',
          'IP 55 TEFC motor on adjustable belt-tension slide rails',
          'Hinged inspection door with quarter-turn latches and viewing glass panel',
          'Rectangular inlet / outlet flanges with EPDM gasket for clean duct mating',
          'Anti-vibration mounts integrated into the cabinet base',
        ],
        selectionGuide: [
          'Pick airflow at the design external static pressure — confirm operating point lies in the fan\'s peak-efficiency zone',
          'Specify panel thickness based on noise target — 25 mm for general HVAC, 50 mm for hotel / hospital sites',
          'Add the inlet filter section if upstream filter housing is not part of the duct work',
          'For chilled-air supply duty, ensure cabinet is internally lined with a vapour-tight liner to prevent condensation behind the steel skin',
          'Decide drive type up front — direct-drive for sealed plug-fan style, belt-drive for traditional adjustable speed',
        ],
        installationNotes: [
          'Mount on a structural plinth or AVM (anti-vibration mount) bed — never on a slab without isolation',
          'Provide flexible duct connectors at both inlet and outlet to break vibration transmission',
          'Allow service-side clearance equal to cabinet width for filter changes and impeller pull',
          'Wire through a service-isolator within sight; for buildings with BMS, add a duty / standby contactor pair',
          'Pressure-test inlet / outlet duct connections to SMACNA Seal Class A before commissioning',
        ],
        maintenanceNotes: [
          'Inspect through the viewing glass weekly — confirms running, belt seated, no rub',
          'Open inspection door quarterly: clean impeller, check belt tension and pulley alignment',
          'Replace belts annually as a matched set',
          'Lubricate bearings every 6 months (regreasable types only)',
          'Change inlet filter when pressure drop reaches design final value',
        ],
        industries: [
          'Commercial offices',
          'Shopping centres',
          'Mid- and high-rise buildings',
          'Hospitals and clinics',
          'Hotels',
          'Metro stations',
          'Convention centres',
        ],
        standards: [
          'AMCA 99 fan classifications',
          'Performance tested in line with AMCA 210 / ISO 5801 chamber method',
          'Cabinet construction in line with EUROVENT casing-class practice',
          'PUF insulation thermal conductivity per IS 12436',
        ],
        faqs: [
          {
            q: 'How is this different from a regular cabinet fan?',
            a: 'A regular cabinet fan has a single sheet-metal skin and no insulation. This unit has two skins with rigid PUF foam between them, giving meaningful acoustic and thermal performance. The result: it can sit beside occupied space without rumble, and conditioned air does not lose temperature through the cabinet wall.',
          },
          {
            q: 'What does the viewing glass actually let me see?',
            a: 'It is a sealed glass panel in the inspection door positioned over the impeller and belt drive. You can confirm at a glance whether the fan is running, the belt is seated correctly, and there is no rubbing — without opening the door and disturbing the airstream.',
          },
          {
            q: 'Can it replace a small AHU?',
            a: 'For supply / return air handling without a coil, yes. The cabinet form factor and capacity range overlap with the air-handling end of the AHU range. If you need filtration, add the optional inlet filter section. For cooling / heating coils, an AHU is still the right product.',
          },
          {
            q: 'What is the noise level at the cabinet wall?',
            a: 'Specifics depend on operating point and panel thickness — typical figures are 4–8 dBA below an equivalent uninsulated cabinet at the same airflow. For exact data on your duty point, request the curve at quote stage.',
          },
        ],
        image: '/products/insulated-housing-cabinet-fan/insulated-housing-cabinet-fan-1.webp',
        images: [
          '/products/insulated-housing-cabinet-fan/insulated-housing-cabinet-fan-1.webp',
          '/products/insulated-housing-cabinet-fan/insulated-housing-cabinet-fan-2.webp',
          '/products/insulated-housing-cabinet-fan/insulated-housing-cabinet-fan-3.webp',
        ],
      },
      */
      {
        id: 'p-5-2',
        slug: 'sound-insulated-box-fan-vsif',
        name: 'Sound Insulated Box Fan (VSIF)',
        shortDescription:
          'Under-ceiling silent exhaust fan with grilled inlet and ducted exhaust — 200–1,500 CFM.',
        overview:
          'A silent ceiling exhaust fan replaces the noisy bath-fan-on-the-wall with something that belongs above the ceiling tile. The impeller is wrapped in 25 mm acoustic insulation and double-skin sheet metal, so the only sound that reaches the occupant is the gentle inrush at the grille. Grilled-inlet, ducted-exhaust configuration lets one unit serve multiple toilets, kitchenettes, lab benches or smoke booths through a manifold duct.',
        applications: ['Laboratory', 'Bathroom', 'Hotel', 'Cafeteria', 'Smoke Room'],
        capacity: '200 CFM to 1,500 CFM',
        features: [
          'Mounts under false ceiling',
          'Grilled inlet / ducted exhaust',
          'Very low sound / low power consumption',
        ],
        whyChooseThis: [
          'Acoustic insulation drops breakout noise 8–12 dBA versus an uninsulated fan',
          'One unit can manifold-serve multiple grilles via the discharge duct',
          'Forward-curved impeller delivers high airflow at low static',
          'Slim profile fits into standard false-ceiling cavities (≥ 400 mm)',
        ],
        constructionDetails: [
          'Double-skin sheet-metal cabinet with 25 mm acoustic-thermal liner',
          'Forward-curved impeller — high airflow at moderate static',
          'External-rotor or direct-drive motor with sealed bearings',
          'Inlet grille and rectangular discharge spigot included',
          'Hinged or removable access panel for impeller cleaning',
        ],
        selectionGuide: [
          'Pick airflow based on number of grilles × CFM/grille (typically 75 CFM per WC, 100 CFM per shower)',
          'Add static pressure for the manifold duct + grilles',
          'For cafeterias / smoke rooms, size for 10–12 air changes per hour minimum',
        ],
        installationNotes: [
          'Hang from threaded rod with anti-vibration isolators',
          'Connect inlet to grille via short duct or directly to a plenum box',
          'Provide service access via the ceiling tile — minimum 600 × 600 mm clear',
          'Wire through a service-isolator above the ceiling',
        ],
        maintenanceNotes: [
          'Wash inlet grille every 3 months',
          'Open and clean impeller annually',
          'Inspect duct connections at the spigot annually',
        ],
        industries: ['Hotels', 'Hospitals', 'Laboratories', 'Schools', 'Cafeterias', 'Office washrooms'],
        standards: [
          'Acoustic liner per IS 8183 mineral wool',
          'IP 44 motor protection per IEC 60529',
        ],
        faqs: [
          {
            q: 'Does the insulation reduce airflow?',
            a: 'No — the insulation is on the cabinet walls, outside the air path. Airflow through the impeller is unchanged.',
          },
          {
            q: 'Can it replace a noisy bath fan?',
            a: 'Yes — most hotel and hospital projects swap noisy direct-mount bath fans for a single ceiling-mounted unit serving multiple rooms via a small manifold duct.',
          },
        ],
        image: '/products/ceiling-exhaust-cabinet-fans/sound-insulated-box-fan-vsif.jpg',
        images: [
          '/products/ceiling-exhaust-cabinet-fans/sound-insulated-box-fan-vsif.jpg',
          '/products/ceiling-exhaust-cabinet-fans/silent-ceiling-exhaust.jpg',
          '/products/ceiling-exhaust-cabinet-fans/main.webp',
        ],
      },
    ],
  },

  // ─── 6. INDUSTRIAL COOLERS ───────────────────────────────────────
  {
    id: 'cat-industrial-coolers',
    slug: 'industrial-coolers',
    name: 'Industrial Coolers',
    tagline:
      'Ducted-exhaust coolers with auto-clean drain valve for industrial and commercial spaces.',
    order: 6,
    description:
      'Industrial evaporative coolers drop incoming air temperature by 6–12 °C in dry climates by passing it across water-saturated cellulose pads. They deliver real cooling at a fraction of the energy of compressor-based AC, but they need fresh-water supply, scheduled drain cycles and outdoor or partially-outdoor air to work properly. Best fit: large open factory bays, foundries, packaging halls, warehouses.',
    products: [
      {
        id: 'p-6-1',
        slug: 'industrial-cooler',
        name: 'Industrial Cooler (M-300 / M-180)',
        shortDescription:
          'Ducted-exhaust industrial cooler with auto-clean drain valve. Two models for industrial and commercial spaces.',
        overview:
          'Two-stage evaporative cooling for industrial spaces: the M-180 (18,000 CMH) covers individual workshop bays and the M-300 (30,000 CMH) handles large factory halls. Both ship with auto-clean drain valves that flush mineral-rich water before it can crystallise on the pads, which is the single biggest cause of capacity loss in poorly-maintained coolers. Ducted-exhaust configuration lets the unit sit on the roof or outside the building and discharge cool air to where it is needed.',
        applications: ['Industrial', 'Commercial'],
        features: ['Ducted exhaust', 'Auto-clean drain valve'],
        whyChooseThis: [
          'Cools at 8–10× the energy efficiency of compressor AC in dry climates',
          'Auto-clean drain prevents salt buildup — the #1 cause of capacity loss',
          'Two models cover the typical 18,000 / 30,000 CMH industrial bay sizes',
          'Outdoor / rooftop install — discharge ducted to the work area',
        ],
        constructionDetails: [
          'Galvanised + powder-coated body for outdoor service',
          'CELdek-style cellulose evaporative pads, 100 mm or 150 mm thick',
          'Cast-iron centrifugal blower with belt drive (M-300) / direct drive (M-180)',
          'Auto-clean drain valve on a programmable timer',
          'Float-controlled water inlet with overflow protection',
        ],
        selectionGuide: [
          'Pick by required CMH: ~25 air changes per hour for hot dry workshops',
          'Best results when entering air is dry (low wet-bulb) — performance falls in humid weather',
          'Provide fresh water at minimum 1 bar pressure',
          'Plan a drain run to a building waste line or floor drain',
        ],
        installationNotes: [
          'Mount on a structural roof curb or outdoor base — never inside the workspace',
          'Slope discharge ducts back to the cooler with a small drain stub',
          'Provide make-up air opening in the workspace at low level',
          'Soft water improves pad life — install a softener if water TDS > 300 ppm',
        ],
        maintenanceNotes: [
          'Replace evaporative pads every 18–24 months',
          'Clean float valve and water tank quarterly',
          'Verify auto-drain operation monthly during cooling season',
          'Drain and dry the cooler at the end of every cooling season',
        ],
        industries: ['Foundries', 'Textile mills', 'Packaging plants', 'Warehouses', 'Workshops', 'Greenhouses'],
        standards: [
          'Pad efficiency tested in line with ASHRAE 133 evaporative-cooler practice',
          'Galvanised structure to IS 277 zinc coating',
        ],
        specTable: [
          { size: 'M-300', airflow: '30,000 CMH', voltage: '415 V', power: '3,000 W', weight: '100 kg', sound: '< 80 dBA' },
          { size: 'M-180', airflow: '18,000 CMH', voltage: '220 / 415 V', power: '1,100 W', weight: '55 kg', sound: '< 70 dBA' },
        ],
        faqs: [
          {
            q: 'How much will it lower the air temperature?',
            a: 'Typically 6–12 °C drop in dry climates (low wet-bulb temperature). In humid weather the drop falls to 3–5 °C — evaporative cooling cannot lower air below the wet-bulb temperature.',
          },
          {
            q: 'How much water does it use?',
            a: 'About 25–50 litres per hour for the M-180 and 50–80 litres per hour for the M-300, depending on outdoor conditions and the auto-drain cycle.',
          },
          {
            q: 'Can it replace an air-conditioner?',
            a: 'Only in dry climates and where personnel comfort is the goal. For humidity control or process cooling, you still need refrigeration-based AC.',
          },
        ],
        image: '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg',
        images: [
          '/products/insulated-housing-cabinet-fan/industrial-cooler.jpg',
        ],
      },
    ],
  },

  // ─── 7. HVAC AIR DUCTS ───────────────────────────────────────
  {
    id: 'cat-hvac-ducts',
    slug: 'hvac-air-ducts',
    name: 'HVAC Air Ducts',
    tagline: 'Flexible ducts, air distribution products and commercial kitchen hoods.',
    order: 7,
    description:
      'Everything between the AHU and the room: flexible ducts for the last few metres into a diffuser, the full range of air distribution products (diffusers, grilles, registers, louvers) at the room itself, and dedicated grease hoods over commercial kitchen lines. Picking the right product for each segment matters — under-spec flex collapses under suction, the wrong diffuser sets the noise level for the whole space, and the wrong hood material is a fire hazard.',
    products: [
      {
        id: 'p-7-1',
        slug: 'flexible-ducts-and-duct-connectors',
        name: 'RIGID and Flexible Duct',
        shortDescription:
          'PVC and silicone-coated flexible ducts and connectors — non-insulated, insulated, semi-rigid and fire-rated variants.',
        overview:
          'Flexible duct is what gets you the last 1–3 metres from a rigid main into a diffuser. The right variant matters: non-insulated for short return runs, insulated for conditioned-air supply (avoids condensation drip), semi-rigid for higher-velocity systems where ordinary flex would collapse, and fire-rated for routes that pierce a fire compartment. PVC-coated to 85 °C handles general work; silicone-coated to 270 °C handles fume and smoke duty.',
        ductVariants: [
          { type: 'Non-insulated', sizeRange: '100–500 mm', length: '25 ft' },
          { type: 'Insulated', sizeRange: '100–450 mm', length: '25 ft' },
          { type: 'Semi-rigid', sizeRange: '75–500 mm', length: '10 ft' },
          { type: 'Fire-rated', sizeRange: '100–450 mm', length: '10 ft' },
        ],
        features: [
          'Available in PVC-coated and silicone-coated fabric',
          'Fire-retardant PVC fabric — Class “B”, suitable up to 85 °C',
          'Fireproof silicone fabric — tested up to 270 °C for 1 hour',
          'High anti-tear and tensile strength for longer life',
        ],
        whyChooseThis: [
          'Four variants cover non-insulated, insulated, semi-rigid and fire-rated duty',
          'PVC-coated for standard service / silicone-coated for hot, smoke or grease duty',
          'High anti-tear and tensile strength — longer life than commodity flex',
          'Standard 25 ft (non-insulated/insulated) and 10 ft (semi-rigid/fire-rated) cut lengths',
        ],
        constructionDetails: [
          'Spring-steel wire helix for crush resistance',
          'Inner: PVC- or silicone-coated polyester fabric',
          'Outer: aluminised PE / polyester scrim layer',
          'Insulated variants: 25 mm glass-wool blanket between liners',
        ],
        selectionGuide: [
          'Insulated: any conditioned-air run that crosses an unconditioned space (prevents condensation)',
          'Semi-rigid: high-velocity / high-suction systems, or runs subject to crush',
          'Fire-rated: any flex that crosses a fire-rated wall or shaft',
          'Keep flex runs short (≤ 3 m) and gentle — every 90° bend cuts airflow ~10%',
        ],
        installationNotes: [
          'Stretch the flex fully before clamping — a compressed flex doubles its pressure loss',
          'Use a metal collar with worm-drive clamp at every joint, sealed with mastic',
          'Avoid kinks; bends should be ≥ 1.5× duct diameter',
          'Support every 1.2 m with a 25 mm-wide saddle to prevent sagging',
        ],
        maintenanceNotes: [
          'Inspect joints annually for slippage and air leaks',
          'Replace any flex showing a crush, kink or abrasion through the outer scrim',
        ],
        industries: ['Commercial offices', 'Hotels', 'Hospitals', 'Cleanrooms', 'Restaurants (silicone variant for hood connections)'],
        standards: [
          'PVC-coated fabric — Class B fire-retardant',
          'Silicone-coated fabric — tested to 270 °C / 1 hour',
          'Designed in line with SMACNA flexible duct installation guidance',
        ],
        faqs: [
          {
            q: 'How long can a flex duct run be?',
            a: 'Best practice is to keep it under 3 m and as straight as possible. Beyond that, the pressure-loss penalty compared to rigid duct becomes severe.',
          },
          {
            q: 'When do I need fire-rated flex?',
            a: 'Whenever the duct crosses a fire-rated wall or shaft, local building codes typically require fire-rated flex (or a fire damper plus standard flex).',
          },
        ],
        image: '/products/flexible-ducts/flexible-duct-main.jpg',
        images: [
          '/products/flexible-ducts/flexible-duct-main.jpg',
          '/products/flexible-ducts/duct-connector.jpg',
          '/products/flexible-ducts/duct-icon-1.jpg',
          '/products/flexible-ducts/duct-icon-2.jpg',
        ],
      },
      {
        id: 'p-7-2',
        slug: 'hvac-air-distribution-products',
        name: 'HVAC Air Distribution Products (ADP)',
        shortDescription:
          'Diffusers, grilles, registers and louvers — the terminal devices that deliver and return air in every HVAC system.',
        overview:
          'Air Distribution Products (ADPs) are the visible, room-side end of an HVAC system — the diffusers and grilles that supply conditioned air evenly across a space and the return grilles and louvers that bring it back. The duct does the conveying, but ADP selection is what determines how the air actually feels: throw, spread, induction and noise level all come down to the right diffuser specified for the room. We manufacture the full ADP range in extruded aluminium (the default), GI and stainless steel — built to project airflow schedules and finished to architectural specification.',
        features: [
          'Square ceiling diffusers (4-way, 3-way, 2-way and 1-way blow patterns)',
          'Round / circular multi-cone ceiling diffusers',
          'Linear slot diffusers (1, 2, 3 and 4-slot — architectural)',
          'Eggcrate return-air grilles',
          'Linear bar grilles (fixed and adjustable deflection)',
          'Supply / return registers with opposed-blade damper (OBD)',
          'Weather louvers for fresh-air intake and exhaust',
          'Plenum boxes, neck adapters and accessory dampers',
        ],
        whyChooseThis: [
          'Single source for the entire ADP package — sized to the project airflow schedule',
          'Performance selected on throw, spread and NC noise — not just face dimension',
          'Custom sizes and any RAL powder-coat colour at no minimum',
          'Architectural mitre-welded frames on premium grilles for clean ceiling reveals',
          'Made-in-India lead times — typically 2–3 weeks for project quantities',
        ],
        constructionDetails: [
          'Extruded 6063-T5 aluminium frames and blades, mitre-cut corners',
          'Standard finish: powder-coat RAL 9010 (off-white); custom RAL on request',
          'Anodised, natural and stainless-steel finishes for premium and humid duty',
          'Removable cores on diffusers and grilles for filter / damper access',
          'Integral or accessory opposed-blade dampers (OBD) for room-by-room balancing',
          'Insect-screen and bird-screen options on weather louvers',
        ],
        selectionGuide: [
          'Square 4-way ceiling diffusers — rectangular rooms with even occupancy; pick neck size for ≤ 4 m/s face velocity',
          'Round multi-cone diffusers — high-induction, ideal for tall spaces, mixed loads and high-cooling rooms',
          'Linear slot diffusers — architectural offices, hotels, conference and perimeter zones; lowest visual impact',
          'Eggcrate return grilles — lowest cost, highest free area; the default for ceiling-plenum returns',
          'Linear bar grilles — sidewall supply with directional deflection, lobby and lift-lobby returns',
          'Weather louvers — sized for ≤ 2.5 m/s face velocity to avoid rain carry-over',
        ],
        installationNotes: [
          'T-bar grid ceilings: snap-in or screw-fix via the matching accessory frame',
          'Plaster / drywall: recessed with margin frame, or surface-mount where access permits',
          'Match the diffuser neck to the duct take-off — transition where required, never reduce abruptly',
          'Set OBD blades before commissioning the air balance — leave the system at design positions afterwards',
          'Provide flexible duct connectors no longer than 1.5 m to terminal boxes / VAVs',
        ],
        maintenanceNotes: [
          'Vacuum or dry-wipe diffuser and grille faces quarterly',
          'Deep-clean and inspect cores annually — replace gasketing if compressed',
          'Re-balance OBD positions if seasonal airflow drifts beyond ± 10% of design',
        ],
        industries: ['Commercial offices', 'Hotels', 'Hospitals', 'Malls and retail', 'Airports', 'Cleanrooms', 'Education', 'Industrial offices'],
        standards: [
          'Diffuser performance tested to ASHRAE Standard 70',
          'Louver performance tested to AMCA 500-L',
          'Aluminium extrusion to IS 733 / EN 755',
          'Stainless steel grades to IS 6911 / ASTM A240',
        ],
        faqs: [
          {
            q: 'When do I use a round vs. square ceiling diffuser?',
            a: 'Square 4-way diffusers throw evenly into rectangular rooms with even occupancy — the default for offices and meeting rooms. Round multi-cone (circular) diffusers induce more room air per unit of supply, which makes them the right choice for tall spaces, atria and rooms with high or uneven cooling load.',
          },
          {
            q: 'Do I need an OBD on every diffuser?',
            a: 'Only where the branch take-off does not already have a volume-control damper. On a properly balanced system with a VCD at every branch, the OBD is redundant — and OBDs add noise. Provide them on terminal-only systems or where final tweaks are expected.',
          },
          {
            q: 'Can the ADPs be powder-coated to match the interior?',
            a: 'Yes — any RAL colour on aluminium, no minimum order quantity. RAL 9010 (off-white) is the off-the-shelf default; specify the RAL number with your order for custom finishes.',
          },
          {
            q: 'What is the lead time for a project quantity?',
            a: 'Standard sizes in stock finishes ship in 7–10 days. Custom sizes, custom colours or stainless-steel sets typically need 2–3 weeks from order confirmation.',
          },
        ],
        image: '/products/hvac-air-duct-kitchen-hoods/HAVC.jpg',
        images: [
          '/products/hvac-air-duct-kitchen-hoods/HAVC.jpg',
          '/products/hvac-air-duct-kitchen-hoods/HAVC1.jpg',
          '/products/hvac-air-duct-kitchen-hoods/HAVC2.jpg',
          '/products/hvac-air-duct-kitchen-hoods/HAVC3.jpg',
          '/products/hvac-air-duct-kitchen-hoods/HAVC4.jpg',
        ],
      },
      {
        id: 'p-7-3',
        slug: 'commercial-kitchen-hood',
        name: 'Commercial Kitchen Hoods',
        shortDescription:
          'Commercial kitchen hoods in galvanised iron and stainless steel.',
        overview:
          'A commercial kitchen hood captures grease, smoke and heat at the source — directly above the cooking line — before they spread into the dining room or build up on the building structure. Type-I hoods (with grease baffle filters) handle anything that produces grease vapour: ranges, fryers, charbroils. SS304 construction is the durability and hygiene standard; GI is acceptable for non-grease back-of-house duties (proof boxes, dishwasher exhaust).',
        features: ['Materials: GI and SS'],
        whyChooseThis: [
          'SS304 grade resists grease, steam, and daily caustic cleaning',
          'Captures grease at the source — protects ducts and rooftop fans',
          'Built to project drawings; size matched to the cooking line below',
          'Integrated lighting and grease tray standard on every unit',
        ],
        constructionDetails: [
          '1.2 mm SS304 (Type I — grease) or galvanised iron (Type II — non-grease)',
          'Stainless-steel baffle grease filters in slide-out tracks',
          'Integral grease cup / drain channel',
          'LED light fittings standard',
          'Optional UV / electrostatic precipitator for low-grease discharge',
        ],
        selectionGuide: [
          'Hood length should overhang the cooking line by ≥ 150 mm on each side',
          'Capture velocity ≥ 0.50 m/s across the hood face for typical kitchens',
          'Type-I (grease) for ranges, fryers, charbroil; Type-II for dishwashers, ovens',
          'For very heavy grease loads, specify electrostatic precipitator + extended duct cleaning interval',
        ],
        installationNotes: [
          'Maintain ≥ 1.2 m vertical clearance between cooktop and hood face',
          'Mount with stainless-steel hangers; never carbon-steel hardware in a grease environment',
          'Connect to a dedicated grease-rated duct — never share with other exhaust',
          'Provide a fire-suppression nozzle in the hood plenum per local fire code',
        ],
        maintenanceNotes: [
          'Wash baffle filters in a dishwasher weekly',
          'Empty grease cup weekly',
          'Schedule full duct cleaning every 6 months for high-volume operations',
        ],
        industries: ['Restaurants', 'Hotels', 'Hospital kitchens', 'School / institutional canteens', 'Bakeries', 'Dark kitchens'],
        standards: [
          'Designed in line with NFPA 96 / IS 16182 commercial kitchen exhaust',
          'SS304 to ASTM A240 / IS 6911',
        ],
        faqs: [
          {
            q: 'Type I or Type II hood — how do I tell?',
            a: 'If the appliance underneath produces grease vapour (range, fryer, charbroil, wok), it is Type I and must have a grease filter. If it only produces heat or steam (dishwasher, oven, proof box), Type II is sufficient.',
          },
          {
            q: 'GI or SS?',
            a: 'SS304 is the standard for any grease hood — required by most municipal kitchen codes. GI is acceptable for Type-II non-grease duty only.',
          },
        ],
        image: '/products/hvac-air-duct-kitchen-hoods/commercial-kitchen-hood.jpg',
      },
    ],
  },

  // ─── 8. LARGE DIAMETER FANS (HVLS) ───────────────────────────────────────
  {
    id: 'cat-hvls',
    slug: 'large-diameter-fans',
    name: 'Large Diameter Fans (HVLS)',
    tagline: 'High Volume Low Speed fans up to 24 ft delivering 200,000 CFM.',
    order: 8,
    description:
      'High Volume Low Speed (HVLS) fans replace banks of ceiling fans in large industrial and commercial buildings. One 24-ft HVLS can do the work of 30+ small ceiling fans, moving a slow column of air across the floor that produces a 4–6 °C evaporative-cooling effect on personnel — at a fraction of the energy and noise.',
    products: [
      {
        id: 'p-8-1',
        slug: 'high-volume-low-speed-fan',
        name: 'High Volume Low Speed Fan (HVLS)',
        shortDescription:
          'Large-diameter HVLS fan (16–24 ft) delivering up to 200,000 CFM for industrial and commercial buildings.',
        overview:
          'An HVLS fan is the right way to ventilate a large open volume — warehouse, factory bay, gymnasium, distribution centre. The 16–24 ft impeller spins slowly (typically 60–80 rpm), producing a wide, gentle column of air that reaches the floor and spreads horizontally for tens of metres, creating a perceived 4–6 °C cooling effect by accelerating evaporation from skin. One HVLS does the work of 30+ ordinary ceiling fans, draws less power, and is silent enough to leave on through a meeting.',
        applications: ['Industrial buildings', 'Commercial buildings'],
        capacity: 'up to 200,000 CFM',
        features: ['Size range: 16 ft to 24 ft', 'Speed control included'],
        whyChooseThis: [
          'One HVLS replaces 30+ ordinary ceiling fans for the same coverage',
          '4–6 °C perceived cooling effect on personnel through evaporative wind-chill',
          'Silent at floor level — under 35 dBA at typical speeds',
          'In winter, reverse-mode destratifies hot air trapped at the ceiling and cuts heating cost',
        ],
        constructionDetails: [
          'Aluminium alloy aerofoil blades, typically 5–10 per fan',
          'Direct-drive permanent-magnet (PMSM) or gear-reduction motor',
          'Multiple safety cables per blade beyond the structural mount',
          'Variable-frequency drive included as standard',
          'Wall-mount or wireless controller for speed and direction',
        ],
        selectionGuide: [
          'Pick fan diameter to match the unobstructed footprint: 24 ft for 6 m+ ceilings; 16–20 ft for lower ceilings',
          'Coverage: roughly 25–30 m diameter floor footprint per fan at full speed',
          'Mount at minimum 4.5 m above the floor (24 ft fan); minimum 3.5 m for 16 ft',
          'Avoid placing under sprinklers — local fire codes vary, check before specifying',
        ],
        installationNotes: [
          'Mount only to a structural member rated for ≥ 5× fan weight (dynamic loading)',
          'Install all safety cables to independent points on the structure',
          'Allow ≥ 0.6 m clearance from fan blade tip to any obstruction',
          'Wire VFD per manufacturer guidance; never bypass with a soft-starter',
        ],
        maintenanceNotes: [
          'Inspect blade fasteners and safety cables every 6 months',
          'Wipe blades annually — dust unbalances the fan',
          'Re-grease gear-drive (if applicable) per manufacturer interval',
        ],
        industries: ['Warehouses', 'Distribution centres', 'Factories', 'Auditoriums', 'Showrooms', 'Sports halls', 'Aircraft hangars'],
        standards: [
          'Designed in line with AMCA 230 air-circulator performance practice',
          'Safety cables and structural mount per AMCA 230 / ANSI / ASCE 7 wind loading',
          'VFD per IEC 61800-3 EMC class',
        ],
        faqs: [
          {
            q: 'Is the perceived cooling effect real?',
            a: 'Yes — moving air across skin accelerates evaporation, dropping perceived temperature by 4–6 °C even when the actual air temperature is unchanged. Standard reference: ASHRAE 55 thermal comfort.',
          },
          {
            q: 'Can it run all year?',
            a: 'Yes — at full speed in summer for cooling effect, and at low speed in reverse in winter to break up the hot-air layer at the ceiling and push it down to occupant level. This destratification typically cuts heating energy by 10–20%.',
          },
          {
            q: 'How loud is it?',
            a: 'Under 35 dBA at floor level for typical industrial duty. Quieter than the ambient noise of a working warehouse.',
          },
        ],
        image: '/products/hvls-fans/main.webp',
        images: [
          // '/products/hvls-fans/hvls-fan-1.jpg',
          // '/products/hvls-fans/hvls-fan-2.jpg',
          '/products/hvls-fans/main.webp',
        ],
      },
    ],
  },

  // ─── 9. TURNKEY HVAC ───────────────────────────────────────
  {
    id: 'cat-turnkey',
    slug: 'turnkey-hvac',
    name: 'Turnkey HVAC — End-to-End Solutions',
    tagline:
      'Supply, professional installation, commissioning and final handover of complete HVAC systems.',
    order: 9,
    description:
      'A turnkey HVAC project covers the whole air system as one delivery: AHUs, FCUs, FFUs, air washers, ducts, controls, electricals, balancing, commissioning and handover documentation. Single point of accountability — one team owns selection, install, balance and warranty rather than handing the project across four contractors.',
    products: [
      {
        id: 'p-9-1',
        slug: 'turnkey-hvac-equipment',
        name: 'Turnkey HVAC Equipment',
        shortDescription:
          'End-to-end supply, installation, commissioning and handover for AHUs, FCUs, FFUs, air washers, curtains and clean rooms.',
        overview:
          'Turnkey delivery of the air-side equipment that makes an HVAC system work — from the central Air Handling Unit (AHU) that filters, conditions and pushes air through the building, down to the Fan Coil Units (FCUs) at the room level and the Fan Filter Units (FFUs) that maintain cleanroom-grade air. We handle selection, supply, installation, water and electrical interconnection, testing-adjusting-balancing (TAB) and commissioning, then hand the system over with a complete documentation set.',
        features: [
          'Air Handling Units (AHU)',
          'Air Washer Systems',
          'Fan Coil Units (FCU)',
          'Fan Filter Units (FFU)',
          'Air Curtains',
          'Air Distribution Terminals (grilles, diffusers, etc.)',
          'Complete Clean Rooms (panels, HVAC, ducting, electrical)',
        ],
        whyChooseThis: [
          'Single point of accountability — one contract from selection to handover',
          'Equipment selection optimised across the full system, not piecemeal',
          'In-house TAB and commissioning team — no separate sub-contract',
          'Documented handover: O&M manuals, balance reports, as-built drawings, training',
        ],
        constructionDetails: [
          'AHU: double-skin panel construction with PUF / mineral wool insulation; EUROVENT-class casing options',
          'FCU: 2-pipe / 4-pipe configuration; horizontal or vertical with chassis or concealed body',
          'FFU: HEPA H13 / H14 filtration with terminal fan-filter modules for cleanrooms',
          'Air washers: cellulose pad media or spray-type with stainless-steel drift eliminator',
          'Air curtains: ambient or heated; sized to door width for full cut-off',
        ],
        selectionGuide: [
          'AHU sizing: airflow at design external static pressure (ESP); confirm filter / coil class against project spec',
          'FCU sizing: room sensible + latent load; size for design entering air condition',
          'FFU coverage: ISO 14644-1 class drives the percentage of ceiling covered',
          'Air curtain: choose nozzle width = door width; jet velocity 6–10 m/s at floor level',
        ],
        installationNotes: [
          'Provide a structural plinth for every AHU; never sit one on a slab without isolation',
          'Allow service-side clearance ≥ AHU width for filter changes and coil pull',
          'Hydraulic balance the chilled-water loop before commissioning the air side',
          'Run a full TAB after install — every project ships with a balance report',
        ],
        maintenanceNotes: [
          'Filters: monitor pressure drop; replace at design final pressure',
          'Coils: clean annually with low-pressure water + mild detergent',
          'Belts: inspect quarterly; replace yearly',
          'Drain pans: clean and treat for biofilm at every coil-cleaning visit',
        ],
        industries: ['Pharma', 'Hospitals', 'Hotels', 'Commercial real estate', 'Data centres', 'Research labs', 'Manufacturing'],
        standards: [
          'AHU casing per EUROVENT casing-class practice',
          'TAB per AABC / NEBB methodology',
          'Cleanroom delivery to ISO 14644-1 classification',
          'Filtration ratings per ISO 16890 / EN 1822 (HEPA)',
        ],
        faqs: [
          {
            q: 'What does turnkey actually include?',
            a: 'Survey, selection, equipment supply, installation, ducting, water/electrical connections, controls integration, TAB, commissioning, O&M training, and a one- or two-year defects warranty.',
          },
          {
            q: 'Can we just buy the AHU and install it ourselves?',
            a: 'Yes — equipment-only supply is available. Turnkey is the option for owners who want a single point of accountability and a documented handover.',
          },
        ],
        image: '/products/turnkey-hvac-products/turnkey-hvac-1.jpg',
        images: [
          '/products/turnkey-hvac-products/turnkey-hvac-1.jpg',
          '/products/turnkey-hvac-products/turnkey-hvac-2.jpg',
          '/products/turnkey-hvac-products/turnkey-hvac-3.jpg',
       
        ],
      },
      {
        id: 'p-9-2',
        slug: 'integrated-clean-room-solution',
        name: 'Integrated Clean Room Solution',
        shortDescription:
          'Complete clean-room delivery — insulated panels, HVAC integration, specialised ducting and electrical systems.',
        overview:
          'A complete cleanroom is a coordinated build of envelope, HVAC, ducting and electrical — none of which can be done well in isolation. We deliver all four under one contract, sized to your target ISO 14644-1 class. The envelope (PUF / honeycomb panels), the air system (HEPA-filtered AHU, FFU ceiling, return-air risers), the ducts (sealed, smooth-bore stainless or coated steel) and the electricals (sealed conduits, sealed luminaires) are all coordinated to hit and hold the design particle count.',
        features: [
          'Insulated panels',
          'HVAC integration',
          'Specialised ducting',
          'Electrical systems',
        ],
        whyChooseThis: [
          'Designed to your target ISO class (typically ISO 5–8 / Class 100–100,000)',
          'Single contract covers envelope + HVAC + ducts + electrical',
          'In-house validation: particle count, recovery time, pressure cascade — full IQ/OQ/PQ documentation',
          'Modular panels mean future expansion or change is a panel-swap, not a rebuild',
        ],
        constructionDetails: [
          '50 / 75 / 100 mm PUF or aluminium-honeycomb modular panels with concealed fixings',
          'Coved corners (panel-to-floor and panel-to-ceiling) for cleanability',
          'HEPA H13 / H14 terminal FFU ceiling',
          'Stainless or epoxy-coated rigid duct, sealed to SMACNA Seal Class A',
          'Sealed flush-mount luminaires and IP 65 sockets',
          'Dedicated pressure-cascade differential gauges per room',
        ],
        selectionGuide: [
          'Set the target ISO 14644-1 class first — it drives every downstream selection',
          'Specify the recovery time requirement (e.g. 15 min from at-rest to operational class)',
          'Specify required pressure cascade (typically 10–15 Pa per step out from cleanest zone)',
          'Allocate space for return-air risers — never use a corridor as a return path',
        ],
        installationNotes: [
          'Establish a clean-build protocol from the day panels arrive on site',
          'Pressure-test ducts to SMACNA before insulating',
          'HEPA leak-test (PAO/DEHS) every terminal filter at handover',
          'Run a full validation: particle count, recovery time, pressure cascade, airflow uniformity',
        ],
        maintenanceNotes: [
          'Particle count monitoring — continuous in pharma cleanrooms',
          'HEPA integrity test annually; replace when pressure-drop hits design final',
          'Pre-filters: replace per pressure-drop monitor',
          'Periodic re-validation per the user\'s SOP / regulatory cycle',
        ],
        industries: ['Pharma', 'Biotech', 'Medical devices', 'Semiconductors', 'Aerospace', 'Research labs', 'Food processing'],
        standards: [
          'ISO 14644-1 cleanroom classification',
          'EU GMP Annex 1 grades A/B/C/D for pharma',
          'ISO 14644-3 test methods (recovery time, leak test)',
          'HEPA filtration per EN 1822 H13/H14',
        ],
        faqs: [
          {
            q: 'How do I know what ISO class I need?',
            a: 'Pharma fill/finish is typically ISO 5 (Grade A); pharma compounding ISO 7 (Grade B); medical-device assembly ISO 7–8; semiconductor lithography ISO 3–5. Your regulator or process spec dictates the class.',
          },
          {
            q: 'What is recovery time?',
            a: 'The time taken for the room to return from a disturbed state (lights on, people moving) back to the at-rest particle count. ISO 14644-3 requires < 10–20 min depending on class.',
          },
        ],
        image: '/products/turnkey-hvac-products/clean-room.jpg',
      },
    ],
  },

  // ─── 10. PURE AIR ───────────────────────────────────────
  {
    id: 'cat-air-purifiers',
    slug: 'pure-air-purifiers',
    name: 'PURE AIR — Commercial & Industrial Air Purifiers',
    tagline: 'German Mann+Hummel filters. Purifies 2,000 sqft in 10 minutes.',
    order: 10,
    description:
      'Indoor air in Indian cities can be dirtier than outdoor air during winter — PM2.5 levels above 100 µg/m³ are not unusual in offices. PURE AIR brings industrial-grade two-stage filtration into commercial and industrial spaces: pre-filter for coarse dust, then a Mann+Hummel nano-fibre filter that removes PM0.1 to PM10 with > 95% efficiency on PM10 and 80% on PM2.5 (ISO 16890 ePM10/ePM2.5 class).',
    products: [
      {
        id: 'p-10-1',
        slug: 'pure-air-commercial-purifier',
        name: 'Commercial & Industrial Purifier',
        shortDescription:
          'Wall-mount commercial purifier with Mann+Hummel nano-fibre two-stage filtration. Purifies 2,000 sqft in 10 minutes.',
        overview:
          'PURE AIR is built for the way Indian commercial buildings actually run — long hours, dense occupancy, and outdoor-air levels of PM2.5 that consumer-grade purifiers cannot keep up with. The two-stage filter train (a coarse pre-filter + a Mann+Hummel nano-fibre main filter) achieves > 95% removal on PM10 and 80% on PM2.5 at the rated 2,000 m³/h airflow — enough to refresh a 1,000 sqft area in 4 minutes and a 2,000 sqft area in 10 minutes. Wall-mount form factor, 80 W draw, < 55 dB sound: it can run all working hours in an office.',
        applications: ['Commercial', 'Industrial'],
        features: [
          'Premium filters by Mann+Hummel (Germany)',
          'Mass-production ready, made in India',
          'Removes PM0.1, PM1.0, PM2.5, PM10',
          'Nano-fibre-enhanced two-stage filtration',
          '> 95% efficiency for PM10, 80% for PM2.5 (ISO 16890 certified)',
          'Wall-mount, space-saving installation',
        ],
        whyChooseThis: [
          'Mann+Hummel German filtration — used by automotive OEMs for cabin air',
          'Two-stage train protects the costly main filter, doubling its service life',
          '2,000 m³/h airflow — enough to refresh 2,000 sqft in 10 minutes',
          'Live air-quality reporting integration on request',
          '80 W power draw — runs an 8-hour office day for under ₹6 of electricity',
        ],
        constructionDetails: [
          'Wall-mount steel chassis, powder-coated finish',
          'Stage 1: pleated coarse pre-filter (washable)',
          'Stage 2: Mann+Hummel nano-fibre HEPA-class main filter',
          'EC fan with built-in speed regulation',
          'Filter pressure-drop indicator on the front panel',
        ],
        selectionGuide: [
          'One unit covers up to 2,000 sqft of typical office at 5–6 air-changes per hour',
          'For PM2.5-sensitive rooms (boardrooms, recording studios), allow 8–10 ACH',
          'For larger floor plates, deploy multiple units distributed evenly',
          'Pair with adequate fresh-air supply — purifiers do not address CO₂',
        ],
        installationNotes: [
          'Mount at 1.8–2.4 m above floor; avoid corners (recirculation dead zone)',
          'Allow ≥ 200 mm clearance to the ceiling for inlet airflow',
          'Wire on a dedicated 5 A point — no shared circuits',
          'Configure live-report module if subscribed',
        ],
        maintenanceNotes: [
          'Pre-filter: wash every 4 weeks',
          'Main filter: replace every 6 months (or when pressure-drop indicator triggers)',
          'Filter disposal handled by SUV FANS service team',
          'Service interval: every 6 months',
        ],
        specSheet: [
          { label: 'Filter', value: 'Premium filters by Mann+Hummel (Germany)' },
          { label: 'Manufacturing', value: 'Mass-production-ready, proudly made in India' },
          { label: 'Air Purifier Technology', value: 'Removes PM0.1, PM1.0, PM2.5, PM10' },
          { label: 'Filter Design', value: 'Nano-fibre-enhanced for superior dust capture and airflow' },
          { label: 'Filtration Performance', value: 'Two-stage filtration for exceptional particle removal' },
          { label: 'Filter Life', value: 'Up to 6 months — reduces maintenance costs' },
          { label: 'Filter Efficiency', value: '> 95% for PM10, 80% for PM2.5 (ISO 16890 certified)' },
          { label: 'Mounting', value: 'Wall mount — space-saving installation' },
          { label: 'Noise & Energy', value: '< 55 dB — distraction-free environment' },
          { label: 'Product Dimensions', value: '950 mm (L) × 750 mm (W) × 250 mm (H)' },
          { label: 'Airflow Capacity', value: '2,000 m³/h — rapid air circulation' },
          { label: 'Power Consumption', value: '80 W — low operating cost' },
          { label: 'Time to Recirculate Air', value: 'Refreshes 1,000 sqft in 4 minutes' },
          { label: 'Warranty', value: '3 years (excluding electronics); filters replaced as required' },
          { label: 'Filter Disposal', value: 'Professional, responsible disposal service' },
          { label: 'Service Interval', value: 'Every 6 months' },
          { label: 'Customisation', value: 'Available for bulk orders only' },
        ],
        industries: ['Corporate offices', 'IT campuses', 'Schools', 'Hospitals', 'Hotels', 'Showrooms', 'Manufacturing offices'],
        standards: [
          'ISO 16890 filter performance classification',
          'Mann+Hummel filter media certified to manufacturer\'s spec',
          'Energy consumption per IS 1885 / equivalent',
        ],
        faqs: [
          {
            q: 'How is this different from a domestic air purifier?',
            a: 'A domestic purifier moves 200–400 m³/h and is sized for a single bedroom. PURE AIR moves 2,000 m³/h — enough for a full office floor plate — and uses industrial-grade filtration that lasts six months instead of six weeks.',
          },
          {
            q: 'Will it bring CO₂ levels down?',
            a: 'No — recirculating purifiers do not change CO₂. CO₂ requires fresh outdoor air. Pair PURE AIR with adequate ventilation if CO₂ matters (it does in boardrooms and classrooms).',
          },
          {
            q: 'What is in the live report?',
            a: 'Real-time PM2.5 / PM10 / temperature / humidity at the unit, with historical trend data accessible from a web dashboard. Useful for compliance reporting in pharma and certified-green-building projects.',
          },
        ],
        image: '/products/air-purifiers/main.png',
        images: [
          '/products/air-purifiers/main.png',
          '/products/air-purifiers/air-purifier-6.jpg',
          '/products/air-purifiers/air-purifier-1.jpg',
          '/products/air-purifiers/air-purifier-2.jpg',
          '/products/air-purifiers/air-purifier-4.jpg',
        ],
        notes: ['Live report sharing supported'],
      },
    ],
  },
];

/** Flat list of all products with their category attached. */
export interface FlatProduct extends CatalogueProduct {
  categoryName: string;
  categorySlug: string;
}

export function getAllProducts(): FlatProduct[] {
  return CATALOGUE.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      categoryName: cat.name,
      categorySlug: cat.slug,
    }))
  );
}

export function getProductBySlug(slug: string):
  | { product: CatalogueProduct; category: CatalogueCategory }
  | undefined {
  for (const cat of CATALOGUE) {
    const product = cat.products.find((p) => p.slug === slug);
    if (product) return { product, category: cat };
  }
  return undefined;
}

export function getRelatedProducts(slug: string, limit = 3): FlatProduct[] {
  const found = getProductBySlug(slug);
  if (!found) return [];
  return found.category.products
    .filter((p) => p.slug !== slug)
    .slice(0, limit)
    .map((p) => ({
      ...p,
      categoryName: found.category.name,
      categorySlug: found.category.slug,
    }));
}
