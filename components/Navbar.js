import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useState(false)

  const toggleMobileMenuState = () => {
    toggleMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <button onClick={toggleMobileMenuState} className='inline-block md:hidden w-8 h-8 pb-1 text-yellow-600'>
        <svg fill="currentColor" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
      </button>
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-heading w-full md:w-auto bg-yellow-100 md:p-0`}>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center bg-yellow-300 md:bg-yellow-100 md:hover:bg-yellow-300 md:hover:shadow-lg md:rounded-lg p-2 mt-2 md:mt-0'>Home</a>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center md:bg-yellow-100 md:hover:bg-yellow-300 md:hover:shadow-lg md:rounded-lg p-2'>Blog</a>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center bg-yellow-300 md:bg-yellow-100 md:hover:bg-yellow-300 md:hover:shadow-lg md:rounded-lg p-2'>Tutorials</a>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center md:bg-yellow-100 md:hover:bg-yellow-300 md:hover:shadow-lg md:rounded-lg p-2'>About</a>
      </nav>
    </>
  )
}