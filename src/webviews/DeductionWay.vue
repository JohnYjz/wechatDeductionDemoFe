<template>
  <div class="deduction-wrapper">
    <p class="hint-text">所选扣费方式无法扣除时，将改用账号中其他扣费方式</p>
    <div class="weui-cells">
        <a class="weui-cell  weui-cell_access" href="javascript:" @click="showActionSheet">
            <div class="weui-cell__bd">
              <span  class="deduction-way-key">优先扣费方式</span>
              <span>零钱</span>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
    </div>
    <a href="javascript:" class="weui-btn weui-btn_primary">确定</a>
    <p class="hint-text center">所选扣费方式无法扣除时，将改用账号中其他扣费方式</p>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goToDetail () {
      this.$router.push('/detail')
    },
    showActionSheet () {
      this.$router.push()
    }
  }
}
</script>

<style lang="less">
.deduction-wrapper {
  .deduction-way-key {
    margin-right: 10px;
  }
  .weui-btn {
    width: auto;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
