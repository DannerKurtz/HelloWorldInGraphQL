const { gql, ApolloServer } = require("apollo-server");

const resolvers = {
  Query: {
    hello() {
      return "world";
    },
  },
};
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then((url) => {
  console.log(`Server on ${url}`);
});
