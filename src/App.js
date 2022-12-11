import './App.css';
import './style.css';
import './media/fonts/TESLA.ttf';
import AllsetNavbar from './navbarAllset.js';
import AdminPanel from './admin';
import Client from './client';
import React, {useState} from 'react';

export function App() {

  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [interior, setInterior] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

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
          <option value="basic">Basic model</option>
          <option value="sport">Super fast</option>
          <option value="offroad">Off-road</option>
        </select>

        <label for="color">Choose a color:</label>
        <select value={color} onChange={e => setColor(e.target.value)} name="color" id="color">
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
        </select>

        <label for="interior">Choose a interior:</label>
        <select value={interior} onChange={e => setInterior(e.target.value)} name="interior" id="interior">
          <option value="blackleather">Black leather</option>
          <option value="whiteleather">White leather</option>
          <option value="textile">Premium fabric</option>
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

