'use client';

import { formatDate } from '@/lib/utils/dateMethods';
import styles from '@/styles/pool-of-candidates/candidateDetails.module.scss';
import type { CandidateDetailsSectionProps, CandidateSection } from '@/types/sections';
import { v4 } from 'uuid';

function CandidateDetailsSection({ data, background }: CandidateDetailsSectionProps) {
  const renderSection = (section: CandidateSection) => {
    if (section.type === 'text') {
      return (
        <div key={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <p className={styles.summaryText}>{section.content}</p>
        </div>
      );
    } else {
      return (
        <div key={section.id} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <ul className={styles.listContainer}>{renderList(section.items)}</ul>
        </div>
      );
    }
  };

  const renderList = (items: any[]) => {
    if (!Array.isArray(items) || items.length === 0) return null;

    // Find specific items by key
    const subtitleItem = items.find(item => item?.key === 'subtitle');
    const periodItem = items.find(item => item?.key === 'period');
    const responsibilitiesItem = items.find(item => item?.key === 'responsibilities');

    // Get all other items (excluding subtitle, period, responsibilities)
    const otherItems = items.filter(
      item => item?.key && !['subtitle', 'period', 'responsibilities'].includes(item.key),
    );

    return (
      <>
        {/* Render subtitle first */}
        {subtitleItem && <p className={styles.itemText}>{subtitleItem.value}</p>}

        {/* Render period second */}
        {periodItem && (
          <p className={styles.period}>
            {Array.isArray(periodItem.value)
              ? periodItem.value.map((date: string) => formatDate(date)).join(' - ')
              : formatDate(periodItem.value)}
          </p>
        )}

        {/* Render other fields */}
        {otherItems.map(item => {
          const value = item.value;
          if (Array.isArray(value)) {
            return (
              <ul key={item.key} className={styles.responsibilitiesList}>
                {value.map((listItem: string) => (
                  <li key={v4()} className={styles.responsibilityItem}>
                    {listItem}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={item.key} className={styles.text}>
              {value}
            </p>
          );
        })}

        {/* Render responsibilities last */}
        {responsibilitiesItem && Array.isArray(responsibilitiesItem.value) && (
          <ul className={styles.responsibilitiesList}>
            {responsibilitiesItem.value.map((item: string) => (
              <li key={v4()} className={styles.responsibilityItem}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer" style={{ alignItems: 'center' }}>
        <div className={styles.detailsContainer}>
          {data?.sections?.map(section => renderSection(section))}
        </div>
      </div>
    </section>
  );
}

CandidateDetailsSection.displayName = 'candidateDetailsSection';

export default CandidateDetailsSection;
