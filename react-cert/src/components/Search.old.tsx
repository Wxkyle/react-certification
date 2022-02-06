import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { chosenCategoryAtom, searchBarAtom, searchModalAtom } from "./AllAtoms";
import JokeFromSearchSelection from "./JokeFromSearchSelection";
import Navbar from "./Navbar";

interface jokeResults {
  category: string;
  created_at: string;
  icon_url: string;
  id: number;
  updated_at: string;
  url: string;
  value: string;
  __typename: string;
}

function Search() {
  const [buttonPressInput, setButtonPressInput] = useState(" ");
  const [displayJokeModal, setDisplayJokeModal] = useState<boolean>(false);
  const [jokeObject, setJokeValueObject] = useState({});
  const [searchBarInput, setSearchBarInput] = useAtom(searchBarAtom);
  const [modalEnabled, setModalEnabled] = useAtom(searchModalAtom);

  const displayJoke = (valueObject: jokeResults) => {
    setJokeValueObject(valueObject);
    setDisplayJokeModal(true);
    setModalEnabled(true);
  };

  const searchBarResult: any = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany({
    where: { value: { _ilike: `%${buttonPressInput}%` } },
  });


  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <JokeFromSearchSelection value={jokeObject}></JokeFromSearchSelection>
      <div className="background">
        <div className="test">
          <h1>Search</h1>
          <div className="login">
            <input
              data-testid="searchBar"
              onChange={(e) => {
                setSearchBarInput(e.target.value);
              }}
              className="emailFormInput"
              placeholder="search"
            ></input>
            <button
              onClick={() => {
                setButtonPressInput(searchBarInput);
              }}
            >
              Search
            </button>
          </div>
          <div className="regularText">
            {searchBarResult.items.map((value: any) => {
              return (
                <li
                  onClick={() => {
                    displayJoke(value);
                  }}
                >{`${truncateString(value.value, 50)}`}</li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
