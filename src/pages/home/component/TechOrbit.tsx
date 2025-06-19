import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faVuejs, faGithub, faJs, faFigma, faAngular } from '@fortawesome/free-brands-svg-icons';
import Typewriter from "typewriter-effect";

import '../styles/TechOrbit.css'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';
import { devloperInfo } from '../../../res/String';

const techIcons = [
  { icon: faReact, name: 'React' },
  { icon: faNode, name: 'Node' },
  { icon: faVuejs, name: 'Vue' },
  { icon: faGithub, name: 'GitHub' },
  { icon: faJs, name: 'Javascript' },
  { icon: faFigma, name: 'Figma' },
  { icon: faCode, name: 'Vs Code' },
  { icon: faAngular, name: 'Angular' },
  { icon: faDatabase, name: 'Database' },
];

const TechOrbit = () => {
  return (
    <section className="tech-orbit-section text-white d-flex flex-column justify-content-center align-items-center">
      <div className="text-center mb-4">
        <h2>
          I’m currently working on <span className="text-purple fs-4">{devloperInfo.currentOrganization} </span>
        </h2>
        <p className="text-secondary">
          I've  <span className="text-purple">skilled </span> with following  <span className="text-purple">core</span> languages
        </p>
        <Row className="text-center mt-4">
          <Col>
            <h2 className='software-title'>
              <Typewriter
                options={{
                  strings: [
                    "Mern Stack",
                    "React Native App",
                    "React Typescript",
                    "Next Js",
                    "Vue Js",
                    "Redux",
                    "vuex",
                    "UI designer",
                    "Bootstrap",
                    "Html & Css",
                    "Node Typescript",
                    "Nest Js"
                  ],
                  autoStart: true,
                  loop: true, // Loop through the strings
                  delay: 100, // Speed of typing
                  cursor: "|", // Optional: Customize cursor
                  deleteSpeed: 50 // Speed of deleting
                }}
              />
            </h2>
          </Col>
        </Row>
      </div>

      <div className="orbit-wrapper position-relative mb-8">
        {/* Icons above curves */}
        <div className="icon-arc-wrapper">
          {techIcons.map((item, index) => (
            <div className={`orbit-icon orbit-icon-${index}`} key={index}>
              <FontAwesomeIcon icon={item.icon} size="lg" />
              <span className="icon-label text-white position-absolute top-100 start-50 translate-middle-x">
                {item.name}
              </span>
            </div>

          ))}
        </div>


        {/* Center glowing icon */}
        <div className="glow-center d-flex align-items-center justify-content-center">
          <span className="central-symbol">Code</span>
        </div>

        {/* SVG Curves */}
        <svg className="orbit-svg" viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="180" stroke="#7f5af0" strokeWidth="0.5" fill="none" />
          <circle cx="300" cy="300" r="220" stroke="#7f5af0" strokeWidth="0.4" fill="none" />
          <circle cx="300" cy="300" r="260" stroke="#7f5af0" strokeWidth="0.3" fill="none" />
        </svg>
      </div>
    </section>
  );
};

export default TechOrbit;
