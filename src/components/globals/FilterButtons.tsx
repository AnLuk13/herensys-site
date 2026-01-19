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
    <div className={styles.filterButtons} role="group" aria-label="Filter options">
      {filters.map(filter => (
        <button
          key={filter.value}
          className={`${styles.filterButton} ${activeFilter === filter.value ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.value)}
          aria-pressed={activeFilter === filter.value}
          type="button"
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
