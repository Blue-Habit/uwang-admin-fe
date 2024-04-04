import type { DetailUserResponse } from "~/type/detailUserRespose";

export const useListUser = defineStore<string, {result: Array<DetailUserResponse>, isLoading:Boolean}, {}, {
  fetchUserWithPagination: () => Promise<void>;
}>('listUser', {
  state: () => ({
    result:[],
    isLoading: true,
  }),

  actions: {
    async fetchUserWithPagination() {
      this.isLoading = true;
      const { get } = useApi();
      const result = await get<Array<DetailUserResponse>>('uwang/dev/account/v1/admin/get-list-user');
      if (result && result.data) {
        this.result = result.data;
      }
      this.isLoading = false;
    },
  },
});
