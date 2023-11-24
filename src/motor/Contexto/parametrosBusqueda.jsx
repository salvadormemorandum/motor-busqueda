// Dependencias
import React, { createContext, useReducer } from "react";
import { PropTypes } from "prop-types";

// Crear contexto para los parámetros de búsqueda
export const ParametrosBusquedaContext = createContext();

const initialState = {
  hotel: [],
  fechaEntrada: '',
  fechaSalida: '',
  habitaciones: [
    {
      adultos: 2,
      niños: 0,
      bebes: 0
    }
  ],
  codigo: ''
};

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case 'UPDATE_HOTEL':
      return {
        ...state,
        hotel: actionPayload
      };
    case 'UPDATE_FECHAS':
      return {
        ...state,
        fechaEntrada: actionPayload.fechaEntrada,
        fechaSalida: actionPayload.fechaSalida
      };
    case 'UPDATE_OCUPACION':
      return {
        ...state,
        habitaciones: actionPayload
      };
    case 'UPDATE_CODIGO':
      return {
        ...state,
        codigo: actionPayload
      };
    case 'RESET':
      return initialState;
  }
}

// Crear provider para los parámetros de búsqueda
export function ParametrosBusquedaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Función que devuelve el valor del hotel en el estado global
   * @returns {string} Valor de hotel en el estado global
   */
  function getHotel() {
    return state.hotel;
  }

  /**
   * Función que devuelve el valor de las fechas en el estado global
   * @returns {Object} Objeto con los valores de las fechas del estado global
   */
  function getFechas() {
    var dates = [];
    if (state.fechaEntrada === '' || state.fechaSalida === '') {
      return;
    } else {
      dates = [
        new Date(state.fechaEntrada.split('/').reverse().join('-')),
        new Date(state.fechaSalida.split('/').reverse().join('-'))
      ];
    }
    return {
      fechaEntrada: dates[0],
      fechaSalida: dates[1]
    };
  }

  /**
   * Función que devuelve el valor de la ocupación en el estado global
   * @returns {Object} Objeto con los valores de habitaciones, adultos y niños del estado global
   */
  function getOcupacion() {
    return state.habitaciones;
  }

  /**
   * 
   * @returns {string} Valor de codigo del estado global
   */
  function getCodigo() {
    return state.codigo;
  }

  /**
   * Función para borrar del estado global todos los parámetros de búsqueda
   */
  function clearParameters() {
    dispatch({ type: 'RESET' });
  }

  /**
   * Función para enviar los parámetros de búsqueda al servidor
   */
  function submitSearchParameters() {
    console.log(state);
  }

  return (
    <ParametrosBusquedaContext.Provider value={{
      state,
      dispatch,
      getHotel,
      getFechas,
      getOcupacion,
      getCodigo,
      clearParameters,
      submitSearchParameters
    }}>
      {children}
    </ParametrosBusquedaContext.Provider>
  );
}

ParametrosBusquedaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};