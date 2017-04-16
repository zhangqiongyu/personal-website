<template>
  <div class="hello">
    <navbar></navbar>
    <div class="blog-header"></div>
    <div class="blog-catalogue"></div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import NavBar from '@/components/NavBar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'hello',
  md: new MarkdownIt(),
  data () {
    return {
      source: '### 您好！'
    }
  },
  components: {
    'navbar': NavBar,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>
.blog-header {
  background-image: url(../assets/image/blogHeader.jpg);
  height: 857px;
  background-size: 100%;
}

.blog-catalogue {
  background-image: url(../assets/image/blogCatalogue.jpg);
  background-size: 100%;
  height: 1594px;
}
</style>
