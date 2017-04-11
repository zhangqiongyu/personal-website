<template>
  <div class="hello">
    <navbar></navbar>
    尚未开通，敬请期待
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'hello',
  data () {
    return {
    }
  },
  components: {
    'navbar': NavBar,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>

</style>
