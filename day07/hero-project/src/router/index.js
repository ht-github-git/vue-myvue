import Vue from 'vue'
import VueRouter from 'vue-router'
import Hero from '../views/hero.vue'
import HeroAdd from '../views/HeroAdd.vue'
import HeroEdit from '../views/HeroEdit.vue'
import Arm from '../views/arm.vue'
import Skill from '../views/skill.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: 'hero' },
    { path: '/hero', component: Hero },
    { path: '/hero-add', component: HeroAdd },
    { path: '/hero-edit/:id', component: HeroEdit },
    { path: '/arm', component: Arm },
    { path: '/skill', component: Skill }
  ],
  linkActiveClass: 'active'
})

export default router
