import { useContext } from "react";
import Tarjeta from "./Tarjeta";
import { Contexto } from "./ContextoNotas";

function ListaTarjetas() {

    const { notas } = useContext(Contexto);

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