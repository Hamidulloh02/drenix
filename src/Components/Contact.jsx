import React,{useEffect,useState} from 'react'

function Contact() {
    const [brand,setBrand] = useState()
    const [video,setVideo] = useState()
    const [web,setWeb] = useState()
    const [smm,setSmm] = useState()
    const [logo,setLogo] =useState()
    const [ux,setUx] = useState()
    const [seo,setSeo] =useState()
    const [reklama,setReklama] = useState()
    const [ism,setIsm] =useState()
    const [phone,setPhone] = useState()
    const [company,setCompany] =useState()



    const Branding =(e)=>{
     setBrand(e.target.value)
    }
    const Video = (e) => {
     setVideo(e.target.value)
    }
    const Web = (e) => {
        setWeb(e.target.value)
    }
    const Smm = (e) => {
        setSmm(e.target.value)
    }
    const Logo = (e) =>{
     setLogo(e.target.value)
    }
    const Ux = (e) => {
        setUx(e.target.value)
    }
    const Seo = (e) => {
        setSeo(e.target.value)
    }
    const Reklama = (e) => {
        setReklama(e.target.value)
    }
    const Ism = (e) => {
        setIsm(e.target.value)
    }
    const Phone = (e) => {
        setPhone(e.target.value)
    }
    const Company = (e) => {
        setCompany(e.target.value)
    }
    function ClearFields() {

        document.getElementById("input_name").value = "";
        document.getElementById("input_phone").value = "";
        document.getElementById("input_company").value = "";
        document.getElementById("check_brand").value = "";
   }

    if( phone !=0 && company !=0 ){
        var SendMessage = () => {
        let apiToken = "5999095269:AAEdfY91CC7Ad8LDkpRi2bwO4enIFOwP4tA";
        let chatId = "-1001939295969";

        let $text = `👤 Ism:${ism} \n📱 Nomer:${phone} \n🏢 Kompaniya nomi:${company} \n🔍 Menga DRENIX DIGITAL AGENCY dan qizitirgan xizmat turi:${ brand!=undefined? brand : ""}${video!=undefined? video : ""}${web!=undefined?web:""}${smm!=undefined?smm:""}${logo!=undefined?logo:""}${ux!=undefined?logo:""}${seo!=undefined?seo:""}${reklama!=undefined?reklama:""}`;   
        let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${$text}`;
    
        let request = new XMLHttpRequest();
        request.open("GET", urlString);
        request.send();
    
        let response = request.response;
        ClearFields()
        setCompany("")
        // setName("")
        setPhone("")
    }
   }
    return (
        <div>
            <div className='w-[80%] mx-auto'>
                <div className='grid items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 mt-[150px] mb-[150px]'>
                    <div className='grid place-content-center place-items-center shadow-2xl lg:h-[95%] md:h-[95%] sm:h-[100%] h-[100%] lg:w-[450px] md:w-[420px] sm:[400px] sm:p-[50px] lg:mb-0 md:mb-[1px] sm:mb-[25px] mb-[25px]'>
                        <div className='lg:ms-0 md:ms-0 sm:ms-6 ms-6'>
                            <div className=' text-[28px] mt-1 mb-5 font-bold text-center '>Taklif so'rash</div>
                            <div className=''>
                            <div>
                                <div className='lg:text-[20px] md:text-[20px] sm:text-[18] text-[16] w-[60%] font-bold'><label htmlFor="">Ismingiz</label></div>
                                <div>
                                    <input
                                        className='w-[250px] h-[45px] lg:w-[365px] outline-none pl-5  lg:h-[55px] md:w-[365px]  md:h-[55px] sm:w-[250px] sm:h-[45px] mt-3 mb-3 border border-collapse rounded-lg'
                                        type="text"
                                        onChange={Ism}
                                        id="input_name"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className='lg:text-[20px] md:text-[20px] sm:text-[18] text-[16] w-[60%] font-bold'><label htmlFor="">Telefon raqam *</label></div>
                                <div className=''>
                                    <input 
                                    className='w-[250px] h-[45px] lg:w-[365px] outline-none pl-5  lg:h-[55px] md:w-[365px]  md:h-[55px] sm:w-[250px] sm:h-[45px] mt-3 mb-3 border border-collapse rounded-lg'
                                    type="number" 
                                    onChange={Phone}
                                    id="input_phone"
                                    />
                                    
                                </div>
                            </div>
                            <div>
                                <div className='lg:text-[20px] md:text-[20px] sm:text-[18] text-[16] w-[60%] font-bold'><label htmlFor="">Biznes nomi*</label></div>
                                <div>
                                    <textarea className='w-[250px] h-[45px] lg:w-[365px] outline-none pl-5  lg:h-[55px] md:w-[365px]  md:h-[55px] sm:w-[250px] sm:h-[45px] mt-3 mb-3 border border-collapse rounded-lg'
                                    name=""
                                    cols="30"
                                    rows="10"
                                    onChange={Company}
                                    id="input_company"
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div>
                                <ul className='list-disc mb-2'>
                                    <li className='text-[#EE3F7D] ms-2'>Iltimos, ushbu talab qilinadigan maydonni toʻldiring.</li>
                                </ul>
                            </div>
                            </div>

                            <div>
                                <div><label htmlFor="" className='text-[18px] text-[#202020] font-bold'>Menga DRENIX DIGITAL AGENCY dan qizitirgan xizmat turi</label></div>
                                <div>
                                    <div className='mt-3'>
                                        <div className='font-bold'><input id="check_brand" onChange={Branding} className='w-[15px] h-[15px]' type="checkbox" value="Branding,"/>  Branding </div>
                                        <div className='font-bold'><input id="check_vedio" onChange={Video} className='w-[15px] h-[15px]' type="checkbox"  value="Video Production,"/>  Video Production </div>
                                        <div className='font-bold'><input id="check_web" onChange={Web} className='w-[15px] h-[15px]' type="checkbox" value="Vebsayt yaratish," />  Vebsaytlar yaratish </div>
                                        <div className='font-bold'><input id="check_smm" onChange={Smm} className='w-[15px] h-[15px]'  type="checkbox" value="Ijtimoiy tarmoq reklama/SMM,"/>  Ijtimoy tarmoqlarda reklama/SMM </div>
                                        <div className='font-bold'><input id="check_logo" onChange={Logo} className='w-[15px] h-[15px]' type="checkbox" value="Logotip yaratish," />  Logotip yaratish </div>
                                        <div className='font-bold'><input id="check_ux" onChange={Ux} className='w-[15px] h-[15px]' type="checkbox" value="UX/UI dizayn," />  UX/UI dizayn</div>
                                        <div className='font-bold'><input id="check_seo" onChange={Seo} className='w-[15px] h-[15px]' type="checkbox" value="SEO-optimizatsiya," />  SEO-optimizatsiya</div>
                                        <div className='font-bold'><input id="check_reklama" onChange={Reklama} className='w-[15px] h-[15px]' type="checkbox" value="Kontekst Reklama,"/>  Kontekst Reklama</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mt-[25px]'>
                                    <button onClick={SendMessage} className='w-[250px] h-[45px] lg:w-[365px] lg:h-[55px] md:w-[365px] md:h-[55px] sm:w-[250px] sm:h-[45px] fon-bold-700 mb-5 text-white bg-gradient-to-r from-[#ff8403] to-[#edce1b] rounded-lg text-[20px] font-[600]'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid place-items-center'>
                        <div className='text-[40px] lg:text-[65px] md:text-[50px] sm:text-[40px] font-bold lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] lg:leading-[72px] md:leading-[60px] sm:leading-[35px]' data-aos="fade-up">LOYIHANGIZ BORMI?. BIZ DOIM TAYYORMIZ.</div>
                        <div className='text-[32px] leading-[40px]  lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] font-[500] mt-[30px] mb-[30px]'>IZEA brendlar va agentliklar uchun yaratilgan.</div>
                        <div className='lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] text-[18px] text-[#202020]'>Biz digital marketing xizmatlarini taqdim etamiz, doim loyihalarga tayyormiz. DRENIX bilan hamma narsa oldindan baholanadi, shuning uchun biz yetkazib beradigan narsalarning aniq narxini bilasiz.</div>
                        <div className='text-[32px] leading-[40px] lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] font-[500] mt-[30px] mb-[30px]'>Xavfsiz va muvofiq hamkorlik.</div>
                        <div className='lg:w-[60%] md:w-[60%] sm:w-[80%] w-[90%] text-[18px] text-[#202020]'>DRENIX’ning ichki yuridik jamoasi mijozlarimizga O’zbekistan Respublikasi qonunchiligi muvofiq tarzda ish olib boradi va qonunga zid bo’lgan sohalar va mahsulotlarga (o‘yin, kripto, alkogol va boshqalargacha yuqori darajada tartibga solinadigan sohalar) xizmat ko’rsatmaydi. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact