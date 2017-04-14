<template>
  <div class="boxes">
    <router-link v-for="index in 4" class="box" :to=themeRouter[index-1] :style="{'background-image': getBgImg[index - 1]}"
      @mouseenter.native="updateBgImg(index-1)" @mouseleave.native="updateBgImg(index-1)">
    </router-link>
  </div>
</template>

<script>
let options = ['blog', 'resume', 'work', 'about']

export default {
  name: 'boxes',
  data () {
    return {
      themeRouter: [
        {name: 'blog'},
        {name: 'resume'},
        {name: 'work'},
        {name: 'about'}
      ],
      isActive: [true, true, true, true]
    }
  },
  computed: {
    getBgImg () {
      return this.isActive.map((item, index) => {
        if (item) {
          return 'url(' + require('../assets/image/' + options[index] + '.svg') + ')'
        } else {
          return 'url(' + require('../assets/image/' + options[index] + '-hover.svg') + ')'
        }
      })
    }
  },
  methods: {
    updateBgImg: function (index) {
      this.isActive[index] = !this.isActive[index]
      this.isActive = [].concat(this.isActive)
    }
  }
}
</script>

<style scoped>
.boxes {
  height: 900px;
  margin-left: 6.5%;
  margin-right: 6.5%;
}

.box {
  width: 22.5%;
  height: 350px;
  float: left;
  margin-left: 1.25%;
  margin-right: 1.25%;
  background-color: white;
}
</style>
