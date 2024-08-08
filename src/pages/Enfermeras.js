// src/pages/Enfermeras.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Enfermeras() {
  const [enfermeras, setEnfermeras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://gy-app-ws.azurewebsites.net/enfermeras') // Asegúrate de que esta URL es correcta
      .then(response => {
        setEnfermeras(response.data);
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
      <h1>Lista de Enfermeras</h1>
      {enfermeras.length > 0 ? (
        <ul>
          {enfermeras.map((enfermera) => (
            <li key={enfermera.id} className="enfermera-item">
              <strong>ID:</strong> {enfermera.id}<br />
              <strong>Nombre:</strong> {enfermera.nombre} {enfermera.apPaterno} {enfermera.apMaterno}<br />
              {/* Otros campos según la respuesta del servicio */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos de enfermeras disponibles.</p>
      )}
    </div>
  );
}

export default Enfermeras;
