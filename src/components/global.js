import Vue from 'vue'

import TopNav from './TopNav'
import H5Tab from './H5Tab.vue'
import PcHand from './PcHand.vue'
import PcFoot from './PcFoot.vue'
import PcFootJoin from './PcFootJoin.vue'
import Language from './Language.vue'

function global () {
  Vue.component('top-nav', TopNav)
  Vue.component('h5-tab', H5Tab)
  Vue.component('pc-hand', PcHand)
  Vue.component('pc-foot', PcFoot)
  Vue.component('pc-foot-join', PcFootJoin)
  Vue.component('language', Language)
}

export default global
