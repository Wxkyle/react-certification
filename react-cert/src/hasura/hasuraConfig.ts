import schema from './graphql.schema.json'; //comes from graphql-code-generator

const HasuraConfig = buildHasuraConfig(
    schema,
    {
      Jokes: {
        typename: 'jokes',
        primaryKey: ['id'],
        fieldFragment: JokesFieldsFragmentDoc,
      }
    }
)