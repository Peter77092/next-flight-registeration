"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import styles from "./styles.module.css";

const ImgSlider = ({ data }) => {
  return (
    <Swiper
      grabCursor={true}
      modules={[Navigation]}
      navigation={true}
      className="w-full bg-white h-full"
      slidesPerView={1}
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index} className={styles.imgSlider}>
          <Image
            fill
            priority
            className="overflow-hidden object-cover"
            objectFit="cover"
            objectPosition="center"
            alt={`img-${index}`}
            src={item}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImgSlider;
