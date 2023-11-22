// Dependencias
import React from 'react';
import { PropTypes } from 'prop-types';

// Api
import { getIcon } from '../../api/api';

// Componentes
import Contador from './componentes/Contador';

function Habitacion({ index, habitacion, updateHabitacion, removeHabitacion }) {

    /**
     * Función que se encarga de manejar la acción click sobre el botón de eliminar habitación
     * @param {} e 
     */
    function handleClickDeleteHabitacion(e) {
        e.preventDefault();
        removeHabitacion(index);
    }

    return (
        <section className="habitacion">
            <header className="habitacion_header">
                <section className="titulo">
                    {getIcon('cama')}
                    Habitación {index + 1}
                </section>
                {/* Icono de desplegar o colapsar */}
            </header>
            <main className="habitacion_body">
                <section className="selector">
                    <span>Adultos</span>
                    <Contador tipo="adultos" habitacionId={index} valor={habitacion.adultos} updateValor={updateHabitacion} />
                </section>
                <section className="selector">
                    <span>Niños (2-11 años)</span>
                    <Contador tipo="niños" habitacionId={index} valor={habitacion.niños} updateValor={updateHabitacion} />
                </section>
                <section className="selector">
                    <span>Bebés (0-1 años)</span>
                    <Contador tipo="bebes" habitacionId={index} valor={habitacion.bebes} updateValor={updateHabitacion} />
                </section>
            </main>
            <footer className="habitacion_footer">
                <button className="btn-text btn-eliminar" onClick={(e) => handleClickDeleteHabitacion(e)}>
                    Eliminar habitación
                    {getIcon('papelera')}
                </button>
            </footer>
        </section>
    )
}

Habitacion.propTypes = {
    index: PropTypes.number,
    habitacion: PropTypes.object,
    updateHabitacion: PropTypes.func,
    removeHabitacion: PropTypes.func
}

export default Habitacion