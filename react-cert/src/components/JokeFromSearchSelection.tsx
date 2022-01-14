import { useAtom } from "jotai";
import {
  lookedAtJokesAtom,
  searchModalAtom
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
  //use effect that updates when chosen category changes.
  //have it retrieve a joke with chosen category as the parameter
  //and display that joke in the Joke div down below
  const [modalEnabled, setModalEnabled] = useAtom(searchModalAtom);
  const { value } = props;

  const [lookedAtJokes, setLookedAtJokes] = useAtom(lookedAtJokesAtom)

  const lookedAtJokeArray: any[] = [...lookedAtJokes, value]

  // console.log("🔥🔥🔥", categoriesResult?.items);

  const closeJoke = () => {
    setModalEnabled(false)
    setLookedAtJokes(lookedAtJokeArray)
  }

  return (
    <div className={modalEnabled ? "categoryModal" : "hidden"}>
      <div className="categoryModalTitle">
        <div> </div>
        <div onClick={() => closeJoke()}>X</div>
      </div>
      <div className="regularText">{`${value.category} - ${value.value}`}</div>
    </div>
  );
}

export default JokeFromSearchSelection;