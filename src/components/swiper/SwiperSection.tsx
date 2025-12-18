'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/landing/swiper.module.scss';
import { countriesPresenceCards } from '@/lib/consts/common';
import SwiperCard from './SwiperCard';

function SwiperSection() {
  return (
    <section className="sectionWrapper" style={{ background: 'var(--white)' }}>
      <div className="contentContainer">
        <h2 className="sectionTitle">We're present in these countries</h2>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className={styles.swiper}
          >
            {countriesPresenceCards.map((countryCard, index) => (
              <SwiperSlide key={index}>
                <SwiperCard {...countryCard} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SwiperSection;
