import { CognitoJwtVerifier } from "aws-jwt-verify";
import { poolData } from "../../data/poll-data";
import { CognitoAccessTokenPayload } from "aws-jwt-verify/jwt-model";

export const verifyAccessToken = async (
  accessToken: string
): Promise<CognitoAccessTokenPayload> => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: poolData.UserPoolId,
    tokenUse: "access",
    clientId: poolData.ClientId,
  });
  const payload = await verifier.verify(accessToken);
  return payload;
};
