/**
 * Kernel · university directory expansion (October 2026), part 1 of 3.
 * Shared by bootstrap.ts (fresh installs) and content-migrations.ts.
 */

export const UNIVERSITIES_A = [
  {
    name: 'Universiti Malaya',
    slug: 'universiti-malaya',
    data: {
      abbr: 'UM',
      country: 'Malaysia',
      city: 'Kuala Lumpur',
      ownership: 'Public',
      summary: 'Malaysia’s oldest and highest-ranked university, on a city campus next to the Petronas Towers.',
      about:
        'Universiti Malaya is the flagship public research university of Malaysia and the only one in the world top 100. The city campus sits in the centre of Kuala Lumpur, with medicine, law, engineering and business all represented. Fees are a fraction of an equivalent degree in the UK or Australia, and the scholarship office runs a full international-student services desk.',
      tuition_from: 26000,
      currency: 'MYR',
      levels: ['Diploma', "Bachelor's", "Master's", 'PhD'],
      disciplines: ['Business', 'Law', 'Engineering', 'Medicine', 'Computing'],
      ranking: 'QS world top 100',
      founded: '1905',
      featured: false,
      website: 'https://www.um.edu.my',
      requirements:
        "Bachelor's: recognised foundation or STPM/A-Level equivalent.\nMaster's: a recognised bachelor's degree with a minimum CGPA of 3.0.\nEnglish: IELTS 6.0–6.5 depending on programme.",
      programs: [
        { name: 'Bachelor of Computer Science', level: "Bachelor's", duration: '4 years', tuition: 'MYR 30,000 / year' },
        { name: 'Bachelor of Laws', level: "Bachelor's", duration: '4 years', tuition: 'MYR 28,000 / year' },
        { name: 'MSc Data Science', level: "Master's", duration: '1.5 years', tuition: 'MYR 35,000 total' },
      ],
    },
  },
  {
    name: 'Universiti Putra Malaysia',
    slug: 'universiti-putra-malaysia',
    data: {
      abbr: 'UPM',
      country: 'Malaysia',
      city: 'Serdang, Selangor',
      ownership: 'Public',
      summary: 'Agriculture and engineering powerhouse on a green campus south of Kuala Lumpur.',
      about:
        'UPM started as an agricultural college and still leads the region in agriculture, forestry and veterinary science, with strong engineering and business schools alongside. The Serdang campus is large, green and self-contained, with its own transit link to Kuala Lumpur.',
      tuition_from: 22000,
      currency: 'MYR',
      levels: ['Foundation', "Bachelor's", "Master's", 'PhD'],
      disciplines: ['Agriculture', 'Engineering', 'Business', 'Computing'],
      ranking: 'QS world top 150',
      founded: '1931',
      featured: false,
      website: 'https://upm.edu.my',
      requirements:
        "Bachelor's: 5 SPM credits or equivalent, or a recognised foundation.\nMaster's: bachelor's degree with CGPA 2.75+.\nEnglish: IELTS 6.0 for most programmes.",
      programs: [
        { name: 'BSc Agriculture', level: "Bachelor's", duration: '4 years', tuition: 'MYR 24,000 / year' },
        { name: 'BEng Mechanical Engineering', level: "Bachelor's", duration: '4 years', tuition: 'MYR 26,000 / year' },
        { name: 'MSc Computer Science', level: "Master's", duration: '1.5 years', tuition: 'MYR 30,000 total' },
      ],
    },
  },
  {
    name: 'Ludwig-Maximilians-Universität München',
    slug: 'lmu-munich',
    data: {
      abbr: 'LMU',
      country: 'Germany',
      city: 'Munich',
      ownership: 'Public',
      summary: 'No tuition at one of Europe’s leading research universities — you pay only the semester contribution.',
      about:
        'LMU Munich is a public university with a 550-year history and a world top 100 ranking, and it charges no tuition: students pay only the semester contribution and a transport ticket. Munich is Germany’s strongest job market, and LMU’s humanities, law, medicine and natural-science faculties all rank among the best on the continent.',
      tuition_from: 150,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Humanities', 'Law', 'Medicine', 'Natural Sciences', 'Business'],
      ranking: 'QS world top 100',
      founded: '1472',
      featured: false,
      website: 'https://www.lmu.de',
      requirements:
        "Bachelor's: Hochschulzugangsberechtigung (school-leaving certificate recognised in Germany).\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.5 or equivalent; German-taught programmes need TestDaF/DSH.",
      programs: [
        { name: 'BA Philosophy', level: "Bachelor's", duration: '3 years', tuition: 'No tuition — semester fee only' },
        { name: 'MSc Physics', level: "Master's", duration: '2 years', tuition: 'No tuition — semester fee only' },
        { name: 'MSc Management', level: "Master's", duration: '2 years', tuition: 'No tuition — semester fee only' },
      ],
    },
  },
  {
    name: 'RWTH Aachen University',
    slug: 'rwth-aachen',
    data: {
      abbr: 'RWTH',
      country: 'Germany',
      city: 'Aachen',
      ownership: 'Public',
      summary: 'Germany’s leading technical university, built around engineering and industry collaboration.',
      about:
        'RWTH Aachen is the largest technical university in Germany and consistently its highest-ranked, with deep links to European industry — several of the region’s engineering firms recruit from RWTH before graduation. Tuition is free; students pay the semester contribution.',
      tuition_from: 300,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Computing', 'Natural Sciences'],
      ranking: 'QS world top 100',
      founded: '1870',
      featured: false,
      website: 'https://www.rwth-aachen.de',
      requirements:
        "Bachelor's: recognised school-leaving certificate; many programmes require German at C1.\nMaster's: a related bachelor's degree with good standing.\nEnglish programmes: IELTS 6.5 or equivalent.",
      programs: [
        { name: 'BSc Mechanical Engineering', level: "Bachelor's", duration: '3 years', tuition: 'No tuition — semester fee only' },
        { name: 'MSc Computer Science', level: "Master's", duration: '2 years', tuition: 'No tuition — semester fee only' },
        { name: 'MSc Electrical Engineering', level: "Master's", duration: '2 years', tuition: 'No tuition — semester fee only' },
      ],
    },
  },
  {
    name: 'Heidelberg University',
    slug: 'heidelberg-university',
    data: {
      abbr: 'HU',
      country: 'Germany',
      city: 'Heidelberg',
      ownership: 'Public',
      summary: 'Germany’s oldest university, with medicine, law and the sciences in a heritage town.',
      about:
        'Founded in 1386, Heidelberg is Germany’s oldest university and among its most prestigious, with a compact historic campus in a small town an hour from Frankfurt. Since 2024 non-EU students pay a semester fee, which remains modest next to UK or US tuition.',
      tuition_from: 3000,
      currency: 'EUR',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Medicine', 'Law', 'Humanities', 'Sciences'],
      ranking: 'QS world top 100',
      founded: '1386',
      featured: false,
      website: 'https://www.uni-heidelberg.de',
      requirements:
        "Bachelor's: recognised school-leaving certificate, German C1 for most programmes.\nMaster's: a related bachelor's degree.\nEnglish programmes: IELTS 6.5–7.0.",
      programs: [
        { name: 'BSc Molecular Bioscience', level: "Bachelor's", duration: '3 years', tuition: 'EUR 1,500 / semester (non-EU)' },
        { name: 'MSc International Health', level: "Master's", duration: '2 years', tuition: 'EUR 1,500 / semester (non-EU)' },
      ],
    },
  },
  {
    name: 'University of Manchester',
    slug: 'university-of-manchester',
    data: {
      abbr: 'UoM',
      country: 'United Kingdom',
      city: 'Manchester',
      ownership: 'Public',
      summary: 'A Russell Group giant with one of the largest international student communities in the UK.',
      about:
        'Manchester is one of the UK’s largest single-site universities and a member of the Russell Group, known for engineering, materials science and business. The city itself is one of the most affordable student cities in the UK and home to a large South Asian community.',
      tuition_from: 27000,
      currency: 'GBP',
      levels: ['Foundation', "Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Business', 'Computing', 'Life Sciences'],
      ranking: 'QS world top 50',
      founded: '1824',
      featured: false,
      website: 'https://www.manchester.ac.uk',
      requirements:
        "Foundation: high school graduation with good standing.\nBachelor's: A-Levels AAB–AAA or equivalent.\nMaster's: a 2:1 in a related subject.\nEnglish: IELTS 6.0–7.0 by programme.",
      programs: [
        { name: 'BSc (Hons) Computer Science', level: "Bachelor's", duration: '3 years', tuition: 'GBP 30,000 / year' },
        { name: 'MSc Data Science', level: "Master's", duration: '1 year', tuition: 'GBP 32,000 total' },
        { name: 'MSc Mechanical Engineering', level: "Master's", duration: '1 year', tuition: 'GBP 31,000 total' },
      ],
    },
  },
  {
    name: 'University of Edinburgh',
    slug: 'university-of-edinburgh',
    data: {
      abbr: 'Edin',
      country: 'United Kingdom',
      city: 'Edinburgh',
      ownership: 'Public',
      summary: 'One of the UK’s oldest universities, strongest in informatics, medicine and the humanities.',
      about:
        'Edinburgh is a Russell Group university dating to 1582, with informatics, medicine, law and literature among its strongest faculties. The city is compact, safe and walkable, and the university runs one of the widest scholarship programmes in the UK.',
      tuition_from: 26000,
      currency: 'GBP',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Informatics', 'Medicine', 'Law', 'Humanities', 'Business'],
      ranking: 'QS world top 50',
      founded: '1582',
      featured: false,
      website: 'https://www.ed.ac.uk',
      requirements:
        "Bachelor's: A-Levels A*AA–AAA or equivalent.\nMaster's: a 2:1 in a related subject.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'BSc (Hons) Artificial Intelligence and Computer Science', level: "Bachelor's", duration: '4 years', tuition: 'GBP 35,000 / year' },
        { name: 'MSc Advanced Technology for Financial Computing', level: "Master's", duration: '1 year', tuition: 'GBP 34,000 total' },
      ],
    },
  },
  {
    name: 'University of Melbourne',
    slug: 'university-of-melbourne',
    data: {
      abbr: 'UniMelb',
      country: 'Australia',
      city: 'Melbourne',
      ownership: 'Public',
      summary: 'Australia’s leading university, with the Melbourne Model and a wide scholarship programme.',
      about:
        'The University of Melbourne is the highest-ranked university in Australia and a founding member of the Universitas 21 network. Its city campus sits in Parkville next to the hospital precinct, and the Melbourne Model lets undergraduates try breadth before specialising.',
      tuition_from: 42000,
      currency: 'AUD',
      levels: ['Diploma', "Bachelor's", "Master's", 'PhD'],
      disciplines: ['Engineering', 'Business', 'Law', 'Medicine'],
      ranking: 'QS world top 20',
      founded: '1853',
      featured: false,
      website: 'https://www.unimelb.edu.au',
      requirements:
        "Bachelor's: Australian Year 12 or equivalent; some programmes need prerequisites.\nMaster's: a related bachelor's degree with a weighted average of 65%+.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'Bachelor of Science', level: "Bachelor's", duration: '3 years', tuition: 'AUD 45,000 / year' },
        { name: 'Master of Data Science', level: "Master's", duration: '2 years', tuition: 'AUD 48,000 / year' },
      ],
    },
  },
  {
    name: 'Australian National University',
    slug: 'australian-national-university',
    data: {
      abbr: 'ANU',
      country: 'Australia',
      city: 'Canberra',
      ownership: 'Public',
      summary: 'The national university, built around research, policy and Asia-Pacific studies.',
      about:
        'ANU sits in Canberra, Australia’s capital, and is the country’s only member of the Association of Pacific Rim Universities beyond the Group of Eight — its public policy, international relations and physics programmes are directly connected to national institutions.',
      tuition_from: 40000,
      currency: 'AUD',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Public Policy', 'Computing', 'Science', 'Law'],
      ranking: 'QS world top 40',
      founded: '1946',
      featured: false,
      website: 'https://www.anu.edu.au',
      requirements:
        "Bachelor's: Australian Year 12 or equivalent.\nMaster's: a related bachelor's degree with a credit average.\nEnglish: IELTS 6.5 overall.",
      programs: [
        { name: 'Bachelor of International Relations', level: "Bachelor's", duration: '3 years', tuition: 'AUD 44,000 / year' },
        { name: 'Master of Computing', level: "Master's", duration: '2 years', tuition: 'AUD 46,000 / year' },
      ],
    },
  },
  {
    name: 'University of Toronto',
    slug: 'university-of-toronto',
    data: {
      abbr: 'U of T',
      country: 'Canada',
      city: 'Toronto',
      ownership: 'Public',
      summary: 'Canada’s top research university, with a postgraduate work permit route straight afterwards.',
      about:
        'Toronto is consistently the highest-ranked university in Canada, with computing, engineering and medicine among its strongest faculties. The city has one of the largest South Asian communities in North America, and a three-year postgraduate work permit follows most degrees.',
      tuition_from: 55000,
      currency: 'CAD',
      levels: ["Bachelor's", "Master's", 'PhD'],
      disciplines: ['Computing', 'Engineering', 'Business', 'Life Sciences'],
      ranking: 'QS world top 30',
      founded: '1827',
      featured: false,
      website: 'https://www.utoronto.ca',
      requirements:
        "Bachelor's: Canadian provincial diploma or equivalent with competitive grades.\nMaster's: a related bachelor's degree with a B+ mid-average.\nEnglish: IELTS 6.5–7.0 by programme.",
      programs: [
        { name: 'BSc Computer Science', level: "Bachelor's", duration: '4 years', tuition: 'CAD 60,000 / year' },
        { name: 'MSc Applied Computing', level: "Master's", duration: '16 months', tuition: 'CAD 58,000 total' },
      ],
    },
  },
]
