import { cognitoUserFn } from "../../utils/cognito-user";

export const confirmRegistration = (username: string, authCode: string) => {
  const cognitoUser = cognitoUserFn(username);

  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(authCode, true, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};

export const resendEmailConfirmationCode = (
  username: string
): Promise<string> => {
  const cognitoUser = cognitoUserFn(username);
  return new Promise((resolve, reject) => {
    cognitoUser.resendConfirmationCode(function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};
