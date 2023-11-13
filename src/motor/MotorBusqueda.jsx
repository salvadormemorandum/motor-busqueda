import { useState } from 'react';

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
        <button className="btn-close" onClick={closeSearch}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.46 12L19 17.54V19H17.54L12 13.46L6.46 19H5V17.54L10.54 12L5 6.46V5H6.46L12 10.54L17.54 5H19V6.46L13.46 12Z" fill="#282828" />
          </svg>
        </button>
      </section>
      <form action="" className="motor-busqueda" onClick={openSearch}>
        Motor de búsqueda
      </form>
    </section>
  )
}

export default MotorBusqueda