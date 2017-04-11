<template>
  <div class="navbar">
    <div class="nav-item" v-for="(title, index) in themeTitle">
      <router-link :to=themeRouter[index]>
        {{title}}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      themeTitle: [
        'Home',
        'Blog',
        'Resume',
        'Work',
        'About'
      ],
      themeRouter: [
        {name: 'index'},
        {name: 'blog'},
        {name: 'work'},
        {name: 'resume'},
        {name: 'about'}
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
}

.nav-item {
  display: inline-block;
  margin: 15px 60px;
}

a {
  text-decoration: none;
  color: white;
  font-family: "PingHei","Helvetica Neue","Helvetica","Arial","Verdana","sans-serif";
}

a:hover {
  color: rgb(89, 166, 225);
}
</style>
