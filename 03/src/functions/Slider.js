import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

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
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/f5001d2f-6722-402b-9b2e-af6187e90ca1.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/2e9f07bd-e866-43b4-b2e3-a707ed3b779c.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/7cdc34e1-b86a-43d2-b6dd-8e4328d27356.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/a2f01b74-ada8-4c98-b955-588fb81ba994.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/2b8af685-cdd3-43c6-8b95-ea8ab5ab4507.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/c917a4b0-602d-4549-ae79-faeaa8582f80.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/2897638e-926a-4db4-b5a0-f0bbbde7c299.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/974b30f2-2512-4427-a646-92996fd24b65.jpg"/></SwiperSlide>
        <SwiperSlide><img class="swiperimg" alt=" " src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/eb905cc6-a482-486b-b674-6add94399e81.jpg"/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;