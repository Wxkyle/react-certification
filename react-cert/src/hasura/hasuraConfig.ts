import {
  CategoriesFieldsFragmentDoc,
  JokesFieldsFragmentDoc,
} from "./generated/resourceApi";
import schema from "../hasura/generated/graphql.schema.json"; //comes from graphql-code-generator
import { buildHasuraConfig } from "@tesseractcollective/react-graphql";

export const HasuraConfig = buildHasuraConfig(schema, {
  Jokes: {
    typename: "Jokes",
    primaryKey: ["id"],
    fieldFragment: JokesFieldsFragmentDoc,
  },
  categories: {
    typename: "categories",
    primaryKey: ["category_name"],
    fieldFragment: CategoriesFieldsFragmentDoc,
  },
});
