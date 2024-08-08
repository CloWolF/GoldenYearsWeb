// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link to="/home/pacientes">Pacientes</Link></li>
        <li><Link to="/home/medicos">Médicos</Link></li>
        <li><Link to="/home/tutores">Tutores</Link></li>
        <li><Link to="/home/enfermeras">Enfermeras</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
