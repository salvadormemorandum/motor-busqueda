// Dependencias
import React, { useState, useEffect, useContext } from "react";

// Contexto
import { ParametrosBusquedaContext } from "../../Contexto/parametrosBusqueda";
import Habitacion from "../bloque-ocupacion/Habitacion";

function Habitaciones() {
    const [habitaciones, setHabitaciones] = useState();
    const { getOcupacion } = useContext(ParametrosBusquedaContext);

    function addHabitacion() { }

    function removeHabitacion() { }

    function updateHabitacion(newHabitacionData) { }

    /**
     * Función que crea un array con tantos objetos como habitaciones haya en el estado global
     */
    useEffect(() => {
        let habitacionesRaw = [];
        for (let i = 0; i < getOcupacion().habitaciones; i++) {
            habitacionesRaw.push({
                adultos: getOcupacion().adultos,
                niños: getOcupacion().niños,
                bebes: getOcupacion().bebes
            });
        }
        setHabitaciones(habitacionesRaw);
    }, [getOcupacion]);

    return (
        <section className="busqueda_dropdown ocupacion">
            {habitaciones.map((habitacion, index) =>
                <Habitacion
                    key={index}
                    adultos={habitacion.adultos}
                    niños={habitacion.niños}
                    bebes={habitacion.bebes}
                    updateHabitacion={updateHabitacion}
                />)}
            <footer className=""></footer>
        </section>
    )
}

export default Habitaciones