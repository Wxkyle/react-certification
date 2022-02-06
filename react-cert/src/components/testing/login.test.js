import { cleanup, render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import Home from "../Home";
import Navbar from "../Navbar";

// import Search from "../Search";

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

  // expect(()=> getByTestId('pasaaaswordLogin')).toThrowError()
  expect(getByTestId("passwordLogin")).toHaveTextContent("winter13!");
  expect(getByTestId("emailLogin")).toHaveTextContent("wxgmailcom");

  const button = getByTestId("buttonLogin");
  button.click();

  expect(getByTestId("emailRedText")).toBeVisible();
  expect(getByTestId("passwordRedText")).toBeVisible();
});

// it("does search bar work correctly", () => {
//   const { getByTestId } = render(<Search></Search>);
//   const searchBar = getByTestId("searchBar");
//   searchBar.textContent = "chuck";

//   // expect(()=> getByTestId('pasaaaswordLogin')).toThrowError()
//   expect(getByTestId("passwordLogin")).toHaveTextContent("winter13!");

//   const button = getByTestId("searchBarButton");
//   button.click();

//   expect(getByTestId("searchResults")).toBeVisible();
// });

it("correct email and password, should not show red text", () => {
  const { getByTestId } = render(
    <Router location="http://localhost:3000/">
      <Navbar loggedIn></Navbar>
    </Router>
  );
  const searchLink = getByTestId("navLink");
  searchLink.click();

  expect(window.location.href).toBe("http://localhost:3000/Search");
});

// describe("Mock API", () => {

//   function simulateAsyncCall(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {

//             if (user) {
//               resolve({ status: 200, joke: user.joke });
//             } else {
//               resolve({ status: 404, message: 'Not Found' });
//             }
//             break;

//         }, 300);
//     });
//   }

//   const validRequest = {  user: "Jack", joke: 'chuck norris Joke' };

//   it("returns a 200 status and adds the post to the database", () => {
//     const mockApiCall = simulateAsyncCall(validRequest);
//     return mockApiCall.then((response) => {
//       expect(response.status).toBe(200);
//     });
//   });
// });
