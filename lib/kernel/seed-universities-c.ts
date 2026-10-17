/**
 * Kernel · university directory expansion (October 2026), part 3 of 3.
 */

export const UNIVERSITIES_C = [
  {
    name: 'University of Helsinki',
    slug: 'university-of-helsinki',
    data: {
      abbr: 'UH',
      country: 'Finland',
      city: 'Helsinki',
      ownership: 'Public',
      summary: 'Finland’s oldest and largest university, with tuition waivers for high achievers.',
      about:
        'Helsinki is the flagship of Finnish higher education, with sciences, law, medicine and education among its strongest faculties. Non-EU students pay tuition, but the university’s scholarship scheme covers 50–100% of it for admitted students with strong records.',
      tuition_from: 15000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Sciences', 'Law', 'Medicine', 'Education'],
      ranking: 'QS world top 150',
      founded: '1640',
      featured: false,
      website: 'https://www.helsinki.fi',
      requirements:
        "Bachelor's: Finnish matriculation or equivalent.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'MSc Data Science', level: "Master's", duration: '2 years', tuition: 'EUR 15,000 / year' },
        { name: 'MSc Agricultural Sciences', level: "Master's", duration: '2 years', tuition: 'EUR 15,000 / year' },
      ],
    },
  },
  {
    name: 'Aalto University',
    slug: 'aalto-university',
    data: {
      abbr: 'Aalto',
      country: 'Finland',
      city: 'Espoo',
      ownership: 'Public',
      summary: 'Technology, design and business merged into one of northern Europe’s most innovative campuses.',
      about:
        'Aalto was created in 2010 from the merger of Helsinki University of Technology, the Helsinki School of Economics and the School of Arts, Design and Architecture. The Espoo campus is built around a startup culture between Helsinki’s tech corridor and the design quarter.',
      tuition_from: 15000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Design', 'Engineering', 'Business', 'Computing'],
      ranking: 'QS world top 150',
      founded: '2010',
      featured: false,
      website: 'https://www.aalto.fi',
      requirements:
        "Bachelor's: Finnish matriculation or equivalent.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'BSc Design', level: "Bachelor's", duration: '3 years', tuition: 'EUR 15,000 / year' },
        { name: 'MSc Human-Computer Interaction', level: "Master's", duration: '2 years', tuition: 'EUR 15,000 / year' },
      ],
    },
  },
  {
    name: 'University of Copenhagen',
    slug: 'university-of-copenhagen',
    data: {
      abbr: 'KU',
      country: 'Denmark',
      city: 'Copenhagen',
      ownership: 'Public',
      summary: 'Scandinavia’s second-oldest university, with health and life sciences at its core.',
      about:
        'Copenhagen is Denmark’s oldest university and one of the best in the Nordics, with health, veterinary science, law and computer science among its strongest faculties. Teaching follows the Danish problem-based learning tradition, and the bike-first capital is consistently among the world’s most liveable cities.',
      tuition_from: 105000,
      currency: 'DKK',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Health', 'Sciences', 'Law', 'Business'],
      ranking: 'QS world top 100',
      founded: '1479',
      featured: false,
      website: 'https://www.ku.dk',
      requirements:
        "Bachelor's: Danish studentereksamen or equivalent.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'MSc Computer Science', level: "Master's", duration: '2 years', tuition: 'DKK 105,000 / year' },
        { name: 'MSc Public Health', level: "Master's", duration: '2 years', tuition: 'DKK 105,000 / year' },
      ],
    },
  },
  {
    name: 'ETH Zurich',
    slug: 'eth-zurich',
    data: {
      abbr: 'ETH',
      country: 'Switzerland',
      city: 'Zurich',
      ownership: 'Public',
      summary: 'One of the world’s very best technical universities — public tuition, global reputation.',
      about:
        'ETH Zurich is consistently ranked in the world top 10 and is the strongest university in continental Europe for engineering and the natural sciences. Public tuition is a small semester fee, which makes it one of the best value propositions in global higher education — and one of the hardest to get into.',
      tuition_from: 1500,
      currency: 'CHF',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Computing', 'Natural Sciences'],
      ranking: 'QS world top 10',
      founded: '1855',
      featured: false,
      website: 'https://ethz.ch',
      requirements:
        "Bachelor's: Swiss matura or equivalent; German C1 and very strong maths.\nMaster's: a related bachelor's degree from a recognised university.\nEnglish: IELTS 7.0 / TOEFL 100.",
      programs: [
        { name: 'BSc Mechanical Engineering', level: "Bachelor's", duration: '3 years', tuition: 'CHF 730 / semester' },
        { name: 'MSc Computer Science', level: "Master's", duration: '2 years', tuition: 'CHF 730 / semester' },
      ],
    },
  },
  {
    name: 'KU Leuven',
    slug: 'ku-leuven',
    data: {
      abbr: 'KU',
      country: 'Belgium',
      city: 'Leuven',
      ownership: 'Public',
      summary: 'The oldest Catholic university in Europe, with engineering, business and medicine in a student town.',
      about:
        'KU Leuven was founded in 1425 and is the highest-ranked university in Belgium, with engineering technology, business, law and medicine among its strongest faculties. The city of Leuven is built around the university and sits 25 minutes by train from Brussels.',
      tuition_from: 7000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Business', 'Law', 'Medicine'],
      ranking: 'QS world top 100',
      founded: '1425',
      featured: false,
      website: 'https://www.kuleuven.be',
      requirements:
        "Bachelor's: Belgian diploma or equivalent.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'MSc Engineering: Computer Science', level: "Master's", duration: '2 years', tuition: 'EUR 7,000 / year' },
        { name: 'MSc Business Engineering', level: "Master's", duration: '2 years', tuition: 'EUR 8,500 / year' },
      ],
    },
  },
  {
    name: 'University of Vienna',
    slug: 'university-of-vienna',
    data: {
      abbr: 'UniWien',
      country: 'Austria',
      city: 'Vienna',
      ownership: 'Public',
      summary: 'The oldest university in the German-speaking world — public tuition, city-centre campus.',
      about:
        'Founded in 1365, Vienna is the oldest university in the German-speaking world and the largest in Austria. Humanities, law, psychology and the natural sciences are its strongest names, and tuition is a modest semester fee even for non-EU students.',
      tuition_from: 1500,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Humanities', 'Law', 'Psychology', 'Sciences'],
      ranking: 'QS world top 150',
      founded: '1365',
      featured: false,
      website: 'https://www.univie.ac.at',
      requirements:
        "Bachelor's: Austrian matura or equivalent; German C1 for most programmes.\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.5–7.0.",
      programs: [
        { name: 'BA Philosophy', level: "Bachelor's", duration: '3 years', tuition: 'EUR 726 / semester' },
        { name: 'MSc Psychology', level: "Master's", duration: '2 years', tuition: 'EUR 726 / semester' },
      ],
    },
  },
  {
    name: 'Charles University',
    slug: 'charles-university',
    data: {
      abbr: 'CU',
      country: 'Czechia',
      city: 'Prague',
      ownership: 'Public',
      summary: 'The oldest university north of the Alps — free Czech-taught degrees, English programmes on top.',
      about:
        'Charles University was founded in 1348 and is the oldest university in Central Europe, with medicine, law and the humanities among its strongest faculties. Czech-taught degrees are tuition-free for everyone; English-taught programmes carry a fee, and Prague’s cost of living is well below western European capitals.',
      tuition_from: 6000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Medicine', 'Humanities', 'Sciences', 'Law'],
      ranking: 'QS world top 250',
      founded: '1348',
      featured: false,
      website: 'https://www.cuni.cz',
      requirements:
        "Bachelor's: Czech maturita or equivalent.\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.5.",
      programs: [
        { name: 'General Medicine (MD)', level: "Bachelor's", duration: '6 years', tuition: 'EUR 12,000 / year' },
        { name: 'MA Central European Studies', level: "Master's", duration: '2 years', tuition: 'EUR 6,000 / year' },
      ],
    },
  },
]
