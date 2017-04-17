<template>
  <div class="theme-box">
    <h1>Choose A Program Path</h1>
    <h3>By software engineer, zhangqy</h3>
    <boxes></boxes>
  </div>
</template>

<script>
import Boxes from './Boxes'

export default {
  name: 'themebox',
  components: {
    'boxes': Boxes
  }
}
</script>

<style scoped>
.theme-box {
  height: 600px;
  background-color: rgb(244, 244, 244);
}

h1 {
  text-align: center;
  color: rgb(75,168,160);
  background-color: rgb(244, 244, 244);
  padding-top: 80px;
  margin-top: 0;
  font-family: "NovecentowideBookBold",Arial,sans-serif;
}

h3 {
  color: rgb(201, 201, 201);
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
