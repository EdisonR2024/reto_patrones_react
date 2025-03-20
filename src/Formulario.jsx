import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ContextoNotas } from "./ContextoNotas";

function Formulario() {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const { actualizaNotas } = useContext(ContextoNotas);

    const agregarTarjeta = (e) => {
        e.preventDefault();
        // console.log(`Titulo: ${titulo} - Desc: ${descripcion}`);

        const nota = {
            id: uuidv4(),
            titulo: titulo,
            descripcion: descripcion
        };

        actualizaNotas(nota);

        setTitulo("");
        setDescripcion("");
    }

    const actualizaTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const actualizaDesc = (e) => {
        setDescripcion(e.target.value);
    }

    return (
        <form onSubmit={agregarTarjeta}>
            <label> Título:
                <input type="text" onChange={actualizaTitulo} value={titulo} name="titulo" />
            </label>
            <label> Descripción:
                <input type="text" onChange={actualizaDesc} value={descripcion} name="desc" />
            </label>
            <button >Agregar Tarjeta</button>
        </form>
    )
}

export default Formulario;