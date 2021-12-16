import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { categoriesModalAtom, chosenCategoryAtom } from "./AllAtoms";

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

function JokeFromCategorySelection(props: any) {
  //use effect that updates when chosen category changes.
  //have it retrieve a joke with chosen category as the parameter
  //and display that joke in the Joke div down below
  const [modalEnabled, setModalEnabled] = useAtom(categoriesModalAtom);
  const {} = props;
  const [chosenCategory, setChosenCategory] = useAtom(chosenCategoryAtom);

  const categoriesResult: any = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany({
    where: { category: { _eq: `${chosenCategory}` } },
  });

  // console.log("🔥🔥🔥", categoriesResult?.items);

  const jokeResultsItem: jokeResults = categoriesResult?.items[0];

  return (
    <div className={modalEnabled ? "categoryModal" : "hidden"}>
      <div className="categoryModalTitle">
        <div>{`Random Joke from ${chosenCategory} category`}</div>
        <div onClick={() => setModalEnabled(false)}>X</div>
      </div>
      <div className="regularText">{`${jokeResultsItem?.value}`}</div>
    </div>
  );
}

export default JokeFromCategorySelection;
