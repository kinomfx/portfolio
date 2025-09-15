import { assets, toolsData } from '@/assets/assets'
import { infoList } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
const About = ({darkMode , setDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-15 pt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me </h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className="w-full sm:w-[22rem] rounded-3xl max-w-none overflow-hidden">
        <Image 
            src={assets.user_image} 
            alt="user" 
            className="rounded-3xl w-full transition-transform duration-500 hover:scale-200"
        />
        </div>


        <div className='flex-1'>
            <p className='mb-10 max-w-2xl text-md'>I am an experienced programmer with a diverse and versatile tech stack, having worked on a wide range of projects spanning web development, machine learning, and game development

            </p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList?.map(({icon , icon_dark, title , description}, index) => (
                    <li key ={index} className={`border-[0.5px] border-gray-500 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 transition duration-500 hover:shadow-[2px_2px_0_#000] ${darkMode ?'hover:text-black':''}`} >
                        <Image src={icon} alt={title} className='w-10 mt-3'/>
                        <h3 className={`my-4 font-semibold `}>{title}</h3>
                        <p className={` text-sm`}>{description}</p>
                    </li>
                ))}
            </ul>
            <h4 className={`my-6 ${darkMode?'text-white': 'text-gray-600'}`}>Tools I use</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((icon, index) => (
                  <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 transition duration-500'><Image src={icon} alt='' className='w-5 sm:w-7'/></li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
