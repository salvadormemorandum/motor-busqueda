// Dependencias
import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

// Contexto
import { ParametrosBusquedaContext } from '../../Contexto/parametrosBusqueda';

function ButtonSubmit({ submitAction }) {
    const {
        submitSearchParameters
    } = useContext(ParametrosBusquedaContext);

    /**
     * Handle click on submit button
     * @param {*} e 
     */
    function handleSubmit(e) {
        submitAction(e);
        submitSearchParameters();
    }

    return (
        <section className="motor-busqueda_submit-container">
            <button
                className="motor-busqueda_submit"
                onClick={(e) => handleSubmit(e)}
                disabled={false}
            >BUSCAR</button>
        </section>
    )
}

ButtonSubmit.propTypes = {
    submitAction: PropTypes.func.isRequired
}

export default ButtonSubmit