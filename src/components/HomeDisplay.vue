<template>
  <div class="home-display">
    <h1>Latest blogs</h1>
    <h3>Here are some blogs that I think may be helpful for you!</h3>
    <carousel></carousel>
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'homeDisplay',
  components: {
    'carousel': Carousel
  }
}
</script>

<style scoped>
.home-display {
  height: 600px;
  background-image: url(../assets/image/displayBg.jpg);
}

h1 {
  text-align: center;
  margin-top: 0;
  padding-top: 80px;
  font-family: "NovecentowideBookBold",Arial,sans-serif;
  color: rgb(75,168,160);
}

h3 {
  color: rgb(201, 201, 201);
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
