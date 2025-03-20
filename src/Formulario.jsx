import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ContextoNotas } from "./ContextoNotas";
import "./Formulario.css"

function Formulario() {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const { actualizaNotas } = useContext(ContextoNotas);

    const agregarTarjeta = (e) => {
        e.preventDefault();

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
        <form onSubmit={agregarTarjeta} className="formulario">
            <label htmlFor="title">Título:</label>
            <input
                type="text"
                onChange={actualizaTitulo}
                value={titulo}
                name="titulo"
                id="title"
                required
            />
            <label htmlFor="desc">Descripción:</label>
            <input
                type="text"
                onChange={actualizaDesc}
                value={descripcion}
                name="descripcion"
                id="desc"
                required
            />
            <button className="btn btn-success">Agregar Tarjeta</button>
        </form>
    )
}

export default Formulario;