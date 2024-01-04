import { defineStore } from 'pinia'

const useAlarmInfo = defineStore('alarmInfo', {
  state: () => {
    return {
      showHazardous: false // 危化处置显示
    }
  },
  getters: {},
  actions: {
    changeHazardous(msg: boolean) {
      this.showHazardous = msg
    }
  },
  persist: true
})

export { useAlarmInfo }
