import React from 'react'

function Partners() {
    return (
        <div className='relative'>
            <div className='w-[100%] h-[100%] absolute left-0 top-0 right-0 -z-10 ' >
                <video
                    class="nectar-video-bg lazy-hidden"
                    width="100%" height="50%"
                    preload="auto"
                    loop=""
                    autoplay=""
                    muted="" playsinline=""
                    src="https://player.vimeo.com/progressive_redirect/playback/793131871/rendition/1080p/file.mp4?loc=external&signature=57e862ad9e0c94fe5faeb68b5936e14b998c259e04a7e3f0fa0cec4d79365333"
                    type="video/mp4">
                </video>
            </div>
            <div className='text-center text-[24px] text-white flex justify-center pt-[25px]'data-aos="fade-up">Xizmatlar sertifikatlangan brendlar</div>
            <div className='grid grid-cols-2 lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-2 pt-[15px]' data-aos="fade-up">
            <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px]' src="./izeaImg/Partners/1.7.png" alt="partners logo" /></div>
            <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px]' src="./izeaImg/Partners/1.5.png" alt="partners logo" /></div>
            <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px]' src="./izeaImg/Partners/1.6.png" alt="partners logo" /></div>
            <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px]' src="./izeaImg/Partners/1.4.png" alt="partners logo" /></div>
                <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px] ' src="./izeaImg/Partners/1.1.png" alt="partners logo" /></div>
                <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px]' src="./izeaImg/Partners/1.2.png" alt="partners logo" /></div>
                <div><img className='lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px] m-[25px]' src="./izeaImg/Partners/1.3.png" alt="partners logo" /></div>
            </div>
            <div className='mt-[35%] pb-[100px]'>
                <div className='text-[40px] font-bold text-center text-white' data-aos="fade-up">IJTIMOIY TARMOQLARDA 1+ MILLIONDAN ORTIQ TOMOSHALAR</div>
                <div className='text-white text-center lg:w-[48%] md:w-[48%] sm:w-[60%] w-[90%] mx-auto text-[16px] mt-[40px] mb-[40px] leading-[20px]'>Biz o'z oldimizga kompaniyangizga sodiq foydalanuvchilar guruhini shakllantirishni asosiy maqsad qilib qo'yganmiz, shuning uchun reklama jarayonida biz suniy intelektlardan foydalanishni va haqiqiy odamlarni jalb qilishni birlashtiramiz.</div>
                <div className='text-center'><a href="https://www.instagram.com/drenixdigital/"><button className='bg-white ps-[35px] pe-[35px] pt-[15px] pb-[15px] rounded text-[#202020] leading-[20px]'> Kadr orti jaroyonlarini kuzating</button></a> </div>
            </div>
        </div>
    )
}

export default Partners