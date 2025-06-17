import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faVuejs, faGithub, faJs, faFigma, faAngular } from '@fortawesome/free-brands-svg-icons';
import '../styles/TechOrbit.css'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

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
          I’m currently working on a <span className="text-purple">multi-core</span> platforms
        </h2>
        <p className="text-secondary">
          that values improving people’s lives through accessible design
        </p>
      </div>

      <div className="orbit-wrapper position-relative">
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
