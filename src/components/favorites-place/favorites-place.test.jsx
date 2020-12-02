import React from "react";
import renderer from "react-test-renderer";
import FavoritesPlace from "./favorites-place";

it(`Should FavoritesPlace render properly`, () => {
  const offer = {
    image: `img/room.jpg`,
    price: `666`,
    title: `title`,
    type: `room`,
    isFavorite: true,
    rating: 4,
  };

  const tree = renderer
    .create(
        <FavoritesPlace
          offer={offer}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
