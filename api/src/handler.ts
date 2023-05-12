import {
  startServerAndCreateLambdaHandler,
  handlers,
} from "@as-integrations/aws-lambda";
import { server } from "./app";
import { verifyAccessToken } from "./services/authentication/verify-access-token";

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async ({ event }) => ({
      token: async () => {
        const token = event.headers.authorization || "";
        const payload = await verifyAccessToken(token);
        return { token: payload };
      },
    }),
  }
);
