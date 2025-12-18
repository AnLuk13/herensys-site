import React from 'react';
import styles from '../../styles/header/heading.module.scss';
import Link from 'next/link';

interface DropdownMenuProps {
  items: { label: string; path: string }[];
  handleItemClick: () => void;
}

function DropdownMenu({ items, handleItemClick }: DropdownMenuProps) {
  console.log(items);
  return (
    <ul className={styles.dropdownMenu}>
      {items.map(subItem => (
        <li key={subItem.path} onClick={handleItemClick} className={styles.dropdownMenuItem}>
          <Link href={subItem.path} className={styles.navigationLinks}>
            <div dangerouslySetInnerHTML={{ __html: subItem.label }} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
