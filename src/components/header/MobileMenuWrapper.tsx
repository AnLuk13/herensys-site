import React from 'react';
import type { NavTab } from '@/lib/consts/types';
import MobileMenu from './MobileMenu';

interface MobileMenuWrapperProps {
  navTabs: NavTab[];
  isMobileNav: boolean;
  activeDropdown: string | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
  handleItemClick: () => void;
}

function MobileMenuWrapper({
  navTabs,
  isMobileNav,
  activeDropdown,
  setActiveDropdown,
  handleItemClick,
}: MobileMenuWrapperProps) {
  return (
    <MobileMenu
      navTabs={navTabs}
      isMobileNav={isMobileNav}
      activeDropdown={activeDropdown}
      setActiveDropdown={setActiveDropdown}
      handleItemClick={handleItemClick}
    />
  );
}

export default MobileMenuWrapper;
