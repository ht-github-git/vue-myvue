<template>
  <div id="app" class="container">
        <nav-bar></nav-bar>
    <div class="col-md-2">
        <my-aside></my-aside>
    </div>

    <div class="col-md-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue'
import MyAside from './components/my-aside.vue'
export default {
  components: {
    'nav-bar': NavBar,
    // NavBar,
    'my-aside': MyAside
  }
}
</script>

<style>

</style>
