<template>
  <div class="theme-box">
    <h1>Backend And Frontend</h1>
    <h3>By software engineer, zhangqy</h3>
    <box></box>
  </div>
</template>

<script>
import Box from './Box'

export default {
  name: 'themebox',
  components: {
    'box': Box
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', Geneva, Verdana, sans-serif;
}

h3 {
  color: rgb(201, 201, 201);
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
