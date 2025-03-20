import Formulario from './Formulario';
import ListaTarjetas from './ListaTarjetas';
import './App.css';
import ContextoNotas from './ContextoNotas';

function App() {

  return (
    <ContextoNotas>
      <div className='contenedor-principal'>
        <h2 className='titulo-app'>Notas:</h2>
        <div className='contenedor-form'>
          <Formulario />
        </div>
        <div className='contenedor-tarjetas'>
          <ListaTarjetas />
        </div>
      </div>
    </ContextoNotas>
  )
}

export default App
