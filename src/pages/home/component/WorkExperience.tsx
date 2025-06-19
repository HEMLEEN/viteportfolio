import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Workexperience.css';
import { faAppStore, faArtstation, faFigma, faJs, faNode, faReact, faVuejs, faWebAwesome } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cardData = [
  {
    id: 1,
    title: 'Website Developement',
    description:
      'Web developement is the process of building, programming, and maintaining websites and web applications',
    image: faWebAwesome,
    core: [
      { icon: faReact, name: 'React', link: 'https://vite.dev/guide/' },
      { icon: faVuejs, name: 'Vue', link: 'https://vuejs.org/guide/introduction.html' },
      { icon: faJs, name: 'Javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    ]
  },
  {
    id: 2,
    title: 'Mobile apps Developement',
    description:
      'Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems',
    image: faAppStore,
    core: [
      { icon: faReact, name: 'React Native', link: 'https://reactnative.dev/docs/environment-setup' }
    ]
  },
  {
    id: 3,
    title: 'UX/UI Design',
    description:
      'UI/UX design, in simple terms, is about making digital products, like apps and websites, both attractive and easy to use.',
    image: faDrawPolygon,
    core: [
      { icon: faFigma, name: 'Figma', link: '#' },
    ]
  },
  {
    id: 4,
    title: 'Backend',
    description:
      `The backend handles the server-side logic, data management, and security of a web application. It's the behind-the-scenes part that users don't directly interact with, but it's crucial for the application's functionality. `,
    image: faArtstation,
    core: [
      { icon: faNode, name: 'Node', link: 'https://react.dev/learn' },
    ]
  },
  {
    id: 5,
    title: 'Database',
    description:
      `A database is an organized collection of data, typically stored electronically, that can be accessed, managed, and updated. It's a systematic way to store information, often managed by database management software. `,
    image: faArtstation,
    core: [
      { icon: faDatabase, name: 'Database', link: '#' },
    ]
  },
  {
    id: 5,
    title: 'Art Work',
    description:
      `I'm an artist at heart❤️. you'll often find me lost in the world of sketches and colors. I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.`,
    image: faArtstation,
    core: []
  },
];

const WorkExperience = () => {

  const [isOpenIndex, seIsOpenIndex] = useState(-1)

  const handleOnClick = (link: any) => {
    window.open(`${link}`);
  }

  return (
    <section className="work-experience py-5 text-white">
      <Container>
        <h2 className="mb-5 fw-bold section-title text-center title-word">Work Experience</h2>
        <Row className="g-4">
          {cardData.map((card: any, index: any) => (
            <Col key={card.id} xs={12} md={6}>
              <div className="exp-card p-4 d-flex flex-row align-items-center gap-4">
                <div className="exp-img">
                  <FontAwesomeIcon icon={card.image} size="lg" />
                </div>
                <div>
                  <h4 className="fw-bold">{card.title}</h4>
                  <p>{card.description}</p>
                  <Button variant="outline-light" className="learn-btn" disabled={card.core.length == 0} onClick={() => seIsOpenIndex(index)}>
                    Learn More
                  </Button>
                  {isOpenIndex == index && <div className='d-flex py-4 gap-4 overflow-x-auto' >

                    {card.core.length > 0 && card.core.map((core: any) => (
                      <div onClick={() => handleOnClick(core.link)} className='text-cursor '>
                        <span className="cover-word-wrapper px-2">
                          <span className="cover-word fs-5">{core.name} </span>
                        </span>
                        <FontAwesomeIcon icon={core.icon} size="lg" />
                      </div>
                    ))}
                  </div>}
                </div>

              </div>

            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkExperience;
