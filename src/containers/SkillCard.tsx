import { SiVisualstudiocode, SiReact, SiBootstrap, SiFigma, SiVitess,SiInsomnia } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandTypescript } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io"
import { FaArrowRight , FaGithub} from "react-icons/fa";


const SkillCard = ({ id }: any) => {

  const handleOnClick = (link: any) => {
    window.open(`${link}`);
  }
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">

            {/* Vite js */}
            <div className="link">
              <abbr title='SiVitess'><SiVitess className='techLogo' id="viteJS" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://vite.dev/guide/')}><span>Vite js</span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/* React */}
            <div className="link">
              <abbr title='ReactJS'><SiReact className='techLogo' id="react" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://react.dev/learn')}><span>React </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/* Git */}
            <div className="link">
              <abbr title='Git Hub'><FaGithub className='techLogo' id="github" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://docs.google.com/document/d/1JqUdWzOr59666QL9BtPGlCSt91w6CjbedaetleVyntU/edit?usp=sharing')}><span>Git Hub</span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/* Npm */}
            <div className="link">
              <abbr title='NPM'><IoLogoNpm className='techLogo' id="npm" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://react.dev/learnhttps://docs.npmjs.com/about-npm')}><span>Npm</span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/*Bootstrap  */}
            <div className="link">
              <abbr title='Bootstrap'><SiBootstrap className='techLogo' id="bootstrap" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://react.dev/learnhttps://docs.npmjs.com/about-npm')}><span>Bootstrap</span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/*TypeScript  */}
            <div className="link">
              <abbr title='TypeScript'><TbBrandTypescript className='techLogo' id="typescript" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://react.dev/learnhttps://docs.npmjs.com/about-npm')}><span>TypeScript </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h2>UI / UX </h2>
          <div className="skillset">

            {/*Html  */}
            <div className="link">
              <abbr title='Html 5'><TbBrandHtml5 className='techLogo' id="html" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/HTML')}><span>Html </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/*CSS  */}
            <div className="link">
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo' id="css" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/CSS')}><span>Css</span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/*JavaScript  */}
            <div className="link">
              <abbr title='TypeScript'><TbBrandJavascript className='techLogo' id="javascript" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}><span>JavaScript </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>
            
            {/*Figma */}
            <div className="link">
            <abbr title='Figma'><SiFigma className='techLogo' id="figma" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://www.figma.com/resource-library/design-basics/')}><span>Figma </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
             {/*Vs Code  */}
             <div className="link">
             <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo' id="vscode" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://code.visualstudio.com/download')}><span>VsCode </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>

            {/*Windows */}
            <div className="link">
              <abbr title='Windows'><IoLogoWindows className='techLogo' id="windows" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/API/Window')}><span>Windows </span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>
           
           {/*Insomnia */}
           <div className="link">
           <abbr title='Insomnia'><SiInsomnia className='techLogo' id="insomnia" /></abbr>
              <button className='btn' onClick={() => handleOnClick('https://docs.insomnia.rest/')}><span>Insomnia</span><FaArrowRight className='btn-arrow' size={22} style={{ marginLeft: "1rem" }} /></button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default SkillCard