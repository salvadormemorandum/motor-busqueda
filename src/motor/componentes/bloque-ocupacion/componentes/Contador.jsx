// Dependencias
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

// Api
import { getIcon } from '../../../api/api';

function Contador({ tipo, habitacionId, valor, updateValor }) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    /**
     * Función que se encarga de manejar la acción click sobre el botón de añadir
     * @param {*} e 
     */
    function add(e) {
        e.preventDefault();
        updateValor(habitacionId, tipo, valor + 1);
    }

    /**
     * Función que se encarga de manejar la acción click sobre el botón de eliminar
     * @param {*} e 
     */
    function remove(e) {
        e.preventDefault();
        updateValor(habitacionId, tipo, valor - 1);
    }

    /**
     * Función que comprueba el valor, si es 0 deshabilita el botón de reducir el valor
     */
    useEffect(() => {
        if (valor === 0) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    }, [valor]);

    return (
        <section className="contador">
            <button
                className={isButtonDisabled ? "disabled" : ""}
                onClick={e => remove(e)}
                disabled={isButtonDisabled}
            >
                {getIcon('eliminar')}
            </button>
            <span className="">{valor}</span>
            <button className="" onClick={e => add(e)}>{getIcon('añadir')}</button>
        </section>
    )
}

Contador.propTypes = {
    tipo: PropTypes.string,
    habitacionId: PropTypes.number,
    valor: PropTypes.number,
    updateValor: PropTypes.func
}

export default Contador