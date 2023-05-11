import { cognitoUserFn } from "../../utils/cognito-user"

const getUserAttributes = (username: string) => {
    const cognitoUser =  cognitoUserFn(username)
}