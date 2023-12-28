// Bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
// Import the Scss here to design
import "../scss/Navbar.scss";
const navbar = () => {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary Navbar">
          <Container fluid>
            <Navbar.Brand href="/" className="Brand">
                <h5>Fran<span>K</span>oder</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Frank Joseph Garcia
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-4">
                  <Nav.Link href="#Abouts" className="Links">
                    <h6>About</h6>
                  </Nav.Link>
                  <Nav.Link href="#Services" className="Links">
                    <h6>Services</h6>
                  </Nav.Link>
                  <Nav.Link href="#Projects" className="Links">
                    <h6>Projects</h6>
                  </Nav.Link>
                  <Nav.Link href="#Contact" className="Links">
                    <h6>Contact Me</h6>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default navbar;
