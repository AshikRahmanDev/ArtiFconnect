import React from 'react'
import Marquee from 'react-fast-marquee'
import react from "../assets/images/icons/react.com.png"
import aws from "../assets/images/icons/aws.com.png"
import express from "../assets/images/icons/express.png"
import html from '../assets/images/icons/html.png'
import javascript from "../assets/images/icons/javaScript.com.png"
import mongodb from "../assets/images/icons/monoodb.png"
import nodejs from '../assets/images/icons/nodejs.png'
import typescript from "../assets/images/icons/typescript.png"
import nextjs from "../assets/images/icons/nextjs.png"

export const TechnologySection = () => {
  return (
    <div className='my-10'>
        <h4 className='text-center px-4 text-3xl font-semibold text-primary'>~What Technology We Are Using For Our Valued Customers~</h4>
        <Marquee className='py-10'>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={react} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={express} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={nextjs} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={html} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={mongodb} alt="" />
            </div>
        </Marquee>
        {/* 2nd marquee */}
        <Marquee direction='right' className='pb-10'>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={aws} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={nodejs} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={javascript} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={typescript} alt="" />
            </div>
            {/* thechnology */}
            <div className='flex justify-center items-center w-[200px] h-[120px] md:w-[260px] md:h-[150px] bg-white shadow-xl mx-5'>
                <img className='h-[80px] object-contain' src={mongodb} alt="" />
            </div>
        </Marquee>
    </div>
  )
}
