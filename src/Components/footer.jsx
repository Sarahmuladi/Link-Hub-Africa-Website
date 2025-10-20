import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlinePhone } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-primary text-tertiary'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row md:justify-around gap-8'>
          
          {/* Brand & Socials */}
          <div className='flex flex-col items-start'>
            <h4 className='text-lg font-semibold mb-4'>Link Hub Africa</h4>
            <div className='flex gap-4 text-xl'>
              <FaFacebook />
              <FaInstagram />
              <FaSquareXTwitter />
              <FaLinkedin />
            </div>
          </div>

          {/* Contact */}
          <div className='flex flex-col items-start'>
            <h4 className='text-lg font-semibold mb-4'>Contact Us</h4>
            <div className='flex flex-col gap-2 text-sm'>
              <div className='flex items-start gap-2'>
                <IoLocationOutline className='mt-1'/>
                <span>15th Floor, Millenium Towers, Ali Hassan Mwinyi Road, Dar es Salaam, Tanzania</span>
              </div>
              <div className='flex items-center gap-2'>
                <CiMail />
                <span>muladisarah@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <MdOutlinePhone />
                <span>+255 767946838</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer bottom */}
      <div className='text-center border-t border-secondary py-4 text-sm'>
        &copy; {new Date().getFullYear()} Link Hub Africa. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
