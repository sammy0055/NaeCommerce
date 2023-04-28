import { ApolloServer } from "apollo-server";
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda';
import "dotenv/config";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import connectDB from "./mongoDB";
import { verifyAccessToken } from "./services/authentication/verify-access-token";

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    token: async () => {
      const token = req.headers.authorization || "";
      const payload = await verifyAccessToken(token);
      return { token: payload };
    },
  }),
});

// export const handler = startServerAndCreateLambdaHandler(
//   server as any,
//   handlers.createAPIGatewayProxyEventV2RequestHandler(),
// );


const runServer = async () => {
  const { url } = await server.listen(4000);
  console.log(`🚀  Server ready at ${url}`);
};

connectDB();
runServer();
