import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/index.less'
import axios from 'axios'
// 测试使用
//  引入elementui
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI) //     全局注册elementui

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
