import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'

const links =<>
<Link className='text-lg font-semibold hover:text-primary mx-2 hover:bg-primary/20 rounded-lg px-6 py-2'>Home</Link>
                <Link className='text-md font-semibold hover:text-primary mx-2 hover:bg-primary/20 rounded-lg px-6 py-2'>About</Link>
                <Link className='text-md font-semibold hover:text-primary mx-2 hover:bg-primary/20 rounded-lg px-6 py-2'>Services</Link>
                <Link className='text-md font-semibold hover:text-primary mx-2 hover:bg-primary/20 rounded-lg px-6 py-2'>Portfolio</Link>
</>
export const Header = () => {
    
  return (
    <div className='h-[74px] flex items-center shadow-2xl bg-white'>
        <div className='xl:w-[1200px] w-[95%] md:w-[90%] mx-auto flex justify-between items-center'>
            <Link className=''>
                <img className='h-[64px]' src={logo} alt="" />
            </Link>
            {/* link */}
            <div className='hidden md:block text-primary'>
                {links}
            </div>
            {/* get a quote btn */}
            <div>
                <a href="mailto:ashikrahman.dev@gmail.com" className='text-md font-semibold py-3 px-4 bg-primary md:text-primary text-white md:bg-primary/20 rounded-lg hover:bg-primary hover:text-white'>
                    Get a quote now
                </a>
            </div>
        </div>
    </div>
  )
}
