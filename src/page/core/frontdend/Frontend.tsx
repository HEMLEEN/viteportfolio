import { useContext, useEffect, useState } from 'react'
import { LanguageDatabase } from './datalist/languagedb';
import { useNavigate } from 'react-router-dom';
import { GlobalContextData } from '../../../context/Create';
import { FaArrowRight } from 'react-icons/fa';

const Frontend = () => {

    const naviagte = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { setCoreLanguage } = useContext(GlobalContextData);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [selectedZone, setSelectedZone] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const filteredData = selectedZone
        ? LanguageDatabase.filter((item: any) => item.zone === selectedZone)
        : LanguageDatabase;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);
    const isOpen = activeDropdown === 'zone';


    const toggleDropdown = () => {
        if (isOpen) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown('zone');
        }
    }

    const zones = [...new Set(LanguageDatabase.map((item) => item.zone))];

    const handleZoneClick = (zone: string) => {
        setSelectedZone(zone);
        setCurrentPage(1);
        // Close dropdown after short delay to avoid React DOM issues
        requestAnimationFrame(() => {
            setActiveDropdown(null);
        });
    };

    return (
        <div className="py-10 px-4 md:flex flex-col items-center gap-2 mt-20">
            <h4
                className="flex items-center cursor-pointer w-full md:w-auto text-center text-3xl font-bold mb-8 border-b uppercase hover:text-teal-400"
                onClick={toggleDropdown}
            >
                Frontend
                <svg className="w-8 h-8 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                    />
                </svg>
            </h4>

            {/* Dropdown */}
            <div className="relative w-full md:w-auto mb-6">
                {isOpen && (
                    <ul className="md:absolute md:z-10 bg-[#F2F2F2] shadow-lg rounded-md w-48 transition-all duration-200 ease-in-out">
                        {zones.map((zone, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer text-sm md:text-base px-4 py-2 rounded ${selectedZone === zone
                                    ? 'bg-teal-500 text-white'
                                    : 'text-gray-700 hover:bg-teal-100'
                                    }`}
                                onClick={() => handleZoneClick(zone)}
                            >
                                {zone}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Language Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-7xl">
                {currentItems.map((lang, index) => (
                    <div
                        key={`${lang.zoneCode}-${index}`}
                        className="flex flex-col justify-between bg-teal-50 rounded-lg shadow-md p-4 text-center cursor-pointer"
                        onClick={() => {
                            setCoreLanguage({ topic: lang.topic,topicDesc:lang.topicDesc, topicAnswer: lang.answers })
                            naviagte('/contents')
                        }}
                    >
                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center text-2xl font-bold text-teal-500 notranslate">
                            {lang.group}
                        </div>
                        <div className='flex flex-row items-center justify-center gap-8' onClick={() => {}}>
                            <h3 className="font-semibold text-sm uppercase notranslate"

                            >
                                {lang.topic}

                            </h3>
                            <FaArrowRight className="animate-bounce text-gray-400 mt-4" />
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}

export default Frontend
