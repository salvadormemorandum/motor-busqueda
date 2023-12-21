// Dependencias
import React, { useContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

// Contexto
import { ParametrosBusquedaContext } from '../../../Contexto/parametrosBusqueda';

// Api
import { getIcon } from '../../../api/api';

function Ubicacion({ ubicacion, input }) {
    const {
        dispatch,
        getHotel
    } = useContext(ParametrosBusquedaContext);
    const [hoteles, setHoteles] = useState([]);

    /**
     * Función que actualiza el valor del hotel en el estado global
     * @param {*} hotelName 
     */
    function handleHotelClick(hotel) {
        let hoteles = getHotel();
        if (hoteles.includes(hotel)) {
            hoteles = hoteles.filter((hotelListado) => hotelListado.hotel !== hotel.hotel);
        } else {
            hoteles.push(hotel);
        }
        dispatch({ type: 'UPDATE_HOTEL', payload: hoteles });
    }

    /**
     * Función que devuelve un array con las estrellas del hotel
     * @param {*} hotel 
     * @returns 
     */
    function getHotelStars(hotel) {
        const star =
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00004 11.5133L12.12 14L11.0267 9.31333L14.6667 6.16L9.87337 5.74667L8.00004 1.33333L6.12671 5.74667L1.33337 6.16L4.96671 9.31333L3.88004 14L8.00004 11.5133Z" fill="#323232" />
            </svg>
            ;
        const stars = [];
        for (let i = 0; i < hotel.estrellas; i++) {
            stars.push(star);
        }
        return stars;
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
                    hoteles.map((hotel) => (
                        <li key={hotel.id} className="hotel" onClick={() => handleHotelClick(hotel)}>
                            <section className="hotel_name-stars">
                                {hotel.hotel}
                                <section className="stars">
                                    {getHotelStars(hotel)}
                                </section>
                            </section>
                            {getHotel().includes(hotel) && getIcon('check')}
                        </li>
                    )) :
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