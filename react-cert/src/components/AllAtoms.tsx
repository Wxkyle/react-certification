import { atom } from "jotai";
import { createStore } from 'redux'
import { atomWithStore } from 'jotai/redux'

export const loggedInAtom = atom<boolean>(false);
export const categoriesModalAtom = atom<boolean>(false);
export const searchModalAtom = atom<boolean>(false);
export const chosenCategoryAtom = atom<string>("");
export const searchBarAtom = atom<string>("");

const initialState = { count: 0 }
const reducer = (state = initialState, action: { type: 'INC' }) => {
    if (action.type === 'INC') {
        return { ...state, count: state.count + 1 }
    }
    return state
}
const store = createStore(reducer)
export const categoriesStoreAtom = atomWithStore(store)

const [state, dispatch] = useAtom(categoriesStoreAtom)