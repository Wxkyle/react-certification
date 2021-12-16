import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { categoriesModalAtom, chosenCategoryAtom } from "./AllAtoms";
import JokeFromCategorySelection from "./JokeFromCategorySelection";
import Navbar from "./Navbar";

function Categories() {
  const jokesResult = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany();
  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany();

  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useAtom(chosenCategoryAtom);

  const [modalEnabled, setModalEnabled] = useAtom(categoriesModalAtom);

  const categoryIsChosen = (category: string) => {
    console.log("🔥🔥🔥", category);
    setChosenCategory(category);
    setDisplayModal(true);
    setModalEnabled(true);
  };

  // console.log("🔥🔥🔥", jokesResult);
  // console.log("🔥🔥🔥🔥🔥", chosenCategory);

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <JokeFromCategorySelection></JokeFromCategorySelection>
      <div className="background">
        <div className="test">
          <h1>Categories</h1>

          <div>
            {categoriesResult?.items?.map((category: any) => {
              const categoryName = category?.category_name;
              return (
                <li
                  className="regularText"
                  onClick={() => categoryIsChosen(categoryName)}
                >
                  {categoryName}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
