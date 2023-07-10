import React from 'react'
// React icon
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF} from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';


function Footer() {
  return (
    <div>
        <div>
            <div>
                <hr />
            </div>
            <div className=' md:text-[14px] sm:text-[14px] text-[14px] grid lg:grid-cols-4 md:grid-cols-2 lg:text-[14px] sm:grid-cols-1 lg:ms-[20%] md:ms-[30%] sm:ms-[15%] ms-[15%] sm:w-[60%]   gap-8 w-[80%] mx-auto leading-[30px] mt-[80px] mb-[80px]'>
                <ul>
                    <li className='font-[600]'>ABOUT</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Partners</li>
                    <li>Press Center</li>
                </ul>
                <ul>
                    <li className='font-[600]'>HELP</li>
                    <li>Support</li>
                    <li>Disclosure Center</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li className='font-[600]'>INFLUENCER MARKETING SOLUTIONS</li>
                    <li>Creator Marketplace</li>
                    <li>IZEA Flex</li>
                    <li>Managed Services</li>
                    <li>Pricing</li>
                </ul>
                <ul>
                    <li className='font-[600]'>RESOURCES</li>
                    <li>Insights</li>
                    <li>Case Studies</li>
                    <li>Product Updates</li>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Gear</li>
                </ul>
            </div>
            <div>
                <hr />
            </div>
            <div  className='pt-[50px] pb-[50px]'>
                <div className='flex justify-center items-center mt-[20px] mb-[20px] sm:ms-[30px] ms-[30px]  sm:text-[10px] text-[10px]' >© 2023 IZEA. Terms of Service | Privacy Notice | California Privacy Notice | Cookie Policy | Accessibility</div>
                <div>
                    <div className='flex justify-center items-center '>
                        <div className='flex gap-8'>
                        <AiOutlineTwitter className='text-[25px]'/>
                        <FaFacebookF className='text-[25px]'/>
                        <AiFillYoutube className='text-[25px]'/>
                        <AiOutlineInstagram className='text-[25px]'/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer