import React from "react";
import ReactDOM from "react-dom";
import Home from "../Home";
import { isTSAnyKeyword } from "@babel/types";

import { render, cleanup, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import Search from "../Search";

import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Home></Home>, div);
});

it("correct email and password, should not show red text", () => {
  const { getByTestId } = render(<Home></Home>);
  const passwordInput = getByTestId("passwordLogin");
  const emailInput = getByTestId("emailLogin");
  passwordInput.textContent = "Winter13!";
  emailInput.textContent = "wx@gmail.com";
  console.log("a", passwordInput);

  // expect(()=> getByTestId('pasaaaswordLogin')).toThrowError()
  expect(getByTestId("passwordLogin")).toHaveTextContent("Winter13!");
  expect(getByTestId("emailLogin")).toHaveTextContent("wx@gmail.com");

  const button = getByTestId("buttonLogin");

  // expect(getByTestId("emailRedText")).toBeVisible()
  expect(() => getByTestId("emailRedText")).toThrowError();
  expect(() => getByTestId("passwordRedText")).toThrowError();
});

it("correct email and password, should not show red text", () => {
  const { getByTestId } = render(<Home></Home>);
  const passwordInput = getByTestId("passwordLogin");
  const emailInput = getByTestId("emailLogin");
  passwordInput.textContent = "winter13!";
  emailInput.textContent = "wxgmailcom";
  console.log("a", passwordInput);

  // expect(()=> getByTestId('pasaaaswordLogin')).toThrowError()
  expect(getByTestId("passwordLogin")).toHaveTextContent("winter13!");
  expect(getByTestId("emailLogin")).toHaveTextContent("wxgmailcom");

  const button = getByTestId("buttonLogin");

  expect(() => getByTestId("emailRedText")).toBeVisible();
  expect(() => getByTestId("passwordRedText")).toBeVisible();
});

it("Does the http request work properly", () => {
  const { getByTestId } = render(<Home></Home>);

  expect(getByTestId("navLink"));
});

// it("search bar works properly", () => {
//   const { getByTestId } = render(<Search></Search>);

//   expect(getByTestId("searchBar"));
// });
