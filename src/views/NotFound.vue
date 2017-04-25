<template>
  <div class="not-found">
    <navbar></navbar>
    <div>404 not found</div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import PageFooter from '@/components/PageFooter'

export default {
  components: {
    'navbar': NavBar,
    'page-footer': PageFooter
  }
}
</script>

<style scoped>
</style>
