<template>
<div class="center">
  <div>未登录</div>
  <a href="javascript:;" @click="goBackToList">回到列表页</a>
</div>
</template>

<script>

export default {
  methods: {
    goBackToList () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less">
</style>
