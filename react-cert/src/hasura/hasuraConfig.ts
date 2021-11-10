import schema from './graphql.schema.json'; //comes from graphql-code-generator

const HasuraConfig = buildHasuraConfig(
    schema,
    {
      claim: {
        typename: 'claim',
        primaryKey: ['id'],
        fieldFragment: ClaimFieldsFragmentDoc,
      }
    }
)