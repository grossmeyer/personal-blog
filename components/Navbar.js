import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useState(false)

  const toggleMobileMenuState = () => {
    toggleMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <button onClick={toggleMobileMenuState} className='inline-block md:hidden w-8 h-8 p-1 text-darkAccent'>
        <svg fill="currentColor" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
      </button>
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-heading w-full md:w-auto bg-lightBg shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0`}>
        <a href='#' className='text-darkBg text-3xl md:text-xl font-header hover:underline'>Home</a>
        <a href='#' className='text-darkAccent text-3xl md:text-xl font-header hover:underline'>About us</a>
        <a href='#' className='text-darkAccent text-3xl md:text-xl font-header hover:underline'>Services</a>
        <a href='#' className='text-darkAccent text-3xl md:text-xl font-header hover:underline'>Blog</a>
        <a href='#' className='text-darkAccent text-3xl md:text-xl font-header hover:underline'>Contact</a>
      </nav>
    </>
  )
}