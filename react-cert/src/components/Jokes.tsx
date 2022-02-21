import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { JokesFieldsFragment, Jokes_Insert_Input } from "../hasura/generated/resourceApi";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { lookedAtJokesAtom } from "./AllAtoms";
import Navbar from "./Navbar";


//#function component
function Jokes() {
  const [stateCategory, setstateCategory] = useState('')
  const stateCreatedAt = '2020-01-05 13:42:20.262289'
  const stateIconUrl = 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'
  const stateUpdatedAt = '2020-01-05 13:42:20.262289'
  const [stateValue, setstateValue] = useState('')
  const stateUrl = 'https://api.chucknorris.io/jokes/3ew2Bz6gQmKbSTVCknrISQ'


  const [lookedAtJokes, setLookedAtJokes] = useAtom(lookedAtJokesAtom)

  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany();

  const { executeMutation } = useReactGraphql(
    HasuraConfig.Jokes
  ).useInsert<JokesFieldsFragment, {}, Jokes_Insert_Input>({
    initialItem: {
      created_at: stateCreatedAt,
      icon_url: stateIconUrl,
      updated_at: stateUpdatedAt,
      url: stateUrl,
    }
  });

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
                onChange={(e) => setstateCategory(e.target.value)}
              // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
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
              // pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
              ></input>
            </div>
            <button className="submitButton" onClick={() => { executeMutation({ category: stateCategory, value: stateValue }) }}>Submit</button>
          </div>
          <div className="regularText">Viewed Jokes</div>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Jokes;
