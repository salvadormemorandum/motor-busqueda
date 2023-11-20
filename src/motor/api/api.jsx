// Iconos
import { CloseIcon, LupaIcon, CalendarIcon, PersonasIcon, CodigoIcon, ArrowLeft, ArrowRight } from "../componentes/Iconos.jsx";

// Dropdowns
import HotelesDestinos from "../componentes/dropdowns/HotelesDestinos.jsx";
import Calendario from "../componentes/dropdowns/Calendario.jsx";
import Habitaciones from "../componentes/dropdowns/Habitaciones.jsx";

/**
 * Función que recibe el nombre del icono y devuelve el icono
 * @param {*} iconName 
 * @returns 
 */
export function getIcon(iconName) {
    switch (iconName) {
        case 'close':
            return <CloseIcon />
        case 'lupa':
            return <LupaIcon />
        case 'calendario':
            return <CalendarIcon />
        case 'personas':
            return <PersonasIcon />
        case 'codigo':
            return <CodigoIcon />
        case 'arrow-left':
            return <ArrowLeft />
        case 'arrow-right':
            return <ArrowRight />
        default:
            return null
    }
}


/**
 * Función que recibe el nombre del dropdown y devuelve el dropdown
 * @param {*} dropdownName
 * @returns
 */
export function getDropdown(dropdownName) {
    switch (dropdownName) {
        case 1:
            return <HotelesDestinos />
        case 2:
            return <Calendario />
        case 3:
            return <Habitaciones />
        default:
            return null
    }
}