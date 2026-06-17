import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContextData } from '../../context/Create';
import AppDropdown from '../../components/AppDropdown';
import Logo from '../../assets/logo.svg'

const Navbar = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(GlobalContextData)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const core = [
        { label: 'Core Concepts', path: '#' },
        { label: 'Road map', path: '#' },

    ];
   const aiTool = [
        { label: 'Code Ai', path: '/ai' },

    ];

    const scrollToProjects = (id:any) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <header className="fixed inset-x-0 top-0 z-50 bg-[#0D0D0D] text-white ">
            <nav className="border-0 p-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    {/* Logo */}
                    <a href="#" className="flex items-center justify-center space-x-3 rtl:space-x-reverse text-sm text-gray-600">
                        <img src={Logo} className=" md:block h-15" alt="Flowbite Logo" />
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-whisper-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        )}
                    </button>

                    {/* Navigation Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-2  rounded-lg bg-w-50 md:flex-row ">
                            <li className="block py-2 px-3 text-sm font-bold text-black-400 hover:text-teal-600 uppercase" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null);scrollToProjects('info') }}><NavLink to={'/#'}>HOME</NavLink></li>
                            <li className="block py-2 px-3 text-sm font-bold text-black-400  hover:text-teal-600 uppercase" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null);scrollToProjects('about') }}><NavLink to={'/#'}>ABOUT</NavLink></li>
                            <li className="block py-2 px-3 text-sm font-bold text-black-400  hover:text-teal-600 uppercase" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null);scrollToProjects('skills') }}><NavLink to={'/#'}>Skils</NavLink></li>
                            <li className="block py-2 px-3 text-sm font-bold text-black-400  hover:text-teal-600 uppercase" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null);scrollToProjects('projects') }}><NavLink to={'/#'}>Projects</NavLink></li>

                            {/* DROPDOWN */}

                            <AppDropdown
                                label={'TECH ORBIT'}
                                dropdownKey="core"
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown}
                                setIsMenuOpen={setIsMenuOpen}
                                scrollToProjects={(id:any)=>scrollToProjects(id)}
                                data={core}
                            />
                             <AppDropdown
                                label={'AI TOOLS'}
                                dropdownKey="aiTool"
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown}
                                setIsMenuOpen={setIsMenuOpen}
                                scrollToProjects={(id:any)=>scrollToProjects(id)}
                                data={aiTool}
                            />
                            <li className="block py-2 px-3 text-sm font-bold text-black-400  hover:text-teal-600 notranslate" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null);scrollToProjects('contact') }}><NavLink to={'/#'}>CONTACT US</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar
