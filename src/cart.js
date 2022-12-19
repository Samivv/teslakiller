import React from 'react';
import uuid from 'react-uuid'; // HOX ASENNA!
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function Cart({cart, removeFromCart}) {
    let sum = 0;

    const order = (e) => {
        console.log(cart)
        e.preventDefault();
       
        const url = 'http://localhost:3000/';

        const data = {
          fullname: e.target.fullname.value,
          street: e.target.street.value,
          zipcode: e.target.zipcode.value,
          city: e.target.city.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          cart: cart
        }
        console.log(data);
        axios.post(url + 'order/order.php', data
        ).then(res => {
          console.log(res);
          alert('Kiitos tilauksestasi!');
        }).catch(error => {
          alert(error.res === undefined ? error : error.res.data.error);
        });
      }

return (
    <>
    <div className='container'>
    <h3 className="header">Your cart:</h3>
      <table className="table">
        <tbody>
          {cart.map(data => {
            console.log(data);
            sum+=parseFloat(data.product_price);
            return (
              <tr key={uuid()}>
                <td>{data.color.product_name}</td>
                <td>{data.color.product_price} €</td>
                <td>{data.model.product_name}</td>
                <td>{data.model.product_price} €</td>
                <td>{data.interior.product_name}</td>
                <td>{data.interior.product_price} €</td>
                <td><a href="#" onClick={() => removeFromCart(data)}>Empty Cart</a></td>
              </tr>
            )
            })}

        </tbody>
      </table>
      </div>
<>
        <div className="container">
      <h5>Please insert your information!</h5>
        <Form onSubmit={order}>
        <Form.Group>
        <Form.Label>Fullname:</Form.Label>
        <Form.Control type="text" name="fullname" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Streetaddress:</Form.Label>
        <Form.Control type="text" name="street" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Zipcode:</Form.Label>
        <Form.Control type="text" name="zipcode" />
        </Form.Group>
        <Form.Group>
        <Form.Label>City:</Form.Label>
        <Form.Control type="text" name="city" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Phonenumber:</Form.Label>
        <Form.Control type="text" placeholder="0401234567" name="phone" />
        </Form.Group>
        <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" name="email" />
        </Form.Group>
        <Button variant="primary" type="submit">Order</Button>
        </Form>
        </div>
      </>
    </>
)
} 

export default Cart;