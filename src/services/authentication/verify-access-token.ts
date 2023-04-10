import { CognitoJwtVerifier } from "aws-jwt-verify";
import { poolData } from "../../data/poll-data";

export const verifyAccessToken = async (accessToken: string) => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: poolData.UserPoolId,
    tokenUse: "access",
    clientId: poolData.ClientId,
  });
  const payload = await verifier.verify(accessToken);
  return payload;
};