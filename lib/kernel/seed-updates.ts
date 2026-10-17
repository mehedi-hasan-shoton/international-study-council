/**
 * Kernel · content updates (October 2026)
 * ---------------------------------------------------------------------------
 * The October content pass, in one place:
 *
 *   • a single "Book a consultation" CTA on the home page
 *   • "Who we are" (mission, vision, values) + the team section on /about
 *   • a new /resources page with reserved IELTS / poster / video slots
 *   • the real ISC fee list (eur + bdt) replacing the placeholder prices
 *   • a payment block (bKash / bank / Revolut) under the fee table
 *   • real social links in the footer
 *
 * This module deliberately imports nothing from ./db, so bootstrap.ts (fresh
 * installs) and content-migrations.ts (existing installs) can share the same
 * source of truth without a circular import.
 */

const S = 'https://images.unsplash.com'
const img = (photo: string, w = 1600) => `${S}/${photo}?auto=format&fit=crop&w=${w}&q=80`

/* -------------------------------------------------------------------------- */
/* Home — one booking CTA instead of the application + plan pair               */
/* -------------------------------------------------------------------------- */

export const HOME_BLOCKS: Array<{ type: string; data: Record<string, any> }> = [
  {
    type: 'hero',
    data: {
      eyebrow: 'International Study Council',
      headline: 'There are many consultants.\nThis one is yours.',
      body: 'Tell us where you want to go and what you can afford. We map the universities, the funding and the visa route that actually fits you.',
      primary_label: 'Book a consultation',
      primary_href: '/apply',
      secondary_label: '',
      secondary_href: '',
      show_mark: true,
      show_search: true,
      footnote: 'Free assessment. No fees until you hold an offer.',
      variant: 'mark',
    },
  },
  {
    type: 'scrolly',
    data: {
      label: '',
      title: '',
      body: '',
      service_limit: 6,
      sections: [
        {
          id: 'services',
          label: 'Services',
          title: 'What we do',
          body: 'Seven services, priced individually — take one, take all, or take none. The assessment is free either way.',
          points: [
            'Getting started — free assessment, career counselling, eligibility check',
            'Documents — CV writing, SOP review, or the combo package',
            'Funding — the full scholarship package, from scratch to submission',
          ],
          cta_label: 'See all services',
          cta_href: '/services',
        },
        {
          id: 'process',
          label: 'How it works',
          title: 'Four steps, roughly six weeks',
          body: 'We run the work in parallel wherever we can, so the timeline is set by the longest single piece rather than the sum of them.',
          points: [
            'Assessment — a 30-minute call, and an honest read on what is realistic',
            'Shortlist — five to eight programmes with total cost and admission odds',
            'Application — SOP, CV and submission, with scholarship forms filed alongside',
            'Visa & arrival — the visa file, then accommodation and a briefing',
          ],
          cta_label: 'How the fees work',
          cta_href: '/services',
        },
        {
          id: 'search',
          label: 'Search',
          title: 'Search your destination',
          body: 'One search box covers every university, scholarship and guide on the site. Add filters to narrow by country, level or discipline.',
          points: [
            'Search everything at once — institutions, funding, guides',
            'Filter by country, degree level and discipline',
            'Press ⌘K anywhere on the site',
          ],
          cta_label: 'Browse universities',
          cta_href: '/universities',
        },
        {
          id: 'map',
          label: 'Global reach',
          title: 'Where we can take you',
          body: 'A country lights up once the full service set is running there. Countries still being set up are shown half-lit, so you can see where we are heading.',
          points: [
            'Six countries live, more being set up every month',
            'Every destination page covers tuition, living costs and visa rules',
            'No destination we cannot support end to end',
          ],
          cta_label: 'All destinations',
          cta_href: '/destinations',
        },
        {
          id: 'apply',
          label: 'Apply',
          title: 'Talk to an advisor',
          body: 'Three short steps, nothing charged and nothing committed. An advisor reads it and replies within one working day.',
          points: [
            'About you — who we are advising and how to reach you',
            'Your plans — where, what level, what budget',
            'How we can help — tick the services you want',
          ],
          cta_label: 'Book a consultation',
          cta_href: '/apply',
        },
        {
          id: 'why',
          label: 'Why us',
          title: 'Why students pick us',
          body: 'Most agencies sell you a university. We sell you a decision you can defend — and we tell you when the answer is not to go.',
          points: [
            'We say no when we should',
            'The price is the price',
            'One advisor, start to finish',
            'We publish our refusals',
          ],
          cta_label: 'Book a consultation',
          cta_href: '/apply',
        },
      ],
    },
  },
  {
    type: 'values',
    data: {
      label: 'Boundaries',
      title: "What we don't do",
      body: 'Most of this industry runs on promises it cannot keep. Here is where we draw the line.',
      items: [
        {
          title: 'No guaranteed admission',
          body: 'Nobody can promise an offer, and anyone who does is lying to you. We give you a probability and the reasoning behind it.',
        },
        {
          title: 'No buying your way in',
          body: 'We do not forge transcripts, invent financial evidence, or pay anyone off. If you ask, we will decline and end the engagement.',
        },
        {
          title: 'No silence after you pay',
          body: 'You get a named advisor, a written scope and a reply within one working day. We do not disappear once the invoice clears.',
        },
        {
          title: 'No undisclosed commission',
          body: 'Where a university pays us for a referral, it is printed on your shortlist next to that university. Always.',
        },
      ],
    },
  },
  {
    type: 'cta',
    data: {
      headline: 'Start with the free assessment.',
      body: 'Thirty minutes, no obligation. You leave with a shortlist and a realistic budget — whether or not you use us.',
      primary_label: 'Book a consultation',
      primary_href: '/apply',
      secondary_label: 'See the services',
      secondary_href: '/services',
      variant: 'ink',
    },
  },
  { type: 'whatsappFloat', data: { label: 'Chat on WhatsApp' } },
]

