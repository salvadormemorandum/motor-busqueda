// Dependencias
import React from 'react';
import { PropTypes } from 'prop-types';

// Componentes
import Ubicacion from './componentes/Ubicacion';

function Destinos({ destino, input }) {
    return (
        <section className="dropdown-destinos">
            <h2 className="destino fuente-titulos">{destino.destino}</h2>
            {destino.ubicaciones.map((ubicacion) => <Ubicacion key={ubicacion.id} ubicacion={ubicacion} input={input} />)}
        </section>
    )
}

Destinos.propTypes = {
    destino: PropTypes.object.isRequired,
    input: PropTypes.string
}

export default Destinos