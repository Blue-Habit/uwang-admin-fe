import type { UserWithPaginationResponse } from "~/type/userWithPaginationResponse";

export type UserWithPaginationState = {
  statistics: UserWithPaginationResponse;
  isLoading: boolean;
};