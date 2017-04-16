<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@font-face {
  font-family: "NovecentowideBookBold";
  src: url(./assets/fonts/Novecentowide-Bold-webfont.woff);
}

@font-face {
  font-family: "BitterRegular";
  src: url(./assets/fonts/Bitter-Regular-webfont.woff);
}

@font-face {
  font-family: "BitterBold";
  src: url(./assets/fonts/Bitter-Bold-webfont.woff);
}

body{
  margin: 0
}
</style>
