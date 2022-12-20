import './App.css';
import './style.css';
import './media/fonts/TESLA.ttf';
import AllsetNavbar from './navbarAllset.js';
import AdminPanel from './admin';
//import Client from './client';
import Cart from './cart';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function App() {
  const [cart, setCart] = useState([]);
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [interior, setInterior] = useState('');
  const [interiors, setInteriors] = useState([]);
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);
  
  //localStorage.clear();
  useEffect(() => {
    if ('cart' in localStorage) {
      console.log(localStorage.getItem('cart'));
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
   }, [])

  function addToCart(e) {
    e.preventDefault();

    const data = {
      model: e.target.model.value,
      color: e.target.color.value,
      interior: e.target.interior.value,
    }
    console.log(data);
    const newCart = [...cart, data];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(newCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.product_id !== product.product_id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }


  useEffect(() => {
    getModelNames();
    getColors();
    getInteriors();
  }, []);
  
  /*function handleSubmit(e) {
    e.preventDefault();

  }*/

  function getModelNames() {
    const url = "http://localhost:3000/products/getmodels.php";
    axios.get(url)
    .then(res => {
      const modelNames = res.data;
      setModels(modelNames);
    })
    .catch(err => {
      console.log(err);
    })
  }

  function getColors() {
    const url = "http://localhost:3000/products/getcolors.php";
    axios.get(url)
    .then(res => {
      const colorNames = res.data;
      setColors(colorNames);
      // find all data from the response
    
    })
    .catch(err => {
      console.log(err);
    })
  }

  function getInteriors() {
    const url = "http://localhost:3000/products/getinteriors.php";
    axios.get(url)
    .then(res => {
      const interiorNames = res.data;
      setInteriors(interiorNames);
    })
    .catch(err => {
      console.log(err);
    })
  }

  localStorage.clear();
  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
   }, [])

  function addToCart(e) {
    e.preventDefault();
    
    console.log(models);
    const selectedModel = models.find(element => {
      return element.product_name === e.target.model.value;
    });

    console.log(selectedModel);

    const selectedColor = colors.find(element => {
      return element.product_name === e.target.color.value;
    });
    console.log(selectedColor);

    const selectedInterior = interiors.find(element => {
      return element.product_name === e.target.interior.value;
    });
    console.log(selectedInterior);

    const data = {
      model: selectedModel,
      color: selectedColor,
      interior: selectedInterior
    }

    const newCart = [...cart, data];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function removeFromCart(data) {
    const itemsWithoutRemoved = cart.filter(item => item.data !== data.product_id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart',JSON.stringify(itemsWithoutRemoved));
  }    

  return (
    <>
    <AllsetNavbar/>
    <section className="intro" id="home">
      <h1><span className="font-face"> ALLSET </span></h1>
      <div className="logo">
      </div>
      <div className="arrow"></div>
    </section>
    <section className="intro2">
      <h2><span className="font-face"> Build your car </span></h2>
      <form onSubmit={addToCart}>
        <label for="model">Choose a model:</label>
        <select value={model} onChange={e => setModel(e.target.value)} name="model" id="model">
          {models.map(model => {
            return <option key={model.product_id}>{model.product_name}</option>
          })}
        </select>

        <label for="color">Choose a color:</label>
        <select value={color} onChange={e => setColor(e.target.value)} name="color" id="color">
          {colors.map(color => {
            return <option key={color.product_id}>{color.product_name}</option>
            })}

        </select>

        <label for="interior">Choose a interior:</label>
        <select value={interior} onChange={e => setInterior(e.target.value)} name="interior" id="interior">
            {interiors.map(interior => {
              return <option key={interior.product_id}>{interior.product_name}</option>
            })
            }
        </select>
        <button className="button" type= "submit">Order</button>
      </form>
    </section>
    <section className="showcase">
      <div className="container text-white">
        <div className="showcase-content">
      </div>
      </div>
    </section>
    <section className="intro3">
    <span className="font-face"> Everything you need </span>
    </section>
    <section className="admin" id="admin">
    <AdminPanel/>
    </section>
    <section className="client" id="client">
    <Cart cart={cart} removeFromCart={removeFromCart}/>
    </section>
    </>

  );
}

export default App;

