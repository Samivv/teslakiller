import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './media/fonts/TESLA.ttf';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function AllsetNavbar() {
    const [models1, setModels1] = useState([]);
    useState(() => {
        getModelNames();
        }, []);
    function getModelNames() {
        const url = "http://localhost:3000/products/getproducts.php";
        axios.get(url)
        .then(res => {
          const modelNames = res.data.map(product => product.product_name);
          setModels1(modelNames);
        })
        .catch(err => {
          console.log(err);
        })
      }
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
                {models1.map((model, index) => {
                    return (
                        <Nav.Link key={index} href={`#${model.toString().toLowerCase()}`}>{model}</Nav.Link>
                    )
                })
                }
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#basic">Cart</Nav.Link>
                <Nav.Link href="#client">Account</Nav.Link>
                <Nav.Link href="#admin">Menu</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    );
}

export default AllsetNavbar;