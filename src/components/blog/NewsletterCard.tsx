'use client';

import { useState } from 'react';
import styles from '@/styles/blog/newsletterCard.module.scss';
import PaperPlaneIcon from '../svg-icons/navigation/PaperPlaneIcon';
import OfferButton from '@/components/buttons/OfferButton';

function NewsletterCard() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <div className={styles.newsletterCard}>
      <div className={styles.iconWrapper}>
        <PaperPlaneIcon />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>Our newsletter</h3>

        <p className={styles.description}>
          No spam. Just the latest releases and tips, interesting articles, and exclusive interviews
          in your inbox every week.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <p className={styles.privacyText}>
            Read about our{' '}
            <a href="/privacy-policy" className={styles.privacyLink}>
              privacy policy
            </a>
            .
          </p>
          <OfferButton text="Subscribe" customClass={styles.subscriptionButton} />
        </form>
      </div>
    </div>
  );
}

export default NewsletterCard;
