
const env = require("./.env.json");

module.exports = {
  schema: [
    {
      [`https://evolved-newt-21.hasura.app/v1/graphql`]: {
        headers: {
          "x-hasura-admin-secret": env.ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["src/**/*.graphql"],
  overwrite: true,
  generates: {
    "src/hasura/generated/resourceApi/index.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
    "src/hasura/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
