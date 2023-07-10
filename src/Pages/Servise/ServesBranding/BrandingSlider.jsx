
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper'
// Import Swiper styles
import "swiper/css";

//lazy load img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import datajson from "./brangimg.json"

function BrandingSlider() {
  return (
    <div className=" mt-[40px] mb-[40px]">

      <Swiper
        modules={[Autoplay]}
        watchSlidesProgress={true}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,

          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          }
        }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        className="mySwiper ">
          {
            datajson.map((e) => {
              return(
                <>
                    <SwiperSlide>
                      <LazyLoadImage
                      alt={"carusel img"}
                      effect="blur"
                      src={e.img}
                       />
                      </SwiperSlide>
                </>
              )
            }) 
          }
      </Swiper>


      <div>
      </div>
    </div>
  )
}

export default BrandingSlider