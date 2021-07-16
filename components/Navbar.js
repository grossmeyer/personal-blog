import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, toggleMobileMenuOpen] = useState(false)

  const toggleMobileMenuState = () => {
    toggleMobileMenuOpen(!mobileMenuOpen)
  }
  return (
    <>
      <button onClick={toggleMobileMenuState} className='inline-block lg:hidden w-8 h-8 pb-1 mb-1 text-synthblue-800'>
        <svg fill="currentColor" viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="8"></rect>
          <rect y="30" width="100" height="20" rx="8"></rect>
          <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
      </button>
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute lg:relative top-16 left-0 lg:top-0 z-20 lg:flex flex-col lg:flex-row lg:space-x-6 font-heading w-11/12 lg:w-auto bg-synthblue-100 p-2 m-4 rounded-xl`}>
        <a href='/' className='text-synthblue-800 text-2xl font-typeface text-center hover:bg-synthblue-300 hover:shadow-lg rounded-lg p-1 no-underline'>Home</a>
        <a href='/' className='text-synthblue-800 text-2xl font-typeface text-center hover:bg-synthblue-300 hover:shadow-lg rounded-lg p-1 no-underline'>Blog</a>
        <a href='/' className='text-synthblue-800 text-2xl font-typeface text-center hover:bg-synthblue-300 hover:shadow-lg rounded-lg p-1 no-underline'>Tutorials</a>
        <a href='/' className='text-synthblue-800 text-2xl font-typeface text-center hover:bg-synthblue-300 hover:shadow-lg rounded-lg p-1 no-underline'>About</a>
      </nav>
    </>
  )
}