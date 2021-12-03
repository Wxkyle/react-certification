import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { HasuraConfig } from "../hasura/hasuraConfig";
import Navbar from "./Navbar";

function Categories() {
  const jokesInfiniteQueryState = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany();
  const categoriesInfiniteQueryState = useReactGraphql(
    HasuraConfig.Jokes
  ).useInfiniteQueryMany();

  // const infiniteQueryState = useReactGraphql(HasuraConfig.myListings).useInfiniteQueryMany({
  //   pageSize: 12,
  //   where,
  // });

  console.log("🔥🔥🔥", jokesInfiniteQueryState);
  console.log("🔥🔥🔥🔥🔥", categoriesInfiniteQueryState.items);

  return (
    <div>
      <Navbar loggedIn></Navbar>
      <div className="background">
        <div className="test">
          <h1>Categories</h1>
        </div>
      </div>
    </div>
  );
}

export default Categories;
