import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

function Client() {

  const order = (e) => {
    e.preventDefault();

    const url = 'http://localhost:3000/teslakiller/';

    let data = new FormData();
    data.append('fullname', e.target.fullname.value)
    data.append('street', e.target.street.value)
    data.append('zipcode', e.target.zipcode.value)
    data.append('city', e.target.city.value)
    data.append('phone', e.target.phone.value)
    data.append('email', e.target.email.value)

   /* const data = {
      fullname: e.target.fullname.value,
      street: e.target.street.value,
      zipcode: e.target.zipcode.value,
      city: e.target.city.value,
      phone: e.target.phone.value,
      email: e.target.email.value
    }*/
    
    axios.post(url + 'order/client.php', data, {
      headers: {
        'Content-Type': 'Application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    }).then(res => {
      console.log(res);
    }).catch(error => {
      alert(error);
    });
  }

    return (
        <>
        <h5>Plese enter your information:</h5>
        <div className="container">
        <Form onSubmit={order}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="fullname"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Streetaddress</Form.Label>
          <Form.Control type="text" name="street"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Zipcode</Form.Label>
          <Form.Control type="text" name="zipcode"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" name="city" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="0401234567" name="phone" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="name@example.com" name="email"/>
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