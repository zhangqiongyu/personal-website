<template>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="index in 4" :style="{'background-image': getBgImg(index-1)}">
      <h3>{{ index }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      routerTo: [
        {name: 'about'},
        {name: 'about'},
        {name: 'blog'},
        {name: 'resume'}
      ]
    }
  },
  methods: {
    getBgImg: function (index) {
      let options = ['vuejs', 'django', 'python', 'cpp']
      return 'url(' + require('../assets/image/' + options[index] + '.jpg') + ')'
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
color: #475669;
font-size: 14px;
opacity: 0.75;
line-height: 200px;
margin: 0;
}

.el-carousel__item {
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.carousel {
  margin: 80px 240px;
}
</style>
