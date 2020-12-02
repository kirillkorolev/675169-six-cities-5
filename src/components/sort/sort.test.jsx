import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort";

it(`Should Sort render correctly`, () => {
  const props = {
    isActive: `true`,
    sortType: `Popular`,
  };

  const tree = renderer
    .create(
        <Sort
          isActive={props.isActive}
          sortType={props.sortType}
          onHandleClick={() => {}}
          sortOffers={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
