<template>
  <div class="spain">
    <img :src="country.imgurl" class="spain-pic">
    <h3>Spain</h3>
    <p>
      Spain is a country in Southwestern Europe with some pockets of territory in the Mediterranean Sea, offshore in the Atlantic Ocean and across the Strait of Gibraltar.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Spain',
  props: {
    msg: String
  },
  data() {
    return {
      country: {
        imgurl: 'https://images.unsplash.com/photo-1549643276-fdf2fab574f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spain {
  width: 400px;
  margin: 0 auto;
}

.spain-pic {
  margin: 10px 0 0 0;
  width: 400px;
  height: auto;
}
</style>
