// 引入vue模块，因为需要使用Vue.use方法】
import Vue from 'vue'
// 引入router模块
import VueRouter from 'vue-router'
// 引入各自定义路由模块
import Hero from '../views/Hero.vue'
import Arm from '../views/Arm.vue'
import Skill from '../views/Skill.vue'
import HeroAdd from '../views/HeroAdd.vue'
import HeroEdit from '../views/HeroEdit.vue'
// 在vue相关的模块化中需要使用该方法
Vue.use(VueRouter)

// 创建路由实例
const router = new VueRouter({
  // 配置各路由
  routes: [
    { path: '/', redirect: '/hero' },
    { path: '/hero', component: Hero },
    { path: '/arm', component: Arm },
    { path: '/skill', component: Skill },
    { path: '/hero-add', component: HeroAdd },
    { path: '/hero-edit/:id', component: HeroEdit }
  ],
  linkActiveClass: 'active'
})
export default router
