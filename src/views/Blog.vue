<template>
  <div class="hello">
    <navbar></navbar>
    <div class="blog-header">
      <carousel></carousel>
    </div>
    <div class="blog-catalogue">
      <div class="article-list">
        <div v-for="article in articles" class="box">
          <router-link :to="{name: 'article', params: {id: article.id}}">
            <img :src=article.bg_img v-if="article.bg_img">
            <h2 class="title">{{ article.title }}</h2>
            <div v-if="article.abstract" class="abstract">{{ article.abstract }}</div>
            <div v-else class="abstract">{{ article.body.slice(0,54) }}</div>
            <footer>{{ article.created_time.slice(0,10) }}</footer>
          </router-link>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import {fetchCoverInfo} from '@/utils/api'

import NavBar from '@/components/NavBar'
import Carousel from '@/components/Carousel'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'hello',
  data () {
    return {
      articles: []
    }
  },
  components: {
    'navbar': NavBar,
    'carousel': Carousel,
    'page-footer': PageFooter
  },
  mounted () {
    this.fetchArticles()
  },
  methods: {
    fetchArticles: function () {
      fetchCoverInfo().then(data => {
        this.articles = data
      })
    }
  }
}
</script>

<style scoped>
.blog-header {
  background-image: url(../assets/image/blogHeader.jpg);
  height: 857px;
  background-size: 100%;
  opacity: 1;
  height: 500px;
}

.blog-catalogue {
  background-image: url(../assets/image/blogCatalogue.png);
  background-color: rgb(245,245,245);
  background-size: 100%;
  height: 1594px;
}

a {
  text-decoration: none;
}

.article-list {
  width: 93%;
  background-color: red;
  height: atuo;
  margin: 0 3.5%;
}

.box {
  width: 31.0%;
  margin: 1%;
  float: left;
  background-color: rgb(255,255,255);
  border: 2px rgb(225,225,225) solid;
}

img {
  width: 100%;
  height: 150px;
}

.title {
  font-size: 1.4em;
  color: rgb(76,76,76);
  margin: 1em;
  font-family: "BitterBold",Georgia,serif;
}

.abstract, footer {
  margin: 1em;
  color: rgb(155,155,155);
  font-size: 1em;
  font-family: "BitterRegular", Georgia, serif;
}
</style>
