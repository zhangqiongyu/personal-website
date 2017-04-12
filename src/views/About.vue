<template>
  <div class="about">
    <navbar></navbar>
    <div class="content">
      <h3>本网站仅用于个人编写博客、展示简历、记录日常学习工作，网站已做备案。</h3>
      <p>网站使用vuejs编写，博客使用django搭建，利用uWSGI+nginx部署。博客使用markdown渲染，
        内容主要包括本人在学习前端、后端过程中的一些学习笔记，或者一些随笔日记。本网站目的在于将
        平时所学不定期更新上来，目前暂不打算开通评论、注册功能，因此，您所见，即所有。</p>
      <p>欲与本站站主取得联系，交流学习经验，请上本人github账号下留言，其余联系方式，出于隐私考
        虑，暂放个占位符，来来往往皆为客，在此感谢您的光临。</p>
    </div>
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
@font-face {
  font-family: "BitterRegular";
  src: url(../assets/fonts/Bitter-Regular-webfont.woff);
}
.about {
  background-image: url(../assets/image/aboutBg.jpg);
  background-size: 100% 100%;
}

.content {
  height: 450px;
}

h3 {
  font-size: 1.45em;
  font-family: "BitterRegular", Georgia, serif;
  color: white;
  text-align: center;
}

p {
  color: white;
  font-family: "BitterRegular", Georgia, serif;
  font-size: 1.1em;
  padding: 0 10%;
  text-indent: 2.2em;
}
</style>
