'use client';

import React from 'react';
import styles from './offerButton.module.scss';

function OfferButton({ text, customClass }: { text: string; customClass?: string }) {
  return (
    <a href="#" className={`${styles.offerBtn} ${customClass}`}>
      {text}
    </a>
  );
}

export default OfferButton;
