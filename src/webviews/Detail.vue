<template>
  <div class="detail">
    <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <h4 class="weui-media-box__title">摩拜单车微信免密支付</h4>
                <p class="weui-media-box__desc">北京摩拜科技有限公司</p>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">当前状态</label>
                    <span class="weui-form-preview__value">生效中</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">签约时间</label>
                    <span class="weui-form-preview__value">2020</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">开通账号</label>
                    <span class="weui-form-preview__value">小明</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">扣款方式</label>
                    <span class="weui-form-preview__value">零钱
                      <a href="javascript:;" @click="goToDeductionWay">修改</a>
                    </span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">详情</label>
                    <span class="weui-form-preview__value">很长</span>
                </div>
            </div>
            <div class="weui-form-preview__ft">
                <a class="weui-form-preview__btn weui-form-preview__btn_default" href="javascript:" @click="goToRecordList">
                  扣费记录
                </a>
            </div>
        </div>
    <div class="weui-panel">
      <a href="javascript:" class="weui-btn_cell weui-btn_cell-warn" @click="showCloseDialog">关闭服务</a>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  name: 'Detail',
  data () {
    return {
      name: '知乎严选会员'
    }
  },
  methods: {
    showCloseDialog () {
      this.$confirm(`是否确认关闭${this.name}`, {
        buttons: [{
          label: '取消',
          type: 'default',
          onClick () {

          }
        }, {
          label: '仍要关闭',
          type: 'primary',
          onClick () {

          }
        }]
      })
    },
    goToRecordList () {
      this.$router.push('/RecordList')
    },
    goToDeductionWay () {
      this.$router.push('/DeductionWay')
    }
  }
}
</script>

<style lang="less">
.detail {
  .weui-form-preview__hd {
    text-align: center;
  }
  .weui-form-preview__hd:after {
    left: 0;
  }
  .weui-form-preview__bd .weui-form-preview__value {
    text-align: left;
  }
}
</style>
