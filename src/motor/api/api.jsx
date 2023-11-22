// Iconos
import { CloseIcon, LupaIcon, CalendarIcon, PersonasIcon, CodigoIcon, ArrowLeft, ArrowRight, CamaIcon, AddIcon, RemoveIcon, PapeleraIcon } from "../componentes/Iconos.jsx";

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
        case 'cama':
            return <CamaIcon />
        case 'añadir':
            return <AddIcon />
        case 'eliminar':
            return <RemoveIcon />
        case 'papelera':
            return <PapeleraIcon />
        default:
            return null
    }
}


/**
 * Función que recibe el nombre del dropdown y devuelve el dropdown
 * @param {*} dropdownID
 * @returns
 */
export function getDropdown(dropdownID, inputData) {
    switch (dropdownID) {
        case 1:
            return <HotelesDestinos input={inputData} />
        case 2:
            return <Calendario />
        case 3:
            return <Habitaciones />
        default:
            return null
    }
}