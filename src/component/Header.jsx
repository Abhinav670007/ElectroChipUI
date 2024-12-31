import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); 

    const isActive = (path) => location.pathname === path ? 'bg-purple-600 text-white' : 'text-black hover:text-purple-600';
  return (
    <header className="bg-purple-100 p-4">
      <div className="container mx-auto flex items-center justify-around">
        <div className="flex items-center space-x-4">
          <img src="./images/logo.png" alt="Logo" className="h-12" />
          <div className="flex items-center">
            <h1 className="text-purple-600 font-bold text-xl ml-2">Electrochip</h1>
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className={`px-4 py-2 rounded-full font-medium  transition-all ${isActive('/')}`}
          >
            HOME
          </a>
          <a
            href="/about"
            className={`px-4 py-2 rounded-full font-medium transition-all ${isActive('/about')}`}
          >
            ABOUT
          </a>
          <a
            href="/services"
            className={`px-4 py-2 rounded-full font-medium  transition-all ${isActive('/services')}`}
          >
            SERVICE
          </a>
          <a
            href="/blog"
            className={`px-4 py-2 rounded-full font-medium  transition-all ${isActive('/blog')}`}
          >
            BLOG
          </a>
          <a
            href="/contact"
            className={`px-4 py-2 rounded-full font-medium  transition-all ${isActive('/contact')}`}
          >
            CONTACT
          </a>
        </nav>

       
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-purple-600 p-2">
            <i className={`fas fa-bars text-xl ${isMenuOpen ? 'rotate-90' : ''}`}></i>
          </button>
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <a href="/" className={`px-4 py-2 rounded-full font-medium hover:bg-purple-800 transition-all ${isActive('/')}`}>
            HOME
          </a>
          <a href="/about" className={`px-4 py-2 rounded-full text-black hover:text-purple-600 transition-all ${isActive('/about')}`}>ABOUT</a>
          <a href="/services" className={`px-4 py-2 rounded-full text-black hover:text-purple-600 transition-all ${isActive('/services')}`}>SERVICE</a>
          <a href="/blog" className={`px-4 py-2 rounded-full text-black hover:text-purple-600 transition-all ${isActive('/blog')}`}>BLOG</a>
          <a href="/contact" className={`px-4 py-2 rounded-full text-black hover:text-purple-600 transition-all ${isActive('/contact')}`}>CONTACT</a>
        </div>
      )}
    </header>
  )
}

export default Header