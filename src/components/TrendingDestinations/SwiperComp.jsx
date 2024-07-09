"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const SwiperComp = ({ data }) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      navigation={true}
      className={styles.swiper}
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
      slidesPerView={"auto"}
      spaceBetween={30}
    >
      {data.map((item, index) => (
        // <SwiperSlide key={index} className={styles.swiper_slide}>
        <SwiperSlide key={index} className={styles.swiper__slide}>
          <Link href="/" className={styles.swiper__link}>
            <div className={styles.img__container}>
              <Image src={item.image} objectFit="cover" alt={item.title} fill />
            </div>
            <div className={styles.content}>
              <h1 className={styles.stayName}>{item.stayName}</h1>
              <p className={styles.country}>{item.country}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComp;
