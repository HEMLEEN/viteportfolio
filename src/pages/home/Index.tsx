import './styles/IntroSection.css'
import Header from '../header/Index'
import IntroSection from './component/IntroSection'
import WorkExperience from './component/WorkExperience'
import { motion } from 'framer-motion'
import { boxVariant } from '../../service/Service'
import { useEffect, useRef } from 'react'
import TechOrbit from './component/TechOrbit'
import FeaturedProjects from './component/FeaturedProjects'
import Footer from '../footer/Index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const headerRef = useRef(null);
    const introRef = useRef(null);
    const workRef = useRef(null);
    const techRef = useRef(null);
    const projectRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClick = (section: string) => {
        const sectionMap: { [key: string]: any } = {
            header: headerRef,
            intro: introRef,
            work: workRef,
            tech: techRef,
            project: projectRef,
            footer: footerRef,
        };

        sectionMap[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='position-relative'>
            <motion.div
                ref={headerRef}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="box"
            >
                <Header handleClick={handleClick} />
            </motion.div>

            <motion.div
                ref={introRef}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="box"
            >
                <IntroSection />
            </motion.div>

            <motion.div
                ref={workRef}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="box"
            >
                <TechOrbit />
            </motion.div>

            <motion.div
                ref={techRef}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="box"
            >
                <WorkExperience />
            </motion.div>

            <motion.div
                ref={projectRef}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="box"
            >
                <h2 className='text-center text-white py-2'>Projects Overview</h2>
                <FeaturedProjects />
            </motion.div>

            <motion.div
                ref={footerRef}
                variants={boxVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="box"
            >
                <Footer />
            </motion.div>

            <div className='position-absolute end-0 px-4' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <FontAwesomeIcon icon={faArrowUp} size='1x' className='p-2' color='white' />
            </div>

        </div>
    )
}

export default Home;
