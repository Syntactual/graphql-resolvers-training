const { graphql, buildSchema } = require("graphql");
const { importSchema } = require("graphql-import");
const datasources = require("./datasources");
const schemaString = importSchema("./schema.graphql");

const schema = buildSchema(schemaString);

const resolvers = {};

const dashboardQuery = ``;

const userAccountQuery = ``;

const createUserMutation = ``;

const executeGraphQl = (graphqlString) =>
  graphql(schema, graphqlString, resolvers)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => console.error(error));

executeGraphQl(dashboardQuery);
executeGraphQl(userAccountQuery);
executeGraphQl(createUserMutation);

