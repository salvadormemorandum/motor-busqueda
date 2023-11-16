// Dependencias
import { PropTypes } from 'prop-types';

// Componentes
import Ubicacion from './componentes/Ubicacion';

function Destinos({ destino }) {
    return (
        <section className="dropdown-destinos">
            <h2 className="destino">{destino.destino}</h2>
            {destino.ubicaciones.map((ubicacion) => <Ubicacion key={ubicacion.id} ubicacion={ubicacion} />)}
        </section>
    )
}

Destinos.propTypes = {
    destino: PropTypes.object.isRequired
}

export default Destinos