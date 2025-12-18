'use client';

import { useState } from 'react';
import styles from '@/styles/countries/presentCountries.module.scss';
import CountryCard from './CountryCard';
import FilterButtons from '@/components/globals/FilterButtons';
import { countriesData, regionFilters } from '@/lib/consts/common';

function PresentCountriesSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCountries =
    activeFilter === 'all'
      ? countriesData
      : countriesData.filter(country => country.region === activeFilter);

  return (
    <section className="sectionWrapper" style={{ background: 'var(--white)' }}>
      <div className="contentContainer">
        <h2 className="sectionTitle">We're Present in These Countries:</h2>

        <FilterButtons
          filters={regionFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

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
