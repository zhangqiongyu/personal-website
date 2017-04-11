<template>
  <div class="page-footer">
    <div v-for="(title,index) in titles">
      <a v-if="index==0" href="https://github.com/zhangqiongyu/" target="_blank">
      <div class="footer-item">
        <img src="../assets/image/github.jpg">
        {{ title }}
      </div>
      </a>
      <router-link v-if="index==1" :to=routerTo>
      <div class="footer-item">
        <img src="../assets/image/weixin.jpg">
        {{ title }}
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageFooter',
  data () {
    return {
      titles: [
        'Github',
        'WeiXin'
      ],
      routerTo: {
        name: 'qrcode'
      }
    }
  }
}
</script>

<style scoped>
.page-footer {
  height: 150px;
  background-color: rgb(48,48,48);
}

.footer-item {
  width: 20%;
  height: 100%;
  float: right;
  color: white;
  font-size: 20px;
  text-align: center;
  margin: 60px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

img {
  width: 20px;
}
</style>
