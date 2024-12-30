import React from 'react'

function Blog() {
    const blogs = [
        {
          id: 1,
          image: "./images/blog1.jpg", 
          title: "Blog Title Goes Here",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised.",
        },
        {
          id: 2,
          image: "./images/blog2.jpg",
          title: "Blog Title Goes Here",
          description:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised.",
        },
      ];
  return (
    <section className="py-12 px-6 md:px-16 mb-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10 flex items-center justify-center">
          Blog <img src="./images/plug.png" alt="" />
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg  overflow-hidden"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full  object-cover"
              />

              {/* Blog Content */}
              <div className="p-10 ">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>      
  )
}

export default Blog