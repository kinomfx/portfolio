import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Work = ({darkMode , setDarkMode}) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-10'>
      <h4 className='text-center mb-2 text-lg'>Portfolio</h4>
      <h2 className='text-center text-5xl'>My Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        Welcome to my web-portfolio. Here are some of my projects that showcase my skills and expertise 
        in web development and other avenues.
      </p>

      {/* Work items grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 ${darkMode?'text-white':''}`}>
        {workData.map((data, index) => (
          <a
            key={index}
            href={data.link}          
            target="_blank"
            rel="noopener noreferrer"
            className="relative group aspect-square rounded-xl overflow-hidden shadow-lg bg-cover bg-center hover:shadow-[2px_2px_0_#000] transition-all duration-500 cursor-pointer -translate-y-0 hover:-translate-y-1"
            style={{ backgroundImage: `url(${data.bgImage})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-center text-white p-4">
              <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
              <p className="text-sm">{data.description}</p>
              <div className="mt-3">
                <Image src={assets.send_icon} alt="send_icon" className="w-6 invert" />
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className='w-full text-center mt-10 flex justify-center mt-20 items-center'>
        <a  target="_blank" href="https://github.com/kinomfx" className={`w-50  border-[0.5px] rounded-3xl cursor-pointer flex flex-row gap-2 text-lg p-3 justify-center items-center hover:bg-[#fcf4ff] ${darkMode?"text-white bg-gray-600 hover:bg-gray-700 border-black ":""}`}>Show More<Image src={assets.right_arrow_bold} alt='' className='w-4'/></a>
      </div>
    </div>
  )
}

export default Work
