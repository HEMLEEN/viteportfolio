// Projects.tsx
import { FaGithub } from 'react-icons/fa';
import gymGif from '../assets/gym.gif'
import churchWeb from '../assets/church-website.png'
import ShopGif from '../assets/shopping2-gif.gif'

const projects = [
  {
    title: 'Gym Website',
    description:
      'A fitness app that allows users to create personalized workout plans and track their fitness progress over time.',
    image:gymGif,
    tech: ['React', 'Typescript', 'MongoDB', ],
    codeUrl: '#',
    liveUrl: "https://lcfgym.netlify.app/"
  },
  {
    title: 'Church Website',
    description:
      'Organization website for peoples friendly.',
    image: churchWeb,
    tech: ['React', 'TypeScript','MongoDB', 'Tailwind'],
    codeUrl: '#',
    liveUrl: 'https://mountcarmelchurchpodanur.org',
  },
  {
    title: 'Online Shopping Platform',
    description:
      'An online shopping experience with secure payment options, product filtering, and easy-to-use cart management features',
    image: ShopGif,
    tech: ['Vue.js', 'Node js','Express js', 'Mongoose', 'MongoDb'],
    codeUrl: '#',
    liveUrl: 'https://bookmyshop.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="bg-[#000] text-white py-16 px-6 md:px-20 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for creating
          innovative digital solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#0F0F0F] border border-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center gap-1 px-4 py-2 rounded-md border border-gray-700 hover:bg-gray-800 transition"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <a
          href="/projects"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full hover:scale-105 transition"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
