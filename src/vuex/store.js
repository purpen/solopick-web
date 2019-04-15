import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './type'

Vue.use(Vuex)

const state = {}

const mutations = {
  [types.WINDOE_WIDTH] (state, data) {
    console.log(document.body.clientWidth)
    return document.body.clientWidth
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
