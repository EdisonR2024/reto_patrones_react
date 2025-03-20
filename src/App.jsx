// import { useState } from 'react'
import { useState } from 'react';
import { ContextoNotas } from './ContextoNotas'
import Formulario from './Formulario';
import ListaTarjetas from './ListaTarjetas';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const datos = [
  {
    id: uuidv4(),
    titulo: 'Estudiar',
    descripcion: 'Curso React'
  },
  {
    id: uuidv4(),
    titulo: 'Estudiar BDD',
    descripcion: 'Curso SQL'
  }
]


function App() {

  const [notas, setNotas] = useState(datos);

  const actualizaNotas = (nota) => {
    // console.log("Actualizar Notas");
    setNotas([...notas, nota]);

    // console.log(notas);

  }

  return (
    <ContextoNotas.Provider value={{ notas, actualizaNotas }}>
      <div className='contenedor-principal'>
        <h2 className='titulo-app'>Notas:</h2>
        <div className='contenedor-form'>
          <Formulario />
        </div>
        <div className='contenedor-tarjetas'>
          <ListaTarjetas />
        </div>
      </div>
    </ContextoNotas.Provider>
  )
}

export default App
