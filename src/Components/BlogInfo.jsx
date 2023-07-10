// import { useEffect } from "react"
import React,{useEffect} from 'react'
import { useLocation, useParams } from 'react-router-dom';

function BlogInfo(params) {
    let location = useLocation()
    let mydata = location.state

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
  return (
    <div>
        <div>
            <div className='w-[100%] h-[12vh] bg-[#ff8403]'></div>

            <div className='flex flex-wrap  lg:w-[80%] md:w-[80%] sm:w-[90%] w-[90%] mx-auto mt-[60px]'>
                <div className='2xl:w-[75%] xl:w-[75%] lg:w-[75%] md:w-[100%] sm:w-[100%]  grid gap-4'>
                    <img className='rounded w-[100%] lg:w-[600px] md:h-[400px] sm:h-[300px] h-[400px]  object-cover' src={mydata.img} alt="" />
                    <div className='text-[20px] font-bold'>{mydata.text}</div>
                    <div>{mydata.fulinfo1}</div>
                    <div>{mydata.fulinfo2}</div>
                    <div>{mydata.fulinfo3}</div>
                    <div>{mydata.fulinfo4}</div>
                    <div>{mydata.fulinfo5}</div>
                    <div>{mydata.fulinfo6}</div>
                </div>
                <div className='2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-[100%] sm:w-[100%] md:mt-[40px] lg:mt-[0] lg:mb-[0] md:mb-[40px] sm:mt-[40px] sm:mb-[40px] mt-[40px] mb-[40px] '>
                    <div className=''>
                    <div className='text-[24px] font-bold  p-4'>So‘nggi bloglar</div>
                    <div className='grid gap-5 border border-gray-400 ms-5 rounded ld:w-[300px] md:w-[300px] sm:w-[250px] w-[250px]'>
                        
                        <div className='grid grid-cols-1'>
                            <div className=''>
                                <img className='' src="./izeaImg/Blog/blog10.jpg" alt="img blog info" />
                            </div>
                            <div className='p-4 font-bold'>
                            Sotsial media marketingi, eng ko'p foydalaniladigan marketing usullaridan biri bo'lib, kompaniyalarga mijozlar bilan bog'liqliklarni o'rnatish, brendni rivojlantirish va sotishlarni oshirish imkonini beradi. Quyidagi sotsial media marketingining eng yaxshi usullari haqida ma'lumotlarni topishingiz mumkin:

                            </div>

                        </div>
                    </div>
                    <div className='grid gap-5 border border-gray-400 ms-5 rounded mt-5 ld:w-[300px] md:w-[300px] sm:w-[250px] w-[250px]'>
                        
                        <div className='grid grid-cols-1'>
                            <div className=''>
                                <img className='' src="./izeaImg/Blog/blog11.jpg" alt="" />
                            </div>
                            <div className='p-4 font-bold'>
                            Sotsial media marketingi, eng ko'p foydalaniladigan marketing usullaridan biri bo'lib, kompaniyalarga mijozlar bilan bog'liqliklarni o'rnatish, brendni rivojlantirish va sotishlarni oshirish imkonini beradi. Quyidagi sotsial media marketingining eng yaxshi usullari haqida ma'lumotlarni topishingiz mumkin:

                            </div>

                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default BlogInfo