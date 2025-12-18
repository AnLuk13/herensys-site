import Image from 'next/image';
import styles from '@/styles/about-us/teamMemberCard.module.scss';
import { objectFit } from '@/lib/consts/common';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <div className={styles.teamMemberCard}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={name} fill className={styles.memberImage} style={objectFit.cover} />
      </div>
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberRole}>{role}</p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
