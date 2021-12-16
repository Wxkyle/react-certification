import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { searchBarAtom } from "./AllAtoms";
import Navbar from "./Navbar";

function Search() {
  const [searchBar, setSearchBar] = useAtom(searchBarAtom);

  const searchBarResult: any = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany({
    where: { value: { _ilike: `%${searchBar}%` } },
  });

  console.log("🔥🔥🔥", searchBarResult?.items);

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <div className="background">
        <div className="test">
          <h1>Search</h1>
          <input
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
            className="emailFormInput"
            placeholder="search"
          ></input>
          <div className="regularText">
            {searchBarResult.items.map((value: any) => {
              return <div>{`${value.value}`}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
