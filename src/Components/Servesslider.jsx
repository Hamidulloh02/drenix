
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper'
// Import Swiper styles
import "swiper/css";
//lazy load img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Servesslider() {
  return (
    <div className=" mt-[40px] mb-[40px]">

      <Swiper
        // modules={[Autoplay]}
        // watchSlidesProgress={true}
        // slidesPerView={3}
        // spaceBetween={10}
        // coverflowEffect= {
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2,
        //   slideShadows: true
        // }
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={20}
        grabCursor={true}
        modules={[Autoplay]}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper overflow-hidden"
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
            slidesPerView: 2,
          }
        }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        class="mySwiper  ">
        <SwiperSlide >
                   <LazyLoadImage
                      className=" sliderweb"
                      alt={"carusel img"}
                      effect="blur"
                      src="./izeaImg/Serveses/webImg/W1.png"
                    />
          </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
                      className="w-[400px] sliderweb"
                      alt={"carusel img"}
                      effect="blur"
                      src="./izeaImg/Serveses/webImg/W4.png"
                    />
          </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
                      className="w-[400px] sliderweb"
                      alt={"carusel img"}
                      effect="blur"
                      src="./izeaImg/Serveses/webImg/W2.png"
                    />
          </SwiperSlide>
        <SwiperSlide>
          <LazyLoadImage
                      className="w-[400px] sliderweb"
                      alt={"carusel img"}
                      effect="blur"
                      src="./izeaImg/Serveses/webImg/W03.png"
                    />
          </SwiperSlide>
      </Swiper>


      <div>
      </div>
    </div>
  )
}

export default Servesslider