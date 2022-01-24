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

it.only("Does the pwdError show red text or Null", () => {
  const { getByTestId } = render(<Home></Home>);
  const passwordInput = getByTestId('passwordLogin');
  passwordInput.textContent = 'Hey'
  console.log('a', passwordInput)

  const button = getByTestId('buttonLogin');
  
  // expect(()=> getByTestId('pasaaaswordLogin')).toThrowError()
  expect(getByTestId("passwordLogin")).toHaveTextContent("Winter13!");
});

it("Does the emailErr show red text or Null", () => {
  const { getByTestId } = render(<Home></Home>);
  expect(getByTestId("emailLogin")).toHaveTextContent("wx@gmail.com");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Home></Home>).toJSON();
  expect(tree).toMatchSnapshot();
});
