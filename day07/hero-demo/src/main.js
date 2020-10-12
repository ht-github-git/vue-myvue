// 模块引入部分--------------------------------------------------
// 引入vue模块
import Vue from 'vue'
// 引入根组件
import App from './App.vue'
// 引入路由的js配置
import router from './router'
// 导入bootstrap提供的css,bootstrap并不好兼容vue，从目录拿
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入moment组件，因为要配置关于时间的全局过滤器，所以在这里引入
import moment from 'moment'
// 把axios挂载到vue原型上
import axios from 'axios'
Vue.prototype.$axios = axios
// axios基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// vue操作部分-------------------------------------------------

// 配置全局过滤器
Vue.filter('time', function (value) {
  return moment(new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})

// 创建根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
