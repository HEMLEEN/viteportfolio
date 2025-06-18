import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Workexperience.css';
import { faAppStore, faArtstation, faWebAwesome } from '@fortawesome/free-brands-svg-icons';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cardData = [
  {
    id: 1,
    title: 'Website Developement',
    description:
      'Web development is the process of building, programming, and maintaining websites and web applications',
    image: faWebAwesome,
  },
  {
    id: 2,
    title: 'Mobile apps Developement',
    description:
      'Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems',
    image: faAppStore,
  },
  {
    id: 3,
    title: 'UX/UI Design',
    description:
      'UI/UX design, in simple terms, is about making digital products, like apps and websites, both attractive and easy to use.',
    image: faDrawPolygon,
  },
  {
    id: 4,
    title: 'Art Work',
    description:
      `I'm an artist at heart❤️. you'll often find me lost in the world of sketches and colors. I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.`,
    image: faArtstation,
  },
];

const WorkExperience = () => {
  return (
    <section className="work-experience py-5 text-white">
      <Container>
        <h2 className="mb-5 fw-bold section-title text-center title-word">Work Experience</h2>
        <Row className="g-4">
          {cardData.map((card:any) => (
            <Col key={card.id} xs={12} md={6}>
              <div className="exp-card p-4 d-flex flex-row align-items-center gap-4">
                <div className="exp-img">
                 <FontAwesomeIcon icon={card.image} size="lg" />
                </div>
                <div>
                  <h4 className="fw-bold">{card.title}</h4>
                  <p>{card.description}</p>
                  <Button variant="outline-light" className="learn-btn">
                    Learn More
                  </Button>
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
