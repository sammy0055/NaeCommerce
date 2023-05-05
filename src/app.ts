import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "dotenv/config";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import connectDB from "./mongoDB";
import { verifyAccessToken } from "./services/authentication/verify-access-token";

interface MyContext {
  token?: String;
}
export const server = new ApolloServer<MyContext>({ typeDefs, resolvers });

const runServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({
      token: async () => {
        const token = req.headers.authorization || "";
        const payload = await verifyAccessToken(token);
        return payload;
      },
    }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
};

connectDB();
runServer();
