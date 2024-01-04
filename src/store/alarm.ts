import { defineStore } from 'pinia'

const useAlarm = defineStore('alarm', {
  state: () => {
    return {
      countData: {},
      tab: '1',
      hasMessage: false // 是否空呼报警状态
    }
  },
  getters: {},
  actions: {
    alarmTabChange(data: { [key: string]: string }, tab?: string) {
      this.countData = data
      if (tab) {
        this.tab = tab
      }
    },
    changeHasMessage(msg: boolean) {
      this.hasMessage = msg
    }
  },
  persist: true
})

export { useAlarm }
