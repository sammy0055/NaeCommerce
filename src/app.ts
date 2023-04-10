import { ApolloServer } from "apollo-server";
import "dotenv/config";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import connectDB from "./mongoDB";
import { verifyAccessToken } from "./services/authentication/verify-access-token";
import { logger } from "./utils/logger";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    token: async () => {
      try {
        const token = req.headers.authorization || "";
        const payload = await verifyAccessToken(token);
        return { token: payload };
      } catch (error: any) {
        logger(error);
      }
    },
  }),
});

const runServer = async () => {
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
};

connectDB();
runServer();
