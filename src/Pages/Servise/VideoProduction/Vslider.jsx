import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";



// import required modules
import { EffectCube, Pagination } from "swiper";

function Vslider() {
  return (
    <div>
    <div class="wrap lg:p-[300px] md:p-[200px] sm:pb-[100px] sm:pt-[100px] pt-[100px] pb-[100px] ">
                    <div class="cube">
                        <div class="front">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                        <div class="core">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                        <div class="back">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                        <div class="top">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                        <div class="bottom">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                        <div class="left">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                        <div class="right">
                        <video className="lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] w-[180px] h-[180px] "  src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Vslider