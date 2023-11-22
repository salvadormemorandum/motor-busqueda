// Dependencias
import React, { useState, useEffect, useContext } from "react";

// Contexto
import { ParametrosBusquedaContext } from "../../Contexto/parametrosBusqueda";

// Componentes
import Habitacion from "../bloque-ocupacion/Habitacion";

function Habitaciones() {
    const { getOcupacion, dispatch } = useContext(ParametrosBusquedaContext);
    const [habitaciones, setHabitaciones] = useState();

    /**
     * Función para añadir una habitación y actualizar el valor en el estado global
     * @param {*} e 
     */
    function addHabitacion(e) {
        e.preventDefault();
        let habitacionesUpdated = habitaciones;
        // Añade una nueva habitación con los valores por defecto
        habitacionesUpdated.push({
            adultos: 2,
            niños: 0,
            bebes: 0
        });

        // Actualiza las habitaciones en el estado global
        dispatch({
            type: 'UPDATE_OCUPACION',
            payload: habitacionesUpdated
        });
    }

    /**
     * Función para eliminar una habitación y actualizar el valor en el estado global
     * @param {*} e 
     * @param {*} index 
     */
    function removeHabitacion(index) {
        let habitacionesUpdated = habitaciones;
        habitacionesUpdated.splice((index), 1);

        // Actualiza las habitaciones en el estado global
        dispatch({
            type: 'UPDATE_OCUPACION',
            payload: habitacionesUpdated
        });
    }

    /**
     * Función que recibe la habitación, el tipo de valor y el valor y actualiza el valor en el estado global
     * @param {*} habitacionId 
     * @param {*} tipo 
     * @param {*} valor 
     */
    function updateHabitacion(habitacionId, tipo, valor) {
        let habitacionesUpdated = habitaciones;
        habitacionesUpdated[habitacionId][tipo] = valor;

        // Actualiza las habitaciones en el estado global
        dispatch({
            type: 'UPDATE_OCUPACION',
            payload: habitacionesUpdated
        });
    }

    /**
     * Función que actualiza el valor de las habitaciones en función del estado global
     */
    useEffect(() => {
        setHabitaciones(getOcupacion());
    }, [getOcupacion]);

    return (
        <section className="busqueda_dropdown ocupacion">
            {habitaciones && habitaciones.map((habitacion, index) =>
                <Habitacion
                    key={index}
                    index={index}
                    habitacion={habitacion}
                    updateHabitacion={updateHabitacion}
                    removeHabitacion={removeHabitacion}
                />)}
            <footer className="ocupacion_footer">
                <button className="btn-text" onClick={e => addHabitacion(e)}>Añadir habitación</button>
            </footer>
        </section>
    )
}

export default Habitaciones