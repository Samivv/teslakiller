import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function Client() {
  const [fullname, setFullname] = useState();
  const [street, setStreet] = useState();
  const [zipcode, setZipcode] = useState();
  const [city, setCity] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  function Order(e) {
    e.preventDefault();

    const url = 'http://localhost:3000/teslakiller/';

    const json = JSON.stringify({
      fullname: fullname,
      street: street,
      zipcode: zipcode,
      city: city,
      phone: phone,
      email: email,
    });
    axios.post(url + 'order/client.php', json, {
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    }).catch(error => {
      alert(error);
    });
  }

    return (
        <>
        <h5>Plese enter your information:</h5>
        <div className="container">
        <Form onSubmit={Order}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onChange={e => setFullname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Streetaddress</Form.Label>
          <Form.Control type="text" onChange={e => setStreet(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" onChange={e => setZipcode(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" onChange={e => setCity(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="0401234567" onChange={e => setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Order
        </Button>
      </Form>
        </div>
        </>
    );
}

export default Client;