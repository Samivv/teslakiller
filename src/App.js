import './App.css';
import './style.css';
import './media/fonts/TESLA.ttf';
import AllsetNavbar from './navbarAllset.js';
import AdminPanel from './admin';
import Client from './client';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export function App() {

  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [interior, setInterior] = useState("");
  const [interiors, setInteriors] = useState([]);
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);


  useEffect(() => {
    getModelNames();
    getColors();
    getInteriors();
  }, []);
  
  function handleSubmit(e) {
    e.preventDefault();

  }

  function getModelNames() {
    const url = "http://localhost:3000/products/getproducts.php";
    axios.get(url)
    .then(res => {
      const modelNames = res.data.map(product => product.product_name);
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
      const colorNames = res.data.map(product => product.product_name);
      setColors(colorNames);
    })
    .catch(err => {
      console.log(err);
    })
  }

  function getInteriors() {
    const url = "http://localhost:3000/products/getinteriors.php";
    axios.get(url)
    .then(res => {
      const interiorNames = res.data.map(product => product.product_name);
      setInteriors(interiorNames);
    })
    .catch(err => {
      console.log(err);
    })
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
      <form onSubmit={handleSubmit}>
        <label for="model">Choose a model:</label>
        <select value={model} onChange={e => setModel(e.target.value)} name="model" id="model">
          {models.map((model, index) => {
            return <option key={index} value={model}>{model}</option>
          })}
        </select>

        <label for="color">Choose a color:</label>
        <select value={color} onChange={e => setColor(e.target.value)} name="color" id="color">
          {colors.map((color, index) => {
            return <option key={index} value={color}>{color}</option>
            })}

        </select>

        <label for="interior">Choose a interior:</label>
        <select value={interior} onChange={e => setInterior(e.target.value)} name="interior" id="interior">
            {interiors.map((interior, index) => {
              return <option key={index} value={interior}>{interior}</option>
            })
            }
        </select>
        <button className="button">Order</button>
      </form>
    </section>

    <section className="showcase">
      <div className="container text-white">
        <div className="showcase-content">
          <h1>What is Lorem Ipsum?</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
    <Client/>
    </section>
    </>

  );
}

export default App;

