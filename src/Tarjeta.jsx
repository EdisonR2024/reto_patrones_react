import "./Tarjeta.css";

function Tarjeta({ titulo, descripcion }) {
    return <div className="contenedor">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
    </div>
}

export default Tarjeta;