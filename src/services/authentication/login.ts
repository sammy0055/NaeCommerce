import { authenticationData, userAuthAccessDetails } from "../../types";
import { poolData } from "../../data/poll-data";
import { AWS_REGION } from "../../data/poll-data";
import {
  CognitoIdentityProviderClient,
  AdminInitiateAuthCommand,
} from "@aws-sdk/client-cognito-identity-provider";

export const login = async (
  authenticationData: authenticationData
): Promise<userAuthAccessDetails> => {
  const cognitoClient = new CognitoIdentityProviderClient({
    region: AWS_REGION,
  });

  const command = new AdminInitiateAuthCommand({
    AuthFlow: "ADMIN_NO_SRP_AUTH",
    ClientId: poolData.ClientId,
    UserPoolId: poolData.UserPoolId,
    AuthParameters: {
      USERNAME: authenticationData.userName,
      PASSWORD: authenticationData.password,
    },
  });

  const { AuthenticationResult } = await cognitoClient.send(command);

  return {
    exp: AuthenticationResult?.ExpiresIn as number,
    accessToken: AuthenticationResult?.AccessToken as string,
    refreshToken: AuthenticationResult?.RefreshToken as string,
  };
};
