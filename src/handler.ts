import serverless from "serverless-http";
import { server } from "./app";

const binaryMimeType = [
  "application/json",
  "application/javascript",
  "application/xml",
];

export const lambdaHandler = serverless(server as any, {
  binary: binaryMimeType,
});