/* -------------------------------------------------------------------------- */
/* About — "Who we are": mission, vision, values, team                         */
/* -------------------------------------------------------------------------- */

export const ABOUT_BLOCKS: Array<{ type: string; data: Record<string, any> }> = [
  {
    type: 'pageHeader',
    data: {
      eyebrow: 'About',
      title: 'Who we are',
      body: 'International Study Council is an international education and student-development platform — built to make study-abroad information accessible, understandable and actionable.',
    },
  },
  {
    type: 'values',
    data: {
      label: 'Who we are',
      title: 'What drives us',
      items: [
        {
          title: 'Our vision',
          body: 'A world in which every capable and motivated student, regardless of geographical, social or economic background, can make informed decisions and access international education opportunities that enable academic growth, professional development and positive societal impact.',
        },
        {
          title: 'Our mission',
          body: 'To empower aspiring international students by providing accurate information, practical guidance, accessible learning resources and meaningful connections with scholars, alumni and education professionals. We help students identify suitable programmes and scholarship opportunities, understand application requirements, and make responsible decisions aligned with their academic interests, professional goals and personal circumstances.',
        },
        {
          title: 'Our promise',
          body: 'We place students’ interests at the centre of our work and provide guidance that is honest, accessible, responsible and practically useful. We inspire ambition while keeping expectations realistic — success is not only an offer letter, but understanding your strengths and choosing well.',
        },
      ],
    },
  },
  {
    type: 'values',
    data: {
      label: 'What we stand for',
      title: 'Core values',
      items: [
        {
          title: 'Integrity and transparency',
          body: 'Honesty, accuracy and ethical conduct in everything we publish — programmes, eligibility, costs and realistic outcomes. We never guarantee admissions, scholarships, visas or jobs.',
        },
        {
          title: 'Equity and inclusion',
          body: 'Talent exists in every community. Access to guidance should not depend on your income, nationality, gender, location or network — so we build our information for students without privileged counsellors.',
        },
        {
          title: 'Collaboration and mentorship',
          body: 'The strongest journeys are shared ones. We connect students with current scholars, alumni and professionals who have taken the same route, and mentorship here is based on shared learning and mutual respect.',
        },
        {
          title: 'Excellence and continuous learning',
          body: 'High standards in our information, sessions and communication — and the humility to keep improving as requirements, technologies and student needs change.',
        },
        {
          title: 'Accountability',
          body: 'We take responsibility for the quality of our work, protect confidential information, avoid conflicts of interest, and put the interests of the students we serve first.',
        },
      ],
    },
  },
  {
    type: 'imageText',
    data: {
      label: 'How we work',
      title: 'We put the full comparison in front of you',
      body: 'Most students never see the real numbers. We write them down: total tuition, living costs, scholarship eligibility, visa financial requirement, and the honest probability of admission for your profile.\n\nWe are paid by students, not by universities. Where a university does pay us a referral, you will see it stated on your shortlist.',
      bullets: [
        'Written shortlists with total cost of attendance',
        'Commission disclosure on every recommendation',
        'No fees until you hold an offer',
      ],
      media: img('photo-1523240795612-9a054b0db644'),
      image_side: 'right',
    },
  },
  {
    type: 'stats',
    data: {
      label: 'Track record',
      items: [
        { value: '2016', label: 'Founded' },
        { value: '1,800+', label: 'Students placed' },
        { value: '96%', label: 'Visa approval' },
        { value: '24', label: 'Destinations covered' },
      ],
    },
  },
  {
    type: 'advisors',
    data: {
      label: 'Team',
      title: 'The people you will work with',
      body: 'Every file is handled by a named advisor, start to finish. Photos and intro videos are added by the team.',
      limit: 6,
    },
  },
  {
    type: 'marquee',
    data: {
      label: 'Partner institutions',
      items: [
        { text: "Taylor's University" },
        { text: 'Sunway University' },
        { text: 'Monash Malaysia' },
        { text: 'University of Nicosia' },
        { text: 'University of Debrecen' },
        { text: 'RWTH Aachen' },
        { text: 'LMU Munich' },
        { text: 'University of Manchester' },
        { text: 'University of Bologna' },
        { text: 'Sorbonne University' },
        { text: 'University of Toronto' },
        { text: 'ETH Zurich' },
        { text: 'Lund University' },
        { text: 'University of Wollongong' },
      ],
    },
  },
  {
    type: 'cta',
    data: {
      headline: 'Come and ask us the hard questions.',
      body: 'We would rather talk you out of the wrong programme than sell you the right one.',
      primary_label: 'Book a consultation',
      primary_href: '/apply',
      secondary_label: 'Our services',
      secondary_href: '/services',
      variant: 'ink',
    },
  },
]

