import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { searchBarAtom } from "./AllAtoms";
import Navbar from "./Navbar";

function Search() {
  const [buttonPressInput, setButtonPressInput] = useState(" ");
  const [displayJokeBoolean, setDisplayJokeBoolean] = useState(false);
  const [searchBarInput, setSearchBarInput] = useAtom(searchBarAtom);

  const displayJoke = (value: any) =>{
    setDisplayJokeBoolean(true)
  }

  const searchBarResult: any = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany({
    where: { value: { _ilike: `%${buttonPressInput}%` } },
  });

  console.log("🔥🔥🔥", searchBarResult?.items, displayJokeBoolean);

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
      <div className="background">
        <div className="test">
          <h1>Search</h1>
          <div className="login">
            <input
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
              return <li onClick={() => {displayJoke(value)}}>{`${truncateString(value.value, 50)}`}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
