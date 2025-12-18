import { CSSProperties } from 'react';
import RecruitmentIcon from '@/components/svg-icons/details/RecruitmentIcon';
import BPOIcon from '@/components/svg-icons/details/BPOIcon';
import EORIcon from '@/components/svg-icons/details/EORIcon';
import ConsultingIcon from '@/components/svg-icons/details/ConsultingIcon';
import OrangeRectangularIcon from '@/components/svg-icons/details/OrangeRectangularIcon';
import OrangeTriangleIcon from '@/components/svg-icons/details/OrangeTriangleIcon';
import OrangeCircleIcon from '@/components/svg-icons/details/OrangeCircleIcon';

export const whatWeDoCards = [
  {
    icon: 'recruitment',
    IconComponent: RecruitmentIcon,
    title: 'RECRUITMENT',
    description:
      'We hire vetted talent fast — engineers, finance, CX, and creatives. Local expertise + cultural fit to scale your team in weeks, not months. Shortlist in 7 days.',
    buttonText: 'See our Talent Network',
    buttonHref: '/global-recruiting',
  },
  {
    icon: 'bpo',
    IconComponent: BPOIcon,
    title: 'BPO',
    description:
      'Our BPO model takes over key business functions—recruitment, HR management, payroll, and performance tracking—allowing you to focus on growth. We run operations with clear SLAs, rigorous QA, and transparent pricing, using dedicated teams and streamlined processes that deliver measurable results.',
  },
  {
    icon: 'eor',
    IconComponent: EORIcon,
    title: 'EOR',
    description:
      'Specializing in IT-centric processes, we streamline non-core functions—from software engineers and technical helpdesk services to back-office operations and data management—allowing you to refocus resources on innovation and growth.',
  },
  {
    icon: 'consulting',
    IconComponent: ConsultingIcon,
    title: 'CONSULTING',
    description:
      "We're a global partner for businesses navigating the intricate landscape of international employment law. We specialize in empowering organizations to build, manage, and scale their multinational workforce with confidence, ensuring compliance across borders while mitigating legal risks.",
  },
];

export const buildDreamTeamCards = [
  {
    title: 'IT',
    subtitle: 'Information Technology',
    roles: [
      'IT Engineers',
      'Front End Developers',
      'Back End Developers',
      'UI & UX Designers',
      'Full Stack Engineers',
    ],
    IconComponent: OrangeCircleIcon,
  },
  {
    title: 'OPERATIONS',
    subtitle: 'Finance & Back Office',
    roles: [
      'Accountants',
      'Payroll Specialists',
      'HR & Recruiters',
      'Operation Managers',
      'Project Managers',
    ],
    IconComponent: OrangeTriangleIcon,
  },
  {
    title: 'SALES',
    subtitle: 'Lead Generation',
    roles: [
      'Lead Gen Specialists',
      'Content Managers',
      'Social Media Managers',
      'Community Managers',
      'Copywriters',
    ],
    IconComponent: OrangeRectangularIcon,
  },
];

export const buildDreamTeamSection = {
  sectionTitle: 'Build Your Dream Team!',
  sectionSubtitle: "We're Recruiting Top Talent With the Following Expertise:",
  cards: buildDreamTeamCards,
  background: 'var(--white)',
};

export const countriesPresenceCards = [
  {
    name: 'LATAM Coffee Maker',
    company: 'LATAM Coffee Maker',
    image: 'https://picsum.photos/200/300',
    text: 'Outsourcing sales to local experts was a smart move. In the first month, we saw positive by connecting with customers who understand the market.',
  },
  {
    name: 'LATAM Coffee Maker',
    company: 'LATAM Coffee Maker',
    image: 'https://picsum.photos/200/300',
    text: 'Outsourcing sales to local experts was a smart move. In the first month, we saw positive by connecting with customers who understand the market.',
  },
  {
    name: 'LATAM Coffee Maker',
    company: 'LATAM Coffee Maker',
    image: 'https://picsum.photos/200/300',
    text: 'Outsourcing sales to local experts was a smart move. In the first month, we saw positive by connecting with customers who understand the market.',
  },
];

export const hireQualityCandidatesData = [
  {
    title: 'Top Skills',
    items: ['Onboarding test', 'Background checks', 'Ongoing training', 'Performance reviews'],
  },
  {
    title: 'High Retention',
    items: [
      'Guaranteed to stay + 5 years',
      'Proud to be our team member',
      'Team building & events',
      'Unmatched benefits',
    ],
  },
  {
    title: 'Speedy Onboarding',
    items: [
      'Recruiting = 7 Days',
      'Interviews + tests = 1 Day',
      'Onboarding = 48hrs',
      'Start working = Tomorrow',
    ],
  },
];

