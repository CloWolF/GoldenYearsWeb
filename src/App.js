// src/App.js

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Pacientes from './pages/Pacientes';
import Medicos from './pages/Medicos';
import Tutores from './pages/Tutores';
import Enfermeras from './pages/Enfermeras';
import Login from './components/Login';
// import Sidebar from './components/Sidebar'; // Sidebar importado pero no utilizado
import ListaPacientes from './components/ListaPacientes.js';
import ListaEnfermeras from './components/ListaEnfermeras.js';
import ListaMedicos from './components/ListaMedicos.js';
import ListaTutores from './components/ListaTutores.js';

function App() {
  return (
    <Router>
      {/* <Sidebar /> */} {/* Componente Sidebar comentado */}
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/medicos" element={<Medicos />} />
          <Route path="/tutores" element={<Tutores />} />
          <Route path="/enfermeras" element={<Enfermeras />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
