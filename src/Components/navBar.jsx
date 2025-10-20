import React, { useState, useEffect } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useLocation } from 'react-router-dom' // for page highlighting

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80) // adjust when it changes color
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClasses = (path) =>
    `transition-colors duration-300 ${
      location.pathname === path
        ? 'text-accent font-semibold'
        : 'text-white hover:text-accent/80'
    }`

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0B6285] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <a href="/" className="text-lg font-bold text-white">
          Link Hub Africa
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className={linkClasses('/')}>Home</a>
          <a href="/aboutUs" className={linkClasses('/aboutUs')}>About Us</a>
          <a href="/ourServices" className={linkClasses('/ourServices')}>Our Services</a>
          <a href="/contactUs" className={linkClasses('/contactUs')}>Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-2 bg-[#0B6285] text-white">
          <a href="/" className={linkClasses('/')}>Home</a>
          <a href="/aboutUs" className={linkClasses('/aboutUs')}>About Us</a>
          <a href="/ourServices" className={linkClasses('/ourServices')}>Our Services</a>
          <a href="/contactUs" className={linkClasses('/contactUs')}>Contact Us</a>
        </div>
      )}
    </nav>
  )
}

export default NavBar
