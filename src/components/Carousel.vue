<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="always" heigth="500px">
      <!--el-carousel-item v-for="item in 4" :style="{'background-image': getBgImg(index-1)}"-->
      <el-carousel-item v-for="(item, index) in backgroundImg" :style="{'background-image': 'url(' + item.bg_img + ')'}" :key=item.id>
        <h3>{{ item.title }}</h3>
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
  props: ['backgroundImg']
}
</script>

<style scoped>
.el-carousel__item h3 {
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

h3 {
  text-align: center;
}
</style>
