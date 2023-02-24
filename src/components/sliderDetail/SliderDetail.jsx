import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./stylesDetail.css";

// import required modules
import { Lazy, Pagination, Navigation } from "swiper";

export default function SliderDetail({ imageId }) {
  return (
    <div dir="rtl" className="w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imageId.image} alt={imageId.name} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageId.image} alt={imageId.name} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageId.image} alt={imageId.name} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageId.image} alt={imageId.name} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageId.image} alt={imageId.name} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageId.image} alt={imageId.name} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
