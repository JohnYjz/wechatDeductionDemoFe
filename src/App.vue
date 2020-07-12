<template>
  <div id="app">
    <BasePage>
      <router-view/>
    </BasePage>
  </div>
</template>

<script>
import BasePage from '@/components/BasePage'

export default {
  name: 'App',
  components: {
    BasePage
  }
}
</script>

<style>
</style>