export const countriesData = [
  {
    name: 'Albania',
    image: '/assets/images/countries/albania.jpg',
    flag: '/assets/images/flags/albania.svg',
    region: 'balkans',
  },
  {
    name: 'Algeria',
    image: '/assets/images/countries/algeria.jpg',
    flag: '/assets/images/flags/algeria.svg',
    region: 'north-africa',
  },
  {
    name: 'Armenia',
    image: '/assets/images/countries/armenia.jpg',
    flag: '/assets/images/flags/armenia.svg',
    region: 'eastern-europe',
  },
  {
    name: 'Georgia',
    image: '/assets/images/countries/georgia.jpg',
    flag: '/assets/images/flags/georgia.svg',
    region: 'eastern-europe',
  },
  {
    name: 'Kosovo',
    image: '/assets/images/countries/kosovo.jpg',
    flag: '/assets/images/flags/kosovo.svg',
    region: 'balkans',
  },
  {
    name: 'Moldova',
    image: '/assets/images/countries/moldova.jpg',
    flag: '/assets/images/flags/moldova.svg',
    region: 'eastern-europe',
  },
];

export const candidatesData = [
  {
    name: 'Thomas Kuza',
    image: '/assets/images/candidates/candidate1.jpg',
    flag: 'ro',
    position: 'Executive Director,',
    role: 'Account Management',
    region: 'eastern-europe',
  },
  {
    name: 'Thomas Kuza',
    image: '/assets/images/candidates/candidate2.jpg',
    flag: 'ro',
    position: 'Executive Director,',
    role: 'Account Management',
    region: 'balkans',
  },
  {
    name: 'Thomas Kuza',
    image: '/assets/images/candidates/candidate3.jpg',
    flag: 'ro',
    position: 'Executive Director,',
    role: 'Account Management',
    region: 'north-africa',
  },
  {
    name: 'Thomas Kuza',
    image: '/assets/images/candidates/candidate4.jpg',
    flag: 'ro',
    position: 'Executive Director,',
    role: 'Account Management',
    region: 'eastern-europe',
  },
];

export const regionFilters = [
  { label: 'All', value: 'all' },
  { label: 'North Africa', value: 'north-africa' },
  { label: 'Balkans', value: 'balkans' },
  { label: 'Eastern Europe', value: 'eastern-europe' },
];

export const brands = [
  {
    name: 'Marriott Hotels & Resorts',
    logo: '/assets/images/brands/marriott.svg',
  },
  {
    name: 'Emirates',
    logo: '/assets/images/brands/emirates.svg',
  },
  {
    name: 'Ritz Carlton',
    logo: '/assets/images/brands/ritz-carlton.svg',
  },
  {
    name: 'American Airlines',
    logo: '/assets/images/brands/american-airlines.svg',
  },
  {
    name: 'TAJ Hotels',
    logo: '/assets/images/brands/taj.svg',
  },
  {
    name: 'Hilton',
    logo: '/assets/images/brands/hilton.svg',
  },
];

export const teamMembers = [
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member1.jpg',
  },
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member2.jpg',
  },
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member3.jpg',
  },
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member4.jpg',
  },
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member5.jpg',
  },
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member6.jpg',
  },
  {
    name: 'Ecaterina Zidu',
    role: 'CEO',
    image: '/assets/images/team/member7.jpg',
  },
];

export const recentBlogPosts = [
  {
    author: 'Dejvi Vishkulea',
    date: '16 Jan 2024',
    title: "Unlock North Macedonia's Remote Talent: The Hidden...",
    description: 'Mental models are simple expressions of complex processes or relationships.',
    image: '/assets/images/blog/north-macedonia.jpg',
    tag: 'Frameworks',
    link: '/blog/unlock-north-macedonia-remote-talent',
  },
  {
    author: 'Claudine Viix',
    date: '16 Jan 2024',
    title: "Albania: Southeast Europe's Rising Tech Pow...",
    description:
      'Introduction to Wireframing and Its Principles. Learn from the best in the industry.',
    image: '/assets/images/blog/albania-tech.jpg',
    tag: 'Design',
    link: '/blog/albania-southeast-europe-rising-tech',
  },
  {
    author: 'Dejvi Vishkulea',
    date: '17 Jan 2024',
    title: 'How AI is Transforming Hiring: A Synthesis of Eff...',
    description:
      'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    image: '/assets/images/blog/ai-transforming-hiring.jpg',
    tag: 'Management',
    link: '/blog/ai-transforming-hiring',
  },
];

// export const languages = [
//   { value: 'ro', label: 'Moldova', flag: 'https://flagcdn.com/w320/md.png' },
//   { value: 'ru', label: 'Russia', flag: 'https://flagcdn.com/w320/ru.png' },
//   { value: 'en', label: 'English', flag: 'https://flagcdn.com/w320/us.png' },
// ];

// typesCards
export const objectFit: Record<string, CSSProperties> = {
  cover: { objectFit: 'cover' },
  contain: { objectFit: 'contain' },
};

