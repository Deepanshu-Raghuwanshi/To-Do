import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Nav className="me-auto">
                 </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
