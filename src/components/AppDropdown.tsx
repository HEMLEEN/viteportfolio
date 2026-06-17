import { NavLink } from 'react-router-dom'

const AppDropdown = ({ label, dropdownKey, activeDropdown, setActiveDropdown, setIsMenuOpen, data,scrollToProjects }: any) => {

    const isOpen = activeDropdown === dropdownKey;
    const toggleDropdown = () => {
        setActiveDropdown(isOpen ? null : dropdownKey);
    };


    return (

        <li className="relative w-full md:w-auto"
            // onMouseEnter={handleMouseEnter}
        >
            <button
                className="notranslate cursor-pointer w-full md:w-auto flex justify-between items-center gap-1 py-2 px-3 text-sm font-bold text-black-400  hover:text-teal-600"
                onClick={toggleDropdown}
            >
                {label}
                <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
            </button>
            <ul

                className={`
                    ${isOpen ? 'block' : 'hidden'}
                    md:absolute md:z-10 md:mt-1 md:bg-[#F2F2F2] md:shadow-lg md:rounded-md md:w-48
                    transition-all duration-200 ease-in-out
                `}
            >
                {data.map((item: any, index: number) => (
                    <li key={index} className='notranslate'>
                        <NavLink
                            to={item.path}
                            className="block px-4 py-2 text-sm font-bold text-teal-600 hover:bg-teal-100 uppercase notranslate"
                            onClick={() => { setActiveDropdown(null); setIsMenuOpen(false) ;scrollToProjects(item.path)}}
                        >
                            {'→' + " " + item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default AppDropdown
