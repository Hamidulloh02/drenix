
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Autoplay } from 'swiper'
import data from './caeus1.json'
// Import Swiper styles
import "swiper/css";

function Carusel(props) {
  let data = props?.data || []
  console.log(data)
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        watchSlidesProgress={true}
        breakpoints={{
          320: {
            slidesPerView: 2,

          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
          }
        }}
        autoplay={{
          delay: 1000,
        }}
        loop={true}
        className="mySwiper mt-[0px]">
          {
            data.map((e) => {
              return(
                <>
                  <SwiperSlide>
                    <LazyLoadImage
                      alt={"carusel img"}
                      effect="blur"
                      src={e.img}
                      className="object-cover"
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

export default Carusel