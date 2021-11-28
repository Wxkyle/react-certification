import { JokesFieldsFragmentDoc } from './generated/resourceApi';
import schema from '../hasura/generated/graphql.schema.json'; //comes from graphql-code-generator

export const HasuraConfig = buildHasuraConfig(
    schema,
    {
      Jokes: {
        typename: 'jokes',
        primaryKey: ['id'],
        fieldFragment: JokesFieldsFragmentDoc,
      }
    }
)