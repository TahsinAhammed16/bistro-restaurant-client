import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={40}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-10 mb-24"
    >
      <SwiperSlide>
        <img src={slide1} alt="" className="relative" />
        <h3 className="text-3xl uppercase text-white absolute left-20 bottom-8">
          Salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" className="relative" />
        <h3 className="text-3xl uppercase text-white absolute left-20 bottom-8">
          Pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" className="relative" />
        <h3 className="text-3xl uppercase text-white absolute left-20 bottom-8">
          Soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" className="relative" />
        <h3 className="text-3xl uppercase text-white absolute left-20 bottom-8">
          Desserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" className="relative" />
        <h3 className="text-3xl uppercase text-white absolute left-20 bottom-8">
          Salads
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
