'use client';

import { useState } from 'react';
import styles from '@/styles/blog/newsletterCard.module.scss';
import PaperPlaneIcon from '../svg-icons/navigation/PaperPlaneIcon';
import OfferButton from '@/components/buttons/OfferButton';

function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [subscribedMessage, setSubscribedMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setSubscribedMessage('Email is required');
      setMessageType('error');
      setTimeout(() => setSubscribedMessage(''), 5000);
      return;
    }
    if (!emailRegex.test(email)) {
      setSubscribedMessage('Please enter a valid email address');
      setMessageType('error');
      setTimeout(() => setSubscribedMessage(''), 5000);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        setSubscribedMessage('Subscription failed. Please try again.');
        setMessageType('error');
        return;
      }
      if (response.status === 200) {
        setSubscribedMessage('You are already subscribed.');
        setMessageType('success');
        return;
      }
      setEmail('');
      setSubscribedMessage('Subscribed successfully!');
      setMessageType('success');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscribedMessage('Subscription failed. Please try again.');
      setMessageType('error');
    } finally {
      setTimeout(() => setSubscribedMessage(''), 5000); // Hide message after 5 seconds
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
          {subscribedMessage && (
            <p
              className={`${styles.successMessage} ${messageType === 'error' ? styles.errorMessage : ''}`}
            >
              {subscribedMessage}
            </p>
          )}
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
