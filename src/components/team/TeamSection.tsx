import styles from '@/styles/about-us/teamSection.module.scss';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  sectionTitle: string;
  teamMembers: TeamMember[];
  background?: string;
}

function TeamSection({ sectionTitle, teamMembers, background }: TeamSectionProps) {
  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
