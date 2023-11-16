// Iconos
import { CloseIcon, LupaIcon, CalendarIcon, PersonasIcon, CodigoIcon } from "./Iconos"

// Dropdowns
import HotelesDestinos from "./dropdowns/HotelesDestinos"
import Calendario from "./dropdowns/Calendario"
import Habitaciones from "./dropdowns/Habitaciones"

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