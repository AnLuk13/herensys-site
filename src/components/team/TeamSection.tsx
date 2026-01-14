'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/about-us/teamSection.module.scss';
import TeamMemberCard from './TeamMemberCard';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  sectionTitle: string;
  teamMembers: TeamMember[];
  background?: string;
}

function TeamSection({ sectionTitle, teamMembers, background }: TeamSectionProps) {
  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              450: {
                slidesPerView: 2,
              },
              860: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className={styles.swiper}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <TeamMemberCard {...member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
