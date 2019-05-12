// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import ElementUI from 'element-ui'

import App from './App'
import router from './router'
import store from './vuex/store'
import components from './components/global'
// import 'lib-flexible/flexible.js'
import VueBus from 'vue-bus' // 兄弟组件通讯

import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueBus) // 兄弟组件通讯
Vue.use(components) // 注册全局组件
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#00a65a',
  failedColor: '#fc5449',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
