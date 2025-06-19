import { Col, Container, Row } from 'react-bootstrap'

import { leftUserImage } from '../../../constant/Constant'

const IntroSection = () => {
    return (
        <section className="intro-section text-white " >
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
                            <p className='fs-4'> I always did something I was a little not ready to do. I think that's how you grow. When there's that moment of <span className="cover-word-wrapper px-2">
                            <span className="cover-word fs-4">"Wow", </span>
                            </span></p>
                            
                             <p className='fs-4'>I'm not really sure I can do this, and you push through those moments  that's when i have a </p>
                            <span className="cover-word-wrapper">
                                <span className="cover-word fs-4"> breakthrough.</span>
                            </span>
                        </h1>

                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default IntroSection
