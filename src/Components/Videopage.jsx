import {React,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Videopage() {
    useEffect(()=>{
        AOS.init()
      } ,  [])
  return (
    <div className='relative'>
        <div>
            <div className='text-[40px] font-[800] text-center ' data-aos="fade-up">5+ YILLIK TAJRIBA. 100 DAN ORTIQ HAMKORLIK.</div>
            <div className='mt-[30px] mb-[30px]'>
                <div className=' text-[25px] lg:w-[30%] md:w-[50%] sm:w-[50%] w-[70%] mx-auto text-center'>Dunyoning eng yirik bredlari va O’zbekistoning 100 ortiq agentlikning ishonchi.</div>
                <div className='text-center text-[25px]'></div>                
            </div>
            <div className='w-[80%] mx-auto h-[100%] flex justify-center items-center '>
                <div className=''>
                    <video
                    width="1280"
                    height="720" 
                    class="nectar-video-self-hosted lazy-hidden -z-50 rounded-lg" 
                    src='./izeaImg/drnxvideo.mp4'
                    preload="metadata" controls controlslist="nodownload"
                    poster="./izeaImg/poster01.png"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Videopage