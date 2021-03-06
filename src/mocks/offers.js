const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    cityName: `Amsterdam`,
    cityCoordinates: `[52.38333, 4.9]`,
    coordinates: `52.3909553943508, 4.85309666406198`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    id: `1`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 1000,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    raiting: 4,
    bedroomsAmmount: 1,
    goods: [`Kitchen`, `Fridge`, `Towels`, `Coffee machine`, `Towels`, `Fridge`, `Kitchen`, `Fridge`],
    ownerName: `Alex`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 2,
    photos: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
      {
        name: `Alex`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `Everything is ok. Everything is ok. Everything is ok`,
        raiting: 5,
        date: `2018-05-16`,
        id: `review2`,
      },
      {
        name: `Scott`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `Everything is terrible`,
        raiting: 1,
        date: `2017-01-10`,
        id: `review3`,
      },
      {
        name: `Jay`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `Not a bad one`,
        raiting: 1,
        date: `2020-02-06`,
        id: `review4`,
      },
    ],
  },
  {
    cityName: `Amsterdam`,
    cityCoordinates: `[52.38333, 4.9]`,
    coordinates: `52.369553943508, 4.85309666406198`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    id: `2`,
    image: `../img/apartment-02.jpg`,
    premium: false,
    price: 2000,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Room`,
    raiting: 3,
    bedroomsAmmount: 2,
    goods: [`Wi-Fi`, `Dishwasher`, `Wi-Fi`, `Dishwasher`, `Wi-Fi`, `Fridge`, `Wi-Fi`, `Fridge`],
    ownerName: `Liam`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 5,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
      {
        name: `Alex`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `Everything is ok. Everything is ok. Everything is ok`,
        raiting: 5,
        date: `2018-05-16`,
        id: `review2`,
      }
    ]
  },
  {
    cityName: `Amsterdam`,
    cityCoordinates: `[52.38333, 4.9]`,
    coordinates: `52.3909553943508, 4.929309666406198`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    id: `3`,
    image: `../img/apartment-03.jpg`,
    premium: false,
    price: 3000,
    title: `Wood and stone place`,
    type: `House`,
    raiting: 2,
    bedroomsAmmount: 3,
    goods: [`Cabel TV`, `Dishwasher`, `Cabel TV`, `Dishwasher`, `Coffee machine`, `Fridge`, `Wi-Fi`, `Towels`],
    ownerName: `Kim`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 6,
    photos: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },
  {
    cityName: `Amsterdam`,
    cityCoordinates: `[52.38333, 4.9]`,
    coordinates: `52.3809553943508, 4.939309666406198`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    id: `4`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Kitchen`, `Heating`, `Fridge`, `Dishwasher`, `Coffee machine`, `Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
      {
        name: `Alex`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `Everything is ok. Everything is ok. Everything is ok`,
        raiting: 5,
        date: `2018-05-16`,
        id: `review2`,
      },
      {
        name: `Jay`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `Not a bad one`,
        raiting: 1,
        date: `2020-02-06`,
        id: `review4`,
      },
    ]
  },

  {
    cityName: `Paris`,
    cityCoordinates: `[52.38333, 4.9]`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    coordinates: `52.3809553943508, 4.939309666406198`,
    id: `554`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Kitchen`, `Heating`, `Fridge`, `Dishwasher`, `Coffee machine`, `Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },

  {
    cityName: `Cologne`,
    cityCoordinates: `[52.38333, 4.9]`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    coordinates: `52.3809553943508, 4.939309666406198`,
    id: `4566`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Kitchen`, `Heating`, `Fridge`, `Dishwasher`, `Coffee machine`, `Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },

  {
    cityName: `Brussels`,
    cityCoordinates: `[52.38333, 4.9]`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    coordinates: `52.3809553943508, 4.939309666406198`,
    id: `14`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Kitchen`, `Heating`, `Fridge`, `Dishwasher`, `Coffee machine`, `Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },

  {
    cityName: `Brussels`,
    cityCoordinates: `[52.38333, 4.9]`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    coordinates: `52.3809553943508, 4.939309666406198`,
    id: `24`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Alex`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },

  {
    cityName: `Hamburg`,
    cityCoordinates: `[52.38333, 4.9]`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    coordinates: `52.3809553943508, 4.939309666406198`,
    id: `34`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Kitchen`, `Heating`, `Fridge`, `Dishwasher`, `Coffee machine`, `Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },

  {
    cityName: `Paris`,
    cityCoordinates: `[52.38333, 4.9]`,

    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },

    coordinates: `52.3809553943508, 4.939309666406198`,
    id: `44`,
    image: `../img/apartment-01.jpg`,
    premium: true,
    price: 4000,
    title: `Canal View Prinsengracht`,
    type: `Hotel`,
    raiting: 5,
    bedroomsAmmount: 4,
    goods: [`Kitchen`, `Heating`, `Fridge`, `Dishwasher`, `Coffee machine`, `Fridge`, `Baby seat`, `Towels`],
    ownerName: `Brett`,
    ownerPhoto: `${AVATAR_URL}/${Math.random()}`,
    guestsAmmount: 3,
    photos: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
    reviews: [
      {
        name: `Max`,
        photo: `${AVATAR_URL}/${Math.random()}`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
        raiting: 5,
        date: `2019-04-24`,
        id: `review1`,
      },
    ]
  },
];