/* -------------------------------------------------------------------------- */
/* Services — real fee list + the payment block                                */
/* -------------------------------------------------------------------------- */

export const PAYMENT_BLOCK = {
  type: 'payment',
  data: {
    label: 'Payment',
    title: 'How to pay',
    body: 'Pay stage by stage — nothing is charged until you have seen the fee in your engagement letter. Use whichever method suits your country.',
    methods: [
      {
        name: 'bKash / Nagad / Rocket — Bangladesh',
        detail: 'Send to **+880 1677 214725**\n\nInclude the reference from your engagement letter so the payment is matched to your file.',
      },
      {
        name: 'Bank transfer — Bangladesh',
        detail: '**Dutch-Bangla Bank**\nAccount name: Mehedi Hasan\nAccount number: 25015141185\nBranch: Noakhali, Maijdee Branch',
      },
      {
        name: 'Revolut — euro',
        detail: 'Beneficiary: Mehedi Hasan\nIBAN: **ES42 1583 0001 1590 3542 2592**\nBIC / SWIFT: REVOESM2\nCorrespondent BIC: CHASDEFX\nRevolut Bank UAB, Calle Príncipe de Vergara 132, 4ª planta, 28002 Madrid, Spain\n\nOr send to **@mehedi_hasan22** in the Revolut app.',
      },
    ],
  },
}