export const candidateDetailsData = {
  sections: [
    {
      type: 'text' as const,
      id: 'summary',
      title: 'Professional Summary',
      content:
        'Candidate is a Product Designer with 6 years of experience specializing in end-to-end product development, UX research, and interaction design for fintech platforms. Expertise in designing digital banking interfaces, insurance platforms, and cryptocurrency trading applications. Skilled in user research methodologies, wireframing, and prototyping using industry-standard tools like Figma and Adobe XD. Strong advocate for accessible design, ensuring fintech products meet compliance and regulatory standards. Adept at collaborating with engineers, business analysts, and marketing teams to deliver data-driven design solutions that enhance user engagement.',
    },
    {
      type: 'list' as const,
      id: 'education',
      title: 'Education',
      items: [
        {
          institution: 'Tbilisi State University',
          degree: "Bachelor's Degree, Product Design",
          period: ['2015', '2019'],
        },
      ],
    },
    {
      type: 'list' as const,
      id: 'certifications',
      title: 'Certifications and Trainings',
      items: [
        {
          name: 'Advanced UX Research & Strategy',
          organization: 'Nielsen Norman Group',
          period: ['2022'],
        },
        {
          name: 'Figma Masterclass',
          organization: 'Udemy',
          period: ['2021'],
        },
      ],
    },
    {
      type: 'list' as const,
      id: 'experience',
      title: 'Experience',
      items: [
        {
          role: 'Product Designer',
          industry: 'Insurtech',
          period: ['Apr 2023', 'Present'],
          responsibilities: [
            'Designing intuitive user experiences for online insurance platforms',
            'Conducting A/B testing and user research to improve policy purchasing flows',
            'Optimizing onboarding processes for new fintech customers',
            'Collaborating with developers to ensure seamless UI implementation',
          ],
        },
        {
          role: 'Senior UI/UX Designer',
          industry: 'Wealth Management',
          period: ['Jan 2021', 'Mar 2023'],
          responsibilities: [
            'Developed customer dashboards for investment tracking platforms',
            'Designed interactive prototypes for financial planning tools',
            'Created UX guidelines to streamline multi-platform experiences',
            'Conducted stakeholder interviews to align design with business goals',
          ],
        },
        {
          role: 'UX Designer',
          industry: 'Digital Banking',
          period: ['Sep 2019', 'Dec 2020'],
          responsibilities: [
            'Designed user flows and wireframes for online banking applications',
            'Led usability testing to refine transaction and loan application processes',
            'Developed iconography and typography systems for brand consistency',
            'Enhanced accessibility for fintech platforms through WCAG compliance',
          ],
        },
      ],
    },
  ],
};

export const jobListings = [
  {
    id: 'job-1',
    title: 'UX Designer',
    salary: '$1300',
    jobType: 'Full-time',
    location: 'Remote',
    headquarter: 'USA',
    duties: [
      'Act as a client advocate in conversations with potential clients.',
      'Lead discovery meetings, and the process of solution design for offered projects.',
      'Analyse client-provided documentation and align findings with business objectives.',
      'Conduct product discovery and design workshops with senior stakeholders.',
      'Prepare post-workshop deliverables such as reports, project documentation, and backlogs.',
      'Manage communication with external and internal clients and backlog refinement.',
      'Perform business and system analysis for ongoing projects.',
      'Conduct user training and documentation for external stakeholders.',
      'Support business development by speaking at conferences and participating in content programs.',
      'Maintain and contribute to internal knowledge bases.',
      'Research business and technical topics aligned with strategic goals.',
      'Serve as a subject-matter expert in selected areas.',
    ],
    requirements: [
      '4+ experience in consulting or pre-sales work within the tech industry.',
      'Strong background in business and system analysis.',
      'Demonstrated success in leading clients through discovery phases.',
      'Skilled in conducting workshops with senior stakeholders.',
      'Excellent communication and stakeholder management abilities.',
      'English proficiency at C1 level.',
    ],
    niceToHave: [
      'Experience in public speaking.',
      'German proficiency at C1 level.',
      'Product go-to-market experience.',
      'Exposure to Generative AI (GenAI).',
    ],
  },
  {
    id: 'job-2',
    title: 'UX Designer',
    salary: '$1300',
    jobType: 'Full-time',
    location: 'Remote',
    headquarter: 'USA',
    duties: [
      'Act as a client advocate in conversations with potential clients.',
      'Lead discovery meetings, and the process of solution design for offered projects.',
      'Analyse client-provided documentation and align findings with business objectives.',
      'Conduct product discovery and design workshops with senior stakeholders.',
      'Prepare post-workshop deliverables such as reports, project documentation, and backlogs.',
      'Manage communication with external and internal clients and backlog refinement.',
      'Perform business and system analysis for ongoing projects.',
      'Conduct user training and documentation for external stakeholders.',
      'Support business development by speaking at conferences and participating in content programs.',
      'Maintain and contribute to internal knowledge bases.',
      'Research business and technical topics aligned with strategic goals.',
      'Serve as a subject-matter expert in selected areas.',
    ],
    requirements: [
      '4+ experience in consulting or pre-sales work within the tech industry.',
      'Strong background in business and system analysis.',
      'Demonstrated success in leading clients through discovery phases.',
      'Skilled in conducting workshops with senior stakeholders.',
      'Excellent communication and stakeholder management abilities.',
      'English proficiency at C1 level.',
    ],
    niceToHave: [
      'Experience in public speaking.',
      'German proficiency at C1 level.',
      'Product go-to-market experience.',
      'Exposure to Generative AI (GenAI).',
    ],
  },
];
