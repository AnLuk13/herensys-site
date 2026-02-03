'use client';

import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import styles from '@/styles/pool-of-candidates/candidateHeroSection.module.scss';
import BlurImage from '@/components/helper/BlurImage';
import OfferButton from '@/components/buttons/OfferButton';
import type { Candidate } from '@/types/sections';

interface CandidateHeroSectionProps {
  data?: Candidate;
  buttonText?: string;
}

function CandidateHeroSection({
  data,
  buttonText = 'Check availability',
}: CandidateHeroSectionProps) {
  if (!data) return null;

  const {
    name,
    flag,
    position,
    image,
    languages,
    skills,
    contractorFee,
    employeeFee,
    recruitmentFee,
    employerOfRecordFee,
  } = data;
  const [selectedCurrency, setSelectedCurrency] = useState<'eur' | 'usd' | 'gbp'>('eur');

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionBox}>
        <div className={styles.candidateProfile}>
          <div className={styles.profileImageWrapper}>
            <BlurImage src={image} alt={name} fill className={styles.profileImage} />
          </div>
          <div className={styles.candidateInfo}>
            <div className={styles.nameWrapper}>
              <h1 className={styles.candidateName}>{name}</h1>
              <BlurImage
                src={`https://flagcdn.com/w40/${flag.toLowerCase()}.png`}
                alt={flag}
                width={40}
                height={30}
                className={styles.flag}
              />
            </div>
            <p className={styles.candidatePosition}>{position}</p>

            <div className={styles.detailsSection}>
              <h3 className={styles.sectionLabel}>Languages</h3>
              <div className={styles.tagList}>
                {languages.map((lang, index) => (
                  <span key={index} className={styles.tag}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.detailsSection}>
              <h3 className={styles.sectionLabel}>Skills</h3>
              <div className={styles.tagList}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bookingCard}>
          <h2 className={styles.cardTitle}>Book this talent</h2>
          <p className={styles.cardSubtitle}>
            Connect with talent in 24 hours qualified by our recruitments team
          </p>

          <div className={styles.currencySelector}>
            <label className={styles.currencyLabel}>
              <Radio
                checked={selectedCurrency === 'eur'}
                onChange={() => setSelectedCurrency('eur')}
                value="eur"
                name="currency-radio"
                sx={{
                  color: 'var(--accent-primary)',
                  '&.Mui-checked': {
                    color: 'var(--accent-primary)',
                  },
                }}
              />
              <span className={styles.currencyButton}>€</span>
            </label>
            <label className={styles.currencyLabel}>
              <Radio
                checked={selectedCurrency === 'usd'}
                onChange={() => setSelectedCurrency('usd')}
                value="usd"
                name="currency-radio"
                sx={{
                  color: 'var(--accent-primary)',
                  '&.Mui-checked': {
                    color: 'var(--accent-primary)',
                  },
                }}
              />
              <span className={styles.currencyButton}>$</span>
            </label>
            <label className={styles.currencyLabel}>
              <Radio
                checked={selectedCurrency === 'gbp'}
                onChange={() => setSelectedCurrency('gbp')}
                value="gbp"
                name="currency-radio"
                sx={{
                  color: 'var(--accent-primary)',
                  '&.Mui-checked': {
                    color: 'var(--accent-primary)',
                  },
                }}
              />
              <span className={styles.currencyButton}>£</span>
            </label>
          </div>

          <div className={styles.ratesSection}>
            <div className={styles.rateRow}>
              <span className={styles.rateLabel}>Contractor</span>
              <span className={styles.rateValue}>
                {selectedCurrency === 'eur'
                  ? contractorFee.eur
                  : selectedCurrency === 'usd'
                    ? contractorFee.usd
                    : contractorFee.gbp}
              </span>
            </div>
            <div className={styles.rateRow}>
              <span className={styles.rateLabel}>Employee</span>
              <span className={styles.rateValue}>
                {selectedCurrency === 'eur'
                  ? employeeFee.eur
                  : selectedCurrency === 'usd'
                    ? employeeFee.usd
                    : employeeFee.gbp}
              </span>
            </div>
          </div>

          <div className={styles.feesSection}>
            <h3 className={styles.feesTitle}>Our fees</h3>
            <div className={styles.feeRow}>
              <span className={styles.feeLabel}>Recruitment fee</span>
              <span className={styles.feeValue}>
                {selectedCurrency === 'eur'
                  ? recruitmentFee.eur
                  : selectedCurrency === 'usd'
                    ? recruitmentFee.usd
                    : recruitmentFee.gbp}
              </span>
            </div>
            <div className={styles.feeRow}>
              <span className={styles.feeLabel}>EOR</span>
              <span className={styles.feeValue}>
                {selectedCurrency === 'eur'
                  ? employerOfRecordFee.eur
                  : selectedCurrency === 'usd'
                    ? employerOfRecordFee.usd
                    : employerOfRecordFee.gbp}
              </span>
            </div>
          </div>

          <OfferButton text={buttonText} />
        </div>
      </div>
    </section>
  );
}

CandidateHeroSection.displayName = 'candidateHeroSection';

export default CandidateHeroSection;
