export const poolData = {
  UserPoolId: process.env.AWS_COGNITO_USERPOOL_ID!,
  ClientId: process.env.AWS_COGNITO_CLIENT_ID!,
  IdentityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID!,
};

export const AWS_REGION = process.env.AWS_REGION;
