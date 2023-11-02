import React from 'react'
import { Link } from 'react-router-dom'
import {BiRightArrowAlt} from "react-icons/bi"

export const Banner = () => {
  return (
    <div className='banner min-h-[95vh] flex items-center'>
        <div className='xl:w-[1200px] w-[90%] mx-auto'>
            <h4 className='text-lg md:text-xl font-semibold bg-white text-primary inline px-6 py-2 rounded-2xl'>We Are IT service agency ~</h4>
            <div className='md:w-[55%]'>
              <h1 className='text-4xl md:text-6xl font-extrabold py-5 text-white'>Creating Digital Solutions for Your Success</h1>
              <p className='text-sm mb-5 text-white'>Welcome to ArtiFconnect, where we turn your ideas into exceptional web experiences. We are a passionate team of web developers dedicated to building custom websites that drive growth and deliver results. Whether you need a simple, elegant website, a robust e-commerce platform, or a complex web application, we've got you covered.</p>
              <Link className='flex justify-between items-center w-[130px] py-3 px-4 rounded-lg font-semibold text-primary bg-white'>Our Team <BiRightArrowAlt className='text-xl'/></Link>
            </div>
        </div>
    </div>
  )
}
