import { errorTypes } from "../types";

export const cognitoErrors = (errCode: string): errorTypes => {
  let error: errorTypes;
  switch (errCode) {
    case "UsernameExistsException":
      error = { code: "FORBIDDEN", message: "user already exists" };
      break;
    case "NotAuthorizedException":
      error = {
        code: "NotAuthorizedException",
        message: "User cannot be confirmed. Current status is CONFIRMED",
      };
      break;
    case "UserNotConfirmedException":
      error = {
        code: "UserNotConfirmedException",
        message: "User is not confirmed",
      };
      break;
    case "ExpiredCodeException":
      error = {
        code: "Invalid code provided",
        message: "Invalid code provided, please request a code again.",
      };
      break;
    case "ENOTFOUND":
      error = {
        code: "no internet conectivity",
        message: "no conectivity, please check your internet connection",
      };
    default:
      error = {
        code: "UNKWON",
        message: "something went wrong please try again",
      };
      break;
  }

  return error;
};
