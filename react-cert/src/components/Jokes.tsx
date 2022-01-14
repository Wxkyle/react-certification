import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { lookedAtJokesAtom } from "./AllAtoms";
import Navbar from "./Navbar";

function Jokes() {

  const [lookedAtJokes, setLookedAtJokes] = useAtom(lookedAtJokesAtom)

  console.log(lookedAtJokes)

  const categoriesResult: any = useReactGraphql(
    HasuraConfig.Jokes
  ).useInsert({
    initialVariables: {
      category: { insert: {} },
      created_at: { insert: {} },
      icon_url: { insert: {} },
      id: { insert: {} },
      updated_at: { insert: {} },
      value: { insert: {} },
      url: { insert: {} },
    }
  });

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <div className="background">
        <div className="test">
          <h1>Jokes</h1>
          <div className="addingJoke">
            <div>Joke Category:</div>
            <input></input>
            <div>Joke:</div>
            <input></input>
            <button className="submitButton" onClick={() => { }}>Submit</button>
          </div>
          <div>---------------------------------------</div>
          <ul>
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
