'use client';

import { Activity, useState } from 'react';
import Select from 'react-select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import styles from '@/styles/jobs-board/jobListing.module.scss';
import SendCVModal from './SendCVModal';
import FilterButtons from '@/components/globals/FilterButtons';
import type { JobListingSectionProps } from '@/types/sections';

function JobListingSection({ data }: JobListingSectionProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<{ value: string; label: string }>({
    value: 'all',
    label: 'All locations',
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Generate dynamic location options from jobs data
  const uniqueLocations = Array.from(new Set(data?.map(job => job.location)));
  const locationOptions = [
    { value: 'all', label: 'All locations' },
    ...uniqueLocations.map(location => ({ value: location.toLowerCase(), label: location })),
  ];

  const uniqueJobTypes = Array.from(new Set(data?.map(job => job.jobType)));
  const categoryFilters = [
    { value: 'all', label: 'All' },
    ...uniqueJobTypes.map(jobType => ({ value: jobType.toLowerCase(), label: jobType })),
  ];

  const filteredJobs = data?.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocation.value === 'all' ||
      job.location.toLowerCase() === selectedLocation.label.toLowerCase();
    const matchesCategory =
      selectedCategory === 'all' || job.jobType.toLowerCase() === selectedCategory;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <section className="sectionWrapper">
      <div className="contentContainer">
        <div className={styles.jobListingContainer}>
          <h1 className={styles.mainTitle}>Let's find you an open position.</h1>

          <div className={styles.searchSection}>
            <p className={styles.subtitle}>
              Find the right job for you no matter
              <br />
              what it is that you do.
            </p>

            <div className={styles.searchBar}>
              <div className={styles.locationSelect}>
                <Select
                  instanceId="job-location-select"
                  value={selectedLocation}
                  onChange={option => option && setSelectedLocation(option)}
                  options={locationOptions}
                  isSearchable={false}
                  styles={{
                    indicatorSeparator: () => ({ display: 'none' }),
                    singleValue: base => ({
                      ...base,
                      fontFamily: 'var(--second-family)',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: 'var(--black)',
                      cursor: 'pointer',
                    }),
                    control: (base, state) => ({
                      ...base,
                      minWidth: '180px',
                      border: '1px solid #e5eaf4',
                      fontSize: '0.9375rem',
                      fontFamily: 'var(--font-family)',
                      height: 70,
                      outline: 'none',
                      boxShadow: 'none',
                      borderColor: state.isFocused ? '#e5eaf4' : '#e5eaf4',
                      '&:hover': {
                        borderColor: '#e5eaf4',
                        boxShadow: 'none',
                      },
                    }),
                    option: (base, state) => ({
                      ...base,
                      fontFamily: 'var(--font-family)',
                      fontSize: '0.9375rem',
                      backgroundColor: state.isSelected ? 'var(--accent)' : 'transparent',
                      cursor: 'pointer',
                      '&:hover': {
                        // color: 'var(--black)',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      },
                    }),
                  }}
                />
              </div>

              <div className={styles.searchInput}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2" />
                  <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Positions"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  aria-label="Job search query"
                />
                <button className={styles.searchButton} type="button" aria-label="Search jobs">
                  Search
                </button>
              </div>
            </div>
          </div>

          <FilterButtons
            filters={categoryFilters}
            activeFilter={selectedCategory}
            onFilterChange={setSelectedCategory}
          />
          <div className={styles.jobList}>
            {filteredJobs && filteredJobs?.length > 0 ? (
              filteredJobs?.map(job => (
                <Accordion
                  key={job.id}
                  expanded={expanded === job.id}
                  onChange={handleChange(job.id)}
                  disableGutters
                  elevation={0}
                  className={styles.jobCard}
                  sx={{
                    '&:before': { display: 'none' },
                    backgroundColor: 'transparent',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    '&.Mui-expanded': {
                      margin: '0 0 1rem 0',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={null}
                    className={styles.jobHeader}
                    sx={{
                      padding: '1.5rem',
                      minHeight: 'auto',
                      '& .MuiAccordionSummary-content': {
                        margin: 0,
                        width: '100%',
                      },
                      '&.Mui-expanded': {
                        minHeight: 'auto',
                      },
                    }}
                  >
                    <div className={styles.jobHeaderContent}>
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <div className={styles.jobShortInfo}>
                        <div className={styles.jobMeta}>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Salary</span>
                            <span className={styles.metaValue}>{job.salary}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Job Type</span>
                            <span className={styles.metaValue}>{job.jobType}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Location</span>
                            <span className={styles.metaValue}>{job.location}</span>
                          </div>
                          <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Headquarter</span>
                            <span className={styles.metaValue}>{job.headquarter}</span>
                          </div>
                        </div>
                        <div className={styles.jobActions}>
                          <div
                            className={styles.applyButton}
                            onClick={e => {
                              e.stopPropagation();
                              setSelectedJobTitle(job.title);
                              setIsModalOpen(true);
                            }}
                          >
                            Apply
                          </div>
                          <div
                            className={styles.accordionButton}
                            onClick={e => {
                              e.stopPropagation();
                              handleChange(job.id)(e, expanded !== job.id);
                            }}
                          >
                            {expanded === job.id ? 'Less Info' : 'More Info'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails className={styles.jobDetails}>
                    <div className={styles.detailsContent}>
                      <div className={styles.detailSection}>
                        <h4 className={styles.detailTitle}>Your duties</h4>
                        <p className={styles.detailSubtitle}>
                          As a Senior Solutions Consultant, you will be responsible for:
                        </p>
                        <ul className={styles.detailList}>
                          {job.duties.map((duty, index) => (
                            <li key={index}>{duty}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.detailSection}>
                        <h4 className={styles.detailTitle}>Requirements</h4>
                        <ul className={styles.detailList}>
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.detailSection}>
                        <h4 className={styles.detailTitle}>Nice to have</h4>
                        <ul className={styles.detailList}>
                          {job.niceToHave.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div
                        className={styles.accordionButton}
                        onClick={e => {
                          e.stopPropagation();
                          setExpanded(false);
                        }}
                      >
                        Less Info
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <p className={styles.noJobsMessage}>No job listings found.</p>
            )}
          </div>
        </div>
      </div>

      {/* <Activity mode={isModalOpen ? 'visible' : 'hidden'}> */}
      <SendCVModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJobTitle}
      />
      {/* </Activity> */}
    </section>
  );
}

JobListingSection.displayName = 'jobListingSection';

export default JobListingSection;
