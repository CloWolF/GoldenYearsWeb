import React, { useEffect, useState } from 'react';

function ListaEnfermeras() {
  const [enfermeras, setEnfermeras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://gy-app-ws.azurewebsites.net/enfermeras')
      .then(response => {
        if (!response.ok) {
          throw new Error('Red error: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setEnfermeras(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
        setError(`Error al cargar los datos: ${error.message}`);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container">
      <h1>Lista de Enfermeras</h1>
      <ul className="enfermeras-list">
        {enfermeras.length > 0 ? (
          enfermeras.map((enfermera, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {enfermera.nombre} {enfermera.apPaterno} {enfermera.apMaterno}<br />
              <strong>RUT:</strong> {enfermera.rutEnfermera}<br />
              <strong>Teléfono:</strong> {enfermera.telefono}<br />
              <strong>Correo:</strong> {enfermera.correo}<br />
            </li>
          ))
        ) : (
          <p>No hay datos de enfermeras disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default ListaEnfermeras;
