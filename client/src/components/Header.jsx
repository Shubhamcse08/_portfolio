import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
const Header = () => {

  const common={
    marginRight:15,
    fontSize:17,
    letterSpacing:"0.5px"
  }
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div className="mt-2 h2_right" style={{ color: "#6c63ff" }}>
            <h2>
              {" "}
              <Nav.Link href="#home">Shubham Singh</Nav.Link>
            </h2>
          </div>
          <Nav className="">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
              <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
              <NavLink to="/playlist" className="text-decoration-none" style={common}>Project</NavLink>
              <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
            </div>
            <div>
              <Button variant="danger" style={{background: "#6c63ff"}} href="https://www.linkedin.com/in/shubham-singh-a4409a303/" target="_blank">Linkeden</Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
