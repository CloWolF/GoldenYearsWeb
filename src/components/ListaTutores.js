import React, { useEffect, useState } from 'react';

function ListaTutores() {
  const [tutores, setTutores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://gy-app-ws.azurewebsites.net/tutores')
      .then(response => {
        if (!response.ok) {
          throw new Error('Red error: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setTutores(data);
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
      <h1>Lista de Tutores</h1>
      <ul className="tutores-list">
        {tutores.length > 0 ? (
          tutores.map((tutor, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {tutor.nombre} {tutor.apPaterno} {tutor.apMaterno}<br />
              <strong>RUT:</strong> {tutor.rutTutor}<br />
              <strong>Teléfono:</strong> {tutor.telefono}<br />
              <strong>Correo:</strong> {tutor.correo}<br />
            </li>
          ))
        ) : (
          <p>No hay datos de tutores disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default ListaTutores;
