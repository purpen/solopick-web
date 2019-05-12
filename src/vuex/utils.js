/**
 * 常用工具包
 */

class Utils {
  // 生成随机ID字符串
  static randomIdStr (len) {
    len = len || 11
    const chars = '123456789'
    let nonceStr = ''
    for (let i = 0; i < len; i++) {
      nonceStr += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return nonceStr
  }

  // 获取时间戳, 返回秒级
  static getTimestamp () {
    return Math.ceil(new Date().getTime() / 1000)
  }

  // 日期，在原有日期基础上，增加days天数，默认增加1天
  static addDate (date, days, format = 'ymd') {
    if (days === undefined || days === '') {
      days = 1
    }
    let somedate = new Date(date)
    somedate.setDate(somedate.getDate() + days)
    let month = somedate.getMonth() + 1
    let day = somedate.getDate()

    if (format === 'ymd') {
      return somedate.getFullYear() + '年' + Utils.getFormatDate(month) + '月' + Utils.getFormatDate(day) + '日'
    }

    return somedate.getFullYear() + '-' + Utils.getFormatDate(month) + '-' + Utils.getFormatDate(day)
  }

  // 获取年：2018
  static getYear (date = '') {
    if (date === undefined || date === '') {
      date = new Date()
    }
    return date.getFullYear()
  }

  // 获取年月：2018-07
  static getYearMonth (date = '') {
    if (date === undefined || date === '') {
      date = new Date()
    }
    let month = date.getMonth() + 1
    return date.getFullYear() + '-' + Utils.getFormatDate(month)
  }

  // 获取本月第一天
  static getMonthFirstDay (date = '') {
    if (date === undefined || date === '') {
      date = new Date()
    }
    let month = date.getMonth() + 1
    return date.getFullYear() + '-' + Utils.getFormatDate(month) + '-01'
  }

  // 日期格式化
  static formatDate (date, format = 'ymd') {
    let month = date.getMonth() + 1
    let day = date.getDate()

    if (format === 'ymd') {
      return date.getFullYear() + '年' + Utils.getFormatDate(month) + '月' + Utils.getFormatDate(day) + '日'
    }

    return date.getFullYear() + '-' + Utils.getFormatDate(month) + '-' + Utils.getFormatDate(day)
  }

  // 日期月份/天的显示，如果是1位数，则在前面加上'0'
  static getFormatDate (arg) {
    if (arg === undefined || arg === '') {
      return ''
    }

    let re = arg + ''
    if (re.length < 2) {
      re = '0' + re
    }

    return re
  }

  // 计算字符串的长度
  static strlen (str) {
    let len = 0
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i)
      // 单字节加1
      if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
        len++
      } else {
        len += 2
      }
    }

    return len
  }

  // 来源平台
  static platform () {
    return localStorage.getItem('platform') || 1
  }

  // 是否为移动端
  static isMobile () {
    const userAgent = navigator.userAgent
    const mobileAgents = ['Android', 'iPhone', 'Symbian', 'WindowsPhone', 'iPod', 'BlackBerry', 'Windows CE']
    let isMob = false

    for (let i = 0; i < mobileAgents.length; i++) {
      if (userAgent.indexOf(mobileAgents[i]) > -1) {
        isMob = true
        break
      }
    }

    return isMob
  }
}

export default Utils
