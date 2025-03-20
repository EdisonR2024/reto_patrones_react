// import { useState } from 'react'
import { useState } from 'react'
// import { ContextoNotas } from './ContextoNotas'
import Formulario from './Formulario'
import ListaTarjetas from './ListaTarjetas'
import './App.css';

const datos = [
  {
    id: '1',
    titulo: 'Estudiar',
    descripcion: 'Curso React'
  },
  {
    id: '2',
    titulo: 'Estudiar BDD',
    descripcion: 'Curso SQL'
  }
]


function App() {

  const [notas, setNotas] = useState(datos);

  const actualizaNotas = (nota) => {
    console.log("Actualizar Notas");
    setNotas([...notas, nota]);

  }

  return (
    // <ContextoNotas.Provider value={notas}>
    <div className='contenedor-principal'>
      <h2 className='titulo-app'>Notas:</h2>
      <div className='contenedor-form'>
        <Formulario actualizaNotas={actualizaNotas} notas />
      </div>
      <div className='contenedor-tarjetas'>
        <ListaTarjetas datos={notas} />
      </div>
    </div>
    // </ContextoNotas.Provider>
  )
}

export default App
