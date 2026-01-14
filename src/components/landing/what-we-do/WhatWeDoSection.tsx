import WhatWeDoCard from './WhatWeDoCard';
import styles from '@/styles/landing/whatWeDoSection.module.scss';
import homeData from '@/data/home.json';
import { mapCardsWithIcons } from '@/lib/utils/iconMapper';

function WhatWeDoSection() {
  const cardsWithIcons = mapCardsWithIcons(homeData.whatWeDoCards);

  return (
    <section className="sectionWrapper" style={{ background: 'var(--gray-background)' }}>
      <div className="contentContainer">
        <h2 className="sectionTitle">What We Do</h2>
        <div className={`cardsGrid ${styles.twoColumnGrid}`}>
          {cardsWithIcons.map((card, index) => (
            <WhatWeDoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
