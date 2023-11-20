// Dependencias
import { useEffect, useState, useContext } from "react";

// Api
//import { getIcon } from "../api"

// Constantes
// import { months } from "../constans";
// import Month from "./componentes/Month";

// Estilos
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// Componentes
import { DateRangePicker } from 'react-date-range';

// Contexto
import { ParametrosBusquedaContext } from "../../Contexto/parametrosBusqueda";

function Calendar() {

    // const currentDateRaw = new Date();
    // const [currentMonth, setCurrentMonth] = useState(months[currentDateRaw.getMonth()]);
    // const [nextMonth, setNextMonth] = useState(months[currentDateRaw.getMonth() + 1]);
    // const [currentYear, setCurrentYear] = useState(currentDateRaw.getFullYear());

    // Usar dispatch del contexto ParametrosBusquedaContext
    const { dispatch } = useContext(ParametrosBusquedaContext);

    const [selectedRange, setSelectedRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    /**
     * Si se selecciona un periodo de fechas, se actualizan los parámetros de búsqueda
     * en el estado global del motor de búsqueda
     */
    useEffect(() => {
        if (selectedRange[0].startDate < selectedRange[0].endDate) {
            dispatch({
                type: 'UPDATE_FECHAS', payload: {
                    fechaEntrada: selectedRange[0].startDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' }),
                    fechaSalida: selectedRange[0].endDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric', year: 'numeric' })
                }
            });
        }
    }, [selectedRange, dispatch]);

    return (
        <section className="dropdown-calendar">
            {/* <header className="calendar-header">
                <button className="btn-prev">
                    {getIcon('arrow-left')}
                </button>
                <section className="current-months">
                    <span>{currentMonth} de {currentYear} </span>
                    -
                    <span> {nextMonth} de {currentYear}</span>
                </section>
                <button className="btn-next">
                    {getIcon('arrow-right')}
                </button>
            </header> */}
            <main className="calendar-body">
                {/* <Month />
                <Month /> */}
                <DateRangePicker
                    ranges={selectedRange}
                    onChange={range => setSelectedRange([range.selection])}
                    showSelectionPreview={false}
                    moveRangeOnFirstSelection={false}
                    weekdayDisplayFormat="eeeee"
                    color="#5B7E96"
                    rangeColors={['#5B7E96']}
                    months={2}
                    direction="horizontal"
                    minDate={new Date()}
                />
            </main>
        </section>
    )
}

export default Calendar