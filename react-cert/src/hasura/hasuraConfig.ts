import schema from './generated/graphql.schema.json'

const HasuraConfig = buildHasuraConfig(
    schema,
    {
      claim: {
        typename: 'claim',
        primaryKey: ['id'],
        fieldFragment: ClaimFieldsFragmentDoc,
      }
    }