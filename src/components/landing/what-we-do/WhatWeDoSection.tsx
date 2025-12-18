import { whatWeDoCards } from '@/lib/consts/common';
import WhatWeDoCard from './WhatWeDoCard';
import styles from '@/styles/landing/whatWeDoSection.module.scss';

function WhatWeDoSection() {
  return (
    <section className="sectionWrapper" style={{ background: 'var(--gray-background)' }}>
      <div className="contentContainer">
        <h2 className="sectionTitle">What We Do</h2>
        <div className={`cardsGrid ${styles.twoColumnGrid}`}>
          {whatWeDoCards.map((card, index) => (
            <WhatWeDoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
