'use client';

import CandidateCard from './CandidateCard';
import styles from '@/styles/pool-of-candidates/similarRoles.module.scss';
import type { Candidate } from '@/types/sections';

function SimilarRolesSection({ data }: { data: Candidate[] }) {
  return (
    <section className="sectionWrapper">
      <div className="contentContainer">
        <div className={styles.similarRolesContainer}>
          <h2 className={styles.sectionTitle}>Similar roles</h2>
          <div className={styles.candidatesGrid}>
            {data?.map(candidate => (
              <CandidateCard key={candidate.id} {...candidate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

SimilarRolesSection.displayName = 'similarRolesSection';

export default SimilarRolesSection;
