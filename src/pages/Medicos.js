// src/pages/Medicos.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://gy-app-ws.azurewebsites.net/geriatras') // Asegúrate de que esta URL es correcta
      .then(response => {
        setMedicos(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message || 'Error al cargar los datos.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos: {error}</p>;

  return (
    <div className="container">
      <h1>Lista de Médicos</h1>
      {medicos.length > 0 ? (
        <ul>
          {medicos.map((medico) => (
            <li key={medico.id} className="medico-item">
              <strong>ID:</strong> {medico.id}<br />
              <strong>Nombre:</strong> {medico.nombre} {medico.apPaterno} {medico.apMaterno}<br />
              {/* Otros campos según la respuesta del servicio */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos de médicos disponibles.</p>
      )}
    </div>
  );
}

export default Medicos;
