import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home";
import { isTSAnyKeyword } from "@babel/types";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home></Home>, div);
});

it("password login", () => {
  const { getByTestId } = render(<Home passwordLogin="Winter13!"></Home>);
  expect(getByTestId("passwordLogin")).toHaveTextContent("Winter13!");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  expect(tree).toMatchSnapshot();
});
