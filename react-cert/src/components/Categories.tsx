import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useState } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import Navbar from "./Navbar";

function Categories() {
  const jokesResult = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany();
  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany();

  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [chosenCategory, setChosenCategory] = useState<string>("");

  const categoryIsChosen = (category: string) => {
    setChosenCategory(category);
    setDisplayModal(true);
  };

  // console.log("🔥🔥🔥", jokesResult);
  // console.log("🔥🔥🔥🔥🔥", categoriesResult);

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <div className="background">
        <div className="test">
          <h1>Categories</h1>
          <ul>
            {categoriesResult?.items?.map((category: any) => {
              const categoryName = category.category_name;
              return (
                <li onClick={() => categoryIsChosen(categoryName)}>
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
