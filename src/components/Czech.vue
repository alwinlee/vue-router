<template>
  <div class="czech">
    <img :src="country.imgurl" class="czech-pic">
    <h3>Czech</h3>
    <p>
      The Czech is a landlocked country in Central Europe. It is bordered by Austria to the south, Germany to the west, Poland to the northeast, and Slovakia to the east.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Czech',
  props: {
    msg: String
  },
  data() {
    return {
      country: {
        imgurl: 'https://images.unsplash.com/photo-1526996970093-36148727de98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.czech {
  width: 400px;
  margin: 0 auto;
}

.czech-pic {
  margin: 10px 0 0 0;
  width: 400px;
  height: auto;
}
</style>
