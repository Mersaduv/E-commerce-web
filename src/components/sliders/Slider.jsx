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
import { useState } from "react";
import { useEffect } from "react";

export default function Slider() {
  const products = useSelector((state) => state.products);
  const [dataSwiper, setDataCateGory] = useState();
  const { data } = products;
  useEffect(() => {
    if (data) {
      const dataCategory = data.filter((item) => item.category === "clothes");
      setDataCateGory(dataCategory);
    }
  }, [data]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index = ">") + " </span>";
    },
  };

  return (
    <div dir="ltr">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper &&
          dataSwiper.map((product) => (
            <SwiperSlide key={product._id}>
              <img
                className="max-h-44 sm:max-h-[360px]"
                src={product.image}
                alt={product.name}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
