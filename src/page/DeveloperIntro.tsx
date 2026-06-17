import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { devloperInfo } from '../res/String';
import MyProfile from '../assets/Me-profile-left.png'

const InfoPage = () => {

   const scrollToProjects = (id:any) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div id='info' className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e1b4b] flex flex-col items-center justify-center text-white px-4">
      {/* Profile Circle */}
      <div className="w-24 h-24 rounded-full border-4 border-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold mb-6">
        {/* <span className="text-blue-400"> {devloperInfo.shortName}</span> */}
        <img src={MyProfile} alt="" />
      </div>

      {/* Name */}
      <h1 className="text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
        {devloperInfo.name}
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-400 text-center max-w-xl mb-8">
        Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition">
          View My Work ↓
        </button>
        <button className="bg-black hover:bg-gray-900 px-6 py-2 rounded-md font-semibold" onClick={() => window.open(devloperInfo.resumeLink, '_blank')}>
          Download Resume
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 text-xl mb-8">
        <a href={devloperInfo.gitLink} target='_blank' className="hover:text-blue-500 transition"><FaGithub /></a>
        <a href={devloperInfo.linkedIn} target='_blank' className="hover:text-blue-500 transition"><FaLinkedin /></a>
        <a href="#"  target='_blank' className="hover:text-blue-500 transition"><FaEnvelope /></a>
      </div>

      {/* Down Arrow */}
    <div className='flex flex-col items-center' onClick={()=>scrollToProjects('about')}>
        <span className='animate-bounce text-gray-400 mt-4' >Scoll down</span>
      <FaArrowDown className="animate-bounce text-gray-400 mt-4" />
    </div>
    </div>
  );
};

export default InfoPage;
