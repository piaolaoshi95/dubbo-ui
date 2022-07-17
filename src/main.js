// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 设置反向代理，前端请求默认发送到 http://localhost:8082/api
var axios=require('axios')
axios.defaults.baseURL='http://localhost:8082/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
/*作用是阻止vue 在启动时生成生产提示。*/

Vue.use(axios)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
