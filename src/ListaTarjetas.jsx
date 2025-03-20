import { useContext } from "react";
import Tarjeta from "./Tarjeta";
import { ContextoNotas } from "./ContextoNotas";

function ListaTarjetas() {

    const { notas } = useContext(ContextoNotas);

    return (
        <>
            {notas.map(
                dato =>
                    <Tarjeta key={dato.id} {...dato} />
            )}
        </>
    );
}

export default ListaTarjetas;