

// const env = process.argv[4] || 'dev';
// const config = require(`../......`);

module.exports = {
  schema: [
    {
      [`https://evolved-newt-21.hasura.app/v1/graphql`]: {
        headers: {
          'x-hasura-admin-secret': 'bcDLzO5MsB6ZO7oPyjt0oGLEZNPOqw4s8e4q159ipG1uy1QnLV6joLcb9sleVGbj'
        }
      }
    }
  ],
  documents: ['src/**/*.graphql'],
  overwrite: true,
  generates: {
    'src/resources/config/generated/resourceApi/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-urql',
      ],
    },
    'src/hasura/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};