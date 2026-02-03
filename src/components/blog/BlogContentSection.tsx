'use client';

import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@mui/material';
import styles from '@/styles/blog/blogContent.module.scss';
import type { BlogContentSectionProps } from '@/types/sections';

function BlogContentSection({ data }: BlogContentSectionProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (iframeRef.current && data?.htmlContent) {
      const iframeDoc = iframeRef.current.contentDocument;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <link rel="stylesheet" href="https://platejs.org/tailwind.css">
              <style>
                * {
                  box-sizing: border-box;
                }
                html, body {
                  margin: 0;
                  padding: 0;
                  font-family: var(--font-family, 'Inter', sans-serif);
                  background: transparent;
                  overflow: visible;
                }
              </style>
            </head>
            <body>
              ${data.htmlContent}
            </body>
          </html>
        `);
        iframeDoc.close();

        let resizeObserver: ResizeObserver | null = null;
        let mutationObserver: MutationObserver | null = null;
        let heightCheckInterval: NodeJS.Timeout | null = null;

        // Calculate and set iframe height
        const updateIframeHeight = () => {
          if (!iframeRef.current || !iframeDoc.body) return;

          requestAnimationFrame(() => {
            if (!iframeRef.current || !iframeDoc.documentElement) return;

            const contentHeight = Math.max(
              iframeDoc.body.scrollHeight,
              iframeDoc.body.offsetHeight,
              iframeDoc.documentElement.scrollHeight,
              iframeDoc.documentElement.offsetHeight,
            );

            const finalHeight = Math.max(contentHeight, 100);

            // Only update if height changed significantly (more than 5px difference)
            const currentHeight = parseInt(iframeRef.current.style.height || '0', 10);
            if (Math.abs(finalHeight - currentHeight) > 5) {
              iframeRef.current.style.height = `${finalHeight}px`;
            }
          });
        };

        // Delayed height check for mobile browsers
        const delayedHeightCheck = () => {
          setTimeout(() => {
            updateIframeHeight();
            // Check again after a short delay to catch late reflows
            setTimeout(updateIframeHeight, 100);
            setTimeout(updateIframeHeight, 300);
            setTimeout(updateIframeHeight, 500);
          }, 50);
        };

        // Wait for all resources (images, styles, fonts) to load
        const waitForResources = () => {
          const images = Array.from(iframeDoc.images);
          const promises: Promise<void>[] = [];

          // Wait for images
          images.forEach(img => {
            if (!img.complete) {
              promises.push(
                new Promise(resolve => {
                  img.onload = () => resolve();
                  img.onerror = () => resolve(); // Resolve even on error
                }),
              );
            }
          });

          // Wait for stylesheets
          const links = Array.from(iframeDoc.querySelectorAll('link[rel="stylesheet"]'));
          links.forEach(link => {
            if (!(link as HTMLLinkElement).sheet) {
              promises.push(
                new Promise(resolve => {
                  link.addEventListener('load', () => resolve());
                  link.addEventListener('error', () => resolve());
                }),
              );
            }
          });

          // Wait for fonts
          if (iframeDoc.defaultView && 'fonts' in iframeDoc.defaultView.document) {
            promises.push(
              iframeDoc.defaultView.document.fonts.ready
                .then(() => {
                  // Fonts loaded
                })
                .catch(() => {
                  // Ignore font loading errors
                }),
            );
          }

          Promise.all(promises).then(() => {
            delayedHeightCheck();
            setIsLoading(false);
          });

          // Also update immediately in case everything is already loaded
          if (promises.length === 0) {
            delayedHeightCheck();
            setIsLoading(false);
          }
        };

        // Use ResizeObserver to watch for content size changes
        if ('ResizeObserver' in window && iframeDoc.body) {
          resizeObserver = new ResizeObserver(() => {
            updateIframeHeight();
          });
          resizeObserver.observe(iframeDoc.body);
        }

        // Observe DOM mutations
        mutationObserver = new MutationObserver(() => {
          delayedHeightCheck();
        });
        mutationObserver.observe(iframeDoc.body, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
        });

        // Periodic height check for mobile browsers (first 3 seconds)
        let checkCount = 0;
        heightCheckInterval = setInterval(() => {
          updateIframeHeight();
          checkCount++;
          if (checkCount >= 6) {
            // Check 6 times over 3 seconds
            if (heightCheckInterval) clearInterval(heightCheckInterval);
          }
        }, 500);

        // Initial load
        if (iframeDoc.readyState === 'complete') {
          waitForResources();
        } else if (iframeDoc.defaultView) {
          iframeDoc.defaultView.addEventListener('load', waitForResources);
        }

        // Window resize and orientation change
        window.addEventListener('resize', delayedHeightCheck);
        window.addEventListener('orientationchange', delayedHeightCheck);

        return () => {
          resizeObserver?.disconnect();
          mutationObserver?.disconnect();
          if (heightCheckInterval) clearInterval(heightCheckInterval);
          window.removeEventListener('resize', delayedHeightCheck);
          window.removeEventListener('orientationchange', delayedHeightCheck);
          if (iframeDoc.defaultView) {
            iframeDoc.defaultView.removeEventListener('load', waitForResources);
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
              {/* <Skeleton 
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ marginTop: '2rem' }}
              />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} /> */}
            </div>
          )}
          <iframe
            ref={iframeRef}
            className={styles.plateIframe}
            title="Blog Content"
            scrolling="no"
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </article>
      </div>
    </section>
  );
}

BlogContentSection.displayName = 'blogContentSection';

export default BlogContentSection;
