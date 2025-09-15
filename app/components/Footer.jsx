import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <footer className="mt-15 py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-3">
        {/* Logo */}
        <Image src={assets.logo} alt="Logo" className="w-36 mb-2" />

        {/* Email */}
        <div className="flex items-center gap-3">
          <Image src={assets.mail_icon} alt="Mail" className="w-6 h-6" />
          <h2 className="text-xl font-medium">monikrayu@gmail.com</h2>
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-lg text-gray-600">
          <li>
            <a target="_blank" href="https://github.com/kinomfx" className="hover:text-black">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/monik-rayu-017019269" className="hover:text-black">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/@monikrayu2546" className="hover:text-black">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
