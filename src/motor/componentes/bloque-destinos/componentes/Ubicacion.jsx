// Dependencias
import { PropTypes } from 'prop-types';

function Ubicacion({ ubicacion }) {
    return (
        <section>
            <h3 className="ubicacion">{ubicacion.ubicacion}</h3>
            <ul className="hoteles-list">
                {ubicacion.hoteles.map((hotel) => <li key={hotel.id} className="hotel">{hotel.hotel}</li>)}
            </ul>
        </section>
    )
}

Ubicacion.propTypes = {
    ubicacion: PropTypes.object.isRequired
}

export default Ubicacion;