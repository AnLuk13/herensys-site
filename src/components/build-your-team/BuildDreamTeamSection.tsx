import styles from '@/styles/globals/buildDreamTeam.module.scss';
import RoleCard from './RoleCard';

interface BuildDreamTeamSectionProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  cards: Array<{
    title: string;
    subtitle: string;
    roles: string[];
    IconComponent: React.ComponentType<any>;
  }>;
  background?: string;
  showTitleDescription?: boolean;
}

function BuildDreamTeamSection({
  sectionTitle,
  sectionSubtitle,
  cards,
  background = 'var(--white)',
  showTitleDescription = true,
}: BuildDreamTeamSectionProps) {
  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        {showTitleDescription && (
          <div className={styles.headerContent}>
            <h2 className="sectionTitle">{sectionTitle}</h2>
            {sectionSubtitle && <p className="sectionSubtitle">{sectionSubtitle}</p>}
          </div>
        )}
        <div className="cardsGrid">
          {cards.map((role, index) => (
            <RoleCard key={index} {...role} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildDreamTeamSection;
