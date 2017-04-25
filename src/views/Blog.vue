<template>
  <div class="hello">
    <navbar></navbar>
    <div class="blog-header">
      <carousel :backgroundImg="backgroundImg"></carousel>
    </div>
    <div class="blog-catalogue">
      <div class="article-list">
        <router-link v-for="article in articles"
          :to="{name: 'article', params: {id: article.id}}" :key="article.id">
          <div class="box">
            <img :src=article.bg_img v-if="article.bg_img">
            <h2 class="title">{{ article.title }}</h2>
            <div v-if="article.abstract" class="abstract">{{ article.abstract }}</div>
            <div v-else class="abstract">{{ article.body.slice(0,54) }}</div>
            <footer>{{ article.created_time }}</footer>
          </div>
        </router-link>
      </div>
    </div>
      <div class="pagination">
        <div class="pagination-box">
          <div class="router" v-if="olderEntries" @click="goToPreviousPage">
            <div class="pagination-left">
              Older Entries
            </div>
          </div>
        </div>
        <div class="pagination-box">
          <div class="router" v-if="newerEntries" @click="goToNextPage">
            <div class="pagination-right">
              Newer Entries
            </div>
          </div>
        </div>
      </div>
      <!--pagination
        :total="100"
        :page-size="10"
        :current-page="2"
        @current-change="handleChange"
      ></pagination-->
    <page-footer></page-footer>
  </div>
</template>

<script>
import {fetchInfoByPageId} from '@/utils/api'

import NavBar from '@/components/NavBar'
import Carousel from '@/components/Carousel'
// import Pagination from '@/components/Pagination.js'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'hello',
  data () {
    return {
      articles: [],
      backgroundImg: [],
      newerEntries: false,
      olderEntries: true,
      pageId: 1
    }
  },
  components: {
    'navbar': NavBar,
    'carousel': Carousel,
    // 'pagination': Pagination,
    'page-footer': PageFooter
  },
  mounted () {
    this.fetchArticles()
  },
  methods: {
    fetchArticles: function () {
      this.pageId = this.$route.params.id
      let id = this.pageId
      fetchInfoByPageId(id).then(data => {
        this.olderEntries = data.next !== null
        this.newerEntries = data.previous !== null
        this.articles = data.results
        let indexSet = new Set()
        let indexSize = data.results.length > 4 ? 4 : data.results.length
        while (indexSet.size < indexSize) {
          indexSet.add(Math.floor(Math.random() * (this.articles.length)))
        }
        this.backgroundImg = []
        indexSet.forEach(value => {
          this.backgroundImg = this.backgroundImg.concat(this.articles[value])
        })
      })
    },
    goToNextPage: function () {
      this.pageId --
      this.$router.push({name: 'blog', params: {id: this.pageId}})
    },
    goToPreviousPage: function () {
      this.pageId ++
      this.$router.push({name: 'blog', params: {id: this.pageId}})
    },
    handleChange (pageId) {
      this.$router.push({name: 'blog', params: {id: pageId}})
    }
  },
  watch: {
    '$route' (to, from) {
      this.fetchArticles()
    }
  }
}
</script>

<style scoped>
.blog {
  background-color: rgb(244,244,244);
}

.blog-header {
  height: 857px;
  background-size: 100%;
  opacity: 1;
  height: 400px;
  padding-top: 50px;
  background-color: rgb(43,180,138);
}

.blog-catalogue {
  background-size: 100%;
  height: 850px;
}

a {
  text-decoration: none;
}

.article-list {
  width: 93%;
  background-color: red;
  height: atuo;
  margin: 0 3.5%;
  background-color: rgb(43,180,138);
}

.box {
  width: 22.6%;
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

.pagination {
  height: 50px;
  width: 93%;
  margin: 0 3.5% 30px 3.5%;
}

.pagination-box {
  width: 49.6668%;
  background-color: rgb(236,236,236);
  height: 100%;
  float: left;
  border: 2px white solid;
}

.router {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.pagination-left, .pagination-right {
  width: 100%;
  height: 100%;
  float: left;

  text-align: center;
  font-size: 1.2em;
  font-family: "BitterRegular", Georgia, serif;
  color: rgb(128, 128, 128);
}

.pagination-left:before {
  left: 20px;
  background-image: url(../assets/image/arrow_left.svg);
}

.pagination-right:before {
  right: -560px;
  background-image: url(../assets/image/arrow_right.svg);
}


.pagination-right:before, .pagination-left:before{
  position: relative;
  top: 50%;
  margin-top: -12px;
  width: 16px;
  height: 23px;
  display: block;
  content: "";
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>
