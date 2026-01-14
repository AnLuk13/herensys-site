import React from 'react';
import styles from './offerButton.module.scss';

function OfferButton({
  text,
  customClass,
  href,
  disabled = false,
  onClick,
}: {
  text: string;
  customClass?: string;
  href?: string;
  disabled?: boolean;
  onClick?: (e: any) => any;
}) {
  return (
    <a
      onClick={onClick}
      href={href ?? 'https://calendly.com/ecaterina-zidu-sommetglobal'}
      target="_blank"
      // rel="noopener noreferrer"
      className={`${styles.offerBtn} ${customClass} ${disabled ? styles.disabled : ''}`}
    >
      {text}
    </a>
  );
}

export default OfferButton;
