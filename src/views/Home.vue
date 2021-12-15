<template>
  <div class="home">
    <img class="map-image" alt="world" src="../assets/world.jpg">
    <p class="map-text">Let's travel.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
.map-image {
  width: 400px;
  height: auto;
}

.map-text {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
}
</style>