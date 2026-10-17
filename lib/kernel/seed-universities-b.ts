/**
 * Kernel · university directory expansion (October 2026), part 2 of 3.
 */

export const UNIVERSITIES_B = [
  {
    name: 'University of British Columbia',
    slug: 'university-of-british-columbia',
    data: {
      abbr: 'UBC',
      country: 'Canada',
      city: 'Vancouver',
      ownership: 'Public',
      summary: 'A Pacific-coast research university with a strong international cohort and work-permit route.',
      about:
        'UBC is one of Canada’s two flagship research universities, on a peninsula campus in Vancouver with a very large international student community. Computer science, business and forestry are its strongest names, and the city’s tech sector hires aggressively from them.',
      tuition_from: 45000,
      currency: 'CAD',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Computing', 'Business', 'Engineering', 'Forestry'],
      ranking: 'QS world top 50',
      founded: '1908',
      featured: false,
      website: 'https://www.ubc.ca',
      requirements:
        "Bachelor's: Canadian provincial diploma or equivalent.\nMaster's: a related bachelor's degree with a B+ average.\nEnglish: IELTS 6.5 overall.",
      programs: [
        { name: 'BSc Computer Science', level: "Bachelor's", duration: '4 years', tuition: 'CAD 48,000 / year' },
        { name: 'Master of Business Analytics', level: "Master's", duration: '1 year', tuition: 'CAD 52,000 total' },
      ],
    },
  },
  {
    name: 'University of Amsterdam',
    slug: 'university-of-amsterdam',
    data: {
      abbr: 'UvA',
      country: 'Netherlands',
      city: 'Amsterdam',
      ownership: 'Public',
      summary: 'A broad research university with communication, business and law in the EU capital of media.',
      about:
        'The University of Amsterdam is the largest university in the Netherlands, with communication sciences, business, law and psychology among its strongest programmes. Almost every master’s is taught in English, and the city is the European hub for media, tech and advertising.',
      tuition_from: 15000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Communication', 'Business', 'Law', 'Computing'],
      ranking: 'QS world top 60',
      founded: '1632',
      featured: false,
      website: 'https://www.uva.nl',
      requirements:
        "Bachelor's: Dutch VWO or equivalent diploma.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'BSc Communication Science', level: "Bachelor's", duration: '3 years', tuition: 'EUR 12,000 / year' },
        { name: 'MSc Business Administration', level: "Master's", duration: '1 year', tuition: 'EUR 16,000 / year' },
      ],
    },
  },
  {
    name: 'Delft University of Technology',
    slug: 'tu-delft',
    data: {
      abbr: 'TU Delft',
      country: 'Netherlands',
      city: 'Delft',
      ownership: 'Public',
      summary: 'The Netherlands’ technical university — engineering, architecture and computing, taught in English.',
      about:
        'TU Delft is the largest and highest-ranked Dutch technical university, with aerospace, civil engineering, architecture and quantum computing among its signature strengths. The campus sits between The Hague and Rotterdam, in a compact canal town.',
      tuition_from: 16000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Computing', 'Architecture'],
      ranking: 'QS world top 50',
      founded: '1842',
      featured: false,
      website: 'https://www.tudelft.nl',
      requirements:
        "Bachelor's: Dutch VWO or equivalent with maths and physics.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'BSc Aerospace Engineering', level: "Bachelor's", duration: '3 years', tuition: 'EUR 15,000 / year' },
        { name: 'MSc Computer Science', level: "Master's", duration: '2 years', tuition: 'EUR 18,000 / year' },
      ],
    },
  },
  {
    name: 'Sorbonne University',
    slug: 'sorbonne-university',
    data: {
      abbr: 'SU',
      country: 'France',
      city: 'Paris',
      ownership: 'Public',
      summary: 'Paris Sciences et Lettres’ humanities and sciences giant — public tuition, city-centre campuses.',
      about:
        'Sorbonne University was formed from the merger of Paris-Sorbonne and Pierre and Marie Curie, combining the historic humanities campus in the Latin Quarter with a leading science faculty. Public tuition is low even for non-EU students, and the Eiffel Scholarship covers a monthly stipend for top applicants.',
      tuition_from: 3800,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Humanities', 'Sciences', 'Medicine'],
      ranking: 'QS world top 100',
      founded: '2018',
      featured: false,
      website: 'https://www.sorbonne-universite.fr',
      requirements:
        "Bachelor's: French baccalauréat or equivalent; most programmes taught in French.\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.5–7.0.",
      programs: [
        { name: 'Licence de Droit', level: "Bachelor's", duration: '3 years', tuition: 'EUR 3,770 / year' },
        { name: 'MSc Computer Science', level: "Master's", duration: '2 years', tuition: 'EUR 4,000 / year' },
      ],
    },
  },
  {
    name: 'University of Bologna',
    slug: 'university-of-bologna',
    data: {
      abbr: 'UniBo',
      country: 'Italy',
      city: 'Bologna',
      ownership: 'Public',
      summary: 'The oldest university in Europe, with law, engineering and medicine in a student city.',
      about:
        'Founded in 1088, Bologna is the oldest university in the world and still among the best in Italy. The city is a student town with a lower cost of living than Rome or Milan, and the university’s law and medicine faculties date to the Middle Ages.',
      tuition_from: 3000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Law', 'Engineering', 'Humanities', 'Medicine'],
      ranking: 'QS world top 200',
      founded: '1088',
      featured: false,
      website: 'https://www.unibo.it',
      requirements:
        "Bachelor's: Italian maturità or equivalent.\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.0–6.5.",
      programs: [
        { name: 'Laurea in Giurisprudenza', level: "Bachelor's", duration: '5 years', tuition: 'EUR 3,000 / year' },
        { name: 'MSc Mechanical Engineering', level: "Master's", duration: '2 years', tuition: 'EUR 3,500 / year' },
      ],
    },
  },
  {
    name: 'University of Barcelona',
    slug: 'university-of-barcelona',
    data: {
      abbr: 'UB',
      country: 'Spain',
      city: 'Barcelona',
      ownership: 'Public',
      summary: 'Spain’s leading public university, with medicine and the humanities on city-centre campuses.',
      about:
        'The University of Barcelona is the highest-ranked public university in Spain, spread across historic buildings in the centre of the city. Medicine, chemistry, history and philosophy are its strongest names, and the cost of living is well below northern European capitals.',
      tuition_from: 6000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Medicine', 'Humanities', 'Sciences', 'Business'],
      ranking: 'QS world top 200',
      founded: '1450',
      featured: false,
      website: 'https://web.ub.edu',
      requirements:
        "Bachelor's: Spanish selectividad or equivalent.\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.5.",
      programs: [
        { name: 'Grado en Medicina', level: "Bachelor's", duration: '6 years', tuition: 'EUR 6,200 / year' },
        { name: 'MSc Business Administration', level: "Master's", duration: '1 year', tuition: 'EUR 7,500 total' },
      ],
    },
  },
  {
    name: 'Lund University',
    slug: 'lund-university',
    data: {
      abbr: 'LU',
      country: 'Sweden',
      city: 'Lund',
      ownership: 'Public',
      summary: 'A top-100 research university with English-taught degrees and the Swedish Institute scholarship.',
      about:
        'Lund is Sweden’s oldest university and consistently in the world top 100, with engineering, design, law and sustainability among its strongest programmes. Non-EU students pay tuition, but the Swedish Institute Scholarships for Global Professionals cover the full amount plus a stipend for eligible countries.',
      tuition_from: 145000,
      currency: 'SEK',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Sustainability', 'Design', 'Law'],
      ranking: 'QS world top 100',
      founded: '1666',
      featured: false,
      website: 'https://www.lunduniversity.lu.se',
      requirements:
        "Bachelor's: Swedish gymnasieexamen or equivalent.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'MSc Sustainable Energy Engineering', level: "Master's", duration: '2 years', tuition: 'SEK 145,000 / year' },
        { name: 'MSc Industrial Design', level: "Master's", duration: '2 years', tuition: 'SEK 145,000 / year' },
      ],
    },
  },
  {
    name: 'KTH Royal Institute of Technology',
    slug: 'kth-royal-institute-of-technology',
    data: {
      abbr: 'KTH',
      country: 'Sweden',
      city: 'Stockholm',
      ownership: 'Public',
      summary: 'Scandinavia’s leading technical university, in Stockholm’s tech corridor.',
      about:
        'KTH is Sweden’s highest-ranked technical university, with computer science, electrical engineering and sustainable technology as its signature strengths. The campus sits in Stockholm next to the tech cluster that produced Spotify and Klarna.',
      tuition_from: 145000,
      currency: 'SEK',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Computing'],
      ranking: 'QS world top 100',
      founded: '1827',
      featured: false,
      website: 'https://www.kth.se',
      requirements:
        "Bachelor's: Swedish gymnasieexamen or equivalent with maths and physics.\nMaster's: a related bachelor's degree.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'MSc Machine Learning', level: "Master's", duration: '2 years', tuition: 'SEK 145,000 / year' },
        { name: 'MSc Sustainable Technology', level: "Master's", duration: '2 years', tuition: 'SEK 145,000 / year' },
      ],
    },
  },
]
