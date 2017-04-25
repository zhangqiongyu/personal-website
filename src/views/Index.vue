<template>
  <div class="index">
    <navbar></navbar>
    <home-header></home-header>
    <theme-box></theme-box>
    <!--home-display></home-display-->
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import HomeHeader from '@/components/HomeHeader'
import ThemeBox from '@/components/ThemeBox'
import HomeDisplay from '@/components/HomeDisplay'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    'navbar': NavBar,
    'home-header': HomeHeader,
    'theme-box': ThemeBox,
    'home-display': HomeDisplay,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>

</style>
