import React from 'react'
import banner from "../assets/images/banner/about our company.jpg"
import shape from '../assets/images/shapes/shape.png'
import {BiRightArrowAlt} from "react-icons/bi"
import {FaPhoneAlt} from "react-icons/fa"

export const AboutOurCompany = () => {
  return (
    <div className='xl:w-[1200px] w-[90%] mx-auto py-[100px] md:flex justify-between overflow-hidden'>
        <div className=' relative'>
            <img className='w-[90%] md:mx-auto z-10' src={banner} alt="" />
            <img className='absolute -top-0 -right-16 -z-10 animate-bounce' src={shape} alt="" />
        </div>
        <div className='md:w-[50%] mt-10 md:m-0'>
            <h4 className='py-2 px-4 rounded-3xl border border-primary/5 shadow-2xl text-primary font-semibold w-[220px]'>About Our Company ~</h4>
            <h1 className='text-3xl md:text-5xl font-extrabold my-5 leading-relaxed'>Elevate Your Digital Presence with <span className='text-primary'>ArtiFconnect</span></h1>
            <p className='my-5'>At ArtiFconnect, we are your trusted partner in the world of web development, dedicated to transforming your online vision into reality. Our mission is to craft unique and innovative digital experiences that not only captivate your audience but also drive results.</p>
            <p className='my-5'>With a talented team of creative minds, tech enthusiasts, and problem solvers, we specialize in delivering cutting-edge web development solutions. Whether you're a startup looking to establish your online presence, an established business seeking a refresh, or an entrepreneur with a groundbreaking idea, we've got you covered.</p>
   
            {/* contact button */}
            {/* <a className='flex items-center bg-primary w-[140px] py-3 my-5 text-white justify-center rounded-lg' href="mailto:ashikrahman.dev@gmail.com">Contact Us! <BiRightArrowAlt className='ml-2 text-2xl' /></a> */}
        </div>
    </div>
  )
}
