import { GraphQLError } from "graphql";
import { cognitoErrors } from "./error-formatter";
import { errorTypes } from "../types";

export const logger = (error: errorTypes) => {
  let _error: Partial<errorTypes> = {};
  if (!error.code) {
    if (error.name === "ValidationError") {
      _error = { ...error };
    } else {
      const tokenExp = /Token expired/.test(error?.message);
      if (tokenExp) _error = { message: "session expired please logIn" };
      else _error = cognitoErrors(error?.code);
    }
  } else _error = cognitoErrors(error?.code);
  console.error({ code: error?.code, message: error.message });
  throw new GraphQLError(_error.message!, {
    extensions: {
      code: error.code,
    },
  });
};
