import React from 'react'

function About() {
  return (
    <section className="bg-purple-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center md:justify-start md:gap-2">
            About Us  <img src="./images/plug.png" alt="Plug Icon" className="w-8 h-8" />
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg text-semibold">
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
          <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-purple-600 md:ml-48">
            <img
              src="./images/about-img2.jpg"
              alt="Worker 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About