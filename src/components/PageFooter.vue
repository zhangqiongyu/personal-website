<template>
  <div class="page-footer">
    <div v-for="(title,index) in titles">
      <a v-if="index==0" href="https://github.com/zhangqiongyu/" target="_blank">
      <div class="footer-item">
        <div class="img">
          <img class="github" src="../assets/image/github.png">
        </div>
        <div class="text">
          {{ title }}
        </div>
      </div>
      </a>
      <router-link v-if="index==1" :to=routerTo>
      <div class="footer-item">
        <div class="img">
          <img class="weixin" src="../assets/image/weixin.png">
        </div>
        <div class="text">
          {{ title }}
        </div>
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
        'GITHUB',
        'WEIXIN'
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
  height: 145px;
  background-color: rgb(48,48,48);
}

.footer-item {
  width: 15%;
  height: 100%;
  float: right;
  color: white;
  font-size: 17px;
  text-align: center;
  font-family: 'BitterBold',Georgia,serif;
  margin: 45px 0 45px 45px;
}

img {
  width: 120%;
}

.github {
  width: 90%;
}

.img {
  width: 20%;
  float: left;
}

.text {
  float: left;
  padding: 10px 0;
  text-align: left;
}
</style>
