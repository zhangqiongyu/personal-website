<template>
  <div class="page-footer">
    <div v-for="(title,index) in titles">
    <router-link :to=routerFooter[index]>
    <div v-if="index==0" class="footer-item">
      <img src="../assets/image/github.jpg">
      {{ title }}
    </div>
    <div v-if="index==1" class="footer-item">
      <img src="../assets/image/weixin.png">
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
      routerFooter: [
        {name: 'blog'},
        {name: 'about'}
      ]
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
  font-size: 25px;
  text-align: center;
  padding: 60px 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

img {
  width: 30px;
}
</style>
