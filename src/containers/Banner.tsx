import Typewriter from "typewriter-effect";

import cartoon from "../assets/cartoon-compressed.png";

const Banner = ({ id }: any) => {
  return (
    <div className="home" id={id}>
      <div className="content">
      <div className="name">I'm Hemleen</div>
        <div className="wrapper">
          <div className="staticTitle">
            Fullstack
            <div className="hrLine"></div>
          </div>
          <ul className="dynamicTitle">
            <li>+<span>Developer</span></li>
          </ul>
        
        </div>
        <a
            className="btn"
            href="https://www.linkedin.com/in/deepajha14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
          <div className="name m-2">Known about Freelance</div>
          <div className="name">
            <Typewriter
              options={{
                strings: [
                  "Mern Stack",
                  "React Typescript",
                  "Node Typescript",
                  "Bootstrap",
                  "Html & Css",
                  "Next Js",
                  "Redux",
                  "Nest Js",
                  "Vue Js"
                  

                ],
                autoStart: true,
                loop: true, // Loop through the strings
                delay: 100, // Speed of typing
                cursor: "|", // Optional: Customize cursor
                deleteSpeed: 50 // Speed of deleting
              }}
            />          
            </div>
      </div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="boy-with-laptop" />
      </div>
      <div className="projectheader">Live Projects</div>

    </div>
  );
};

export default Banner;
