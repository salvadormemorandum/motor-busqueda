// Dependencias
import React, { useContext } from 'react';

// Contexto
import { ParametrosBusquedaContext } from '../../Contexto/parametrosBusqueda';

function ButtonSubmit() {
    const {
        submitSearchParameters
    } = useContext(ParametrosBusquedaContext);

    /**
     * Función que maneja el submit del formulario
     */
    function handleSubmit(e) {
        e.preventDefault();
        submitSearchParameters();
    }

    return (
        <section className="motor-busqueda_submit-container">
            <input type="submit" value="Buscar" className="motor-busqueda_submit" onSubmit={e => handleSubmit(e)} />
        </section>
    )
}

export default ButtonSubmit