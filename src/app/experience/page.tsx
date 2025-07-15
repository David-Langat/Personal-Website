'use client';

import ContentSection from '../components/ContentSection';
import { experienceData } from '../data/experience';
import ExperienceEntry from '../components/ExperienceEntry';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ExperiencePage() {
  const swiperRef = useRef<any>(null);

  return (
    <ContentSection className="max-w-6xl mx-auto relative px-24">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop
        className="mySwiper overflow-hidden"
      >
        {experienceData.map((exp, index) => (
          <SwiperSlide key={index}>
            <ExperienceEntry {...exp} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="swiper-button-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaChevronLeft />
      </div>
      <div
        className="swiper-button-next"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaChevronRight />
      </div>
    </ContentSection>
  );
}