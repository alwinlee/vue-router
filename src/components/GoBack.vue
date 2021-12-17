<template>
  <div>
    <button @click="goBack" class="go-back">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.go-back {
  border: none;
  border-radius: 3px;
  background-color: orange;
  padding: 4px 8px;
}
.go-back:hover {
  cursor: pointer;
  background-color: orangered;
}
</style>
