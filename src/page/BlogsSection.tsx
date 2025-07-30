
const BlogsSection = () => {
  return (
     <div className="min-h-screen bg-gray-900 text-white font-mono relative p-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/code-bg.png')] bg-cover bg-center opacity-10" />

      {/* Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center pt-10">
        <div className="w-8 h-8 rounded-full bg-teal-400 text-center flex items-center justify-center font-bold">
          0
        </div>
        <div className="h-10 w-px bg-white mt-1" />
      </div>

      {/* Section Title */}
      <div className="relative z-10 text-center mt-6 mb-4">
        <h2 className="text-3xl font-bold text-teal-400">Blogs</h2>
        <p className="text-xs text-gray-400 mt-1">
          My thoughts on technology and business, welcome to subscribe
        </p>
      </div>

      {/* Blog Preview */}
      <div className="relative z-10 mt-10 border-t border-b border-gray-700 py-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Blog Preview"
            className="w-full max-w-sm rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-teal-400 mb-2">
              What does it take to become a web developer?
            </h3>
            <p className="text-sm text-gray-300 max-w-md mb-3">
              Web development, also known as website development, encompasses a variety of tasks and
              processes involved in creating websites for the internet…
            </p>
            <a
              href="#"
              className="text-sm text-teal-400 underline hover:text-teal-300"
            >
              Read More ↗
            </a>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-400">
              <span className="bg-gray-700 px-2 py-1 rounded">Web Developer</span>
              <span>Text: Sinan</span>
              <span>Date: 10 Oct 2023</span>
              <span>Read: 1 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative z-10 mt-8 flex justify-center gap-4">
        <button className="bg-teal-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-teal-300">
          View More
        </button>
        <button className="border border-teal-400 text-teal-400 px-6 py-2 rounded-full font-semibold hover:bg-teal-400 hover:text-black">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default BlogsSection
