<template>
  <div class="qrcode">
    <navbar></navbar>
    <div class="img">
    <img src="../assets/image/qrCode.png">
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'qrcode',
  components: {
    'navbar': NavBar,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>
.qrcode {
  text-align: center;
}

.img {
  height: 400px;
  padding-top: 50px;
}
</style>
