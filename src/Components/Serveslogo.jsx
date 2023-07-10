import React from 'react'

//lazy load img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import datajson from "../Components/Jsons/logo.json"

function Serveslogo() {
  return (
    <div>
        <div className='lg:ms-[0px] md:ms-[0px] sm:ms-[20px] ms-[20px]'>
            <div className='grid 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2  justify-enter items-center w-[80%] mx-auto  mt-[50px] mb-[50px]'>
                {/* <img className='lg:w-[120px] md:w-[120px] sm:w-[100px] w-[90px]' src="./izeaImg/Serveses/logoes/l01.png" alt="logo" /> */}
                {
            datajson.map((e) => {
              return(
                <>
                      <LazyLoadImage
                      className='lg:w-[120px]  md:w-[120px]  sm:w-[100px] w-[90px] flex justify-end items-end '
                      alt={"carusel img"}
                      effect="blur"
                      src={e.img}
                       />
                </>
              )
            }) 
          }
            </div>
        </div>
    </div>
  )
}

export default Serveslogo