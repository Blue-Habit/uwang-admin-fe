import type { ProfileResponse } from "./profileResponse";

export type UserCredentialResponse = 
  {
    id: string,
    email:string,
    full_name:string,
    username: string,
    dateOfBirth:Date,
    authProvider:string,
    status:string,
    createdAt:Date,
    updatedAt:Date,
    deleted: boolean,
    user_profile: Array<ProfileResponse>
  }