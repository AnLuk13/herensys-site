'use client';

import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@mui/material';
import styles from '@/styles/blog/blogContent.module.scss';
import type { BlogContentSectionProps } from '@/types/sections';

function BlogContentSection({ data }: BlogContentSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <link rel="stylesheet" href="https://platejs.org/tailwind.css">
              <style>
                body {
                  margin: 0;
                  padding: 0;
                  font-family: var(--font-family, 'Inter', sans-serif);
                  background: transparent;
                  height: auto;
                }
              </style>
            </head>
            <body>
              ${data}
            </body>
          </html>
        `);
        iframeDoc.close();

        // Auto-resize iframe to content height
        const resizeIframe = () => {
          if (iframeRef.current && iframeDoc.body) {
            iframeRef.current.style.height = iframeDoc.body.scrollHeight + 1 + 'px';
          }
        };

        // Initial resize and hide loading
        setTimeout(() => {
          resizeIframe();
        }, 100);

        // Observe content changes
        const observer = new MutationObserver(resizeIframe);
        observer.observe(iframeDoc.body, {
          childList: true,
          subtree: true,
          attributes: true,
        });

        // Listen to window resize events
        const handleWindowResize = () => {
          resizeIframe();
        };
        window.addEventListener('resize', handleWindowResize);

        // Also listen to resize events inside the iframe
        if (iframeDoc.defaultView) {
          iframeDoc.defaultView.addEventListener('resize', resizeIframe);
        }

        return () => {
          observer.disconnect();
          window.removeEventListener('resize', handleWindowResize);
          if (iframeDoc.defaultView) {
            iframeDoc.defaultView.removeEventListener('resize', resizeIframe);
          }
        };
      }
    }
  }, [data]);

  return (
    <section className="sectionWrapper">
      <div className="contentContainer">
        <article>
          {isLoading && (
            <div className={styles.skeletonWrapper}>
              <Skeleton variant="text" width="60%" height={60} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="90%" height={20} />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ marginTop: '2rem' }}
              />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ marginTop: '2rem' }}
              />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
            </div>
          )}
          <iframe
            ref={iframeRef}
            className={styles.plateIframe}
            title="Blog Content"
            onLoad={() => setIsLoading(false)}
          />
        </article>
      </div>
    </section>
  );
}

BlogContentSection.displayName = 'blogContentSection';

export default BlogContentSection;
