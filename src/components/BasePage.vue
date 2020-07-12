<template>
  <div class="base-page-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BasePageWrapper',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.base-page-wrapper {
  background-color: #ededed;
  height: 100vh;
  overflow-y: auto;
  padding-top: 5px;
}
</style>
