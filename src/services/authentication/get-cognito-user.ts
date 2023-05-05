import {
  AdminGetUserCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { AWS_REGION, poolData } from "../../data/poll-data";

export const getCognitoUser = async (
  username: string
): Promise<{ email: string }> => {
  const client = new CognitoIdentityProviderClient({ region: AWS_REGION });
  let outPut: any = {};
  const input = {
    UserPoolId: poolData.UserPoolId,
    Username: username,
  };
  const command = new AdminGetUserCommand(input);
  const result = await client.send(command);
  result?.UserAttributes?.forEach((item) => {
    if (item.Name === "email") outPut.email = item.Value;
  });
  return outPut;
};