export const SERVICES_BLOCKS: Array<{ type: string; data: Record<string, any> }> = [
  {
    type: 'pageHeader',
    data: {
      eyebrow: 'Services',
      title: 'What we actually do',
      body: 'Seven services, priced individually — from the free assessment to the full scholarship package. You only pay for the parts you need, and every fee is agreed in writing first.',
    },
  },
  {
    type: 'serviceList',
    data: {
      label: 'Service catalogue',
      title: '',
      body: '',
      limit: 24,
      columns: '3',
      grouped: true,
    },
  },
  {
    type: 'priceTable',
    data: {
      label: 'Fees',
      title: 'What each service costs',
      body: 'Fees are shown in euro with the Bangladeshi taka equivalent. Nothing here is a subscription and nothing renews on its own.',
      show_includes: true,
    },
  },
  PAYMENT_BLOCK,
  {
    type: 'steps',
    data: {
      label: 'Timeline',
      title: 'A typical intake, week by week',
      items: [
        { title: 'Week 1', body: 'Assessment call, document checklist, budget confirmed.' },
        { title: 'Week 2–3', body: 'Shortlist written up. You approve the final five programmes.' },
        { title: 'Week 4–6', body: 'SOP and CV prepared, applications submitted, scholarship forms filed in parallel.' },
        { title: 'Week 7+', body: 'Offers arrive. We compare them on total cost and help you accept.' },
        { title: 'After acceptance', body: 'Visa file, accommodation, insurance, flights and pre-departure briefing.' },
      ],
    },
  },
  {
    type: 'faq',
    data: {
      label: 'Questions',
      title: 'Before you buy anything',
      items: [
        {
          question: 'Do I have to buy the whole package?',
          answer:
            'No. Every service is priced on its own. Plenty of students take the free assessment and the SOP review and do the rest themselves — that is a perfectly good outcome for us.',
        },
        {
          question: 'Can you write my SOP for me?',
          answer:
            'We draft it with you, from an interview where we extract your material. We do not sell pre-written statements, and we run every draft through a plagiarism and AI-detection check before you submit.',
        },
        {
          question: 'What if my application is refused or my visa is rejected?',
          answer:
            'A refusal is not the end. We review the refusal reason, tell you honestly whether a reapplication is worth it, and support the second attempt at no extra service fee.',
        },
        {
          question: 'Who is the full scholarship package for?',
          answer:
            'It is reserved for candidates we have already assessed and selected — the €1,000 package covers everything from the first search to a submitted application. Ask during your free assessment.',
        },
        {
          question: 'How do I pay?',
          answer:
            'Stage by stage, in writing, before each stage begins — by bKash, Nagad or Rocket, by bank transfer, or by Revolut in euro. See the payment section above for the exact details.',
        },
      ],
    },
  },
  {
    type: 'cta',
    data: {
      headline: 'Not sure which stage you need?',
      body: 'Tell us where you are in the process. We will tell you what is worth paying for and what you can do yourself.',
      primary_label: 'Book a consultation',
      primary_href: '/apply',
      secondary_label: 'See scholarships',
      secondary_href: '/scholarships',
      variant: 'ink',
    },
  },
]

/* -------------------------------------------------------------------------- */
/* The real ISC fee list                                                       */
/* -------------------------------------------------------------------------- */

