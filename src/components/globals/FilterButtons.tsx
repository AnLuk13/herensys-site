'use client';

import styles from '@/styles/globals/filterButtons.module.scss';

interface Filter {
  value: string;
  label: string;
}

interface FilterButtonsProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (value: string) => void;
}

function FilterButtons({ filters, activeFilter, onFilterChange }: FilterButtonsProps) {
  return (
    <div className={styles.filterButtons}>
      {filters.map(filter => (
        <button
          key={filter.value}
          className={`${styles.filterButton} ${activeFilter === filter.value ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
