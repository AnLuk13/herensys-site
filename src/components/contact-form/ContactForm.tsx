'use client';

import React, { useState } from 'react';
import styles from '@/styles/globals/contactForm.module.scss';
import PhoneInputField from '@/components/form/PhoneInputField';
import phone from 'phone';
import OfferButton from '../buttons/OfferButton';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [selectedCountry, setSelectedCountry] = useState('md');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const isPhoneValid = () => {
    const result = phone(formData.phone, {
      country: selectedCountry,
      validateMobilePrefix: false,
    });
    return result.isValid;
  };

  const validateInputs = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    };

    if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name is required';
    }
    if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name is required';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!isPhoneValid()) {
      newErrors.phone = 'Valid phone is required';
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Please tell us more (at least 10 characters)';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateInputs()) return;
    if (!formData.agreeToTerms) {
      alert('You must agree to the data protection policy.');
      return;
    }

    setIsSubmitting(true);

    try {
      const phoneWithPlus = formData.phone.startsWith('+') ? formData.phone : `+${formData.phone}`;
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone: phoneWithPlus }),
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreeToTerms: false,
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="sectionWrapper" style={{ background: 'var(--white)' }}>
      <div className="contentContainer">
        <h2 className="sectionTitle">Questions? Ask away!</h2>

        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  First name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={e => handleInputChange('firstName', e.target.value)}
                  placeholder="Julia"
                  className={`${styles.input} ${errors.firstName ? styles.inputError : ''}`}
                />
                {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  Last name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={e => handleInputChange('lastName', e.target.value)}
                  placeholder="William"
                  className={`${styles.input} ${errors.lastName ? styles.inputError : ''}`}
                />
                {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
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
                  onChange={e => handleInputChange('email', e.target.value)}
                  placeholder="julia@gmail.com"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone <span className={styles.required}>*</span>
                </label>
                <PhoneInputField
                  value={formData.phone}
                  selectedCountry={selectedCountry}
                  onChange={(value: string, country: any) => {
                    handleInputChange('phone', value);
                    if (country) setSelectedCountry(country.countryCode);
                  }}
                />
                {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Tell us a bit about you <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={e => handleInputChange('message', e.target.value)}
                placeholder="Let us know"
                rows={5}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              />
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={e => handleInputChange('agreeToTerms' as any, e.target.checked as any)}
                className={styles.checkbox}
                required
              />
              <span className={styles.checkboxText}>
                I confirm that I have read and understood the{' '}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.privacyLink}
                >
                  data protection policy
                </a>{' '}
                and agree to the terms and conditions.
              </span>
            </label>

            {isSuccess && (
              <div className={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <OfferButton
              text={`${isSubmitting ? 'Sending...' : 'Send message'}`}
              customClass={styles.submitButton}
              disabled={isSubmitting}
              onClick={handleSubmit}
              href=""
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
