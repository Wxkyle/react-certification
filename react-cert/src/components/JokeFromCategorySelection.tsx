import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { categoriesModalAtom, chosenCategoryAtom, lookedAtJokesAtom } from "./AllAtoms";

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

//#function component

function JokeFromCategorySelection() {
  //use effect that updates when chosen category changes.
  //have it retrieve a joke with chosen category as the parameter
  //and display that joke in the Joke div down below
  const [modalEnabled, setModalEnabled] = useAtom(categoriesModalAtom);
  const [chosenCategory, setChosenCategory] = useAtom(chosenCategoryAtom);

  const [lookedAtJokes, setLookedAtJokes] = useAtom(lookedAtJokesAtom)


  //# promise
  const categoriesResult = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany({
    where: { category: { _eq: `${chosenCategory}` } },
  });

  const jokeResultsItem = categoriesResult?.items[0];

  //# spread
  const lookedAtJokeArray = [...lookedAtJokes, jokeResultsItem]


  //# arrow function
  const closeJoke = () => {
    setModalEnabled(false)
    setLookedAtJokes(lookedAtJokeArray)
  }

  return (
    <div className={modalEnabled ? "categoryModal" : "hidden"}>
      <div className="categoryModalTitle">
        <div>{`Random Joke from ${chosenCategory} category`}</div>
        <div onClick={() => closeJoke()}>X</div>
      </div>
      <div className="regularText">{`${jokeResultsItem?.value}`}</div>
    </div>
  );
}

export default JokeFromCategorySelection;
