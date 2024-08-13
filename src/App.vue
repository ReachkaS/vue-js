<template>

  <HeaderNavbar/>

  <SideBar/>

  <router-view />

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  
</template>

<script>

import HeaderNavbar from './components/header.vue'
import SideBar      from './components/sidebar.vue'

export default {
  name: 'App',

  components: {
    HeaderNavbar, SideBar
  },
  
}
</script>

<!-- <style >
  @import './style.css';
</style> -->
