'use client';

import { useState } from 'react';
import styles from '@/styles/countries/presentCountries.module.scss';
import CountryCard from './CountryCard';
import FilterButtons from '@/components/globals/FilterButtons';
import countriesData from '@/data/countries.json';

interface PresentCountriesSectionProps {
  initialFilter?: string;
}

function PresentCountriesSection({ initialFilter = 'all' }: PresentCountriesSectionProps) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filteredCountries =
    activeFilter === 'all'
      ? countriesData.countriesData
      : countriesData.countriesData.filter(country => country.region === activeFilter);

  return (
    <section className="sectionWrapper" style={{ background: 'var(--white)' }}>
      <div className="contentContainer">
        <h2 className="sectionTitle">We're Present in These Countries:</h2>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FilterButtons
            filters={countriesData.regionFilters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className={styles.countriesGrid}>
          {filteredCountries.map((country, index) => (
            <CountryCard key={index} {...country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PresentCountriesSection;
