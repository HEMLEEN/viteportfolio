import  { useState } from 'react'
import { Link } from "react-scroll";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const  Navbar= () => {
    
    const [click, setClick] = useState(false);
    const handleCLick = () => setClick(!click);
  
    return (
      <nav className="header">
        <div className="logo">
          <Link 
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={30}
          >
            <div className="logo-img">
              <span className="blink">&lt;</span>
              <span>&#47;</span>D<span className="blink">&gt;</span>
            </div>
          </Link>
        </div>
        <ul style={{listStyle:'none'}}
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={handleCLick}
        >
          <li >
            <Link
            className="navLink"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={30}
              onClick={handleCLick}
            >Projects</Link>
          </li>
          <li>
            <Link
            className="navLink"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={30}
              onClick={handleCLick}
            >About</Link>
          </li>
          <li>
            <Link
            className="navLink" 
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              onClick={handleCLick}
              duration={30}>Skills</Link>
          </li>
          <li>
            <Link
            className="navLink"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={30}
              onClick={handleCLick}
            >Contact</Link>
          </li>
        </ul>
        <div className={click ? "social-links active" : "social-links"}>
          <a
            href="https://www.linkedin.com/in/hemleen-francis-a6b144137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="social"
              color={'#a01d65'}
              size={25}
              style={{ marginRight: "2rem" }}
            />
          </a>
          <a
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="social"
              size={25}
              style={{ marginRight: "2rem" }}
            />
          </a>
          <a
            href="https://www.instagram.com/hemleen7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="social"
              size={25}
              style={{ marginRight: "2rem" }}
            />
          </a>
        </div>
        <div className="hamburger" onClick={handleCLick}>
          {click ? (
            <FaTimes className="bars" size={25} />
          ) : (
            <FaBars className="bars" size={25} style={{ color: "#fff" }} />
          )}
        </div>
      </nav>
    );
  }

export default Navbar