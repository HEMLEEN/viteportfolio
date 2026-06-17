import { NavLink } from "react-router-dom";
import {
  SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiBootstrap, SiFramer, SiVuedotjs, SiNodedotjs, SiExpress,
  SiOracle, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiGit, SiDocker, SiVercel, SiFigma,
  SiCodeblocks, SiServerless, SiGraphql,
  SiJest,
  SiWebpack,
  SiSass,
  SiMui,
  SiSemanticuireact,
  SiFirebase,
  SiStripe,
  SiSocketdotio

} from "react-icons/si";
 import {FaUpload } from 'react-icons/fa6';

import { FaReact, FaVuejs, FaFileExcel } from "react-icons/fa";

// Skills.tsx
const skills = {
  frontend: [
    { name: "React", code: "1", navigate: "react", icon: <FaReact /> },
    { name: "Next.js", code: "2", navigate: "nextjs", icon: <SiNextdotjs /> },
    { name: "TypeScript", code: "3", navigate: "typescript", icon: <SiTypescript /> },
    { name: "Redux", code: "4", navigate: "redux", icon: <SiRedux /> },
    { name: "Tailwind CSS", code: "5", navigate: "tailwind", icon: <SiTailwindcss /> },
    { name: "Bootstrap", code: "6", navigate: "bootstrap", icon: <SiBootstrap /> },
    { name: "Framer Motion", code: "7", navigate: "framer-motion", icon: <SiFramer /> },
    { name: "Vue.js", code: "8", navigate: "vue", icon: <SiVuedotjs /> },
    { name: "Vuex", code: "9", navigate: "vuex", icon: <FaVuejs /> }
  ],

  backend: [
    { name: "Node.js", code: "1", navigate: "nodejs", icon: <SiNodedotjs /> },
    { name: "Express", code: "2", navigate: "express", icon: <SiExpress /> },
    { name: "TypeScript", code: "3", navigate: "typescript", icon: <SiTypescript /> },
    { name: "Oracle", code: "4", navigate: "oracle", icon: <SiOracle /> },
    { name: "MySQL", code: "5", navigate: "mysql", icon: <SiMysql /> },
    { name: "PostgreSQL", code: "6", navigate: "postgresql", icon: <SiPostgresql /> },
    { name: "MongoDB", code: "7", navigate: "mongodb", icon: <SiMongodb /> },
    { name: "Redis", code: "8", navigate: "redis", icon: <SiRedis /> }
  ],

   caches: [
    { name: "Redis", code: "1", navigate: "redis", icon: <SiRedis /> },
    { name: "RedisInsight", code: "2", navigate: "redisinsight", icon: <SiRedis /> },
    { name: "Multer", code: "3", navigate: "multer", icon: <FaUpload /> }
  ],

  tools: [
    { name: "Git", code: "1", navigate: "git", icon: <SiGit /> },
    { name: "Docker", code: "2", navigate: "docker", icon: <SiDocker /> },
    { name: "AWS", code: "3", navigate: "aws", icon: <SiServerless /> },
    { name: "Vercel", code: "4", navigate: "vercel", icon: <SiVercel /> },
    { name: "Figma", code: "5", navigate: "figma", icon: <SiFigma /> },
    { name: "VS Code", code: "6", navigate: "vscode", icon: <SiCodeblocks /> }
  ],
  others: [
    { name: "GraphQL", code: "1", navigate: "graphql", icon: <SiGraphql /> },
    { name: "Jest", code: "2", navigate: "jest", icon: <SiJest /> },
    { name: "Webpack", code: "3", navigate: "webpack", icon: <SiWebpack /> },
    { name: "Sass", code: "4", navigate: "sass", icon: <SiSass /> },
    { name: "Material-UI", code: "5", navigate: "material-ui", icon: <SiMui /> },
    { name: "Semantic-UI", code: "6", navigate: "semantic-ui", icon: <SiSemanticuireact /> },
    { name: "Firebase", code: "7", navigate: "firebase", icon: <SiFirebase /> },
    { name: "Stripe", code: "8", navigate: "stripe", icon: <SiStripe /> },
    { name: "Socket.io", code: "9", navigate: "socketio", icon: <SiSocketdotio /> },
    { name: "Excel", code: "10", navigate: "excel", icon: <FaFileExcel /> }
  ],
};


const Tag = (props: any) => {

  const { name, color, icon } = props;

  return (
    <span
      className={`flex items-center gap-4 px-3 py-1 text-sm rounded-full border border-gray-700 text-${color}-400 bg-gray-900 hover:bg-gray-800 transition`}
    >
      {icon}
      {name}
    </span>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="bg-[#000] text-white py-16 px-6 md:px-20 mt-10">
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
          <div className="flex flex-wrap justify-start gap-3">
            {skills.frontend.map((skill) => (
              <Tag {...skill} color="teal" />
            ))}
          </div>
          <div className="text-right mt-10 max-w-6xl mx-auto">
            <a href="#" className="text-sm text-white font-medium hover:underline">
              <NavLink to={`/frontend`} > View Study →</NavLink>
            </a>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Backend & Database</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.backend.map((skill) => (
              <Tag {...skill} color="purple" />
            ))}
          </div>
          <div className="text-right mt-10 max-w-6xl mx-auto">
            <a href="#" className="text-sm text-white font-medium hover:underline">
              <NavLink to={`/#`} > View Study →</NavLink>
            </a>
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="bg-[#0F0F0F] border border-gray-800 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Cache & Performance</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.caches.map((tool) => (
              <Tag {...tool} color="gray" />
            ))}
          </div>
          <div className="text-right mt-10 max-w-6xl mx-auto">
            <a href="#" className="text-sm text-white font-medium hover:underline">
              <NavLink to={`/versionTools`} > View Study →</NavLink>
            </a>
          </div>
        </div>
      </div>

      {/* Other Technologies */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">DevOps Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.tools.map((tool) => (
            <Tag {...tool} color="gray" />
          ))}
        </div>
        <div className="text-right mt-10 max-w-6xl mx-auto">
          <a href="#" className="text-sm text-white font-medium hover:underline">
            <NavLink to={`/#`} > View Study →</NavLink>
          </a>
        </div>
      </div>
      
       {/* Other Technologies */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.others.map((tool) => (
            <Tag {...tool} color="gray" />
          ))}
        </div>
        <div className="text-right mt-10 max-w-6xl mx-auto">
          <a href="#" className="text-sm text-white font-medium hover:underline">
            <NavLink to={`/#`} > View Study →</NavLink>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
