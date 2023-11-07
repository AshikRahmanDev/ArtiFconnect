import React from 'react'
import portfolio from "../assets/images/banner/about our company.jpg"

export const Portfolio = () => {
  return (
    <div className='xl:w-[1200px] w-[86%] mx-auto my-5' >
        {/* section title */}
        <div>
            <span className='py-2 px-4 md:text-xl font-bold bg-white rounded-3xl text-primary shadow-xl'>Portfolio Showcase ~</span>
            <h1 className='text-3xl md:text-5xl my-5 font-bold'>Welcome to our <span className='text-primary'>Portfolio</span> Showcase.</h1>
        </div>
       {/* portfolios */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-5'>
            <div className='bg-white'>
                <img className='w-full h-[240px] object-cover' src={portfolio} alt="" />
                <div className='p-4'>
                    <h1 className='text-xl font-semibold'>E-commerce website</h1>
                </div>
            </div>
            <div className='bg-white'>
                <img className='w-full h-[240px] object-cover' src={portfolio} alt="" />
                <div className='p-4'>
                    <h1 className='text-xl font-semibold'>E-commerce website</h1>
                </div>
            </div>
            <div className='bg-white'>
                <img className='w-full h-[240px] object-cover' src={portfolio} alt="" />
                <div className='p-4'>
                    <h1 className='text-xl font-semibold'>E-commerce website</h1>
                </div>
            </div>
        </div> 
    </div>
  )
}
