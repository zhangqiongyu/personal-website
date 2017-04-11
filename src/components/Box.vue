<template>
  <div class="boxes">
    <router-link v-for="(title, index) in boxTitle" :to=themeRouter[index]>
      <div class="box">      
        <div :style="{'background-image': getBgImg(index)}" class="box-header"></div>
        <h2>{{ boxTitle[index] }}</h2>
        <div class="box-text">{{ boxDetail[index] }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'boxes',
  data () {
    return {
      themeRouter: [
        {name: 'blog'},
        {name: 'work'},
        {name: 'resume'},
        {name: 'about'}
      ]
    }
  },
  props: ['boxTitle', 'boxDetail'],
  methods: {
    getBgImg: function (index) {
      let options = ['blog', 'resume', 'work', 'about']
      return 'url(' + require('../assets/image/' + options[index] + '.svg') + ')'
    }
  }
}
</script>

<style scoped>
.boxes {
  height: 1200px;
  margin-left: 6.5%;
  margin-right: 6.5%;
}

.box {
  width: 22.5%;
  height: 350px;
  float: left;
  margin-left: 1.25%;
  margin-right: 1.25%;
  background-color: white;
}

.box-header {
  width: 100%;
  height: 150px;
}

h2 {
  text-align: center;
  color: rgb(105,105,105);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.box-text {
  text-align: center;
  padding: 20px;
  color: rgb(135,135,135);
  font-size: 17px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

a:hover {
  color: white;
}
</style>
