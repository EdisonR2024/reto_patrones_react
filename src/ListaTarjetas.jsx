import { useContext } from "react";
import Tarjeta from "./Tarjeta";

function ListaTarjetas({datos}) {

    // const datos=useContext(ContextoNotas);

    return (
        <div>
            {datos.map(
                dato =>
                    <Tarjeta key={dato.id} {...dato}/>
            )}
        </div>
    );
}

export default ListaTarjetas;