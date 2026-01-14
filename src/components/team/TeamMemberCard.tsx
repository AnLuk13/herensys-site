import BlurImage from '@/components/helper/BlurImage';
import styles from '@/styles/about-us/teamMemberCard.module.scss';
import { objectFit } from '@/lib/utils/cssHelpers';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.imageWrapper}>
        <BlurImage
          src={image}
          alt={name}
          // fill
          width={200}
          height={300}
          className={styles.memberImage}
          style={objectFit.cover}
        />
      </div>
      {/* <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
      </div> */}
    </div>
  );
}

export default TeamMemberCard;
