// Dependencias
import React, { useRef, useState, useEffect, useContext } from 'react';
import { PropTypes } from 'prop-types';

// Api
import { getDropdown, getIcon } from '../../api/api';

// Contexto
import { ParametrosBusquedaContext } from '../../Contexto/parametrosBusqueda';

function InputSearch({ isSearchOpen, dato }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const inputRef = useRef(null);
    const [isInputReadOnly, setIsInputReadOnly] = useState(false);
    const [inputData, setInputData] = useState();
    const {
        getHotel,
        getFechas,
        getOcupacion,
        getCodigo,
        dispatch
    } = useContext(ParametrosBusquedaContext);

    /**
     * Función para abrir el dropdown del input
     */
    function openDropdown() {
        setIsDropdownOpen(true);
    }

    /**
     * Función para cerrar el dropdown del input
     */
    function closeDropdown() {
        setIsDropdownOpen(false);
    }

    /**
     * Función para actualizar el valor del input editable
     * @param {*} input 
     */
    function handleInputChange(input) {
        setInputData(input.toLowerCase());

        if (dato.id === 4) {
            dispatch({
                type: 'UPDATE_CODIGO',
                payload: input
            });
        }
    }

    /**
     * Cierra el dropdown si se hace click fuera del componente
     */
    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                closeDropdown();
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [inputRef]);

    /**
     * Comprueba si el motor de búsqueda está cerrado y si lo está,
     * cierra los dropdowns de los inputs
     */
    useEffect(() => {
        !isSearchOpen && closeDropdown();
    }, [isSearchOpen]);

    /**
     * Efecto para actualizar el valor del input
     */
    useEffect(() => {
        // Comprueba si en input es de fechas o ocupacion, si lo es, lo pone en modo solo lectura
        if (dato.id == 2 || dato.id == 3) {
            setIsInputReadOnly(true);
        }

        switch (dato.id) {
            case 1:
                setInputData(getHotel());
                break;
            case 2:
                if (getFechas() === undefined) return;
                var fechaEntrada = getFechas().fechaEntrada.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
                var fechaSalida = getFechas().fechaSalida.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
                setInputData(`${fechaEntrada} - ${fechaSalida}`);
                break;
            case 3:
                var habitaciones = getOcupacion() ? `${getOcupacion().length} habitaciones` : '';
                // Suma el total adultos de todas las habitaciones
                var adultos = getOcupacion()?.reduce((total, habitacion) => total + habitacion.adultos, 0);
                var adultosText = adultos ? ` - ${adultos} adultos` : '';
                // Suma el total niños de todas las habitaciones
                var niños = getOcupacion()?.reduce((total, habitacion) => total + habitacion.niños, 0);
                var niñosText = niños ? ` - ${niños} niños` : '';
                setInputData(`${habitaciones}${adultosText}${niñosText}`);
                break;
            case 4:
                setInputData(getCodigo());
                break;
            default:
                setInputData('');
        }
    }, [dato.id,
        setInputData,
        getHotel,
        getFechas,
        getOcupacion,
        getCodigo]);

    return (
        <section className="busqueda" ref={inputRef}>
            <section className="busqueda_input" onClick={openDropdown}>
                {getIcon(dato.icon)}
                <input
                    className="busqueda_input_name"
                    type='text'
                    id=''
                    placeholder={dato.name}
                    readOnly={isInputReadOnly}
                    value={inputData ? inputData : ""}
                    onChange={(e) => handleInputChange(e.target.value)}>
                </input>
            </section>
            {isDropdownOpen && getDropdown(dato.id, inputData)}
        </section>
    )
}

InputSearch.propTypes = {
    isSearchOpen: PropTypes.bool.isRequired,
    dato: PropTypes.object.isRequired,
}

export default InputSearch;