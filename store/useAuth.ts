import { defineStore } from 'pinia'

export const useAuth = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    error: null,
  }),
  actions: {
    async signIn(email: string, password: string) {
      const response = await api.post<UserCredentialResponse>("/uwang/dev/auth/v1/sign-in-admin", { email, password })

      if (response.isSuccessful) {
        this.isAuthenticated = true
        this.user = response.data
      } else {
        this.error = response.message
      }
    },
  },
})
