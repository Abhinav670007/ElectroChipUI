import React from 'react'

function Contact() {
  return (
    <div className="flex flex-col md:flex-row justify-between  mx-auto p-6 max-w-6xl gap-8 mb-12">
    {/* Form Section */}
    <div className="w-full md:w-1/2 bg-white  p-6 rounded-md">
      <div className='flex '>
        <h2 className="text-4xl font-bold text-left mt-2">Contact Us</h2>
        <img src="./images/plug.png" alt="" className='p-4 '/>
      </div>
      <form className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full shadow shadow-lg text-lg py-2 px-3 focus:outline-none focus:border-purple-600 placeholder-gray-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full shadow shadow-lg text-lg py-2 px-3 rounded focus:outline-none focus:border-purple-600 placeholder-gray-500"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Telephone Number"
            className="w-full shadow shadow-lg text-lg py-3 px-3 rounded focus:outline-none focus:border-purple-600 placeholder-gray-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            className="w-full shadow shadow-lg text-lg py-2 px-3 focus:outline-none focus:border-purple-600 placeholder-gray-500 resize-none h-28"
          />
        </div>
        <div className='text-left'>
          <button
            type="submit"
            className="px-12 bg-purple-600 text-white font-medium py-3  hover:bg-purple-700 transition "
          >
            SEND
          </button>
        </div>
      </form>
    </div>

    {/* Map Section */}
    <div className="w-full md:w-1/2 h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.337395369681!2d2.294481215674291!3d48.85837007928719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef62db25a3d%3A0x58ff52e262f4ec4c!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1675946347619!5m2!1sen!2sfr"
        title="Eiffel Tower Map"
        className="w-full h-90 md:h-full rounded-md"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
  )
}

export default Contact