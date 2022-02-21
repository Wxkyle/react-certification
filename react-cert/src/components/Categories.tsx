import { UseInfiniteQueryManyProps, useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { categoriesModalAtom, chosenCategoryAtom } from "./AllAtoms";
import JokeFromCategorySelection from "./JokeFromCategorySelection";
import Navbar from "./Navbar";

function Categories() {

  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany();

  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useAtom(chosenCategoryAtom);

  const [, setModalEnabled] = useAtom(categoriesModalAtom);

  const categoryIsChosen = (category: string) => {
    setChosenCategory(category);
    setDisplayModal(true);
    setModalEnabled(true);
  };

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <JokeFromCategorySelection></JokeFromCategorySelection>
      <div className="background">
        <div className="test">
          <h1>Categories</h1>

          <ul>
            {
              //# map
            }
            {categoriesResult?.items?.map((category) => {
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
