import React from "react";
import renderer from "react-test-renderer";
import MainEmpty from "./main-empty";


it(`Should Loading render correctly`, () => {
  const tree = renderer
    .create(
        <MainEmpty/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
