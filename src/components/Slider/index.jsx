import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import "./style.css";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-container">
            <div className="slider-text">
              <h2>Venha conhecer o melhor hambúrguer da cidade!</h2>
              <span>
                Os melhores hambúrgueres preparados com ingredientes de alta
                qualidade e sabor excepcional
              </span>
            </div>
            <img
              className="slider-img"
              src="https://i.ibb.co/tH9b9XY/burger2.jpg"
              alt="burguer"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co/6t1QCx3/juice3.jpg" alt="juice" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co/TqyT7dv/burger1.jpg" alt="burguer" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://i.ibb.co/cvHnbsy/juice1.jpg" alt="milkshake" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
