import Link from 'next/link';
import styles from '@/components/buttons/offerButton.module.scss';

export default function NotFound() {
  return (
    <main className="sectionWrapper" style={{ height: '100dvh', boxSizing: 'border-box' }}>
      <section
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          // height: '70dvh',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontFamily: 'var(--font-family)', fontSize: 80, padding: 0 }}>404</h1>
        <h2
          style={{
            fontFamily: 'var(--font-family)',
            fontSize: 28,
            padding: 0,
            textAlign: 'center',
          }}
        >
          Page Not Found
        </h2>
        <Link
          href="/"
          className={styles.offerBtn}
          style={{ minWidth: 156, justifyContent: 'center' }}
        >
          Go to Homepage
        </Link>
      </section>
    </main>
  );
}
