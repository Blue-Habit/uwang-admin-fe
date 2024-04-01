import type { UserCredentialResponse } from "~/type/usersCredentialResponse";

export const useTopUser = defineStore<string,{topUser:Array<UserCredentialResponse>,isLoading:boolean},{},{getTopUser:()=>Promise<void>}>('useTopUser',{
  state:() => ({
    topUser:[],
    isLoading: true,
  }),
  actions: {
    async getTopUser(){
      this.isLoading = true;
      const {get}= useApi()
      const data = await get<Array<UserCredentialResponse>>("uwang/dev/account/v1/admin/get-top-user")
      if (data && data.data) {
        this.topUser = data.data;
      }
      this.isLoading = false
    }
  }
})