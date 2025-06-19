import { Col, Container, Row } from 'react-bootstrap'

import { leftUserImage } from '../../../constant/Constant'

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
            </Container>
        </section >
    )
}

export default IntroSection
