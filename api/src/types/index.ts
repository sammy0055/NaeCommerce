import { CognitoAccessTokenPayload } from "aws-jwt-verify/jwt-model";
import { IProduct, ObjectId } from "../mongoDB/types";

export enum Result {
  Success = "SUCCESS",
  Fail = "FAILED",
}

export type errorTypes = {
  name?: string;
  message: string;
  code: string;
};

export type authenticationData = {
  userName: string;
  password: string;
};

export interface signUpType {
  email: string;
  password: string;
}

export interface userAuthAccessDetails {
  uid?: string;
  exp: number;
  accessToken: string;
  refreshToken: string;
}

export interface contextDetails {
  token: () => Promise<CognitoAccessTokenPayload>;
}

export interface Product {
  storeId: ObjectId;
  data: Omit<IProduct, "storeId">;
}
