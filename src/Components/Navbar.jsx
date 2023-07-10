import React, { useState } from 'react'
import { HiMenuAlt2} from 'react-icons/hi';
import {Link} from "react-router-dom"

function Navbar() {

    const [open,setopen] = useState(false)

   const OpenMenu = () => {
    setopen(!open)
   }
   const About = () =>{
    window.scrollTo({top: 6000, behavior: 'smooth'});
   }
   const Portfolio = () => {
    window.scrollTo({top: 1000, behavior: 'smooth'});
   }
   const Contact = () => {
    window.scrollTo({top: 7000, behavior: 'smooth'});
   }
  return (
    <div className='absolute w-screen z-50 top-0'>
        <div className="max-w-[97%] ms-[1.5%] mt-4 desktop_nav">
        <div className="flex justify-between items-center">
            <div>
              <Link to="/"><img className='max-w-[180px]' src="./izeaImg/drenx-logo-n002.png" alt="" /></Link>  
            </div>
            <div>
                <ul className='flex justify-between items-center text-white'>
                    <li className='m-3 serves relative'>
                        <Link>Xizmatlar</Link>
                        <div className='servesbox  p-[10px] w-[250px]  bg-white absolute rounded text-black flex justify-center items-center text-[16px]'>
                            <ul >
                            <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-branding">Branding</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-video">Video Production</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-web">Vebsaytlar yaratish</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-logo">Logotip yaratish </Link>
                                </li>
                                {/* <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="">UX/UI dizayn</Link>
                                </li> */}
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-smm">Ijtimoy tarmoqlarda reklama/SMM</Link>
                                </li>
                                {/* <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="">SEO-optimizatsiya</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="">Kontekst Reklama</Link>
                                </li> */}
                            </ul>
                        </div>
                    </li>
                    <li className='m-3 navMenu' onClick={About}><Link to="/">Biz haqimizda</Link> </li>
                    <li className='m-3 navMenu' onClick={Portfolio}>Portfolio</li>
                    <li className='m-3 navMenu' onClick={Contact}>Aloqa</li>
                    <li className='m-3 navMenu'><Link to="blockpage">Blog</Link></li>
                    <li className='m-3 navMenu'><button className='border border-white px-[25px] py-[8px] rounded-full'>Get start</button></li>
                    <li className='m-3'><img className='w-10' src="./izeaImg/no-user-1.svg" alt="" /></li>
                </ul>
            </div>
        </div>            
        </div>
        <div className="mobile_nav">
            <div className='flex justify-between w-[90%] mx-auto mt-2'>
                <div className='logo'>
                  <Link to='/'><img className='w-[120px] ' src="./izeaImg/drenx-logo-n002.png" alt="" /></Link>  
                </div>
                <div className='z-50'>
                    <HiMenuAlt2 className='text-white text-[30px]'  onClick={OpenMenu}/>
                </div>

                
                            <div className={`mobile_menu duration-200 ease-linear w-[340px] h-[100vh]  bg-[#F24211] fixed top-0  z-40 ${!!open? "right-0":"-right-96"}`}> 
                            <div className='flex justify-center items-center w-[100%] h-[100vh]'>
                            <ul className={`text-white text-[25px] duration-500 fixed  z-40 ${!!open? "right-28":"-right-96"}`}>
                            <li className='m-3 serves relative'>
                        <Link>Xizmatlar</Link>
                        <div className='servesbox  p-[10px] w-[250px]  bg-white absolute rounded text-black flex justify-center items-center text-[16px]'>
                            <ul >
                            <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-branding">Branding</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-video">Video Production</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-web">Vebsaytlar yaratish</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-logo">Logotip yaratish </Link>
                                </li>
                                {/* <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="">UX/UI dizayn</Link>
                                </li> */}
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="serves-smm">Ijtimoy tarmoqlarda reklama/SMM</Link>
                                </li>
                                {/* <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="">SEO-optimizatsiya</Link>
                                </li>
                                <li className='m-2 servesLi' onClick={OpenMenu}>
                                    <Link to="">Kontekst Reklama</Link>
                                </li> */}
                            </ul>
                        </div>
                    </li>
                    <li className='m-3' onClick={OpenMenu}><Link to="/"><span onClick={About}>Biz haqimizda</span></Link> </li>
                    <li className='m-3' onClick={OpenMenu}><span onClick={Portfolio}>Portfolio</span> </li>
                    <li className='m-3' onClick={OpenMenu}><span onClick={Contact}>Aloqa</span> </li>
                    <li className='m-3' onClick={OpenMenu}><Link to="blockpage">Blog</Link></li>
                </ul>

            </div> 

            </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar