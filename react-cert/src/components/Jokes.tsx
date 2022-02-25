import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useState } from "react";
import { CategoriesFieldsFragment, JokesFieldsFragment, Jokes_Insert_Input } from "../hasura/generated/resourceApi";
import { HasuraConfig } from "../hasura/hasuraConfig";
import Navbar from "./Navbar";


//#function component
function Jokes() {
  const [stateCategory, setstateCategory] = useState('')
  const [stateValue, setstateValue] = useState('')


  const allJokesResult = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany<JokesFieldsFragment>({
  });

  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany<CategoriesFieldsFragment>();

  const { executeMutation, mutating } = useReactGraphql(
    HasuraConfig.Jokes
  ).useInsert<JokesFieldsFragment, {}, Jokes_Insert_Input>({
    initialItem: {
      created_at: new Date(),
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      updated_at: new Date(),
      url: 'https://api.chucknorris.io/jokes/3ew2Bz6gQmKbSTVCknrISQ',
    }
  });

  const onCategoryChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setstateCategory(e.target.value)

  const loadingJoke = mutating ? <div id="loading" /> : "Add Joke"

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <div className="background">
        <div className="test">
          <h1>Jokes</h1>
          <div className="addingJoke">
            <div>Joke Category:
              <input
                list='categorys'
                onChange={onCategoryChange}
              ></input>
              <datalist id='categorys'>
                {categoriesResult?.items?.map((category) => {
                  //# key
                  const categoryName = category?.category_name;
                  return (
                    <option
                      value={categoryName}
                    >
                    </option>
                  );
                })}
              </datalist>
            </div>
            <div>Joke:
              <input
                //# event handling
                onChange={(e) => setstateValue(e.target.value)}
                className="joke"
                placeholder="Put a joke here"
              ></input>
            </div>
            <button className="submitButton" onClick={() => {
              executeMutation({ category: stateCategory, value: stateValue })
            }}
            >{loadingJoke}</button>
          </div>

          <div className="regularText">All Jokes</div>
          <ul>

            {
              //# map
            }
            {allJokesResult.items.map((item) => {
              return (
                <li
                  className="regularText"
                  onClick={() => { }}
                >
                  {item.category} - {item.value}
                </li>
              );
            })}
          </ul>

          {/* <div className="regularText">Viewed Jokes</div>
          <ul>

            {
              //# map
            }
            {lookedAtJokes.map((item) => {
              return (
                <li
                  className="regularText"
                  onClick={() => { }}
                >
                  {item.category} - {item.value}
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Jokes;
