import React from 'react'

function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-36 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-col justify-between items-center space-y-6 md:space-y-0">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:space-x-20 text-sm md:mb-10">
          <div className="flex items-center space-x-2">
            <i className="fas fa-map-marker-alt"></i>
            <span className="text-xl">Passages of Lorem Ipsum available</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone"></i>
            <span className="text-xl">Call: +012334567890</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-envelope"></i>
            <span className="text-xl">demo@gmail.com</span>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col md:gap-2 md:flex-row items-center space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-96 text-black rounded focus:outline-none"
          />
          <button className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded">
            SUBSCRIBE
          </button>
          <div className="flex space-x-4">
          <a href="#" className="hover:text-purple-400">
          <i class="fa-brands fa-facebook fa-2xl" style={{color: "white",}}></i>
          </a>
          <a href="#" className="hover:text-purple-400 rounded">
          <i class="fa-brands fa-twitter fa-2xl" style={{color: "white",}}></i>
          </a>
          <a href="#" className="hover:text-purple-400">
          <i class="fa-brands fa-instagram fa-2xl" style={{color: "white",}}></i>
          </a>
          <a href="#" className="hover:text-purple-400">
          <i class="fa-brands fa-linkedin fa-2xl" style={{color: "white",}}></i>
          </a>
        </div>
        </div>

        {/* Social Media Icons */}
       
      </div>
    </footer>
  )
}

export default Footer