// AboutMe.tsx

const AboutMe = () => {
  
  return (
    <section id='about' className="bg-[#0D0D0D] text-white py-16 px-6 md:px-20 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful designs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left: Journey Text */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-gray-400 mb-4">
            Started my coding journey in 2018 and have been building web applications ever since. I specialize in React, Node.js, and modern web technologies.
          </p>
          <p className="text-gray-400 mb-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
          </p>
          <p className="text-gray-400">
            I believe in writing code that not only works but is also maintainable, scalable, and brings value to users.
          </p>
        </div>

        {/* Right: Stats Card */}
        <div className="flex-1 bg-gradient-to-br from-[#1a1a2e] to-[#0f0c29] p-8 rounded-xl shadow-lg border border-gray-800 backdrop-blur-sm">
          <div className="space-y-10 text-center">
            <div>
              <h4 className="text-4xl font-bold text-blue-400">50+</h4>
              <p className="text-gray-400 mt-1">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-400">5+</h4>
              <p className="text-gray-400 mt-1">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-indigo-400">20+</h4>
              <p className="text-gray-400 mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
