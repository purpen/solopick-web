import Vue from 'vue'

import TopNav from './TopNav'
import PcFoot from './PcFoot.vue'
import PcFootJoin from './PcFootJoin.vue'

function global () {
  Vue.component('top-nav', TopNav)
  Vue.component('pc-foot', PcFoot)
  Vue.component('pc-foot-join', PcFootJoin)
}

export default global
