import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'
import * as types from './types'
import utils from './utils'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

const state = {
  title: 'Solopick',
  // 是否显示loading
  loading: false,
  platform: utils.platform(),
  // 默认语言
  language: Cookies.get('language') || '',
  languageType: 'c'
}

const mutations = {
  [types.WINDOE_WIDTH] (state, data) {
    console.log(document.body.clientWidth)
    return document.body.clientWidth
  },

  // 设置语言版本
  [types.SET_LANGUAGE] (state, language) {
    state.language = language
    Cookies.set('language', language)
  },

  // 设置语言
  [types.LANGUAGE] (state, data = 'e') {
    state.languageType = data
  }
}

const persistedOptions = {
  key: 'sp_vuex'
}

const store = new Vuex.Store({
  state,
  mutations,
  strict: debug,
  plugins: [createPersistedState(persistedOptions)]
})

export default store
