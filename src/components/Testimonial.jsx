import React from 'react'
import {AiFillStar} from "react-icons/ai"
import avatar from "../assets/images/logo/logo.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export const Testimonial = () => {
  return (
    <div className='xl:w-[1200px] w-[88%] mx-auto grid grid-cols-12 gap-6 h-[100vh] py-10'>
      <div className='col-span-12 md:col-span-5'>
        <span className='px-4 py-2 rounded-2xl bg-white md:text-xl text-primary font-semibold'>Testimonials ~</span>
        <h1 className='text-3xl md:text-5xl py-9 font-bold'>Here’s what our <span className='text-primary'>customers</span> have said.</h1>
        <p className='text-sm md:text-base'>At ArtiFconnect, we let our work speak for itself through the voices of our delighted clients. Discover what our customers have to say about our exceptional web development services, and how we've helped them achieve their online goals. These testimonials are a testament to our commitment to excellence and the trust we've earned from our clients.</p>
      </div>
      {/* review section */}
      <div className='col-span-12 md:col-span-7'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide>
            <div className='bg-white py-5 px-10 min-h-[350px]'>
              {/* rating */}
              <div className='flex pt-5'>
                <AiFillStar className='text-2xl mx-1 text-yellow'/>
                <AiFillStar className='text-2xl mx-1 text-yellow'/>
                <AiFillStar className='text-2xl mx-1 text-yellow'/>
                <AiFillStar className='text-2xl mx-1 text-yellow'/>
                <AiFillStar className='text-2xl mx-1 text-yellow'/>
              </div>
              {/* review text */}
              <p className='text-xl py-5 text-gray-dark/80'>"ArtiFconnect transformed our outdated website into a modern, user-friendly masterpiece. Their attention to detail and commitment to our vision were outstanding. We now have a website that not only looks great but also performs exceptionally well. Highly recommended!"</p>
              {/* avatar */}
              <div className='flex items-center'>
                <img className='w-16 h-16 rounded-full border-primary border-2 ' src={avatar} alt="" />
                <h4 className='ml-2 text-2xl'>ArtiFconnect</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}
