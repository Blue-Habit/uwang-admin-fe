import type { UserWithPaginationResponse } from "~/type/userWithPaginationResponse";

export type UserWithPaginationState = {
  result: Array<UserWithPaginationResponse>;
  isLoading: boolean;
};