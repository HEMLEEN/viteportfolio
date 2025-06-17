
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = (props: any) => {

  const { handleClick } = props;
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#12032c' }} className="py-3" id='header'>
      <Container className="d-flex justify-content-between align-items-center">
        <div className="mx-auto">
          <span className='text-white fs-5 fw-bold'
          // style={{
          //   color: 'white',
          //   fontSize: '40px',
          // //   transform: 'rotate(90deg)',
          //   display: 'inline-block',
          //   fontWeight: 'bold',
          // }}
          >
            {`</H>`}
          </span>
        </div>

        <Nav className="ms-auto d-flex flex-row gap-4">
          <Nav.Link href="#" className="text-white fs-5" onClick={() => handleClick('header')}>Home</Nav.Link>
          <Nav.Link href="#" className="text-white fs-5" onClick={() => handleClick('intro')}>About</Nav.Link>
          <Nav.Link href="#" className="text-white fs-5" onClick={() => handleClick('footer')}>Contact</Nav.Link>
        </Nav>
      </Container>
     
    </Navbar>
  );
};

export default Header;
