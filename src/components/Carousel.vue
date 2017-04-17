<template>
  <div class="carousel">
    <el-carousel :interval="5000" arrow="always" heigth="500px">
      <!--el-carousel-item v-for="item in 4" :style="{'background-image': getBgImg(index-1)}"-->
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
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
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-carousel__item {
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.carousel {
  margin: 0 240px;
}
</style>
