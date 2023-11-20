// Datos
import Destinos from "../bloque-destinos/Destinos";

// Componentes
import { destinosHoteles } from "../../constans";

function HotelesDestinos() {
    return (
        <section className="busqueda_dropdown hoteles-destinos">
            {destinosHoteles.map((destino) => <Destinos key={destino.id} destino={destino} />)}
        </section>
    )
}

export default HotelesDestinos;