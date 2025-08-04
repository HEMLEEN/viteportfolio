import { createContext, useState } from 'react';
// import { calendarData } from '../constants/db/test';

/* Create a context globaly for all screen and componets */
const GlobalContextData = createContext<any>("");


const GlobalContextProvider = (props: any) => {


    const [showLoginModal, setShowLoginModal] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [changeLanguage, setChangeLanguage] = useState('');
    const [coreFrontend, setFrontend] = useState({ topic: '', topicDesc: '', topicAnswer: [] });
    const [coreTools, setTools] = useState({ topic: '', topicDesc: '', topicAnswer: [] });

    /**
        * Provide the all state into the context.
       */
    const values = {
        showLoginModal, setShowLoginModal,
        isMenuOpen, setIsMenuOpen,
        changeLanguage, setChangeLanguage,
        coreFrontend, setFrontend,
        coreTools, setTools

    }
    return (
        <GlobalContextData.Provider value={values}>
            {props.children}
        </GlobalContextData.Provider>
    );
};

export { GlobalContextData, GlobalContextProvider };