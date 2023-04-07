import { cognitoUserFn } from "../../utils/cognito-user";

export const verifyEmail = (code: string, username: string): Promise<any> => {
  const cognitoUser = cognitoUserFn(username);
  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(code, true, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};
