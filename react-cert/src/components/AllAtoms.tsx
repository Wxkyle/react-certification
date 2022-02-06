import { atom } from "jotai";

//# state management

export const loggedInAtom = atom<boolean>(false);
export const categoriesModalAtom = atom<boolean>(false);
export const searchModalAtom = atom<boolean>(false);
export const chosenCategoryAtom = atom<string>("");
export const searchBarAtom = atom<string>("");

export const lookedAtJokesAtom = atom<any[]>([]);