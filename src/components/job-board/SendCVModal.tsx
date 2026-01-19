'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/jobs-board/sendCVModal.module.scss';
import OfferButton from '../buttons/OfferButton';
import PhoneInputField from '@/components/form/PhoneInputField';
import phone from 'phone';

interface SendCVModalProps {
  isOpen?: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function SendCVModal({ isOpen, onClose, jobTitle }: SendCVModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cvFile: null as File | null,
    cvFileBase64: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cvFile: '',
  });
  const [selectedCountry, setSelectedCountry] = useState('md');
  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: keyof typeof formData, value: any) => {
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
      cvFile: '',
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
    if (!formData.cvFile) {
      newErrors.cvFile = 'CV file is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  // Focus first input when modal opens
  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isOpen]);

  // Trap focus within modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const modal = modalRef.current;
        if (!modal) return;

        const focusableElements = modal.querySelectorAll(
          'button, input, textarea, select, a[href]',
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    if (!formData.agreeToTerms) {
      return;
    }

    const { agreeToTerms, cvFile, ...newFormData } = formData;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/send-cv`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newFormData,
          jobTitle,
          cvFileType: cvFile?.type,
          cvFile: formData.cvFileBase64,
        }),
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cvFile: null,
        cvFileBase64: '',
        agreeToTerms: false,
      });
    } catch (error) {
      console.error('Send CV error:', error);
    } finally {
      onClose();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      try {
        const base64 = await convertFileToBase64(file);
        setFormData({ ...formData, cvFile: file, cvFileBase64: base64 });
        setErrors(prev => ({ ...prev, cvFile: '' }));
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={() => {
        onClose();
        setErrors({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          cvFile: '',
        });
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modalContent} onClick={e => e.stopPropagation()} ref={modalRef}>
        <button
          className={styles.closeButton}
          onClick={() => {
            onClose();
            setErrors({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              cvFile: '',
            });
          }}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <h2 className={styles.modalTitle} id="modal-title">
          Send CV for {jobTitle} position
        </h2>

        <form
          //  onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="firstName"
                ref={firstInputRef}
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
                hasError={!!errors.phone}
                id="phone"
                name="phone"
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cvFile" className={styles.fileInputWrapper}>
              <div className={`${styles.fileInput} ${errors.cvFile ? styles.inputError : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  {formData.cvFile ? formData.cvFile.name : 'Choose file (PDF, DOC, DOCX)'}
                </span>
              </div>
              <input
                type="file"
                id="cvFile"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className={styles.hiddenFileInput}
              />
            </label>
            {errors.cvFile && <span className={styles.errorText}>{errors.cvFile}</span>}
          </div>

          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={e => handleInputChange('agreeToTerms', e.target.checked)}
                className={styles.checkbox}
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
          </div>

          <OfferButton
            text="Send CV"
            customClass={styles.submitButton}
            onClick={handleSubmit}
            href=""
          />
        </form>
      </div>
    </div>
  );
}
