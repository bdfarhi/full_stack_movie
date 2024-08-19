
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav  from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { NavbarCollapse } from "react-bootstrap";


const Header = () => {
  return (
    <NavBar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
            <NavBar.Brand href="/" style={{"color": 'gold'}}>
                <FontAwesomeIcon icon={faVideoSlash}/>Gold
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="navbarScroll" />
            <NavbarCollapse>
                <Nav className='me-auto my-2 my-lg-0' style={{maxHeight: '100px'}} navbarScroll>
                    <NavLink className='nav-link' to="/">Home</NavLink>
                    <NavLink className='nav-link' to="/watchList">Watch List</NavLink>

                </Nav>
                <Button clasName="me-2" variant="outline-info">Login</Button>
                <Button clasName="me-2" variant="outline-info">Registration</Button>
            </NavbarCollapse>
        </Container>
    </NavBar>
)
}

export default Header;