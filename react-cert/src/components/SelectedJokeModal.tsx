import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { JokesFieldsFragment } from "../hasura/generated/resourceApi";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { enableModalAtom, lookedAtJokesAtom } from "./AllAtoms";

interface modalResults {
    category?: string | null;
    value?: {};
    search?: boolean;
}

//#function component

function SelectedJokeModal(props: modalResults) {
    //use effect that updates when chosen category changes.
    //have it retrieve a joke with chosen category as the parameter
    //and display that joke in the Joke div down below
    const [modalEnabled, setModalEnabled] = useAtom(enableModalAtom);

    const [lookedAtJokes, setLookedAtJokes] = useAtom(lookedAtJokesAtom)


    //# promise
    const categoriesResult = useReactGraphql(
        HasuraConfig.Jokes
    ).useInfiniteQueryMany<JokesFieldsFragment>({
        where: { category: { _eq: `${props?.category}` } },
    });

    const jokeResultsItem = categoriesResult?.items[0];

    //# spread
    const lookedAtJokeArray = [...lookedAtJokes, jokeResultsItem]

    const jokeValue = props?.search ? props.value : jokeResultsItem?.value

    //# arrow function
    const closeJoke = () => {
        setModalEnabled(false)
        setLookedAtJokes(lookedAtJokeArray)
    }

    return (
        <div className={modalEnabled ? "categoryModal" : "hidden"}>
            <div className="categoryModalTitle">
                <div>{`Random Joke from ${props?.category} category`}</div>
                <div className="closeIcon" onClick={() => closeJoke()}>X</div>
            </div>
            <div className="regularText">{`${jokeValue}`}</div>
        </div>
    );
}

export default SelectedJokeModal;
