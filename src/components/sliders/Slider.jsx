// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronsRight } from "react-icons/bi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { useSelector } from "react-redux";


export default function Slider() {
  const products = useSelector((state) => state.products);
  const { data } = products;
  const pagination = {
    clickable: true,
    renderBullet: function (index , className) {
      return '<span class="' + className + '">' + (index=">") + " </span>";
    },
  };

  return (
    <div dir="ltr" className="h-44 bg-white w-full sm:w-2/3 mx-auto ">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data &&
          data.map((product) => (
            <SwiperSlide key={product._id}>
              <img
                className="w-full h-44"
                src={product.image}
                alt={product.name}
              />
            </SwiperSlide>
          ))}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
