<template>
  <div class="finland">
    <img :src="country.imgurl" class="finland-pic">
    <h3>Finland</h3>
    <p>
      Finland is a Nordic country in Northern Europe. It shares land borders with Sweden to the west, Russia to the east, Norway to the north, and is defined by the Gulf of Bothnia to the west, and the Gulf of Finland of the Baltic Sea across Estonia to the south.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Finland',
  props: {

  },
  data() {
    return {
      country: {
        imgurl: 'https://images.unsplash.com/photo-1557261651-a6beab93541f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finland {
  width: 500px;
  margin: 0 auto;
}

.finland-pic {
  margin: 10px 0 0 0;
  width: 500px;
  height: auto;
}
</style>
