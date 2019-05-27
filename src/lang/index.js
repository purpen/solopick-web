import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import enLocale from './en'
import zhLocale from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  zhCN: {
    ...zhLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zhCN', // set locale
  fallbackLocale: 'en',
  messages // set local messages
})

export default i18n
