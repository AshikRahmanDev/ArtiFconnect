import React from 'react'
import {MdOutlineDesignServices,MdBusinessCenter} from "react-icons/md"
import {BiSupport} from "react-icons/bi"
import {CgWebsite} from "react-icons/cg"
import {AiOutlineFileSearch} from "react-icons/ai"

export const Services = () => {
  return (
    <div className='service-banner flex items-center min-h-[40vh]'>
      <div className='xl:w-[1200px] w-[90%] mx-auto'>
        <h1 className='text-3xl md:text-5xl mt-5 text-white font-bold'>Join Over +15,000 happy clients!</h1>
        <p className='text-white py-2'>Our team excels in creating unique, feature-rich websites and web applications that meet your specific needs.</p>
        <div className='grid relative grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-7 my-10'>
          {/* service */}
          <div className='service flex flex-col items-center justify-center bg-white min-h-[200px]'>
            <MdOutlineDesignServices className='icon text-7xl text-primary' />
            <h2 className='text-center text-xl font-semibold mt-5'>UI/UX Design <br className='hidden md:block' /> Services</h2>
          </div>
          
          {/* service */}
          <div className='service flex flex-col items-center justify-center bg-white min-h-[200px]'>
            <MdBusinessCenter className='icon text-7xl text-primary' />
            <h2 className='text-center text-xl font-semibold mt-5'>Business <br className='hidden md:block'/> Consultation</h2>
          </div>
          
          {/* service */}
          <div className='service flex flex-col items-center justify-center bg-white min-h-[200px]'>
            <CgWebsite className='icon text-7xl text-primary' />
            <h2 className='text-center text-xl font-semibold mt-5'>Website <br className='hidden md:block'/> Development</h2>
          </div>
          
          {/* service */}
          <div className='service flex flex-col items-center justify-center bg-white min-h-[200px]'>
            <BiSupport className='icon text-7xl text-primary' />
            <h2 className='text-center text-xl font-semibold mt-5'>Support <br className='hidden md:block'/> Management</h2>
          </div>
          
          {/* service */}
          <div className='service flex flex-col items-center justify-center bg-white min-h-[200px]'>
            <AiOutlineFileSearch className='icon text-7xl text-primary' />
            <h2 className='text-center text-xl font-semibold mt-5'>Market <br className='hidden md:block'/> Research</h2>
          </div>
          
        </div>
      </div>
    </div>
  )
}
