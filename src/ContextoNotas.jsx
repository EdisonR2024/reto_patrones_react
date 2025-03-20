import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Contexto = createContext();

const datos = [
      {
          id: uuidv4(),
          titulo: 'Desarrollo Web',
          descripcion: 'Curso React'
      },
      {
          id: uuidv4(),
          titulo: 'BDD',
          descripcion: 'Curso SQL'
      }
]

function ContextoNotas({ children }) {

    const [notas, setNotas] = useState(datos);

    const actualizaNotas = (nota) => {
        // console.log("Actualizar Notas");
        setNotas([...notas, nota]);
        // console.log(notas);
    }


    return (
        <Contexto.Provider value={{ notas, actualizaNotas }}>
            {children}
        </Contexto.Provider>
    );
}

export default ContextoNotas;