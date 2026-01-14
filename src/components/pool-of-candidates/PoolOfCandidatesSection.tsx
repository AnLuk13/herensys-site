'use client';

import { useState } from 'react';
import styles from '@/styles/pool-of-candidates/poolOfCandidates.module.scss';
import CandidateCard from './CandidateCard';
import FilterButtons from '@/components/globals/FilterButtons';
import type { Candidate, PoolOfCandidatesSectionProps } from '@/types/sections';

function PoolOfCandidatesSection({ data, background }: PoolOfCandidatesSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Generate dynamic filters from candidate regions
  const uniqueRegions = Array.from(new Set(data?.map(candidate => candidate.region)));
  const filters = [
    { value: 'all', label: 'All' },
    ...uniqueRegions.map(region => ({ value: region, label: region })),
  ];

  const filteredCandidates =
    activeFilter === 'all' ? data : data?.filter(candidate => candidate.region === activeFilter);

  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>Pool of Candidates</h2>

        <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <FilterButtons
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className={styles.candidatesGrid}>
          {filteredCandidates?.map((candidate, index) => (
            <CandidateCard key={index} {...candidate} />
          ))}
        </div>
      </div>
    </section>
  );
}

PoolOfCandidatesSection.displayName = 'poolOfCandidatesSection';

export default PoolOfCandidatesSection;
