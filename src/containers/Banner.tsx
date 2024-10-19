import Typewriter from "typewriter-effect";

import cartoon from "../assets/cartoon-compressed.png";

const Banner = ({ id }: any) => {
  return (
    <div className="home" id={id}>
      <div className="content">
      <div className="name">I'm Hemleen ,</div>
        <div className="wrapper">
          <div className="staticTitle">
            <Typewriter
              options={{
                strings: [
                  "Full Stack",
                  "Mern Stack",
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
            </div>
            <div className="hrLine"></div>
          <ul className="dynamicTitle">
            <li>+<span>Developer</span></li>
          </ul>
        </div>
        <a
            className="btn"
            href="https://www.linkedin.com/in/hemleen-francis-a6b144137/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="name">Hire me</div>
          </a>
      </div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="boy-with-laptop" />
      </div>
      <div className="projectheader">Live Projects</div>

    </div>
  );
};

export default Banner;
