<template>
  <div class="not-found">
    <h2> Not Found</h2>
    <p>
      Please check the UEL. Try goning
      <router-link :to="{ name: 'Home' }" class="home-text"> home </router-link>
      <span @click="goHome" class="home-icon">&nbsp;</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  components: {
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
<style scoped>
.not-found {
  width: 400px;
  margin: 5px auto;
  padding: 15px;
  background-color: lightsalmon;
}

.home-text {
  text-decoration: none;
}

.home-icon:hover {
  cursor: pointer;
}

.home-icon:after {
  content: '🏠';
  font-weight: normal;
}
</style>