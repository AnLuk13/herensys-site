import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/pool-of-candidates/candidateCard.module.scss';
import { objectFit } from '@/lib/consts/common';
import { Candidate } from '@/types/sections';
import ArrowRight from '../svg-icons/ArrowRight';

function CandidateCard({ id, name, image, flag, position, region }: Candidate) {
  return (
    <div className={styles.candidateCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          fill
          className={styles.candidateImage}
          style={objectFit.cover}
        />
      </div>
      <div className={styles.candidateInfo}>
        <div className={styles.candidateHeader}>
          <h3 className={styles.candidateName}>{name}</h3>
          <Image
            src={`https://flagcdn.com/${flag}.svg`}
            alt={`${name} country flag`}
            width={28}
            height={20}
            className={styles.flagImage}
          />
        </div>
        <p className={styles.candidatePosition}>{position}</p>
        <p className={styles.candidateRole}>{region}</p>
        <Link href={`/pool-of-candidates/${id}`} className={styles.findOutMoreButton}>
          Find Out More
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default CandidateCard;
