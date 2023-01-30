import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { typeDefs } from './Schema/TypeDefs';
import { resolvers } from './Schema/Resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer(): Promise<void> {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
