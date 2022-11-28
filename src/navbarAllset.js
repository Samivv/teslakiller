import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function AllsetNavbar() {
    return (
    <>
    {/* sticky navbar with logo on the left side. Middle of the page has "Basic","Sport" and "Superfast", right side has Log in button */}
    <Navbar collapseOnSelect bg="none" expand="lg" fixed="top">
        <Navbar.Brand href="#home"><img
              src="/images/logoAlsetWhite.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />Allset</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#basic">Basic</Nav.Link>
                <Nav.Link href="#sport">Sport</Nav.Link>
                <Nav.Link href="#superfast">Superfast</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#basic">Shop</Nav.Link>
                <Nav.Link href="#sport">Account</Nav.Link>
                <Nav.Link href="#admin">Menu</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default AllsetNavbar;