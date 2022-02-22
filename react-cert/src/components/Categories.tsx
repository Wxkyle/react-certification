import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { CategoriesFieldsFragment } from "../hasura/generated/resourceApi";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { enableModalAtom } from "./AllAtoms";
import Navbar from "./Navbar";
import SelectedJokeModal from "./SelectedJokeModal";

function Categories() {

  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany<CategoriesFieldsFragment>();

  const [, setDisplayModal] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useState<string | undefined>();
  const [, setModalEnabled] = useAtom(enableModalAtom);

  const categoryIsChosen = (category: string) => {
    setChosenCategory(category);
    setDisplayModal(true);
    setModalEnabled(true);
  };

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <SelectedJokeModal category={chosenCategory}></SelectedJokeModal>
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
