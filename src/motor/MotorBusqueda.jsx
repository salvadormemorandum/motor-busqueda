import { useState } from 'react';

// Componentes
import CloseBtn from './componentes/cerrar-motor/CloseBtn';
import InputSearch from './componentes/input-busqueda/InputSearch';

// Datos
import { datosEntrada } from './componentes/constans';

function MotorBusqueda() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  /**
   * Función para cerrar el motor de búsqueda
   */
  function closeSearch() {
    setIsSearchOpen(false);
  }

  /**
   * Función para abrir el motor de búsqueda
   */
  function openSearch() {
    setIsSearchOpen(true);
  }

  return (
    <section className={isSearchOpen ? "motor-busqueda_container open" : "motor-busqueda_container"}>
      <section className="btn-close_container">
        <CloseBtn close={closeSearch} />
      </section>
      <form action="" className="motor-busqueda" onClick={openSearch}>
        {datosEntrada.map((dato) => <InputSearch key={dato.id} isSearchOpen={isSearchOpen} id={dato.id} inputName={dato.name} inputIcon={dato.icon} />)}
        <section className="motor-busqueda_submit-container">
          <input type="submit" value="Buscar" className="motor-busqueda_submit" />
        </section>
      </form>
    </section>
  )
}

export default MotorBusqueda;