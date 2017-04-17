<template>
  <div class="article">
    <navbar></navbar>
    <div class="article-content">
    <vue-markdown :source="article.body"></vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {fetchArticleById} from '@/utils/api'
import NavBar from '@/components/NavBar'

export default {
  name: 'article',
  data () {
    return {
      article: {},
      articleId: 0
    }
  },
  components: {
    'navbar': NavBar,
    'vue-markdown': VueMarkdown
  },
  mounted () {
    let articleId = this.$route.params.id
    this.getArticleById(articleId)
  },
  methods: {
    getArticleById: function (id) {
      this.articleId = this.$route.params.id
      fetchArticleById(id).then(data => {
        this.article = data
        console.log(this.article.body)
      })
    }
  }
}
</script>

<style scoped>
.article-content {
  padding: 0 10%;
}
</style>
