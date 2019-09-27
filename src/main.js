import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/index.styl'
import 'vis/dist/vis.css'
import VueCookie from 'vue-cookie'
import httpRequest from './utils/httpRequest'
import api from './api/api'
import Validate from './utils/filter_rules';
import * as filters from './filters'
import './assets/icon/iconfont.css';
import 'jquery'
import global from './utils/global'

Vue.use(Validate)
Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.config.productionTip = false

// 全局挂载
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.$api = api // api 接口
Vue.prototype.global = global
// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
