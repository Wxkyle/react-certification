import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import {
  categoriesModalAtom,
  chosenCategoryAtom,
  lookedAtJokesAtom,
  searchModalAtom,
} from "./AllAtoms";

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

function JokeFromSearchSelection(props: any) {

  const [modalEnabled, setModalEnabled] = useAtom(searchModalAtom);
  const { value } = props;

  // console.log("🔥🔥🔥", categoriesResult?.items);

  return (
    <div className={modalEnabled ? "categoryModal" : "hidden"}>
      <div className="categoryModalTitle">
        <div> </div>
        <div onClick={() => setModalEnabled(false)}>X</div>
      </div>
      <div className="regularText">{`${value}`}</div>
    </div>
  );
}

export default JokeFromSearchSelection;

// class JokeFromSearchSelection extends React.Component<jokeResults> {
//   render() {
//     const { value, category } = this.props;

//     const [modalEnabled, setModalEnabled] = useAtom(searchModalAtom);
//     const [lookedAtJokes, setLookedAtJokes] = useAtom(lookedAtJokesAtom)

//     const lookedAtJokeArray: any[] = [...lookedAtJokes, value]

//     // console.log("🔥🔥🔥", categoriesResult?.items);

//     const closeJoke = () => {
//       setModalEnabled(false)
//       setLookedAtJokes(lookedAtJokeArray)
//     }
//     return (
//       <div className={modalEnabled ? "categoryModal" : "hidden"}>
//         <div className="categoryModalTitle">
//           <div> </div>
//           <div onClick={() => closeJoke()}>X</div>
//         </div>
//         <div className="regularText">{`${category} - ${value}`}</div>
//       </div>
//     )
//   }
// }

// export default JokeFromSearchSelection;