import './App.css';
import './style.css';
import './media/fonts/TESLA.ttf';
import AllsetNavbar from './navbarAllset.js';
import AdminPanel from './admin';


function App() {
  return (
    <>
    <AllsetNavbar/>
    <section className="intro" id="home">
      <h1>Tässä on<span className="font-face"> Teslakiller</span></h1>
      <div className="logo">
      </div>
      <div className="arrow"></div>
    </section>
    <section className="intro2">
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
      asd
    </section>
    <section className="admin" id="admin">
    <AdminPanel/>
    </section>
    </>

  );
}

export default App;

