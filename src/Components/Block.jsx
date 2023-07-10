import React from 'react'
import data from "../Components/Jsons/Blog.json"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom"

let data01 = []
let data02 = []
data01.push(...data.slice(0,9))
data02.push(...data.slice(10))


function Block() {
    const [page, setPage] = React.useState(1);


    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    //   };
    //   {
    //     console.log(page)
    //   }
    function handlePagination (event) {
      setPage(event.target.textContent)
      window.scrollTo({top: 30, behavior: 'smooth'});
   }
   console.log(page)
  return (
    <div>
        <div>
            <div className='flex justify-center items-center text-center text-white w-[100%] h-[350px] absolute top-0 -z-10'>
                <div className='z-10'>
                    <div className='text-center text-[72px]'>Blog</div>                    
                </div>
                <div className='Blog_header'><img className='Blog_header_img' src="./izeaImg/Blog/page_back.jpg" alt="" /></div>
            </div>
            <div className='mt-[400px]'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-6  w-[80%] mx-auto mb-[60px]'>
                    {
                        (page == 1 ? data01 : data02).map((e,i) => {
                            return(
                                <div className='card border border- decoration-gray-100 rounded-xl mt-[60px] '>
                                <img className='w-[100%] h-[280px] object-cover' src={e.img} alt="block img" />
                                <div className='p-[20px]'>
                                    {/* <img className='w-[184px] h-[85px] mt-[40px] mb-[40px] text-center' src="./izeaImg/Block/brend-01.png" alt="brend img" /> */}
                                    <div className='text-[18px] font-[600]'><Link state={data[i]} to="/blog-info">{e.text}</Link> </div>
                                </div>
                             </div>
                            )
                            
                        })
                    }

                </div>
                <div className='w-[80%] mx-auto'>
                             <Stack spacing={2} className='mt-[20px] mb-[20px]'>
                    <Pagination count={2} onChange={handlePagination} color="primary" />
                </Stack>  
                </div>
     
            </div>

        </div>
    </div>
  )
}

export default Block