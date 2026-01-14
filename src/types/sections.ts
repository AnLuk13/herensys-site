// ============================================
// Pool of Candidates Types
// ============================================

export interface Candidate {
  id: string;
  name: string;
  image: string;
  flag: string;
  position: string;
  skills: string[];
  languages: string[];
  region: string;
  contractorFee: {
    eur: string;
    usd: string;
    gbp: string;
  };
  employeeFee: {
    eur: string;
    usd: string;
    gbp: string;
  };
  recruitmentFee: {
    eur: string;
    usd: string;
    gbp: string;
  };
  employerOfRecordFee: {
    eur: string;
    usd: string;
    gbp: string;
  };
  sections: CandidateSection[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Filter {
  value: string;
  label: string;
}

export interface PoolOfCandidatesSectionProps {
  data?: Candidate[];
  background?: string;
}

// ============================================
// Candidate Details Types
// ============================================

export interface TextSection {
  type: 'text';
  id: string;
  title: string;
  content: string;
}

export interface ListSection {
  type: 'list';
  id: string;
  title: string;
  items: any[];
}

export type CandidateSection = TextSection | ListSection;

export interface CandidateDetailsSectionProps {
  data?: Candidate;
  background?: string;
}

// ============================================
// Job Listing Types
// ============================================

export interface JobListing {
  id: string;
  title: string;
  salary: string;
  jobType: string;
  location: string;
  headquarter: string;
  duties: string[];
  requirements: string[];
  niceToHave: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface JobListingSectionProps {
  data?: JobListing[];
}

export interface SendCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

// ============================================
// Blog Types
// ============================================

export interface BlogPost {
  id: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  createdAt?: Date;
  updatedAt?: Date;
  htmlContent?: string;
}

export interface BlogListSectionProps {
  data?: BlogPost[];
  background?: string;
}

export interface AllBlogPostsSectionProps {
  data?: BlogPost[];
  background?: string;
}

export interface BlogContentSectionProps {
  data?: BlogPost;
}

export interface RecentBlogPostsSectionProps {
  data?: BlogPost[];
}

// ============================================
// Common Section Props
// ============================================

export interface BaseSectionProps {
  background?: string;
}
