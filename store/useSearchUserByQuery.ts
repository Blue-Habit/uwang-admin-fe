import type { UserWithPaginationState } from "~/type/userWithPaginationState";
import type { UserWithPaginationResponse } from "~/type/userWithPaginationResponse";

export const useSearchByQuery = defineStore<string, UserWithPaginationState, {}, {
  searchUserByQuery: (query:string,page:string) => Promise<void>;
}>('listUser', {
  state: () => ({
    result:[],
    isLoading: true,
  }),

  actions: {
    async searchUserByQuery(query,page = '1') {
      this.isLoading = true;
      const { get } = useApi();
      const result = await get<Array<UserWithPaginationResponse>>(`uwang/dev/account/v1/admin/search-by-query?query=${query}&page=${page}&size={"10"}`);
      if (result && result.data) {
        this.result = result.data;
      }
      this.isLoading = false;
    },
  },
});
