<template>
  <div class="pagination">
    <div class="pagination-box">
      <router-link v-if="olderEntries" :to="{name: 'blog', params: {id: pageId + 1}}">
        <div class="pagination-left">
          Older Entries
        </div>
      </router-link>
    </div>
    <div class="pagination-box">
      <router-link v-if="newerEntries" :to="{name: 'blog', params: {id: pageId - 1}}">
        <div class="pagination-right">
          Newer Entries
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: ['olderEntries', 'newerEntries', 'pageId']
}
</script>

<style scoped>
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
