export default {
  //自定义节流操作
  preventReClick: {
    mounted(el: any, binding: any) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true
          setTimeout(() => {
            el.disabled = false
          }, binding.value || 2000) //2000ms间隔时间
        }
      })
    }
  },
  selectLoadMore: {
    mounted(el: any, binding: any) {
      // 获取element-ui定义好的scroll盒子
      const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
      if (SELECTWRAP_DOM) {
        SELECTWRAP_DOM.addEventListener('scroll', () => {
          const condition =
            SELECTWRAP_DOM.scrollHeight - SELECTWRAP_DOM.scrollTop <= SELECTWRAP_DOM.clientHeight
          if (condition) {
            binding.value()
          }
        })
      }
    }
  }
}
