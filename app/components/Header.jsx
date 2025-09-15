import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <div className='w-10/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 h-screen pt-24 sm:pt-32 md:pt-36 pb-10'>
      <div>
        <Image
          src={assets.profile_img}
          alt=''
          className="rounded-full hover:md:w-50  w-24 sm:w-32 md:w-35 lg:w-40  transition-all duration-500"
        />

      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
        Hi! I am Monik Rayu <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
        Software Developer | Web Developer | Programmer | Tech Enthusiast | Engineer
      </h1>
      <p className='max-w-2xl mx-auto'>
        I’m a final-year student at{' '}
        <a href="https://dtu.ac.in" target="_blank" className='font-semibold'>
          Delhi Technological University
        </a>
        , passionate about building impactful software solutions. With a strong foundation in{' '}
        <span className='font-medium'>Web Development, Problem Solving, and System Design</span>, I love turning ideas into efficient and scalable applications. Always eager to learn, innovate, and contribute to the tech community.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-2 mt-4 w-full justify-center'>
        <a
          href="#contact"
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 text-center'
        >
          Contact Me <Image src={assets.right_arrow_bold} alt='' className='w-4' />
        </a>
        <a
          href="/Monik_SDE_Resume.pdf"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
        >
          My Resume <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>
  );
};

export default Header;
