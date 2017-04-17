<template>
  <div class="hello">
    <navbar></navbar>
    <div class="blog-header">
      <carousel></carousel>
    </div>
    <div class="blog-catalogue">
      <div v-for="article in articles">
        <router-link :to="{name: 'article', params: {id: article.id}}">
          <el-col :span="7" :offset="0" :key="article.id">
          <el-card :body-style="{ padding: '0px' }">
            <!--img :src="String(article.images).replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')" v-if="article.images"-->
            <div style="padding: 14px;float:left;">
              <span class="title">{{ article.title }}</span>
              <div class="bottom clearfix">
                <div class="abstract">{{ article.abstract }}</div>
                <time class="time">{{ article.created_time.slice(0, 10) }}</time>
                <el-button type="text" class="button">点击阅读</el-button>
              </div>
            </div>            
          </el-card>
          </el-col>
        </router-link>
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
  background-image: url(../assets/image/blogCatalogue.jpg);
  background-size: 100%;
  height: 1594px;
  opacity: 1;
}

.el-col {
  margin: 10%;
}

.abstract, .time {
  font-size: 1em;
  color: rgb(155, 155, 155);
  margin: 10px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.title {
  font-size: 1.4em;
  color: rgb(76,76,76);
}
</style>
