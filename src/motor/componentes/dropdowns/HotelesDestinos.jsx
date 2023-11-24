// Dependencias
import React, { useState, useContext } from 'react';

// Datos
import Destinos from "../bloque-destinos/Destinos";

// Componentes
import { destinosHoteles } from "../../constans";

// Contexto
import { ParametrosBusquedaContext } from "../../Contexto/parametrosBusqueda";

function HotelesDestinos() {
    const [input, setInput] = useState('');
    const { dispatch } = useContext(ParametrosBusquedaContext);

    /**
     * Función para seleccionar todos los hoteles
     */
    function handleClickSelectAll(e) {
        e.preventDefault();
        let hoteles = destinosHoteles.map((destino) => destino.ubicaciones.map((ubicacion) => ubicacion.hoteles.map((hotel) => hotel.hotel))).flat(2);
        dispatch({ type: 'UPDATE_HOTEL', payload: hoteles });
    }

    /**
     * Función para deseleccionar todos los hoteles
     */
    function handleClickDeselectAll(e) {
        e.preventDefault();
        dispatch({ type: 'UPDATE_HOTEL', payload: [] });
    }

    return (
        <section className="busqueda_dropdown hoteles-destinos">
            <section className="input_filtro">
                <input
                    type="text"
                    className="input_filtro_texto"
                    placeholder=""
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <section className="input_filtro_buttons">
                    <button className="" onClick={(e) => handleClickSelectAll(e)}>Seleccionar todo</button>
                    <button className="" onClick={(e) => handleClickDeselectAll(e)}>deseleccionar</button>
                </section>
            </section>
            {destinosHoteles.map((destino) => <Destinos key={destino.id} destino={destino} input={input} />)}
        </section>
    )
}

export default HotelesDestinos;