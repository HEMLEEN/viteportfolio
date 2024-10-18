
const AboutMe = ({id}:any) => {
    
    return (
        <div className="about-container" id={id}>
          <div className="aboutMe-text">
            <h3>Hey there, 👋</h3>
            I'm <span> Hemleen </span>, highly skilled  <span>MERN Stack Developer </span>with <span> 3+ </span>years of experience in designing and developing web applications <span>frontend development,</span> I'm also delving into <span>backend technologies.</span> Proficient in all stages of the software development life cycle, from concept and requirements analysis to deployment and maintenance. Strong problem-solving abilities and a passion for creating efficient and scalable solutions using the <span>MERN stack.</span>
            <br/> <br/>
            Beyond coding, <span>I'm an artist at heart❤️</span> – you'll often find me lost in the world of sketches and colors. I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.
            Want to know more about me? Feel free to <a className='resume' href="/#" target="_blank" rel="noopener noreferrer">Download my resume.</a>
          </div>
         
        </div>
    );
}

export default AboutMe