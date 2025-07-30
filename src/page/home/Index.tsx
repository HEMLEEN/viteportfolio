import DeveloperIntro from '../DeveloperIntro'
import About from '../About'
import SkillsSection from '../SkillsSection'
import Contact from '../Contact'
import Features from '../Features'
import Projects from '../Projects'

const Home = () => {
  return (
    <div>
      <DeveloperIntro/>
      <About/>
      <Features/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home