export const REAL_SERVICES: Array<{ title: string; slug: string; data: Record<string, any> }> = [
  {
    title: 'Free Profile Assessment',
    slug: 'free-profile-assessment',
    data: {
      category: 'Getting started',
      tag: 'Included',
      outcome: 'A written read on where you stand',
      summary: 'A 30-minute call and a written read on which destinations and budgets are realistic for you.',
      body: 'We look at your transcripts, English level, budget and timeline, and tell you plainly which countries you can realistically get into and afford. You leave with a written summary even if you never use us again — and this call is the door into every other service we sell.',
      price: 'Free',
      price_value: 0,
      currency: 'EUR',
      duration_weeks: 1,
      duration: '30 minutes',
      includes: ['30-minute call', 'Transcript review', 'Budget planning', 'Destination shortlist', 'Written summary'],
    },
  },
  {
    title: 'Career Counselling Session',
    slug: 'career-counselling-session',
    data: {
      category: 'Getting started',
      tag: 'Add-on',
      outcome: 'A career direction you can actually test',
      summary: 'Work out what you want to do before you choose what to study — aimed at public health and humanitarian aid professionals.',
      body: 'A focused session on where your degree and experience should take you next. Built for public health and humanitarian aid professionals weighing a scholarship, a degree and a move abroad — we look at the careers that actually exist, what they pay, and which qualification is the right entry point.',
      price: '€30 / BDT 2,500',
      price_value: 30,
      currency: 'EUR',
      duration_weeks: 1,
      duration: '1 session',
      includes: ['One 60-minute session', 'Career mapping', 'Pathway research', 'Written summary'],
    },
  },
  {
    title: 'Scholarship Eligibility Check',
    slug: 'scholarship-eligibility-check',
    data: {
      category: 'Funding',
      tag: 'Stage 1',
      outcome: 'The awards you actually qualify for',
      summary: 'A written check of which scholarships your profile genuinely qualifies for — before you pay for anything else.',
      body: 'We screen your transcripts, English score, field and nationality against the award lists and tell you exactly which scholarships are realistic, which are a stretch, and which are not worth the application fee. You get the list in writing either way.',
      price: '€30 / BDT 2,500',
      price_value: 30,
      currency: 'EUR',
      duration_weeks: 1,
      duration: '2–3 days',
      includes: ['Profile screening', 'Realistic award list', 'Deadline calendar', 'Next-step plan'],
    },
  },
  {
    title: 'CV / Résumé Writing',
    slug: 'cv-resume-writing',
    data: {
      category: 'Applications & documents',
      tag: 'Stage 2',
      outcome: 'An academic CV and a work résumé',
      summary: 'Two documents, because a university and an employer want different things from the same life.',
      body: 'A university wants academic trajectory, research exposure and fit for the programme. An employer wants impact, numbers and outcomes. One document cannot do both — so we write both, in the format each audience expects, and make sure they survive automated screening.',
      price: '€30 / BDT 2,500',
      price_value: 30,
      currency: 'EUR',
      duration_weeks: 1,
      duration: '3–5 days',
      includes: ['Academic CV', 'Work résumé', 'ATS-safe formatting', 'LinkedIn summary'],
    },
  },
  {
    title: 'SOP Review & Writing',
    slug: 'sop-review-writing',
    data: {
      category: 'Applications & documents',
      tag: 'Stage 2',
      outcome: 'A submission-ready statement in your own voice',
      summary: 'Drafted with you, not for you — then edited line by line until it sounds like a person wrote it.',
      body: 'Admissions officers read hundreds of statements and almost all of them say the same three things. We work from your material — the specific moments, the problems you could not solve — and the goal is a statement that answers the question the officer is actually asking. Every draft is checked for plagiarism and AI-generated text before you submit.',
      price: '€30 / BDT 2,500',
      price_value: 30,
      currency: 'EUR',
      duration_weeks: 2,
      duration: '1–2 weeks',
      includes: ['Extraction interview', 'Full draft', 'Two revision rounds', 'Plagiarism and AI check'],
    },
  },
  {
    title: 'CV + SOP Combo Package',
    slug: 'cv-sop-combo-package',
    data: {
      category: 'Applications & documents',
      tag: 'Stage 2',
      outcome: 'Both core documents, ready to submit',
      summary: 'The CV and the SOP together, at the combined rate — the pair every application needs.',
      body: 'Most applications need the same two documents done properly, so the combo simply puts them in one scope at the combined rate. Same process, same revision rounds, one written quote.',
      price: '€50 / BDT 5,000',
      price_value: 50,
      currency: 'EUR',
      duration_weeks: 2,
      duration: '1–2 weeks',
      includes: ['Academic CV', 'Work résumé', 'Full SOP draft', 'Two revision rounds', 'Plagiarism and AI check'],
    },
  },
  {
    title: 'Full Scholarship Package',
    slug: 'full-scholarship-package',
    data: {
      category: 'Funding',
      tag: 'Preselected candidates only',
      outcome: 'From scratch to submitted applications',
      summary: 'The whole funding journey in one scope — from the first search to a submitted application.',
      body: 'For candidates we have assessed and selected: we run the full scholarship search, build every document, file each application and prepare you for the interviews. Priced as a package because it is a commitment from both sides — and it is only offered to students we have already assessed and selected.',
      price: '€1,000',
      price_value: 1000,
      currency: 'EUR',
      duration_weeks: 8,
      duration: '6–8 weeks',
      includes: [
        'Full scholarship search',
        'Document preparation',
        'Application filing',
        'Interview preparation',
        'Follow-up and negotiation',
      ],
    },
  },
]

/* -------------------------------------------------------------------------- */
/* Resources — the page the owner fills through the admin                      */
/* -------------------------------------------------------------------------- */

