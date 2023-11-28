// Datos de entrada necesarios del motor de búsqueda
export const datosEntrada = [
  {
    id: 1,
    name: 'Hoteles y destinos',
    icon: 'lupa'
  },
  {
    id: 2,
    name: 'Entrada - Salida',
    icon: 'calendario'
  },
  {
    id: 3,
    name: '1 Habitación - 2 Adultos',
    icon: 'personas'
  },
  {
    id: 4,
    name: 'Código descuento',
    icon: 'codigo'
  }
]

export const destinosHoteles = [
  {
    id: 1,
    destino: 'España',
    ubicaciones: [
      {
        id: 1,
        ubicacion: 'Gran Canaria',
        hoteles: [
          {
            id: 1,
            hotel: 'Hotel Faro, a Lopesan Collection Hotel',
            estrellas: 5,
            codigo: 'ifafaro'
          },
          {
            id: 2,
            hotel: 'Lopesan Baobab Resort',
            estrellas: 5,
            codigo: 'baobab'
          },
          {
            id: 3,
            hotel: 'Lopesan Costa Meloneras Resort & Spa',
            estrellas: 5,
            codigo: 'costameloneras'
          },
          {
            id: 4,
            hotel: 'Lopesan Villa del Conde Resort & Thalasso',
            estrellas: 5,
            codigo: 'villadelconde'
          },
          {
            id: 5,
            hotel: 'Kumara Serenoa by Lopesan Hotels',
            estrellas: 4,
            codigo: 'serenoa'
          },
          {
            id: 6,
            hotel: 'Corallium Beach by Lopesan Hotels',
            estrellas: 4,
            codigo: 'ifabeach'
          },
          {
            id: 7,
            hotel: 'Corallium Dunamar by Lopesan Hotels',
            estrellas: 4,
            codigo: 'ifadunamar'
          },
          {
            id: 8,
            hotel: 'Abora Catarina by Lopesan Hotels',
            estrellas: 4,
            codigo: 'aboracatarina'
          },
          {
            id: 9,
            hotel: 'Abora Interclub by Lopesan Hotels',
            estrellas: 4,
            codigo: 'ifaatlantic'
          },
          {
            id: 10,
            hotel: 'Abora Continental by Lopesan Hotels',
            estrellas: 4,
            codigo: 'ifacontinental'
          },
          {
            id: 11,
            hotel: 'Abora Buenaventura by Lopesan Hotels',
            estrellas: 4,
            codigo: 'ifabuenaventura'
          }
        ]
      },
      {
        id: 2,
        ubicacion: 'Fuerteventura',
        hoteles: [
          {
            id: 1,
            hotel: 'IFA Altamarena Hotel',
            estrellas: 4,
            codigo: 'ifalatamarena'
          },
          {
            id: 2,
            hotel: 'Villas Altamarena',
            estrellas: 4,
            codigo: 'villasaltamarena'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    destino: 'Tailandia',
    ubicaciones: [
      {
        id: 1,
        ubicacion: 'Khao Lak',
        hoteles: [
          {
            id: 1,
            hotel: 'Eden Beach Resort & Spa, a Lopesan Collection Hotel',
            estrellas: 5
          }
        ]
      }
    ]
  },
  {
    id: 3,
    destino: 'República Dominicana',
    ubicaciones: [
      {
        id: 1,
        ubicacion: 'Punta Cana',
        hoteles: [
          {
            id: 1,
            hotel: 'Lopesan Costa Bávaro Resort, Spa & Casino',
            estrellas: 5,
            codigo: 'costabavaro'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    destino: 'Austria',
    ubicaciones: [
      {
        id: 1,
        ubicacion: 'Kleinwalsertal-Mittelberg',
        hoteles: [
          {
            id: 1,
            hotel: 'IFA Alpenhof Wildental Hotel',
            estrellas: 4,
            codigo: 'alpenhofwild'
          },
          {
            id: 2,
            hotel: 'IFA Breitach Apartments',
            estrellas: 3
          }, 
          {
            id: 3,
            hotel: 'IFA Alpenrose Hotel',
            estrellas: 3,
            codigo: 'alpenrose'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    destino: 'Alemania',
    ubicaciones: [
      {
        id: 1,
        ubicacion: 'Vogtland',
        hoteles: [
          {
            id: 1,
            hotel: 'IFA Schöneck Hotel & Ferienpark',
            estrellas: 3,
            codigo: 'schoneck'
          }
        ]
      },
      {
        id: 2,
        ubicacion: 'Fehmarn',
        hoteles: [
          {
            id: 1,
            hotel: 'IFA Fehmarn Hotel & Ferien-Centrum',
            estrellas: 3,
            codigo: 'fehmarn'
          }
        ]
      },
      {
        id: 3,
        ubicacion: 'Rügen',
        hoteles: [
          {
            id: 1,
            hotel: 'IFA Rügen Hotel & Ferienpark',
            estrellas: 3,
            codigo: 'rugen'
          }
        ]
      },
      {
        id: 4,
        ubicacion: 'Graal-Müritz',
        hoteles: [
          {
            id: 1,
            hotel: 'IFA Graal-Müritz Hotel, Spa & Tagungen',
            estrellas: 4,
            codigo: 'graalmuritz'
          }
        ]
      }
    ]
  }
]
