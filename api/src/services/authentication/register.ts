import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";
import { poolData } from "../../data/poll-data";


export function signUp(email: string, password: string): Promise<CognitoUser> {
  const userPool = new CognitoUserPool(poolData);
  const attributeList: CognitoUserAttribute[] = [];

  const dataEmail = {
    Name: "email",
    Value: email,
  };

  const attributeEmail = new CognitoUserAttribute(dataEmail);
  attributeList.push(attributeEmail);

  return new Promise((resolve, reject) => {
    userPool.signUp(
      email,
      password,
      attributeList,
      attributeList,
      function (err, result) {
        if (err) {
          reject(err);
        } else {
          const cognitoUser = result?.user;
          resolve(cognitoUser!);
        }
      }
    );
  });
}


