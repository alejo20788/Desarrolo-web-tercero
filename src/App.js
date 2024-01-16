
import React, { useState } from 'react';
import './App.css';

function App() {
  const [nuevoParticipante, setNuevoParticipante] = useState('');
  const [participantes, setParticipantes] = useState([]);
  const [parejas, setParejas] = useState([]);

  const agregarParticipante = () => {
    if (nuevoParticipante.trim() !== '') {
      setParticipantes([...participantes, nuevoParticipante.trim()]);
      setNuevoParticipante('');
    }
  };

  const generarParejas = () => {
    const participantesCopiados = [...participantes];
    let parejasGeneradas = [];

    // Verifica si hay participantes
    if (participantesCopiados.length >= 2) {
      while (participantesCopiados.length >= 2) {
        const pareja = [
          participantesCopiados.pop(),
          participantesCopiados.pop(),
        ];
        parejasGeneradas.push(pareja);
      }

      // Sin pareja, se asigna como "Sin Pareja"
      if (participantesCopiados.length === 1) {
        parejasGeneradas.push([participantesCopiados.pop(), 'Sin Pareja']);
      }

      setParejas(parejasGeneradas);
    } else {
      alert('Se necesitan al menos dos participantes para formar una pareja.');
    }
  };

  return (
    <div className="App">
      <h1>Amigo Secreto</h1>

      <div className="content-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Nombre del Participante"
            value={nuevoParticipante}
            onChange={(e) => setNuevoParticipante(e.target.value)}
          />
          <button onClick={agregarParticipante}>Agregar</button>
        </div>

        <div className="lista-container">
          <h2>Lista de Participantes</h2>
          <ul>
            {participantes.map((participante, index) => (
              <li key={index}>{participante}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="parejas-container">
        <button onClick={generarParejas}>Elegir Parejas</button>
        {parejas.map((pareja, index) => (
          <div key={index} className="pareja">
            <p>{`Pareja ${index + 1}: ${pareja[0]} & ${pareja[1]}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
