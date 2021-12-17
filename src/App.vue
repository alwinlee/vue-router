<template>
  <div id="nav">
    <router-link to="/" class="router-item">Home</router-link> |
    <router-link to="/about" class="router-item">About</router-link> |
    <router-link to="/travels" class="router-item">Travels</router-link>
  </div>
  <GoBack/>
  <div class="view">
    <router-view/>
  </div>
</template>
<script>
import GoBack from './components/GoBack.vue'

export default {
  name: 'App',
  components: {
    GoBack,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #302e28;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #998f7f;
}

.view {
  margin: 8px;
}
</style>
