// src/pages/Pacientes.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const role = localStorage.getItem('role');

  useEffect(() => {
    axios.get('https://gy-app-ws.azurewebsites.net/pacientes')
      .then(response => {
        setPacientes(response.data);
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
      <h1>Lista de Pacientes</h1>
      {role === 'paciente' && <p>Bienvenido, paciente.</p>}
      {pacientes.length > 0 ? (
        <ul>
          {pacientes.map((paciente) => (
            <li key={paciente.id} className="paciente-item">
              <strong>ID:</strong> {paciente.id}<br />
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
          ))}
        </ul>
      ) : (
        <p>No hay datos de pacientes disponibles.</p>
      )}
    </div>
  );
}

export default Pacientes;
