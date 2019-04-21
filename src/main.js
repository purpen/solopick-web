// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import components from './components/global'
// import 'lib-flexible/flexible.js'
import VueBus from 'vue-bus' // 兄弟组件通讯

Vue.use(VueBus) // 兄弟组件通讯
Vue.use(components) // 注册全局组件
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
