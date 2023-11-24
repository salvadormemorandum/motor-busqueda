// Dependencias
import React, { useState } from 'react';

// Componentes
import CloseBtn from './componentes/cerrar-motor/CloseBtn';
import InputSearch from './componentes/input-busqueda/InputSearch';
import ButtonSubmit from './componentes/input-submit/ButtonSubmit';

// Contexto
import { ParametrosBusquedaProvider } from './Contexto/parametrosBusqueda';

// Datos
import { datosEntrada } from './constans';

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

  /**
     * Función que maneja el submit del formulario
     */
  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <ParametrosBusquedaProvider>
      <section className={isSearchOpen ? "motor-busqueda_container open" : "motor-busqueda_container"}>
        {isSearchOpen &&
          <section className="btn-close_container">
            <CloseBtn close={closeSearch} />
          </section>}
        <form action="" className="motor-busqueda" onClick={openSearch}>
          <section className="inputs">
            {datosEntrada.map((dato) => <InputSearch key={dato.id} isSearchOpen={isSearchOpen} dato={dato} />)}
          </section>
          <ButtonSubmit submitAction={handleSubmit} />
        </form>
        {isSearchOpen &&
          <section className="mensaje-miembro">
            <p className="lopesan-members-message">
              Bienvenido <span className='user'>Usuario</span> dispones de un <span className="membership-discount">10% de descuento</span> en todas tus reservas directas por tener nivel <span className="membership">Platinum</span> en <span className='lopesan-members'>Lopesan Members</span>
            </p>
          </section>}
      </section>
    </ParametrosBusquedaProvider>
  )
}

export default MotorBusqueda;