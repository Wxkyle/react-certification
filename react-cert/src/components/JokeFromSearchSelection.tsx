import { useAtom } from "jotai";
import {
  searchModalAtom
} from "./AllAtoms";

interface jokeResults {
  category?: string;
  created_at?: string;
  icon_url?: string;
  id?: number;
  updated_at?: string;
  url?: string;
  value: {};
  __typename?: string;
}

//#function component
function JokeFromSearchSelection(props: jokeResults) {

  const [modalEnabled, setModalEnabled] = useAtom(searchModalAtom);

  //# destructuring
  const { value } = props;

  console.log(value)


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

//put atom jokes on hard coded array in state