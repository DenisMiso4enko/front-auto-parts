import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import img1 from "../../../assets/eb8817f717-parts.jpg";
import img2 from "../../../assets/yellowlogo760.png";
import img3 from "../../../assets/Без названия.jpeg";
import img4 from "../../../assets/Аукциони-Автозапчасти-7.jpg";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import "./index.scss";

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="img" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
