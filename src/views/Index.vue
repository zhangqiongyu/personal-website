<template>
  <div class="index">
    <navbar></navbar>
    <theme-box></theme-box>
    <display></display>
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import ThemeBox from '@/components/ThemeBox'
import Display from '@/components/Display'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components: {
    'navbar': NavBar,
    'theme-box': ThemeBox,
    'display': Display,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>

</style>
