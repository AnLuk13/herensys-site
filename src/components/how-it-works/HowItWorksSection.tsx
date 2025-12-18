import styles from '@/styles/global-recruiting/howItWorks.module.scss';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  sectionTitle: string;
  steps: Step[];
  background?: string;
}

function HowItWorksSection({ sectionTitle, steps, background }: HowItWorksSectionProps) {
  return (
    <section
      className="sectionWrapper"
      style={{ background, position: 'relative', padding: '100px 20px' }}
    >
      <div className={styles.timelineLine} />
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepDetailBox}>
                <div className={styles.stepDetail} />
              </div>
              <div className={styles.stepText}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
