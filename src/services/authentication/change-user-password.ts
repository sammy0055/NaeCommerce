import { cognitoUserFn } from "../../utils/cognito-user";

type ChangePasswordDetail = {
  username: string;
  oldPassword: string;
  newPassword: string;
};

export const changeUserPassword = (
  PasswordDetail: ChangePasswordDetail
): Promise<string> => {
  const cognitoUser = cognitoUserFn(PasswordDetail.username);
  return new Promise((resolve, reject) => {
    cognitoUser.changePassword(
      PasswordDetail.oldPassword,
      PasswordDetail.newPassword,
      function (err, result) {
        if (err) reject(err);
        resolve(result!);
      }
    );
  });
};

export const forgotPassword = (username: string): Promise<string> => {
  const cognitoUser = cognitoUserFn(username);
  return new Promise((resolve, reject) => {
    cognitoUser.forgotPassword({
      onSuccess: function (data) {
        resolve(data);
      },
      onFailure: function (err) {
        reject(err);
      },
    });
  });
};
