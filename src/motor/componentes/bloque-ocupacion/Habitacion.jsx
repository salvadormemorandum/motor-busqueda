// Dependencias
import React from 'react';
import { PropTypes } from 'prop-types';

// Api
import { getIcon } from '../../api/api';

function Habitacion({ adultos, niños, bebes, updateHabitacion }) {
    return (
        <section className="habitacion">
            <header className="habitacion_header">
                {getIcon('cama')}
                Habitación
            </header>
            <main className="habitacion_body">
                <section className="selector">
                    <span>Adultos</span>
                </section>
                <section className="selector">
                    <span>Niños (2-11 años)</span>
                </section>
                <section className="selector">
                    <span>Bebés (0-1 años)</span>
                </section>
            </main>
        </section>
    )
}

Habitacion.propTypes = {
    adultos: PropTypes.number,
    niños: PropTypes.number,
    bebes: PropTypes.number,
    updateHabitacion: PropTypes.func
}

export default Habitacion