export const RESOURCES_PAGE = {
  slug: 'resources',
  title: 'Resources',
  seo_title: 'Resources — International Study Council',
  seo_description: 'Free IELTS and test-preparation material, posters, guides and videos from the ISC team.',
  show_in_nav: true,
  nav_label: 'Resources',
  nav_order: 5,
  blocks: [
    {
      type: 'pageHeader',
      data: {
        eyebrow: 'Library',
        title: 'Resource library',
        body: 'Guides, test-preparation material, posters and videos — free to download and share. The team adds new material as it is published.',
      },
    },
    {
      type: 'cardGrid',
      data: {
        label: 'Test preparation',
        title: 'IELTS & English tests',
        body: 'Preparation aimed at the exact band score your programme requires — not a generic course.',
        columns: '3',
        items: [
          {
            tag: 'IELTS',
            title: 'IELTS preparation',
            body: 'Band-targeted practice for the score your programme actually requires, with marked mock tests and recorded speaking feedback.',
            href: '',
          },
          {
            tag: 'PTE',
            title: 'PTE Academic',
            body: 'Machine-scored practice that mirrors the test format, with strategy notes for each task type.',
            href: '',
          },
          {
            tag: 'TOEFL',
            title: 'TOEFL iBT',
            body: 'University-focused preparation — the integrated writing and speaking tasks most students lose marks on.',
            href: '',
          },
          {
            tag: 'Duolingo',
            title: 'Duolingo English Test',
            body: 'Short-format preparation for the adaptive test, accepted by a growing list of universities.',
            href: '',
          },
        ],
      },
    },
    {
      type: 'gallery',
      data: {
        label: 'Posters',
        title: 'Posters & flyers',
        columns: '3',
        images: [],
      },
    },
    {
      type: 'video',
      data: {
        label: 'Watch',
        title: 'Videos',
        url: '',
        caption: '',
      },
    },
    {
      type: 'richtext',
      data: {
        label: 'Guides',
        title: 'Guides & checklists',
        width: 'narrow',
        body: 'Downloadable guides, document checklists and information-session recordings will appear here. Materials are added by the ISC team — check back before each intake.',
      },
    },
    {
      type: 'cta',
      data: {
        headline: 'Looking for something specific?',
        body: 'Ask us — if it is useful to one student it is probably useful to many, and we will add it to the library.',
        primary_label: 'Book a consultation',
        primary_href: '/apply',
        secondary_label: 'Message on WhatsApp',
        secondary_href: 'whatsapp',
        variant: 'ink',
      },
    },
    { type: 'whatsappFloat', data: { label: 'Chat on WhatsApp' } },
  ],
}

/* -------------------------------------------------------------------------- */
/* Business settings — real links from the ISC services document               */
/* -------------------------------------------------------------------------- */

export const SOCIAL_SETTINGS = {
  linkedin: 'https://www.linkedin.com/company/109116219',
  facebook: 'https://www.facebook.com/profile.php?id=61580214689762',
  instagram: 'https://www.instagram.com/internationalstudycouncil2025/',
  youtube: 'https://www.youtube.com/@InternationalStudyCouncil',
}

/** Patched into the contact settings — whatsapp becomes the real ISC number. */
export const CONTACT_PATCH = {
  whatsapp: '+34602067219',
  whatsapp_message: "Hi ISC, I'd like a free study-abroad assessment.",
  /* The seeded phone number is a reserved fictional one — clear it until a
     real landline is added in Admin → Site settings. */
  phone: '',
}

/* -------------------------------------------------------------------------- */
/* Navigation labels — "Who we are" and "Resources" in every enabled language  */
/* -------------------------------------------------------------------------- */

export const NAV_TRANSLATIONS: Array<[string, string, string]> = [
  ['en', 'nav.about', 'Who we are'],
  ['bn', 'nav.about', 'আমরা কারা'],
  ['es', 'nav.about', 'Quiénes somos'],
  ['fr', 'nav.about', 'Qui sommes-nous'],
  ['ar', 'nav.about', 'من نحن'],
  ['ru', 'nav.about', 'Кто мы'],
  ['en', 'nav.resources', 'Resources'],
  ['bn', 'nav.resources', 'রিসোর্স'],
  ['es', 'nav.resources', 'Recursos'],
  ['fr', 'nav.resources', 'Ressources'],
  ['ar', 'nav.resources', 'الموارد'],
  ['ru', 'nav.resources', 'Ресурсы'],
]
