import { AuthenticationDetails } from "amazon-cognito-identity-js";
import { authenticationData, userAuthAccessDetails } from "../../types";
import { cognitoUserFn } from "../../utils/cognito-user";

export const login = (
  authenticationData: authenticationData
): Promise<userAuthAccessDetails> => {
  const Data = {
    Username: authenticationData.userName,
    Password: authenticationData.password,
  };
  const authenticationDetails = new AuthenticationDetails(Data);

  const cognitoUser = cognitoUserFn(authenticationData.userName);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const res: userAuthAccessDetails = {
          exp: result.getAccessToken().payload.exp,
          uid: result.getAccessToken().payload.sub,
          accessToken: result.getAccessToken().getJwtToken(),
          refreshToken: result.getRefreshToken().getToken(),
        };
        resolve(res);
      },
      onFailure: (error) => reject(error),
    });
  });
};
