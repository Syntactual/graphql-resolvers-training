const { graphql, buildSchema } = require("graphql");
const { importSchema } = require("graphql-import");
const datasources = require("./datasources");
const schemaString = importSchema("./schema.graphql");

const schema = buildSchema(schemaString);

const resolvers = {
  Dashboard: ({ userId }) => ({
    user: datasources.sqlDb.User(userId),
    collectedSongs: datasources.dynamoDb.CollectedSongs(userId),
    recentlyPlayedSongs: datasources.dynamoDb.RecentlyPlayedSongs(userId),
  }),
  UserAccount: ({ userId }) => datasources.sqlDb.User(userId),
  CreateUser: ({ userInput }) => datasources.sqlDb.CreateUser(userInput),
};

const dashboardQuery = `
    {
      Dashboard(userId: 9) {
        user {
          id
          firstName
          lastName
          isAdmin
          isDarkTheme
        }
        collectedSongs {
          ...songFields
        }
        recentlyPlayedSongs {
          ...songFields
        }
      }
    }

    fragment songFields on Song {
      songName
      albumName
      songUrl
      albumArtUrl
      artist {
        name
        numberOfAlbums
      }
    }
  `;

const userAccountQuery = `
    {
      UserAccount(userId: 9) {
        id
          firstName
          lastName
          isAdmin
          isDarkTheme
      }
    }
  `;

const createUserMutation = `

mutation {
  CreateUser(userInput: {
        id: 8
        firstName: "Josh"
        lastName: "Oppenheim"
        email: "josh@thisdot.co"
        isAdmin: true
        isDarkTheme: true
      }){
          id
          firstName
          lastName
          email
          isAdmin
          isDarkTheme
      }

  }
  `;

const executeGraphQl = (graphqlString) =>
  graphql(schema, graphqlString, resolvers)
    .then((result) => console.log(JSON.stringify(result, null, 2)))
    .catch((error) => console.error(error));

executeGraphQl(dashboardQuery);
executeGraphQl(userAccountQuery);
executeGraphQl(createUserMutation);
