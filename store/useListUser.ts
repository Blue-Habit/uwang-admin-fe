import type { UserWithPaginationState } from "~/type/userWithPaginationState";
import type { UserWithPaginationResponse } from "~/type/userWithPaginationResponse";

export const useListUser = defineStore<string, UserWithPaginationState, {}, {
  fetchUserWithPagination: (page:string) => Promise<void>;
}>('listUser', {
  state: () => ({
    result:[],
    isLoading: true,
  }),

  actions: {
    async fetchUserWithPagination(page = "1") {
      this.isLoading = true;
      const { get } = useApi();
      const result = await get<Array<UserWithPaginationResponse>>(`uwang/dev/account/v1/admin/get-list-user?page=${page}&size={"10"}`);
      if (result && result.data) {
        this.result = result.data;
      }
      this.isLoading = false;
    },
  },
});
