import { useState } from "react";

function Formulario({ actualizaNotas, datos }) {

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const agregarTarjeta = (e) => {
        // alert("Click en agregar tarjeta");
        e.preventDefault();
        console.log(`Titulo: ${titulo} - Desc: ${descripcion}`);

        const nota =
        {
            id: '3',
            titulo: titulo,
            descripcion: descripcion
        }
            ;

        actualizaNotas(nota);
    }

    const actualizaTitulo = (e) => {
        setTitulo(e.target.value);
    }

    const actualizaDesc = (e) => {
        setDescripcion(e.target.value);
    }

    return (
        <form>
            <label> Título:
                <input type="text" name="" id="" onChange={actualizaTitulo} />
            </label>
            <label> Descripción:
                <input type="text" name="" id="" onChange={actualizaDesc} />
            </label>
            <button onClick={agregarTarjeta}>Agregar Tarjeta</button>
        </form>
    )
}

export default Formulario;