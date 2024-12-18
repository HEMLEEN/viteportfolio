import { SiVisualstudiocode, SiReact, SiBootstrap, SiFigma, SiVitess, SiInsomnia } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5, TbBrandTypescript } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io"
import { FaGithub } from "react-icons/fa";


const SkillCard = ({ id }: any) => {

  const handleOnClick = (link: any) => {
    window.open(`${link}`);
  }
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">
        <h3>"What Skills I Have"</h3></div>
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">

            {/* Vite js */}
            <div className="link">
              <abbr title='SiVitess'><SiVitess className='techLogo' id="viteJS" onClick={() => handleOnClick('https://vite.dev/guide/')}/></abbr>
            </div>

            {/* React */}
            <div className="link">
              <abbr title='ReactJS'><SiReact className='techLogo' id="react" onClick={() => handleOnClick('https://react.dev/learn')}/></abbr>
            </div>

            {/* React Native */}
            <div className="link">
              <abbr title='ReactJS'><SiReact className='techLogo' onClick={() => handleOnClick('https://reactnative.dev/docs/environment-setup')}/></abbr>
            </div>
            
            {/* Git */}
            <div className="link">
              <abbr title='Git Hub'><FaGithub className='techLogo' id="github" onClick={() => handleOnClick('https://docs.google.com/document/d/1JqUdWzOr59666QL9BtPGlCSt91w6CjbedaetleVyntU/edit?usp=sharing')}/></abbr>
            </div>
            {/*Bootstrap  */}
            <div className="link">
              <abbr title='Bootstrap'><SiBootstrap className='techLogo' id="bootstrap" onClick={() => handleOnClick('https://react.dev/learnhttps://docs.npmjs.com/about-npm')}/></abbr>
            </div>

            {/*TypeScript  */}
            <div className="link">
              <abbr title='TypeScript'><TbBrandTypescript className='techLogo' id="typescript" onClick={() => handleOnClick('https://react.dev/learnhttps://docs.npmjs.com/about-npm')}/></abbr>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h2>UI / UX </h2>
          <div className="skillset">

            {/*Html  */}
            <div className="link">
              <abbr title='Html 5'><TbBrandHtml5 className='techLogo' id="html" onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/HTML')} /></abbr>
            </div>

            {/*CSS  */}
            <div className="link">
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo' id="css" onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/CSS')}/></abbr>
            </div>

            {/*JavaScript  */}
            <div className="link">
              <abbr title='TypeScript'><TbBrandJavascript className='techLogo' id="javascript" onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}/></abbr>
            </div>

            {/*Figma */}
            <div className="link">
              <abbr title='Figma'><SiFigma className='techLogo' id="figma" onClick={() => handleOnClick('https://www.figma.com/resource-library/design-basics/')}/></abbr>
            </div>
          </div>
        </div>
        <div className="skill-box">
          <h2>Version Controlls</h2>
          <div className="skillset">
             {/* Npm */}
             <div className="link">
              <abbr title='NPM'><IoLogoNpm className='techLogo' id="npm" onClick={() => handleOnClick('https://react.dev/learnhttps://docs.npmjs.com/about-npm')}/></abbr>
            </div>
            {/*Vs Code  */}
            <div className="link">
            <SiVisualstudiocode className='techLogo' id="vscode" onClick={() => handleOnClick('https://code.visualstudio.com/download')}/>
            </div>

            {/*Windows */}
            <div className="link">
            <IoLogoWindows className='techLogo' id="windows" onClick={() => handleOnClick('https://developer.mozilla.org/en-US/docs/Web/API/Window')}/>
            </div>

            {/*Insomnia */}
            <div className="link">
            <SiInsomnia className='techLogo' id="insomnia" onClick={() => handleOnClick('https://docs.insomnia.rest/')}/>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default SkillCard