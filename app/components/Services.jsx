import React from 'react'
import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
const Services = ({darkMode , setDarkMode}) => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-10'>
      <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
      <h2 className='text-center text-5xl'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I am a Computer Science student with extensive experience in both frontend and backend development, machine learning projects, and problem-solving
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">

        {/* Service Item */}
        {serviceData.map(({icon, title, description, link}, index) => (
            <div key={index} className={`border border-gray-500 rounded-lg px-8 py-12 hover:shadow-[2px_2px_0_#000] hover:-translate-y-1 transition duration-500 cursor-pointer hover:bg-[#fcf4ff] ${darkMode ?'hover:text-black':''} `}>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className={`text-lg my-4 `}>{title}</h3> 
                <p className='text-md leading-5 '>{description}</p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5' target="_blank"
            rel="noopener noreferrer">Check Out <Image src={assets.right_arrow} alt='' className='w-4'/></a>
            </div>
        ))}
      </div>
      
    </div>
  )
}

export default Services
