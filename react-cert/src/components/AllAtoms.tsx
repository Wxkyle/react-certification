import { atom } from "jotai";

export const loggedInAtom = atom<boolean>(false);
export const categoriesModalAtom = atom<boolean>(false);
export const chosenCategoryAtom = atom<string>("");
