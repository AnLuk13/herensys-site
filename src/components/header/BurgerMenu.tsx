"use client";

import React from "react";
import styles from "../../styles/header/burgerMenu.module.scss";

interface MobileMenuProps {
  isMobileNav: boolean;
  setIsMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}

function BurgerMenu({
  isMobileNav,
  setIsMobileNav,
  setActiveDropdown,
}: MobileMenuProps) {
  return (
    <div
      className={`${styles.mobileMenuIcon} ${isMobileNav ? styles.active : ""}`}
      onClick={() => {
        setIsMobileNav((prev) => !prev);
        setActiveDropdown(null);
      }}
    >
      {Array.from({ length: 2 + (!isMobileNav ? 1 : 0) }, (_, i) => (
        <div
          key={i}
          className={
            i === 0 ? styles.firstbar : i === 1 ? styles.secondbar : ""
          }
        />
      ))}
    </div>
  );
}

export default BurgerMenu;
