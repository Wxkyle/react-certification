import { useAtom } from "jotai";
import { categoriesModalAtom, chosenCategoryAtom } from "./AllAtoms";

function JokeFromCategorySelection(props: any) {
  const [modalEnabled, setModalEnabled] = useAtom(categoriesModalAtom);
  const [chosenCategory, setChosenCategory] = useAtom(chosenCategoryAtom);

  const {} = props;

  return (
    <div className={modalEnabled ? "categoryModal" : "hidden"}>
      <div className="categoryModalTitle">
        <div>{`Random Joke from ${chosenCategory} category`}</div>
        <div onClick={() => setModalEnabled(false)}>X</div>
      </div>
      <div>Joke</div>
    </div>
  );
}

export default JokeFromCategorySelection;
