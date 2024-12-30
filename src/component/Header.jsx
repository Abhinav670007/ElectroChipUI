import React, { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#f4f4f9] p-4">
    <div className="container mx-auto flex items-center justify-around">
      {/* Flex container for image and Electrochip text */}
      <div className="flex items-center space-x-4">
        <img src="./images/logo.png" alt="Logo" className="h-12" />
        <div className="flex items-center">
          <div className="text-purple-600 text-3xl">
            {/* <i className="fas fa-user-astronaut"></i> */}
          </div>
          <h1 className="text-purple-600 font-bold text-xl ml-2">Electrochip</h1>
        </div>
      </div>

      {/* Navigation Links for Desktop */}
      <nav className="hidden md:flex items-center space-x-6">
        <a
          href="#home"
          className="px-4 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-800 transition-all"
        >
          HOME
        </a>
        <a
          href="#about"
          className="text-black hover:text-purple-600 transition-all"
        >
          ABOUT
        </a>
        <a
          href="#services"
          className="text-black hover:text-purple-600 transition-all"
        >
          SERVICE
        </a>
        <a
          href="#blog"
          className="text-black hover:text-purple-600 transition-all"
        >
          BLOG
        </a>
        <a
          href="#contact"
          className="text-black hover:text-purple-600 transition-all"
        >
          CONTACT
        </a>
      </nav>

      {/* Mobile Menu Button (Hamburger Icon) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-600 p-2">
            {/* <img src="./images/menu.png" alt="" className='h-12'/> */}
          <i className={`fas fa-bars text-xl ${isMenuOpen ? 'rotate-90' : ''}`}></i>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu (Toggled by state) */}
    {isMenuOpen && (
      <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
        <a href="#home" className="px-4 py-2 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-800 transition-all">
          HOME
        </a>
        <a href="#about" className="text-black hover:text-purple-600 transition-all">ABOUT</a>
        <a href="#services" className="text-black hover:text-purple-600 transition-all">SERVICE</a>
        <a href="#blog" className="text-black hover:text-purple-600 transition-all">BLOG</a>
        <a href="#contact" className="text-black hover:text-purple-600 transition-all">CONTACT</a>
      </div>
    )}
  </header>
  )
}

export default Header