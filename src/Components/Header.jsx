import React from 'react'


function Header() {
    return (
        <div className='Header_big mb-[50px]'>

            <div className='backvideo   -z-10'>
                {/* <video className='w-[100vh] h-[100%]  min-w-[100%] min-h-[100%]'  loop autoPlay src="./izeaImg/vidioback.mp4"></video> */}
                <video src={"./izeaImg/header_back.mp4"} autoPlay loop muted />
            </div>
            <div className='flex justify-end items-end'>
                <div>

                </div>
                <div className=' sm:text-end absolute top-10 right-0  w-[100%] mx-auto h-[120%] mt-[150px]'>
                    <div className=' container'>
                        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
                          <div className=''>
                        </div>
                        <div className=''>
                            {/* <div className='mb-[40px]'>
                            <div className='lg:text-end md:text-center sm:text-center text-center ba-white text-'><span className='bg-white px-[8px] py-[8px] rounded-full font-bold'>IZEA MANAGED SERVICES</span> </div>
                        </div> */}
                            <div className=' text-4xl 2xl:text-[75px] xl:text-[75px]  lg:text-6xl md:text-6xl sm:text-6xl font-semibold lg:text-end text-center md:text-center sm:text-center text-white mb-[40px] 2xl:leading-[100px] xl:leading-[80px] lg:leading-[80px] md:leading-[70px] sm:leading-[80px] leading-[60px]'>
                                BIZ SAMARALI MARKETINGMIZ!
                            </div>
                            <div className='mt-5 text-3xl xl:text-end  lg:text-end md:text-center sm:text-center text-center text-white mb-[40px]'>
                                Ikkilanayotganlar uchun yakuniy to’xtam!
                            </div>
                            <div className=' lg:text-end md:text-center sm:text-center text-center 2xl:mb-[350px] xl:mb-[340px] lg:mb-[290px] md:mb-[320px] sm:mb-[325px] mb-[320px]'>
                                <button className='fon-bold-700  text-white bg-gradient-to-r from-[#ff8403] to-[#edce1b]  px-[35px] py-[9px] rounded'>Taklif so`rash</button>
                            </div>
                        </div>                          
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header