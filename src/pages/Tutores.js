// src/pages/Tutores.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tutores() {
  const [tutores, setTutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://gy-app-ws.azurewebsites.net/tutores') // Asegúrate de que esta URL es correcta
      .then(response => {
        setTutores(response.data);
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
      <h1>Lista de Tutores</h1>
      {tutores.length > 0 ? (
        <ul>
          {tutores.map((tutor) => (
            <li key={tutor.id} className="tutor-item">
              <strong>ID:</strong> {tutor.id}<br />
              <strong>Nombre:</strong> {tutor.nombre} {tutor.apPaterno} {tutor.apMaterno}<br />
              {/* Otros campos según la respuesta del servicio */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos de tutores disponibles.</p>
      )}
    </div>
  );
}

export default Tutores;
