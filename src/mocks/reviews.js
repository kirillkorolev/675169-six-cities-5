const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
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
];
