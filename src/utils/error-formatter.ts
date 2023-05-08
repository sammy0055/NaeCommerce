import { errorTypes } from "../types";

export const cognitoErrors = (errCode: string, message?:string): errorTypes => {
  let error: errorTypes;
  switch (errCode) {
    case "UsernameExistsException":
      error = { message: "user already exists", code: "FORBIDDEN" };
      break;
    case "NotAuthorizedException":
      error = {
        message: "User cannot be confirmed. Current status is CONFIRMED",
        code: "NotAuthorizedException",
      };
      break;
    case "UserNotConfirmedException":
      error = {
        message: "User is not confirmed",
        code: "UserNotConfirmedException",
      };
    default:
      error = {
        message: "something went wrong please try again",
        code: "UNKWON",
      };
      break;
  }

  return error;
};
