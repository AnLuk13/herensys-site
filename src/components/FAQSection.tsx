'use client';

import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styles from '@/styles/globals/faqSection.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sectionTitle: string;
  faqs: FAQItem[];
  background?: string;
  sectionTitleStyle?: React.CSSProperties;
  faqQuestionStyle?: React.CSSProperties;
}

function FAQSection({
  sectionTitle,
  faqs,
  background,
  sectionTitleStyle,
  faqQuestionStyle,
}: FAQSectionProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className={`contentContainer ${styles.faqSectionContainer}`}>
        <h2 className={styles.sectionTitle} style={sectionTitleStyle}>
          {sectionTitle}
        </h2>
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              disableGutters
              elevation={0}
              square
              className={styles.faqItem}
              sx={{
                '&:before': { display: 'none' },
                borderTop: '1px solid var(--border-color, #e0e0e0)',
                '&:last-of-type': { borderBottom: '1px solid var(--border-color, #e0e0e0)' },
                backgroundColor: 'transparent',
              }}
            >
              <AccordionSummary
                expandIcon={
                  <svg
                    className={styles.icon}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                className={styles.faqQuestion}
                style={faqQuestionStyle}
                sx={{
                  padding: 0,
                  minHeight: 'auto',
                  '& .MuiAccordionSummary-content': {
                    margin: 0,
                    padding: '1.5rem 0',
                    '@media (max-width: 860px)': {
                      padding: '1.25rem 0',
                    },
                    '@media (max-width: 640px)': {
                      padding: '1rem 0',
                    },
                  },
                  '& .MuiAccordionSummary-expandIconWrapper': {
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <span>{faq.question}</span>
              </AccordionSummary>
              <AccordionDetails
                className={styles.faqAnswer}
                sx={{
                  padding: '0 0 1.5rem 0',
                  '@media (max-width: 860px)': {
                    padding: '0 0 1.25rem 0',
                  },
                  '@media (max-width: 640px)': {
                    padding: '0 0 1rem 0',
                  },
                }}
              >
                <p>{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
