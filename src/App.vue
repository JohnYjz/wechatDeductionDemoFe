<template>
  <div id="app">
    <BasePage>
      <router-view :key="key"/>
    </BasePage>
  </div>
</template>

<script>
import BasePage from '@/components/BasePage'

export default {
  name: 'App',
  components: {
    BasePage
  },
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style>
</style>
