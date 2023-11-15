import { useState } from 'react';

// Componentes
import CloseBtn from './componentes/cerrar-motor/CloseBtn';
import { LupaIcon } from './componentes/Iconos';

function MotorBusqueda() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function closeSearch() {
    setIsSearchOpen(false);
  }

  function openSearch() {
    setIsSearchOpen(true);
  }

  return (
    <section className={isSearchOpen ? "motor-busqueda_container open" : "motor-busqueda_container"}>
      <section className="btn-close_container">
        <CloseBtn close={closeSearch} />
      </section>
      <form action="" className="motor-busqueda" onClick={openSearch}>
        <section className="busqueda">
          <LupaIcon />
          <p className="busqueda_name">Hoteles y destinos</p>
        </section>
        <section className="busqueda"></section>
        <section className="busqueda"></section>
        <section className="busqueda"></section>
      </form>
    </section>
  )
}

export default MotorBusqueda