'use client';

import CandidateDetailsSection from '@/components/candidate-details/CandidateDetailsSection';
import CandidateHeroSection from '@/components/hero/CandidateHeroSection';
import SimilarRolesSection from '@/components/pool-of-candidates/SimilarRolesSection';
import CTASection from '@/components/CTASection';
import { useApiQuery } from '@/lib/hooks/useRetrieveData';
import type { Candidate } from '@/types/sections';
import { use } from 'react';
import { MoonLoader } from 'react-spinners';

type PoolOfCandidatesPersonProps = {
  params: Promise<{ id: string }>;
  initialCandidate?: any;
  initialAllCandidates?: any[];
};

function PoolOfCandidatesPerson({
  params,
  initialCandidate,
  initialAllCandidates,
}: PoolOfCandidatesPersonProps) {
  const { id } = use(params);

  const {
    data: candidate,
    isLoading: candidateLoading,
    error: candidateError,
  } = useApiQuery(`/candidates/${id}`, `/candidates/${id}`, initialCandidate);

  const {
    data: allCandidatesData,
    isLoading: allCandidatesLoading,
    error: allCandidatesError,
  } = useApiQuery('/candidates', '/candidates', initialAllCandidates);

  const similarCandidates = allCandidatesData?.filter((c: Candidate) => c.id !== id) || [];

  const isLoading = candidateLoading || allCandidatesLoading;
  const error = candidateError || allCandidatesError;

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80dvh',
          width: '100%',
        }}
      >
        <MoonLoader color="var(--accent-primary)" size={60} />
      </div>
    );
  }

  if (error) {
    console.error(`API error:`, error);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50dvh',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontWeight: 'bold',
              fontSize: '4rem',
              marginBottom: '0.5rem',
              color: 'var(--accent-primary)',
            }}
          >
            Failed to load content
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '2rem',
              color: 'var(--text-secondary)',
            }}
          >
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    );
  }

  if (!candidate || !allCandidatesData) {
    return null;
  }

  const ctaSection = {
    title: `Ready For Business in ${candidate.region}? Start Here`,
    description: `Get started with human resources best practices and hiring in ${candidate.region}.`,
    buttonText: 'Schedule a Call',
    background: 'var(--gray-background)',
  };

  return (
    <main id="main-content">
      <CandidateHeroSection data={candidate} />
      <CandidateDetailsSection data={candidate} />
      <SimilarRolesSection data={similarCandidates} />
      <CTASection {...ctaSection} displayGlobe />
    </main>
  );
}

export default PoolOfCandidatesPerson;
