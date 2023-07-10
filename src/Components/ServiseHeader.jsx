import React from 'react'
// #lazy load img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ServiseHeader(props) {
    let data = props.data[0]
    console.log(data[0])
  return (

    <div>
        <div className='absolute top-0 left-0 right-0 -z-10'>
            <div className='text-white relative w-[100%] h-[70vh] flex items-center'>
               <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black/50'></div>
               <img className=' server_back_header' src={data.img} alt="background img" />
               {/* <LazyLoadImage
                      class='server_back_header'
                      alt={"backgroung img"}
                      effect="blur"
                      src={data.img}
                       /> */}
                <div className='w-[90%] mx-auto z-20'>
                <div className='lg:text-[72px] md:text-[60px] sm:text-[40px] text-[40px] '>{data.title}</div>
                <div className='mt-[10px] mb-[20px]'>{data.summary}</div>
                <div><button className='w-[250px] h-[45px] bg-[#ff8332] rounded'>{data.textbtn}</button></div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiseHeader