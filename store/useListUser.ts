
export const useListUser = defineStore<string, UserWithPaginationState, {}, {
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
      const result = await get<UserCredentialResponse>('uwang/dev/account/v1/admin/get-list-user');
      this.result = result
      this.isLoading = false;
    },
  },
});
