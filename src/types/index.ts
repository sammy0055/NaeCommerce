export enum Result {
  Success = "SUCCESS",
  Fail = "FAILED",
}

export type errorTypes = {
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
  uid: string;
  exp: number;
  accessToken: string;
  refreshToken: string;
}
