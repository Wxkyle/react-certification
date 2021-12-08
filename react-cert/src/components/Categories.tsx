import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { HasuraConfig } from "../hasura/hasuraConfig";
import Navbar from "./Navbar";

function Categories() {
  const jokesResult = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany();
  const categoriesResult = useReactGraphql(
    HasuraConfig.categories
  ).useInfiniteQueryMany();

  // const infiniteQueryState = useReactGraphql(HasuraConfig.myListings).useInfiniteQueryMany({
  //   pageSize: 12,
  //   where,
  // });

  console.log("🔥🔥🔥", jokesResult);
  console.log("🔥🔥🔥🔥🔥", categoriesResult);

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <div className="background">
        <div className="test">
          <h1>Categories</h1>
          <ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
