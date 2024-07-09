"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from './styles.module.css';
import Link from "next/link";

const SwiperComp = ({ data }) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      navigation={true}
      className="w-full bg-white"
      breakpoints={{
        1650: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      }}
    >
      {data?.map((item, index) => (
        <SwiperSlide
          key={index}
          className="rounded-2xl w-[230px] h-[300px] overflow-hidden bg-[#eff3f7]"
        >
          <Link href='/search' className="relative block w-[230] h-[300px]">
            <Image
              fill
              className="rounded-2xl overflow-hidden object-cover"
              alt={`img-${index}`}
              src={item.img}
            />
            <div className="absolute bottom-0 w-full h-[40px] px-3 flex items-center font-bold">
              <p className={styles.title}>{item.title}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
