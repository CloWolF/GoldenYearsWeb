import React, { useEffect, useState } from 'react';

function ListaPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch data from the API
    fetch('http://gy-app-ws.azurewebsites.net/pacientes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Red error: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setPacientes(data);
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
      <h1>Lista de Pacientes</h1>
      <ul className="pacientes-list">
        {pacientes.length > 0 ? (
          pacientes.map((paciente, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {paciente.nombre} {paciente.apPaterno} {paciente.apMaterno}<br />
              <strong>RUT:</strong> {paciente.rutPaciente}<br />
              <strong>Fecha de Nacimiento:</strong> {paciente.fechaNacimiento}<br />
              <strong>Sexo:</strong> {paciente.sexo}<br />
              <strong>Dirección:</strong> {paciente.direccion}<br />
              <strong>Teléfono:</strong> {paciente.telefono}<br />
              <strong>Seguro de Salud:</strong> {paciente.seguroSalud}<br />
              <strong>Observación:</strong> {paciente.observacion}<br />
              <strong>Estado:</strong> {paciente.idEstado}<br />
              <strong>Tutor:</strong> {paciente.idTutor}<br />
              <strong>Geriatra:</strong> {paciente.idGeriatra}<br />
            </li>
          ))
        ) : (
          <p>No hay datos de pacientes disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default ListaPacientes;
