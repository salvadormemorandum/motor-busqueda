// Dependencias
import { useRef, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

// Api
import { getDropdown, getIcon } from '../api';

function InputSearch({ isSearchOpen, id, inputName, inputIcon }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const inputRef = useRef(null);

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

    return (
        <section className="busqueda">
            <section className="busqueda_input" onClick={openDropdown} ref={inputRef}>
                {getIcon(inputIcon)}
                <input className="busqueda_input_name" type='text' id='' placeholder={inputName}></input>
            </section>
            {isDropdownOpen && getDropdown(id)}
        </section>
    )
}

InputSearch.propTypes = {
    isSearchOpen: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    inputName: PropTypes.string.isRequired,
    inputIcon: PropTypes.string.isRequired
}

export default InputSearch;