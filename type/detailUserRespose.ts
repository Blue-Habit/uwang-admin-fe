import type { UserCredentialResponse } from "./usersCredentialResponse";


export type DetailUserResponse = {
  message: string;
  data: UserCredentialResponse;
  statusCode: number;
}