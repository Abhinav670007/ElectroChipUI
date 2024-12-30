import React from 'react'

function Home() {
    const services = [
        {
          title: "Equipment Installation",
          description: "There are many variations of passages of Lorem Ipsum available.",
          icon: "./images/s1.png", 
        },
        {
          title: "Windmill Energy",
          description: "There are many variations of passages of Lorem Ipsum available.",
          icon: "./images/s2.png", 
        },
        {
          title: "Equipment Maintenance",
          description: "There are many variations of passages of Lorem Ipsum available.",
          icon: "./images/s3.png", 
        },
        {
          title: "Drilling Services",
          description: "There are many variations of passages of Lorem Ipsum available.",
          icon: "./images/s4.png", 
        },
        {
          title: "Electrical Repairs",
          description: "There are many variations of passages of Lorem Ipsum available.",
          icon: "./images/s5.png", 
        },
      ];
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

            {/* second Section */}

            <section className="bg-gray-50 py-12 px-6">
         <div className="flex items-center justify-center mb-8 mx-auto space-x-4">
             <h2 className="text-3xl font-bold text-black">Our Services</h2>
            <img src="./images/plug.png" alt="Plug Icon" className="w-8 h-8" />
         </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4">
              <img src={service.icon} alt={service.title} className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-purple-800 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>


    </div>
  )
}

export default Home