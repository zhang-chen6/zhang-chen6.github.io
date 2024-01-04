import { defineStore } from 'pinia'

export const usePermission = defineStore('permission', {
  state: () => {
    return {
      permissionList: []
    }
  },
  getters: {},
  actions: {
    changePermissionList(state: any) {
      this.permissionList = state
    }
  },
  persist: true
})
