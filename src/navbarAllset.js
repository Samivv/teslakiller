import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './media/fonts/TESLA.ttf';
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
            /><span className="font-face">ALLSET</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <Nav.Link href="#basic"><span className="font-face">Basic model</span></Nav.Link>
                <Nav.Link href="#sport"><span className="font-face">Superfast</span></Nav.Link>
                <Nav.Link href="#truck"><span className="font-face">Off-road</span></Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#basic">Shop</Nav.Link>
                <Nav.Link href="#client">Account</Nav.Link>
                <Nav.Link href="#admin">Menu</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default AllsetNavbar;