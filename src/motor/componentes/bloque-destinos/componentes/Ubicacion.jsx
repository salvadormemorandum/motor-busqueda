// Dependencias
import React, { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

// Contexto
import { ParametrosBusquedaContext } from '../../../Contexto/parametrosBusqueda';

function Ubicacion({ ubicacion, input }) {
    const { dispatch } = useContext(ParametrosBusquedaContext);
    const [hoteles, setHoteles] = useState([]);

    /**
     * Función que actualiza el valor del hotel en el estado global
     * @param {*} hotelName 
     */
    function handleHotelClick(hotelName) {
        dispatch({ type: 'UPDATE_HOTEL', payload: hotelName });
    }

    /**
     * Efecto que filtra los hoteles según el input de búsqueda
     */
    useEffect(() => {
        let filteredHoteles = ubicacion.hoteles.filter((hotel) => hotel.hotel.toLowerCase().includes(input));
        setHoteles(filteredHoteles);
    }, [input, setHoteles, ubicacion.hoteles]);

    return (
        <section>
            <h3 className="ubicacion">{ubicacion.ubicacion}</h3>
            <ul className="hoteles-list">
                {hoteles.length ?
                    hoteles.map((hotel) => <li key={hotel.id} className="hotel" onClick={() => handleHotelClick(hotel.hotel)}>{hotel.hotel}</li>) :
                    <li className='hotel no-hotel'>No se han encontrado hoteles</li>}
            </ul>
        </section>
    )
}

Ubicacion.propTypes = {
    ubicacion: PropTypes.object.isRequired,
    input: PropTypes.string
}

export default Ubicacion;