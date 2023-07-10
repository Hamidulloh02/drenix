
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

//lazy load img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import datajson from "./smmimg.json"

function Servesslider() {
  return (
    <div className=" mt-[40px] mb-[40px] mx-auto">
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        // slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth:100,
          modifier: 1,
          slideShadows : false,
        }}
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
        // pagination={true}
        modules={[EffectCoverflow,Autoplay]}
        className="mySwiper "
      >
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

export default Servesslider