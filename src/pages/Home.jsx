import React from 'react'
import Contact from '../pages/Contact';
import Blog from './Blog';
import Services from './Services';
import About from './About';
function Home() {
   
  return (
    <div>
        <div className="bg-purple-100 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 space-y-6 md:space-y-0">
          {/* Text Section */}
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              ELECTRICAL <br /> SERVICE <br /> PROVIDERS
            </h1>
            <p className="text-gray-700 mt-4">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of
              using Lorem.
            </p>
            <button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full mt-6">
              Contact Us
            </button>
          </div>
    
          {/* Image Section */}
          <div className="relative">
            <div className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-600">
              <img
                src="./images/slider-img.jpg" // Replace this with your image URL
                alt="Electrical Service"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Navigation Buttons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200">
                <span className="text-purple-700">&lt;</span>
              </button>
              <button className="bg-purple-700 w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600">
                <span className="text-white">&gt;</span>
              </button>
            </div>
          </div>
        </div>

   

         <Services/>           

         <About/>
    
        <Blog/>
         
         <Contact/>

    </div>
  )
}

export default Home