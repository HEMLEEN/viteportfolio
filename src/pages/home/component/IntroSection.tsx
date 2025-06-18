import { Col, Container, Row } from 'react-bootstrap'
import Typewriter from "typewriter-effect";

import { leftUserImage } from '../../../constant/Constant'
import { devloperInfo } from '../../../res/String';
const IntroSection = () => {
    return (
        <section className="intro-section text-white" >
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col md={5} className="text-center mb-4 mb-md-0">
                        <img
                            src={leftUserImage} // Place your image in /public
                            alt="Emoji Developer"
                            className="emoji-img"
                        />
                    </Col>
                    <Col md={7} className='align-items-center justify-content-center'>
                        <p className="intro-text">
                            I'm <span className="highlight-name">Hemleen</span>
                        </p>
                        <p className="designer-tag"></p>
                        <h1 className="main-title">
                            <span className="cover-word-wrapper px-2">
                              <span className="cover-word">Code </span>
                            </span>
                             <p>is like humor. <br /> When you have to explain it.</p>
                            <span className="cover-word-wrapper">
                                <span className="cover-word"> its bad</span>
                                <div className="cover-circle"></div>
                            </span>
                        </h1>
                        <p className="caption">
                            Because if the cover does not impress you what else can?
                        </p>
                    </Col>
                </Row>


                <Row className="text-center mt-5">
                    <Col>
                        <p className="company-tag">
                            Currently, I'm working at {devloperInfo.currentOrganization} as Software Engineer,
                        </p>
                        <h2 className='software-title'>
                            <Typewriter
                                options={{
                                    strings: [
                                        "Mern Stack",
                                        "React Native App",
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
                        </h2>
                        <p className="company-tag">
                            Developer
                        </p>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default IntroSection
