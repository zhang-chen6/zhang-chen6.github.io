export function formatDate(value: any, type: string) {
  let date = new Date(value)
  let y = date.getFullYear()
  let MM = (date.getMonth() + 1).toString()
  MM = Number(MM) < 10 ? '0' + MM : MM
  let d = date.getDate().toString()
  d = Number(d) < 10 ? '0' + d : d
  let h = date.getHours().toString()
  h = Number(h) < 10 ? '0' + h : h
  let m = date.getMinutes().toString()
  m = Number(m) < 10 ? '0' + m : m
  let s = date.getSeconds().toString()
  s = Number(s) < 10 ? '0' + s : s
  if (type == 'ymdhms') return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s // 年月日时分秒
  if (type == 'ymdhm') return y + '-' + MM + '-' + d + ' ' + h + ':' + m // 年月日时分
  if (type == 'mdhms') return MM + '-' + d + ' ' + h + ':' + m + ':' + s // 月日时分秒
  if (type == 'ymd') return y + '-' + MM + '-' + d // 年月日
  if (type == 'hms') return h + ':' + m + ':' + s // 时分秒
  if (type == 'ym') return y + '-' + MM // 年月
  if (type == 'ms') return m + ':' + s // 分秒
  if (type == 'y') return y.toString()
  if (type == 'm') return MM.toString()
  if (type == 'd') return d.toString()
  return ''
}

export function getAssetsFile(url: string) {
  return new URL(`../assets/${url}`, import.meta.url).href
}

export function getUpMonth() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()

  let year2 = year
  // 注意：1月份返回的是0
  let month2 = parseInt(month.toString())
  if (month2 == 0) {
    year2 = parseInt(year2.toString()) - 1
    month2 = 12
  }
  let m = year2.toString()
  let n = month2 < 10 ? '0' + month2 : month2.toString()
  let t2 = m + '-' + n
  // 最终返回格式2022-12
  return t2
}

//校验链接
export function isHttp(str: string) {
  return /(^(http|https):\/\/([\w\-]+\.)+[\w\-]+(\/[\w\u4e00-\u9fa5\-\.\/?\@\%\!\&=\+\~\:\#\;\,]*)?)/.test(
    str
  )
}
//校验手机号码
export function isPhoneNum(str: string) {
  return /^(0|86|17951)?(1)[0-9]{10}$/.test(str)
}
//校验身份证号
export function isPersonCard(str: string) {
  return /^[1-8][1-7]\d{4}(?:19|20)\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])\d{3}[\dX]$/.test(
    str
  )
}
//校验车牌号码
export function isCarCard(str: string) {
  return (
    /^[京津冀晋蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼川贵云渝藏陕甘青宁新]{1}[A-Z]{1}[0-9a-zA-Z]{4}(应急)$/.test(
      str
    ) ||
    /^[京津冀晋蒙辽吉黑沪苏浙皖闽赣鲁豫鄂湘粤桂琼川贵云渝藏陕甘青宁新]{1}[A-Z]{1}[0-9a-zA-Z]{5}$/.test(
      str
    )
  )
}

const loadingSvg = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ea893728=""><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"></path></svg>`

const popperOption = {
  modifiers: [{ name: 'computeStyles', options: { adaptive: false } }]
}
export { loadingSvg, popperOption }
