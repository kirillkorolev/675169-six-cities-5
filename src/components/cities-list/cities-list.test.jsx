import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";

it(`Should FavoriteEmpty render correctly`, () => {
  const citiesNames = [`Paris`, `London`, `Moscow`];
  const city = [`Moscow`];

  const tree = renderer
    .create(
        <CitiesList
          citiesNames={citiesNames}
          city={city}
          changeCity={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
