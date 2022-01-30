import { useReactGraphql } from "@tesseractcollective/react-graphql";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { HasuraConfig } from "../hasura/hasuraConfig";
import { searchModalAtom } from "./AllAtoms";
import JokeFromSearchSelection from "./JokeFromSearchSelection";

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

function SearchResults(props: any) {

    const [displayJokeModal, setDisplayJokeModal] = useState<boolean>(false);
    const [jokeObject, setJokeValueObject] = useState({});
    const [modalEnabled, setModalEnabled] = useAtom(searchModalAtom);

    const { searchBar } = props
    console.log('🔥🔥🔥', searchBar.value)

    const displayJoke = (valueObject: jokeResults) => {
        console.log("🔥🔥🔥", valueObject);
        setJokeValueObject(valueObject);
        setDisplayJokeModal(true);
        setModalEnabled(true);
    };

    function truncateString(str: string, num: number) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    useEffect(() => {
    }, [searchBar])

    const searchBarResult: any = useReactGraphql(
        HasuraConfig.Jokes
    ).useInfiniteQueryMany({
        where: { value: { _ilike: `%${searchBar.value}%` } },
    });

    console.log(searchBarResult.items)

    
    return <div>
        <JokeFromSearchSelection value={jokeObject}></JokeFromSearchSelection>
        <div className="regularText">
            {searchBarResult.items.map((value: any) => {
                console.log(value)
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