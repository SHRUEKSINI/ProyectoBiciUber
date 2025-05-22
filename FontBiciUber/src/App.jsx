// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cliente from './assets/cliente.jsx';
import Factura from './assets/factura.jsx';
import Servicios from './assets/servicios.jsx';
import Productos from './assets/productos.jsx';
import Quienessomos from './assets/Quienessomos.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-brand">BiciUber</div>
          <ul className="navbar-links">x|
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/cliente">Cliente</Link></li>
            <li><Link to="/Servicios">Servicios</Link></li>
            <li><Link to="/Factura">Factura</Link></li>
            <li><Link to="/¿Quienes Somos?">¿Quienes Somos?</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <header className="hero">
                <div className="hero-content">
                  <h1>Muévete rápido en tu ciudad con BiciUber</h1>
                  <p>La app donde encuentras la forma más fácil y rápida de moverte en bici.</p>
                  <Link to="/cliente">
                  <Link to="/factura">
                  </Link>
                    <button>Comienza ahora</button>
                  </Link>
                </div>
              </header>
            }
          />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/factura" element={<Factura />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/Quienessomos" element={<Quienessomos />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
