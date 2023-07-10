import React,{useEffect,useState} from 'react'

function Contact02() {
const [name,setName] = useState()
const [phone,setPhone] = useState()
const [company,setCompany] = useState()
    const Getname = (e) => {
        setName(e.target.value)
     
    }
    const Getphone = (e) => {
        setPhone(e.target.value)
    }
    const Getcompany = (e) => {
        setCompany(e.target.value)
    }
    function ClearFields() {

        document.getElementById("input_name").value = "";
        document.getElementById("input_phone").value = "";
        document.getElementById("input_company").value = "";
   }
   if( phone !=0 && company !=0 ){
        var SendMessage = () => {
        let apiToken = "5999095269:AAEdfY91CC7Ad8LDkpRi2bwO4enIFOwP4tA";
        let chatId = "-1001939295969";
        // let newrow = "\n"
        let $text = `👤 ism:${name} 📱 nomer:${phone}  🏢 kompaniya nomi:${company}`;
        let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${$text}`;
    
        let request = new XMLHttpRequest();
        request.open("GET", urlString);
        request.send();
    
        let response = request.response;
        ClearFields()
        setCompany("")
        setName("")
        setPhone("")
        
    }
   }

  return (
    <div>
        <div>
            <div className='bg-gradient-to-r from-[#ff8403] to-[#edce1b] text-white w-[80%] mx-auto lg:p-[60px] md:p-[50px] sm:p-[40px] p-[18px] rounded-lg mt-[60px] mb-[60px] '>
                <div >
                        <div className='text-[14px]'>HAMKORLIK</div>
                        <div className=' lg:leading-[70px] md:leading-[60px] sm:leading-[50px] leading-[40px] mt-[30px] mb-[30px] lg:text-[49px] md:text-[40px] sm:text-[30px] text-[25px]'>LOYIHANGIZ BORMI?<br/> BIZ DOIM TAYYORMIZ.</div>
                        <div className='text-[17px] mb-[30px] lg:w-[60%] md:w-[70%] sm:w-[90%] w-[90%] '>DRNIX brendlar va agentliklar uchun yaratilgan.</div>
                        <hr className='mt-5 mb-5'/>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                            <div>
                                <div>Ismingiz</div>
                                <div><input id="input_name" onChange={Getname} className='text-black w-[250px] h-[45px] lg:w-[300px] outline-none pl-5  lg:h-[55px] md:w-[300px]  md:h-[55px] sm:w-[250px] sm:h-[45px] mt-3 mb-3 border border-collapse rounded-lg' type="text" placeholder='Ismingiz'/></div>
                            </div>
                            <div>
                                <div>Telefon raqam *</div>
                                <div><input id="input_phone" onChange={Getphone} className='text-black w-[250px] h-[45px] lg:w-[300px] outline-none pl-5  lg:h-[55px] md:w-[300px]  md:h-[55px] sm:w-[250px] sm:h-[45px] mt-3 mb-3 border border-collapse rounded-lg' type="number" placeholder='Telefon raqamingiz'/></div>
                            </div>
                            <div>
                                <div>Biznes nomi*</div>
                                <div><input id="input_company" onChange={Getcompany} className='text-black w-[250px] h-[45px] lg:w-[300px] outline-none pl-5  lg:h-[55px] md:w-[300px]  md:h-[55px] sm:w-[250px] sm:h-[45px] mt-3 mb-3 border border-collapse rounded-lg' type="text" placeholder='Kompanyangizni ismi' /></div>
                            </div>
                        </div>
                        <div>
                            <button  className='lg:w-[200px] md:w-[250px] sm:w-[200px] w-[250px] h-[45px] bg-[#F24211] hover:bg-[#f24211a4] text-white rounded mt-[20px]' onClick={SendMessage}>Jo`natish</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact02