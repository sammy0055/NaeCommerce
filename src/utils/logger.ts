import { GraphQLError } from "graphql";
import { cognitoErrors } from "./error-formatter";
import { errorTypes } from "../types";

export const logger = (error: errorTypes) => {
  const _error = cognitoErrors(error?.code);
  console.error(error.message);
  throw new GraphQLError(_error.message, {
    extensions: {
      code: error.code,
    },
  });
};
