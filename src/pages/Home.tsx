
import AnimatedCursor from "react-animated-cursor"
import Banner from "../containers/Banner";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import SkillCard from "../containers/SkillCard";
import ContactForm from "./ContactForm";
import Achievement from "../containers/Achievement";

import { projectData } from "../constants/constants";

const Home = () => {

  return (
    <>
      <AnimatedCursor
        color="#fff"
        innerSize={8}
        outerSize={50}
        innerScale={1}
        outerScale={2.2}
        outerAlpha={0}
        outerStyle={{
          background: '#ffffff',
          mixBlendMode: 'exclusion'
        }}
        innerStyle={{
          backgroundColor: '#F94892'
        }}
      />

      <div>
        <Navbar />
        <Banner id="home" />
        {projectData.map((project, index) => {
          return(
        <ProjectCard
        id='project' 
          key={index}  // Assign a unique key for each element
          className={project.className}
          projectTitle={project.projectTitle}
          projectDesc={project.projectDesc}
          projectLink={project.projectLink}
          deployedProjectLink={project.deployedProjectLink}
          projectImg={project.projectImg}
        />
          )})}
        <AboutMe id='about' />
        <SkillCard id='skills' />
        <Achievement  />
        <ContactForm id='contact' />
        <Footer />
      </div>
    </>
  );
}

export default Home