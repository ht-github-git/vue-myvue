import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
// Vue.config.productionTip = false
// import NavBar from './components/nav-bar.vue'
// Vue.component('nav-bar', NavBar)
Vue.filter('time', function (value) {
  return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})
new Vue({
  router,
  // render 是 vue 底层提供的渲染函数， 可以使用App作为根组件
  render: h => h(App)
}).$mount('#app')
