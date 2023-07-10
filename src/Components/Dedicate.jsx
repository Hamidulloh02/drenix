import React from 'react'

function Dedicate() {
  return (
    <div>
        <div className='w-[100%] h-[100%] pt-[145px] pb-[145px]'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4  '>
                <div>
                <div className='w-[65%] mx-auto'>
                <video src={"./izeaImg/dedicate.mp4"} autoPlay loop muted />
                 </div>
                </div>
                <div className='grid place-items-center'>
                    <div className='text-[40px] lg:text-[65px] md:text-[50px] sm:text-[40px] font-bold lg:w-[55%] md:w-[50%] sm:w-[50%] w-[90%] lg:leading-[72px] md:leading-[60px] sm:leading-[35px]' data-aos="fade-up">MAXSUS JAMOA</div>
                    <div className='text-[32px] lg:leading[45px] md:leading[30px] sm:leading[30px] leading[20px] lg:w-[55%] md:w-[50%] sm:w-[50%] w-[90%] text-start font-semibold mt-[30px] mb-[30px]'>Maqsadlaringizga mos keladigan samarali digital reklamarni yaratish bo'yicha mutaxassislar.</div>
                    <div className='lg:w-[55%] md:w-[50%] sm:w-[50%] w-[90%] mt-[30px] mb-[30px] text-[18px]'>Biz sizning kengaytirilgan natijaga asoslangan jamoangiz bo'lamiz va maqsadli auditoriyangizni jalb qiladigan strategiyalarni ishlab chiqamiz, ta'sir qiluvchilarni aniqlaymiz va reklamalarni amalga oshiramiz.</div>
                    <div className='lg:w-[55%] md:w-[50%] sm:w-[50%] w-[90%] text-[18px]'>Bizning keyingi avlod ta'sirchan marketing platformamiz suniy analitiklar orqali kampaniyalaringiz samaradorligini kuzatib boradi va o'lchaydi. Kampaniyangiz qanday ishlashini tushunishga yordam beradigan batafsil tahlil va hisobotlarni taqdim etamiz va iloji boricha yaxshi natijalarga erishish uchun kerakli tuzatishlar kiritamiz.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dedicate