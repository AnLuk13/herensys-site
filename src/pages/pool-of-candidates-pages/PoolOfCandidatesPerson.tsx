'use client';

import FirestoreSection from '@/components/wrapper/FireStoreSection';
import CandidateDetailsSection from '@/components/candidate-details/CandidateDetailsSection';
import CandidateHeroSection from '@/components/hero/CandidateHeroSection';
import SimilarRolesSection from '@/components/pool-of-candidates/SimilarRolesSection';
import { ctaSectionData } from '@/lib/consts/servicesContent';
import CTASection from '@/components/CTASection';
import { useApiQuery } from '@/lib/hooks/useRetrieveData';
import type { Candidate } from '@/types/sections';
import { use } from 'react';
import { MoonLoader } from 'react-spinners';

function PoolOfCandidatesPerson({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const {
    data: candidate,
    isLoading: candidateLoading,
    error: candidateError,
  } = useApiQuery(`/candidates/${id}`, `/candidates/${id}`);

  // Fetch all candidates for similar roles
  const {
    data: allCandidatesData,
    isLoading: allCandidatesLoading,
    error: allCandidatesError,
  } = useApiQuery('/candidates', '/candidates');

  // Filter out the current candidate from similar roles
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
        <MoonLoader color="var(--accent)" size={60} />
      </div>
    );
  }

  if (error) {
    console.error('API error:', error);
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
            style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--error, #d32f2f)' }}
          >
            Failed to load content
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary, #666)' }}>
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    );
  }

  if (!candidate || !allCandidatesData) {
    return null;
  }

  return (
    <main>
      <CandidateHeroSection data={candidate} />
      <CandidateDetailsSection data={candidate} />
      <SimilarRolesSection data={similarCandidates} />
      <CTASection {...ctaSectionData} displayGlobe />
    </main>
  );
}

export default PoolOfCandidatesPerson;
