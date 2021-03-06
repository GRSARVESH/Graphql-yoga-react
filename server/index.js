const { GraphQLServer } = require("graphql-yoga");

const messages = [];

const typeDefs = `
  type Message {
    id: ID!
    user: String!
    text: String!
  }
  type Query {
    messages: [Message!]
  }
  type Mutation {
    postMessage(user: String!, text: String!): ID!
  }
`;

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (parent, { user, text }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        text,
      });
      return id;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers});
server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}/`);
});
