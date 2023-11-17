// Dependencias
import { useState } from "react";
import { addDays } from "date-fns";

// Api
import { getIcon } from "../api"

// Constantes
import { months } from "../constans";
import Month from "./componentes/Month";

// Estilos
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// Componentes
import { DateRangePicker } from 'react-date-range';

function Calendar() {

    const currentDateRaw = new Date();
    const [currentMonth, setCurrentMonth] = useState(months[currentDateRaw.getMonth()]);
    const [nextMonth, setNextMonth] = useState(months[currentDateRaw.getMonth() + 1]);
    const [currentYear, setCurrentYear] = useState(currentDateRaw.getFullYear());

    const [selectedRange, setSelectedRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);

    return (
        <section className="dropdown-calendar">
            <header className="calendar-header">
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
            </header>
            <main className="calendar-body">
                {/* <Month />
                <Month /> */}
                <DateRangePicker
                    ranges={selectedRange}
                    onChange={range => setSelectedRange([range.selection])}
                    showSelectionPreview={false}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    direction="horizontal"
                />
            </main>
        </section>
    )
}

export default Calendar