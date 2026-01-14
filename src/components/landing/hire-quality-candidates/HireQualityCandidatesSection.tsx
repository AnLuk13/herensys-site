import styles from '@/styles/landing/hireQualityCandidates.module.scss';
import QualityCard from './QualityCard';
import OfferButton from '../../buttons/OfferButton';
import FragmentedWorld from '../../svg-icons/details/FragmentedWorld';
import home from '@/data/home.json';

function HireQualityCandidatesSection() {
  return (
    <section
      className="sectionWrapper"
      style={{ background: 'var(--gray-background)', position: 'relative' }}
    >
      <div className="contentContainer">
        <h2 className="sectionTitle">Hire High Quality Candidates</h2>
        <div className="cardsGrid">
          {home.hireQualityCandidatesData.map((card, index) => (
            <QualityCard key={index} {...card} />
          ))}
        </div>
        <div className={styles.callToAction}>
          <OfferButton text="See Our Talent Network" href="/pool-of-candidates" />
        </div>
      </div>
      <div className={styles.fragmentedWorld}>
        <FragmentedWorld />
      </div>
    </section>
  );
}

export default HireQualityCandidatesSection;
