import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">BiciUber</div>
        <ul className="navbar-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Conductor</a></li>
          <li><a href="#">Cliente</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Productos</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Muévete rápido en tu ciudad con BiciUber</h1>
          <p>La app donde encuentras la forma más fácil y rápida de moverte en bici.</p>
          <button>Comienza ahora</button>
        </div>
      </header>
    </div>
  );
}

export default App;

