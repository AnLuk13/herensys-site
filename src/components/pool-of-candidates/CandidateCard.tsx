import BlurImage from '@/components/helper/BlurImage';
import Link from 'next/link';
import styles from '@/styles/pool-of-candidates/candidateCard.module.scss';
import { objectFit } from '@/lib/utils/cssHelpers';
import { Candidate } from '@/types/sections';
import ArrowRight from '../svg-icons/ArrowRight';

function CandidateCard({ id, name, image, flag, position, region }: Candidate) {
  return (
    <Link href={`/pool-of-candidates/${id}`} className={styles.candidateCard}>
      <div className={styles.imageWrapper}>
        <BlurImage
          src={image}
          alt={name}
          width={200}
          height={200}
          className={styles.candidateImage}
          style={objectFit.cover}
        />
      </div>
      <div className={styles.candidateInfo}>
        <div className={styles.candidateHeader}>
          <h3 className={styles.candidateName}>{name}</h3>
          <BlurImage
            src={`https://flagcdn.com/${flag}.svg`}
            alt={`${name} country flag`}
            width={25}
            height={15}
            className={styles.flagImage}
            style={objectFit.cover}
          />
        </div>
        <p className={styles.candidatePosition}>{position}</p>
        <p className={styles.candidateRole}>{region}</p>
        <p className={styles.findOutMoreButton}>
          Find Out More
          <ArrowRight />
        </p>
      </div>
    </Link>
  );
}

export default CandidateCard;
