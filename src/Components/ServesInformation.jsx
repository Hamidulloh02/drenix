import React from 'react'

function ServesInformation(props) {
    let data = props.data

  return (
    <div>
        <div className='mt-[58vh]'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-gradient-to-r from-[#f6942c] to-[#2d2b22]  text-white lg:p-[100px] md:p-70px] sm:p-[40px] p-[20px]'>
                <div className='lg:w-[70%] md:w-[90%] sm:w-[90%] w-[90%] '>
                    <div className='text-[24px]'>{data.type1}</div>
                    <hr />
                    <div className='text-[45px] leading-[50px] mt-[20px] mb-[20px]'>{data.title1}</div>
                    <div className='text-[16px]'>{data.text1}</div>
                    <div className='lg:text-[54px] md:text-[50px] sm:text-[30px] text-[30px] mt-[25px] mb-[25px] lg:leading-[60px] md:leading-[55px] sm:leading-[50px] leading-[45px] '>{data.title11}</div>
                    <div className='text-[16px]'>{data.text11}</div>
                </div>
                <div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1'>
                        <div className='lg:w-[90%] md:w-[100%] sm:w-[100%] w-[100%]'>
                             <div className='text-[24px]'>{data.type2}</div>
                             <hr className='mt-[20px] mb-[20px]'/>
                             <div className='text-[30px] leading-[40px] mb-[20px]'>{data.title2}</div>
                             <div className='text-[16px] mb-[50px]'>{data.text2}</div>

                             <div className='text-[24px]'>{data.type3}</div>
                             <hr  className='mt-[20px] mb-[20px]'/>
                             <div className='text-[30px]'>{data.title3}</div>
                             <div className='text-[16px]'>{data.text3}</div>
                        </div>

                        <div className='lg:w-[90%] md:w-[100%] sm:w-[100%] w-[100%]'>
                            <div className='text-[24px]'>{data.type4}</div>
                             <hr className='mt-[20px] mb-[20px]'/>
                             <div className='text-[30px] leading-[40px] mb-[20px]'>{data.title4}</div>
                             <div className='text-[16px] mb-[50px]'>{data.text4}</div>

                             <div className='text-[24px]'>{data.type5}</div>
                             <hr  className='mt-[20px] mb-[20px]'/>
                             <div className='text-[30px]'>{data.title5}</div>
                             <div className='text-[16px]'>{data.text5}</div>
                        </div>
                         
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ServesInformation