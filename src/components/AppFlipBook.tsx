import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AboutMe } from '../constants/constants';

import './flipbook.css';

const AppFlipBook = () => {
  const [currentProfileIndex,] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // Content divided into pages
  const pageContent = [
    `I'm ${AboutMe[currentProfileIndex]?.name}, a highly skilled MERN Stack Developer with 3+ years of experience.`,
    `I specialize in designing and developing Web and Mobile applications frontend development and backend technologies.`,
    `Proficient in all stages of the software development lifecycle, from concept to deployment and maintenance.`,
    `Beyond coding, I'm an artist at heart ❤️ – often lost in the world of sketches and colors.`,
    `Want to know more about me? Feel free to Download my resume.`,
  ];


  // Handle Next Page
  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pageContent.length);
  };

  // Handle Previous Page
  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? pageContent.length - 1 : prevPage - 1
    );
  };


  return (
    <div className="flip-card">
      <div className="flip-cover">
        <div className="touch-me">Hover Me ❤️ </div>
      </div>
      <div className="flip-content">
        <div className="aboutMe-text">
        <img src={AboutMe[currentProfileIndex]?.image} alt={AboutMe[currentProfileIndex]?.name} />
          <p>{pageContent[currentPage]}</p>
          <div className="page-navigation-buttons">
            <button disabled={currentPage == 0 } onClick={prevPage}><FaArrowLeft size={16} /></button>
            <button onClick={nextPage}><FaArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFlipBook;
