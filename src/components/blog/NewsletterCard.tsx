'use client';

import { useState } from 'react';
import styles from '@/styles/blog/newsletterCard.module.scss';
import PaperPlaneIcon from '../svg-icons/navigation/PaperPlaneIcon';
import OfferButton from '@/components/buttons/OfferButton';

function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setEmail('');
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000); // Hide message after 5 seconds
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    }
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

        <form
          // onSubmit={handleSubmit}
          className={styles.form}
        >
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/privacy-policy"
              className={styles.privacyLink}
            >
              privacy policy
            </a>
            .
          </p>
          {isSubscribed && <p className={styles.successMessage}>Subscribed successfully!</p>}
          <OfferButton
            text="Subscribe"
            customClass={styles.subscriptionButton}
            onClick={handleSubmit}
            href=""
          />
        </form>
      </div>
    </div>
  );
}

export default NewsletterCard;
