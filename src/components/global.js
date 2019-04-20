import Vue from 'vue'
// import H5Hand from './H5Hand.vue'
import H5Tab from './H5Tab.vue'
import PcHand from './PcHand.vue'
import PcFoot from './PcFoot.vue'
import PcFootJoin from './PcFootJoin.vue'
import Language from './Language.vue'

function global () {
  // Vue.component('h5-hand', H5Hand)
  Vue.component('h5-tab', H5Tab)
  Vue.component('pc-hand', PcHand)
  Vue.component('pc-foot', PcFoot)
  Vue.component('pc-foot-join', PcFootJoin)
  Vue.component('language', Language)
}

export default global
