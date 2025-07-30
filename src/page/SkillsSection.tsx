// Skills.tsx
const skills = {
  frontend: ['React', 'Next.js', 'TypeScript','Redux', 'Tailwind CSS','Bootsrap', 'Framer Motion', 'Vue.js','Vuex'],
  backend: ['Node.js', 'Express', 'Typescript','Oracle','Mysql','PostgreSQL', 'MongoDB', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code'],
  others: [
    'GraphQL',
    'Jest',
    'Webpack',
    'Sass',
    'Material-UI',
    'Sementic-UI',
    'Firebase',
    'Stripe',
    'Socket.io',
    'Excel',
  ],
};

const Tag = ({ label, color = 'blue' }: { label: string; color?: string }) => (
  <span
    className={`px-3 py-1 text-sm rounded-full border border-gray-700 text-${color}-400 bg-gray-900 hover:bg-gray-800 transition`}
  >
    {label}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0D0D0D] text-white py-16 px-6 md:px-20 mt-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I work with a variety of technologies to bring ideas to life. Here are some of the tools
          and frameworks I'm proficient in.
        </p>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Frontend */}
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.frontend.map((skill) => (
              <Tag key={skill} label={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Backend & Database</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.backend.map((skill) => (
              <Tag key={skill} label={skill} color="purple" />
            ))}
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.tools.map((tool) => (
              <Tag key={tool} label={tool} color="gray" />
            ))}
          </div>
        </div>
      </div>

      {/* Other Technologies */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.others.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
