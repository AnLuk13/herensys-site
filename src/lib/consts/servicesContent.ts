import OrangeCircleIcon from '@/components/svg-icons/details/OrangeCircleIcon';

export const heroSectionData = {
  titleLines: [
    { text: 'Global Employer of Record', CSSroperties: { color: 'var(--accent)' } },
    { text: '(EOR) Services' },
  ],
  descriptions: [
    'Expand your business anywhere in the world with Herensys as your trusted Employer of Record (EOR) partner. We make it simple to hire and manage international talent without the risks, compliance challenges, or administrative burden.',
    'Herensys takes care of all local employment regulations and HR operations so you can stay focused on growing your business globally',
  ],
  buttonText: 'Explore Services',
  showArrow: false,
  showDecorations: true,
};

export const goGlobalSection = {
  sectionTitle: 'Go Global with Herensys',
  sectionSubtitle:
    'Take your business beyond borders with confidence. Herensys empowers you to hire, manage, and pay employees anywhere in the world—without worrying about legal barriers or HR complexity. We take care of compliance and administration, so you can stay focused on driving growth and results.',
  cards: [
    {
      title: 'Lightning-Fast Onboarding',
      subtitle: '',
      roles: [
        'Expand your global reach without bureaucratic red tape. Herensys makes it easy to onboard talent globally—no paperwork, no setup delays, no hassle.',
      ],
      IconComponent: OrangeCircleIcon,
      isList: false,
    },
    {
      title: 'Total Compliance Coverage',
      subtitle: '',
      roles: [
        'We navigate every employment regulation and local labor laws. From contracts to tax obligations, we ensure your global operations meet every legal requirement in 100+ countries.',
      ],
      IconComponent: OrangeCircleIcon,
      isList: false,
    },
    {
      title: 'Expand Smarter, Spend Less',
      subtitle: '',
      roles: [
        'Skip the complexity, time, and heavy investment of setting up local entities. Test opportunities and scale your workforce flexibly, anywhere you choose.',
      ],
      IconComponent: OrangeCircleIcon,
      isList: false,
    },
    {
      title: 'Support That Moves With You',
      subtitle: '',
      roles: [
        'Get real-time help from a dedicated Herensys expert in your region—your go-to partner for everything from onboarding to compliance and beyond.',
      ],
      IconComponent: OrangeCircleIcon,
      isList: false,
    },
    {
      title: 'Payroll, Simplified Worldwide',
      subtitle: '',
      roles: [
        'Pay your international teams accurately, on time, and in their local currencies. Herensys ensures seamless global payroll operations—compliant, transparent, and worry-free.',
      ],
      IconComponent: OrangeCircleIcon,
      isList: false,
    },
    {
      title: 'Effortless HR Management',
      subtitle: '',
      roles: [
        'Oversee your entire global team through a single, intuitive platform that simplifies HR, payroll, and compliance into one seamless experience.',
      ],
      IconComponent: OrangeCircleIcon,
      isList: false,
    },
  ],
  background: 'var(--gray-background)',
};

export const globalHiringSection = {
  title: 'We Make Global Hiring Effortless',
  description:
    'Our full-service EOR (Employer of Record) services empower you to hire talent anywhere in the world while we handle the legal, administrative, and HR details.',
  features: [
    {
      title: 'Global Reach',
      description: 'Hire top professionals in over 100+ countries with one unified solution.',
    },
    {
      title: 'Local Expertise',
      description:
        'Navigate regional employment laws, taxes, and benefits with our in-country specialists.',
    },
    {
      title: 'Fast Hiring',
      description: 'Onboard new employees within days, not months.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Seamlessly expand or downsize your workforce as your business evolves.',
    },
    {
      title: 'No Entity Required',
      description: 'We become the legal employer, so you can focus on growth, not paperwork.',
    },
    {
      title: 'Compliance Assured',
      description:
        'Stay fully compliant with international labor laws, payroll regulations, and data protection standards.',
    },
  ],
  buttonText: 'Schedule a Call',
  reverse: false,
  background: 'var(--white)',
};

