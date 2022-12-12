import React from 'react';
import uuid from 'react-uuid'; // HOX ASENNA!
import axios from 'axios';

function Cart({cart, removeFromCart}) {
    let sum = 0;

    const order = (e) => {
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
          alert(error.response === undefined ? error : error.response.data.error);
        });
      }

return (
    <>
    <h3 className="header">Your cart:</h3>
      <table className="table">
        <tbody>
          {cart.map(product => {
            sum+=parseFloat(product.product_price);
            return (
              <tr key={uuid()}>
                <td>{product.product_name}</td>
                <td>{product.product_price} €</td>
                <td><a href="#" onClick={() => removeFromCart(product)}>Delete product</a></td>
              </tr>
            )
            })}
          <tr key={uuid()}>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {cart.length > 0 &&
    <>
      <h5>Please insert your information!</h5>
      <div className="container">
          <form onSubmit={order}>
          <div className="field">
              <label>Fullname: </label>
              <input type="text" name="fullname"/>
          </div>
          <div className="field">
              <label>Streetaddress: </label>
              <input type="text" name="street"/>
          </div>
          <div className="field">
              <label>Zipcode: </label>
              <input type="text" name="zipcode"/>
          </div>
            <div className="field">
              <label>City: </label>
              <input type="text" name="city" />
          </div>
          <div className="field">
              <label>Phonenumber: </label>
              <input type="text" placeholder="0401234567" name="phone" />
          </div>
          <div className="field">
              <label>Email: </label>
              <input type="text" placeholder="name@example.com" name="email"/>
          </div>
          <button variant="primary" type="submit">
              Order
          </button>
        </form>
      </div>
    </>
  }
    </>
)
} export default Cart;