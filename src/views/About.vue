<template>
  <div class="about">
    <navbar></navbar>
    <h4>本网站仅用于个人编写博客、展示简历、记录日常学习工作。网站已做备案，如有问题，请联系本人。</h4>
    <h4>网站使用vuejs搭建，博客使用django搭建，利用nginx部署到主机。博客使用markdown书写，主要分为前端和后端。</h4>
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'about',
  data () {
    return {
    }
  },
  components: {
    'navbar': NavBar,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>
.about {
  /*background-image: url(../assets/aboutBg.png);*/
}

h4 {
  text-align: center;
}
</style>