export const faqSectionData = {
  sectionTitle: 'Frequently asked questions',
  faqs: [
    {
      question: 'Will an EOR recruit candidates for me?',
      answer:
        "We don't find the people, but once you do, we make it legal to employ them. If you need help sourcing, we can connect you to recruiters we trust.",
    },
    {
      question: 'Does an EOR hire global candidates for me?',
      answer:
        'An EOR does not recruit candidates. However, once you identify the talent you want to hire, the EOR handles all the legal and administrative aspects of employment, including contracts, payroll, taxes, and compliance with local labor laws.',
    },
    {
      question: 'Do you help with paying the required in-country contributions?',
      answer:
        'Yes, we handle all mandatory in-country contributions, including social security, health insurance, pension funds, and other statutory benefits required by local employment laws. Everything is calculated and paid accurately and on time.',
    },
    {
      question: 'Is an EOR the same as a professional employer organization (PEO)?',
      answer:
        'No, an EOR and a PEO are different. An EOR becomes the legal employer of your workers, handling all compliance and HR responsibilities in countries where you do not have a legal entity. A PEO, on the other hand, works with your existing entity to co-employ workers and help manage HR tasks, but you remain the legal employer.',
    },
  ],
  background: 'var(--white)',
};

export const ctaSectionData = {
  title: 'Build teams anywhere. No local entities required',
  description:
    'Expand your global workforce effortlessly with our Employer of Record (EOR) solution',
  buttonText: 'Schedule a Call',
  background: 'var(--gray-background)',
};

export const howItWorksSectionData = {
  sectionTitle: 'How It Works?',
  steps: [
    {
      number: '01',
      title: 'Discovery',
      description: '30-minute brief to map roles and KPIs',
    },
    {
      number: '02',
      title: 'Sourcing',
      description: 'curated shortlist in 48-72 hours',
    },
    {
      number: '03',
      title: 'Interviews',
      description: 'coordinated in your time zone',
    },
    {
      number: '04',
      title: 'Offer & references',
      description: 'fast turnaround',
    },
    {
      number: '05',
      title: 'Onboarding',
      description: 'start as soon as tomorrow',
    },
  ],
  background: 'var(--white)',
};

export const blogContentData = [
  {
    type: 'h2',
    children: [{ text: 'The Rise of AI in Recruitment' }],
  },
  {
    type: 'p',
    children: [
      {
        text: 'Artificial intelligence has emerged as a transformative force in modern recruitment, fundamentally changing how organizations identify, evaluate, and engage with potential candidates. What once took weeks of manual screening can now be accomplished in hours, with greater accuracy and consistency.',
      },
    ],
  },
  {
    type: 'blockquote',
    children: [
      {
        text: 'AI is not replacing recruiters—it is empowering them to focus on what they do best: building relationships and making strategic hiring decisions.',
      },
    ],
  },
  {
    type: 'h3',
    children: [{ text: 'Key Benefits of AI-Powered Recruitment' }],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [{ text: 'Automated resume screening saving 75% of initial review time' }],
      },
      {
        type: 'li',
        children: [{ text: 'Predictive analytics identifying top performers before they apply' }],
      },
      {
        type: 'li',
        children: [{ text: 'Bias reduction through standardized evaluation criteria' }],
      },
      {
        type: 'li',
        children: [{ text: 'Enhanced candidate experience with instant communication' }],
      },
    ],
  },
  {
    type: 'p',
    children: [
      {
        text: 'Organizations implementing AI-driven recruitment systems report significant improvements in ',
      },
      { text: 'time-to-hire metrics', bold: true },
      { text: ' and ' },
      { text: 'candidate quality scores', bold: true },
      {
        text: ', while simultaneously reducing recruitment costs by up to 40%.',
      },
    ],
  },
  {
    type: 'h3',
    children: [{ text: 'Implementation Strategies' }],
  },
  {
    type: 'p',
    children: [
      {
        text: 'Successful AI recruitment integration requires a thoughtful approach that balances automation with human oversight. Companies should start with pilot programs, focusing on high-volume positions where efficiency gains are most apparent.',
      },
    ],
  },
];

export const blogHeroSectionData = {
  titleLines: [
    { text: 'How AI is Transforming Hiring:', CSSProperties: { color: 'var(--accent)' } },
    { text: 'A Synthesis of Efficiency and Strategy' },
  ],
  descriptions: [
    'Artificial intelligence is reshaping talent acquisition, offering unprecedented speed and precision in candidate screening, matching, and engagement. As organizations face growing pressure to hire faster while maintaining quality, AI-driven recruitment tools are becoming essential for competitive advantage.',
    'This article explores how AI technologies are revolutionizing the hiring landscape, from resume parsing to predictive analytics, and what this means for HR professionals and job seekers alike.',
  ],
  tag: 'Management',
  author: 'Dejvi Vishkulea',
  date: '17 Jan 2024',
  showDecorations: true,
};
