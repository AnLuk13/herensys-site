'use client';

import Logo from '@/components/svg-icons/logo/Logo';
import CustomDropdown from '@/components/header/CustomDropdown';
import React, { useState } from 'react';
import BurgerMenu from '@/components/header/BurgerMenu';
import MobileMenuWrapper from '@/components/header/MobileMenuWrapper';
import useIsLargeScreen from '@/lib/hooks/useIsLargeScreen';
import styles from '../../styles/header/heading.module.scss';
import { navTabs, mobileNavTabs } from '@/lib/consts/navTabs';
import OfferButton from '../buttons/OfferButton';
import Link from 'next/link';

function Heading() {
  const [isMobileNav, setIsMobileNav] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isLargeScreen } = useIsLargeScreen();

  const handleItemClick = () => {
    setIsMobileNav(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <header className={styles.header}>
        <MobileMenuWrapper
          navTabs={mobileNavTabs}
          isMobileNav={isMobileNav}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
          handleItemClick={handleItemClick}
        />
        <nav className={styles.navigationSection}>
        <Link
          href="/"
          style={{ cursor: 'pointer', alignSelf: isLargeScreen ? 'start' : 'center' }}
          aria-label="Company logo"
        >
          <Logo width={isLargeScreen ? 127 : 100} />
        </Link>
        <div className={`${styles.navigationContent} ${styles.desktopContent}`}>
          {navTabs.map(tab =>
            tab.type === 'link' ? (
              <Link key={tab.label} className={styles.navLink} href={tab.href || '/'}>
                {tab.label}
              </Link>
            ) : (
              <CustomDropdown
                key={tab.label}
                options={tab.options || []}
                defaultValue={tab.defaultValue!}
                isCountry={tab.isCountry}
              />
            ),
          )}
          <OfferButton text="Book a call" />
        </div>
        <BurgerMenu
          isMobileNav={isMobileNav}
          setIsMobileNav={setIsMobileNav}
          setActiveDropdown={setActiveDropdown}
        />
      </nav>
    </header>
    </>
  );
}

export default Heading;
