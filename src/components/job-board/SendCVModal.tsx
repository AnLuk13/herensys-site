'use client';

import { useState } from 'react';
import styles from '@/styles/jobs-board/sendCVModal.module.scss';

interface SendCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

function SendCVModal({ isOpen, onClose, jobTitle }: SendCVModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cvFile: null as File | null,
    agreeToTerms: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFile: e.target.files[0] });
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className={styles.modalTitle}>Send CV</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Julia"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="William"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="julia@gmail.com"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Phone <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="julia@gmail.com"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cvFile" className={styles.fileInputWrapper}>
              <div className={styles.fileInput}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{formData.cvFile ? formData.cvFile.name : 'julia@gmail.com'}</span>
              </div>
              <input
                type="file"
                id="cvFile"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className={styles.hiddenFileInput}
              />
            </label>
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={e => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className={styles.checkbox}
                required
              />
              <span className={styles.checkboxText}>
                I confirm that I have read and understood the data protection policy and agree to
                the terms and conditions.
              </span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send CV
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendCVModal;
