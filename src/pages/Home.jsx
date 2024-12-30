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
            className="bg-gray-100 shadow-xl2 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 py-24"
          >
            <div className="flex justify-center mb-4">
              <img src={service.icon} alt={service.title} className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-800 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center mt-2 text-lg font-semibold">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-full mt-6">
              Read More
            </button>
    </section>

                       {/* About us Section */}


    <section className="bg-purple-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center md:justify-start md:gap-2">
            About Us  <img src="./images/plug.png" alt="Plug Icon" className="w-8 h-8" />
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            It is important to take care of the patient, the patient will be
            followed by the patient, but at the same time it will happen that
            there is a lot of work and pain. For to come to the smallest detail,
            no one should practice any kind of work unless he derives some
            benefit from it. Do not be angry with the pain in the rebuke in the
            pleasure he wants.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Read More
          </button>
        </div>

        {/* Images */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="relative w-56 h-56 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-600">
            <img
              src="./images/about-img1.jpg"
              alt="Worker 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-600">
            <img
              src="./images/about-img2.jpg"
              alt="Worker 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
                      

    </div>
  )
}

export default Home