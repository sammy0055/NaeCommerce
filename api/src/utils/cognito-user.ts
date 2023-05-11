import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { poolData } from "../data/poll-data";

export const cognitoUserFn = (username: string): CognitoUser => {
  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);
  return cognitoUser;
};
