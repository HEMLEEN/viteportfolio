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
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: faWebAwesome,
  },
  {
    id: 2,
    title: 'Mobile apps Developement',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: faAppStore,
  },
  {
    id: 3,
    title: 'Ux/UI Designing',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: faDrawPolygon,
  },
  {
    id: 4,
    title: 'Art Work',
    description:
      'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    image: faArtstation,
  },
];

const WorkExperience = () => {
  return (
    <section className="work-experience py-5 text-white">
      <Container>
        <h2 className="mb-5 fw-bold section-title text-center">Work Experience</h2>
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
