import React, { useState, useRef, useEffect } from 'react'
import { MdHeadsetMic } from 'react-icons/md'
import { BsCart3 } from 'react-icons/bs'
import { FaRegUser } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className='w-full shadow-sm border-b'>
      {/* Desktop Header */}
      <div className='hidden md:flex container mx-auto px-3 pt-1 pb-0 items-center justify-between bg-white'>
        <img src={logo} alt='Jontech logo' className='h-40 w-auto' />

        {/* Search Bar */}
        <div className="flex flex-1 max-w-2xl mx-8">
          <select className='border border-blue-700 text-sm py-2 rounded-l-md focus:outline-none'>
            <option>All Categories</option>
            <option>Smartphones</option>
            <option>Airpods</option>
            <option>Headphones</option>
            <option>Chargers</option>
            <option>Television</option>
            <option>Screen Protectors</option>
            <option>Phone Covers</option>
            <option>Speakers</option>
          </select>
          <input
            type='text'
            placeholder='Search for products...'
            className='flex-1 border-t border-b border-blue-600 px-4 py-2 focus:outline-none'
          />
          <button className='bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition'>
            Search
          </button>
        </div>

        {/* Top right icons */}
        <div className='flex items-center space-x-6 text-sm'>
          <div className='flex items-center space-x-2'>
            <MdHeadsetMic className='text-2xl text-blue-600' />
            <div>
              <p className='text-gray-500'>Need Help?</p>
              <p className='text-blue-600 font-semibold'>0795299451</p>
            </div>
          </div>

          <div className='relative' ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              className='flex items-center space-x-2 hover:text-blue-800 transition cursor-pointer'
            >
              <FaRegUser className='text-2xl' />
              <div>
                <p className='text-gray-600 text-sm'>My Account</p>
                <p className='font-semibold text-sm'>Login</p>
              </div>
            </div>

            {showDropdown && (
              <div className='absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg p-4 z-50'>
                <form className='space-y-3'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                      type='email'
                      className='w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500'
                      placeholder='you@example.com'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input
                      type='password'
                      className='w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-500'
                      placeholder='••••••••'
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition text-sm'
                  >
                    Login
                  </button>
                </form>
                <p className='text-sm text-center mt-3 text-gray-600'>
                  Don’t have an account?{' '}
                  <Link to="/signup" className='text-blue-600 hover:underline'>
                    Sign up
                  </Link>
                </p>
              </div>
            )}
          </div>

          <div className='relative flex items-center space-x-2 cursor-pointer hover:text-blue-800 transition'>
            <div className='relative pr-1'>
              <BsCart3 className='text-2xl' />
              <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full'>0</span>
            </div>
            <div className='text-sm pl-1'>
              <p className='text-gray-600'>My Cart</p>
              <p className='font-semibold'>(KSh 0)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className='hidden md:block w-full border-t shadow-sm bg-white'>
        <div className='container mx-auto px-4 py-2 flex flex-wrap gap-x-6'>
          <Link to="" className='text-gray-900 hover:text-blue-600 font-medium'>Home</Link>
          <Link to="/smartphones" className='text-gray-900 hover:text-blue-600 font-medium'>Smart Phones</Link>
          <Link to="/mkopa" className='text-gray-900 hover:text-blue-600 font-medium'>M-Kopa Phones</Link>
          <Link to="/televisions" className='text-gray-900 hover:text-blue-600 font-medium'>Televisions</Link>
          <Link to="/mobile-accessories" className='text-gray-900 hover:text-blue-600 font-medium'>Mobile Accessories</Link>
          <Link to="/laptops" className='text-gray-900 hover:text-blue-600 font-medium'>Laptops</Link>
          <Link to="/tablets" className='text-gray-900 hover:text-blue-600 font-medium'>Tablets</Link>
          <Link to="/audio" className='text-gray-900 hover:text-blue-600 font-medium'>Audio</Link>
          <Link to="/storage" className='text-gray-900 hover:text-blue-600 font-medium'>Storage Devices</Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className='md:hidden bg-gray-100 flex items-center justify-between px-4 py-2'>
        <img src={logo} alt='Jontech Logo' className='h-10' />

        <div className='flex items-center gap-5 text-xl text-white'>
          <AiOutlineSearch className='cursor-pointer text-blue-500' />
          <GiHamburgerMenu
            className='cursor-pointer text-blue-500'
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          />
          <FaRegUser className='cursor-pointer text-blue-500' />
          <div className='relative'>
            <BsCart3 className='cursor-pointer text-blue-500' />
            <span className='absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full'>0</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-yellow-100 px-6 py-4 space-y-3 shadow-md border-t'>
          <Link to="" className='text-gray-900 hover:text-blue-600 font-medium'>Home</Link>
          <Link to="/smartphones" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Smart Phones</Link>
          <Link to="/mkopa" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>M-Kopa Phones</Link>
          <Link to="/televisions" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Televisions</Link>
          <Link to="/mobile-accessories" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Mobile Accessories</Link>
          <Link to="/laptops" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Laptops</Link>
          <Link to="/tablets" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Tablets</Link>
          <Link to="/audio" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Audio</Link>
          <Link to="/storage" className='block text-gray-900 hover:text-blue-600 font-medium transition duration-200'>Storage Devices</Link>
        </div>
      )}
    </header>
  )
}

export default Header
