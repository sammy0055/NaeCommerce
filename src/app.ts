import { ApolloServer } from "apollo-server";
import "dotenv/config";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import connectDB from "./mongoDB";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const runServer = async () => {
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
};

connectDB()
runServer();
