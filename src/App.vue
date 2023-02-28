<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import EventList from "./views/EventList.vue";


</script>

<template>
  <header>
    <!-- <div class="wrapper">
      <HelloWorld msg="Liste de festivals" /> -->
      <div class="logo">
        <img src="/src/assets/music-icon.png" alt="">
        <h1>Festiresa</h1>
      </div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

    <!-- </div> -->
  </header>
  <div id="container">
    <router-view />
  </div>
</template>

<style scoped>
header {
  background-color: rgb(4, 4, 42);
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
}

.logo > img {
  width: 50px;
}

nav {

}

nav a.router-link-exact-active {
 
}

nav a.router-link-exact-active:hover {
 
}

nav a {
 color: white;
 padding-left: 30px;
}

nav a:first-of-type {

}

h1 {
  color: white;
}

#container {
  padding: 100px;
}


</style>

