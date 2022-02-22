import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useState } from "react";
import { JokesFieldsFragment } from "../hasura/generated/resourceApi";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { enableModalAtom } from "./AllAtoms";
import SelectedJokeModal from "./SelectedJokeModal";

function SearchResults(props: { searchBar: { value?: string } }) {

    const [displayJokeModal, setDisplayJokeModal] = useState<boolean>(false);
    const [jokeCategory, setJokeCategory] = useState<string | undefined | null>(null);
    const [jokeObject, setJokeValueObject] = useState({});
    const [modalEnabled, setModalEnabled] = useAtom(enableModalAtom);

    console.log(jokeObject)

    //#props
    const { searchBar } = props

    const displayJoke = (valueObject: JokesFieldsFragment) => {
        setJokeValueObject(valueObject.value);
        setDisplayJokeModal(true);
        setModalEnabled(true);
        setJokeCategory(valueObject?.category)
    };

    function truncateString(str: string, num: number) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    // useEffect(() => {
    // }, [searchBar])

    const searchBarResult = useReactGraphql(
        HasuraConfig.Jokes
    ).useInfiniteQueryMany<JokesFieldsFragment>({
        where: { value: { _ilike: `%${searchBar.value}%` } },
    });



    return <div>
        <SelectedJokeModal category={jokeCategory} value={jokeObject} search></SelectedJokeModal>
        <div className="regularText">
            {searchBarResult.items.map((value) => {
                return (
                    <li
                        onClick={() => {
                            displayJoke(value);
                        }}
                    >{`${truncateString(value.value, 50)}`}</li>
                );
            })}
        </div></div>
}

export default SearchResults