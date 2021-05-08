import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useState(false)

  const toggleMobileMenuState = () => {
    toggleMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <button onClick={toggleMobileMenuState} className='inline-block lg:hidden w-8 h-8 pb-1 mb-1 text-yellow-600'>
        <svg fill="currentColor" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
      </button>
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute lg:relative top-16 left-0 lg:top-0 z-20 lg:flex flex-col lg:flex-row lg:space-x-6 font-heading w-11/12 lg:w-auto bg-yellow-100 p-2 m-4 rounded-xl`}>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center hover:bg-yellow-300 hover:shadow-lg rounded-lg p-1'>Home</a>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center hover:bg-yellow-300 hover:shadow-lg rounded-lg p-1'>Blog</a>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center hover:bg-yellow-300 hover:shadow-lg rounded-lg p-1'>Tutorials</a>
        <a href='#' className='text-yellow-600 text-2xl font-typeface text-center hover:bg-yellow-300 hover:shadow-lg rounded-lg p-1'>About</a>
      </nav>
    </>
  )
}