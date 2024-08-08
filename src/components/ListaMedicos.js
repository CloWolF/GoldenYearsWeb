import React, { useEffect, useState } from 'react';

function ListaMedicos() {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://gy-app-ws.azurewebsites.net/geriatras')
      .then(response => {
        if (!response.ok) {
          throw new Error('Red error: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setMedicos(data);
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
      <h1>Lista de Médicos</h1>
      <ul className="medicos-list">
        {medicos.length > 0 ? (
          medicos.map((medico, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {medico.nombre} {medico.apPaterno} {medico.apMaterno}<br />
              <strong>RUT:</strong> {medico.rutMedico}<br />
              <strong>Especialidad:</strong> {medico.especialidad}<br />
              <strong>Teléfono:</strong> {medico.telefono}<br />
              <strong>Correo:</strong> {medico.correo}<br />
            </li>
          ))
        ) : (
          <p>No hay datos de médicos disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default ListaMedicos;
