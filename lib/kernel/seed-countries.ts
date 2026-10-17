/**
 * Kernel · destination directory expansion (October 2026)
 * ---------------------------------------------------------------------------
 * Ten more destinations for the directory. Shared by bootstrap.ts (fresh
 * installs) and content-migrations.ts (existing installs). No ./db import.
 */

export const NEW_COUNTRIES = [
  {
    name: 'France',
    slug: 'france',
    data: {
      flag: '🇫🇷',
      iso: 'FR',
      map_status: 'Not live yet',
      intro:
        'Low public-university tuition, the Eiffel Excellence Scholarship programme, and grandes écoles that feed straight into French and international industry.',
      tuition_from: 3800,
      currency: 'EUR',
      living_cost: 'EUR 900–1,400 / month',
      intakes: 'September, January',
      visa:
        'VLS-TS student visa, processed through Campus France. Proof of funds of roughly EUR 615 per month and health insurance required.',
      popular_for: ['Business', 'Engineering', 'Hospitality', 'Fashion'],
      featured: false,
    },
  },
  {
    name: 'Italy',
    slug: 'italy',
    data: {
      flag: '🇮🇹',
      iso: 'IT',
      map_status: 'Not live yet',
      intro:
        'The oldest university in Europe, low public tuition and a strong regional scholarship scheme for international students.',
      tuition_from: 3000,
      currency: 'EUR',
      living_cost: 'EUR 700–1,100 / month',
      intakes: 'September, October',
      visa:
        'National D-type study visa. Requires an admission letter, proof of funds and health insurance.',
      popular_for: ['Architecture', 'Design', 'Engineering', 'Medicine'],
      featured: false,
    },
  },
  {
    name: 'Spain',
    slug: 'spain',
    data: {
      flag: '🇪🇸',
      iso: 'ES',
      map_status: 'Not live yet',
      intro:
        'Spanish-language degrees at a fraction of UK tuition, plus a large English-taught portfolio in business and health sciences.',
      tuition_from: 6000,
      currency: 'EUR',
      living_cost: 'EUR 800–1,200 / month',
      intakes: 'September, February',
      visa:
        'Student visa (Type D) for stays over 180 days. Requires proof of funds, private health insurance and a clean criminal record.',
      popular_for: ['Business', 'Medicine', 'Tourism', 'Law'],
      featured: false,
    },
  },
  {
    name: 'Sweden',
    slug: 'sweden',
    data: {
      flag: '🇸🇪',
      iso: 'SE',
      map_status: 'Not live yet',
      intro:
        'English-taught degrees across engineering, sustainability and design, with the Swedish Institute scholarships for global professionals.',
      tuition_from: 145000,
      currency: 'SEK',
      living_cost: 'SEK 9,000–12,000 / month',
      intakes: 'August, January',
      visa:
        'Residence permit for studies. Requires admission, proof of funds and comprehensive health insurance.',
      popular_for: ['Engineering', 'Sustainability', 'Design', 'Business'],
      featured: false,
    },
  },
  {
    name: 'Finland',
    slug: 'finland',
    data: {
      flag: '🇫🇮',
      iso: 'FI',
      map_status: 'Not live yet',
      intro:
        'A education system built around research and wellbeing, with tuition waivers that cover half or more of the first year.',
      tuition_from: 15000,
      currency: 'EUR',
      living_cost: 'EUR 800–1,200 / month',
      intakes: 'August, January',
      visa:
        'Residence permit for studies. Requires admission and proof of funds of about EUR 560 per month.',
      popular_for: ['Technology', 'Design', 'Education', 'Sciences'],
      featured: false,
    },
  },
  {
    name: 'Denmark',
    slug: 'denmark',
    data: {
      flag: '🇩🇰',
      iso: 'DK',
      map_status: 'Not live yet',
      intro:
        'Problem-based learning and strong industry links in engineering and design, inside the Schengen area.',
      tuition_from: 105000,
      currency: 'DKK',
      living_cost: 'DKK 6,000–9,000 / month',
      intakes: 'September, February',
      visa:
        'Residence permit for higher education. Requires admission, proof of funds and health insurance.',
      popular_for: ['Engineering', 'Design', 'Business', 'Life Sciences'],
      featured: false,
    },
  },
  {
    name: 'Switzerland',
    slug: 'switzerland',
    data: {
      flag: '🇨🇭',
      iso: 'CH',
      map_status: 'Not live yet',
      intro:
        'Public universities with world-leading engineering and hospitality schools — and almost no tuition at the public ones.',
      tuition_from: 1500,
      currency: 'CHF',
      living_cost: 'CHF 1,600–2,200 / month',
      intakes: 'September, February',
      visa:
        'National D visa arranged with the canton of study. Requires admission and proof of funds.',
      popular_for: ['Engineering', 'Hospitality', 'Finance', 'Sciences'],
      featured: false,
    },
  },
  {
    name: 'Belgium',
    slug: 'belgium',
    data: {
      flag: '🇧🇪',
      iso: 'BE',
      map_status: 'Not live yet',
      intro:
        'Historic research universities in the EU capital, with moderate tuition and English-taught master’s programmes across disciplines.',
      tuition_from: 7000,
      currency: 'EUR',
      living_cost: 'EUR 900–1,300 / month',
      intakes: 'September, February',
      visa:
        'D-type long-stay student visa, then a residence permit. Requires admission and proof of funds.',
      popular_for: ['Engineering', 'Business', 'Law', 'Medicine'],
      featured: false,
    },
  },
  {
    name: 'Austria',
    slug: 'austria',
    data: {
      flag: '🇦🇹',
      iso: 'AT',
      map_status: 'Not live yet',
      intro:
        'Semester fees instead of tuition at public universities, with music, medicine and engineering programmes of long standing.',
      tuition_from: 1500,
      currency: 'EUR',
      living_cost: 'EUR 900–1,300 / month',
      intakes: 'March, October',
      visa:
        'National D visa for students. Requires admission, proof of funds and confirmed accommodation.',
      popular_for: ['Music', 'Engineering', 'Medicine', 'Humanities'],
      featured: false,
    },
  },
  {
    name: 'Czechia',
    slug: 'czechia',
    data: {
      flag: '🇨🇿',
      iso: 'CZ',
      map_status: 'Not live yet',
      intro:
        'Tuition-free Czech-taught degrees and a growing English-taught portfolio, with one of the oldest universities in Europe.',
      tuition_from: 6000,
      currency: 'EUR',
      living_cost: 'EUR 600–1,000 / month',
      intakes: 'September, February',
      visa:
        'Long-term visa for studies, then a residence permit. Requires admission and proof of funds.',
      popular_for: ['Medicine', 'Engineering', 'Humanities', 'Computing'],
      featured: false,
    },
  },
]
