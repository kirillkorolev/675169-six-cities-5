import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import FavoriteEmpty from "./favorites-empty";

it(`Should FavoriteEmpty render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FavoriteEmpty/>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
