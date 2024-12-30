import React from 'react'

function Services() {
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
    <section className="bg-gray-50 py-12 px-6">
         <div className="flex items-center justify-center mb-8 mx-auto space-x-4">
             <h2 className="text-3xl font-bold text-black">Our Services</h2>
            <img src="./images/plug.png" alt="Plug Icon" className="w-8 h-8" />
         </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="shadow-xl rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 py-24"
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
  )
}

export default Services