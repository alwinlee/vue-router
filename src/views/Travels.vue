<template>
  <div class="travels">
    <p>Three conutries I love the most!</p>
    <div class="travel-router">
      <router-link to="/travels/spain">Spain</router-link> |
      <router-link to="/travels/finland">Finland</router-link> |
      <router-link to="/travels/czech">Czech</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Travels',
  components: {
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.travel-router {
  /*background-color: bisque;*/
  width: 100%;
}

.travel-router a {
  color: #4e4a3d;
}

.travel-router a.router-link-exact-active {
  color: #221e1d;
}

</style>