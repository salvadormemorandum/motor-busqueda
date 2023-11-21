// Dependencias
import React from 'react';
import { PropTypes } from 'prop-types';

// Datos
import Destinos from "../bloque-destinos/Destinos";

// Componentes
import { destinosHoteles } from "../../constans";

function HotelesDestinos({ input }) {
    return (
        <section className="busqueda_dropdown hoteles-destinos">
            {destinosHoteles.map((destino) => <Destinos key={destino.id} destino={destino} input={input} />)}
        </section>
    )
}

HotelesDestinos.propTypes = {
    input: PropTypes.string
}

export default HotelesDestinos;