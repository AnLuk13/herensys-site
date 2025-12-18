'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/countries/countryFacts.module.scss';

interface TableData {
  headers: string[];
  rows: string[][];
}

interface ContentSection {
  id: string;
  title: string;
  content?: string[];
  table?: TableData;
}

interface CountryFactsSectionProps {
  mainTitle: string;
  sections: ContentSection[];
  background?: string;
}

function CountryFactsSection({ mainTitle, sections, background }: CountryFactsSectionProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const isScrollingFromClick = useRef(false);

  const offsetsRef = useRef<{ id: string; top: number }[]>([]);

  // ------------- COMPUTE OFFSETS ----------------
  const computeOffsets = () => {
    offsetsRef.current = sections.map(section => {
      const el = sectionRefs.current[section.id];
      const title = el?.querySelector('h3');

      const top = title ? title.getBoundingClientRect().top + window.scrollY : 0;

      return { id: section.id, top };
    });
  };

  useEffect(() => {
    computeOffsets();
    window.addEventListener('resize', computeOffsets);

    return () => window.removeEventListener('resize', computeOffsets);
  }, [sections]);

  // ------------- FIND ACTIVE SECTION (Binary Search) ----------------
  const findActiveSection = (scrollPos: number) => {
    const offsets = offsetsRef.current;

    let low = 0;
    let high = offsets.length - 1;
    let best = offsets[0].id;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (offsets[mid].top <= scrollPos) {
        best = offsets[mid].id;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return best;
  };

  // ------------- OPTIMIZED SCROLL SPY ----------------
  const scrolling = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (isScrollingFromClick.current) return; // disable during click scroll

      if (!scrolling.current) {
        scrolling.current = true;

        requestAnimationFrame(() => {
          scrolling.current = false;

          const scrollPos = window.scrollY + 179;
          const id = findActiveSection(scrollPos);

          setActiveSection(id);
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // initial detection

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ------------- WAIT FOR SCROLL END ----------------
  const waitForScrollEnd = () => {
    return new Promise<void>(resolve => {
      let lastY = window.scrollY;

      const check = () => {
        const y = window.scrollY;
        if (y === lastY) resolve();
        else {
          lastY = y;
          requestAnimationFrame(check);
        }
      };

      requestAnimationFrame(check);
    });
  };

  // ------------- TOC CLICK (Smooth Scroll) ----------------
  const handleTocClick = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    isScrollingFromClick.current = true;

    const el = document.getElementById(id);
    if (el) {
      const offset = 178;
      const target = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });

      await waitForScrollEnd();
      isScrollingFromClick.current = false;
    }
  };

  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.mainTitle}>{mainTitle}</h2>

        <div className={styles.contentLayout}>
          <aside className={styles.tableOfContents}>
            <h3 className={styles.tocTitle}>{mainTitle}</h3>
            <nav className={styles.tocNav}>
              {sections.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`${styles.tocItem} ${activeSection === section.id ? styles.active : ''}`}
                  onClick={e => handleTocClick(e, section.id)}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.contentArea}>
            {sections.map(section => (
              <article
                key={section.id}
                id={section.id}
                ref={el => {
                  sectionRefs.current[section.id] = el;
                }}
                className={styles.contentSection}
              >
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                {section.content?.map((paragraph, index) => (
                  <p key={index} className={styles.sectionParagraph}>
                    {paragraph}
                  </p>
                ))}
                {section.table && (
                  <div className={styles.tableWrapper}>
                    <table className={styles.dataTable}>
                      <thead>
                        <tr>
                          {section.table.headers.map((header, index) => (
                            <th key={index}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryFactsSection;
