import React from "react";
import renderer from "react-test-renderer";
import ReviewItem from "./review-item";

it(`Should ReviewItem render properly`, () => {
  const item = {
    photo: `img/avatar.jpg`,
    name: `Angelina`,
    rating: 4,
    text: `text text text`,
    date: 807926400000,
  };

  const tree = renderer
    .create(
        <ReviewItem
          item={item}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
