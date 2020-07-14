<template>
  <div class="detail">
    <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <h4 class="weui-media-box__title">{{orderDetail.bussinessName}}</h4>
                <p class="weui-media-box__desc">{{orderDetail.description}}</p>
            </div>
            <div class="weui-form-preview__bd">
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">当前状态</label>
                    <span class="weui-form-preview__value">{{orderDetail.state}}</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">签约时间</label>
                    <span class="weui-form-preview__value">{{orderDetail.meta.createAt | formatDate}}</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">开通账号</label>
                    <span class="weui-form-preview__value">{{orderDetail.user.userName}}</span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">扣款方式</label>
                    <span class="weui-form-preview__value">
                      {{payWayMap[orderDetail.payId]}}
                      <a href="javascript:;" @click="goToDeductionWay">修改</a>
                    </span>
                </div>
                <div class="weui-form-preview__item">
                    <label class="weui-form-preview__label">详情</label>
                    <span class="weui-form-preview__value">{{orderDetail.remarks}}</span>
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
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  name: 'Detail',
  data () {
    return {
      orderDetail: {}
    }
  },
  created () {
    this.initPage()
  },
  computed: {
    ...mapGetters('userInfo', ['payWayMap'])
  },
  methods: {
    async initPage () {
      const id = this.$route.query.id
      const data = await this.$request.getDeductionOrderDetail({ id })
      this.orderDetail = data
    },
    showCloseDialog () {
      this.$confirm(`是否确认关闭${this.orderDetail.bussinessName}`, {
        buttons: [{
          label: '取消',
          type: 'default'
        }, {
          label: '仍要关闭',
          type: 'primary',
          onClick: () => {
            this.confirmCloseOrder()
          }
        }]
      })
    },
    async confirmCloseOrder () {
      const id = this.$route.query.id
      await this.$request.closeOrder({ id })
      this.$router.push('/')
    },
    goToRecordList () {
      const id = this.$route.query.id
      this.$router.push(`/RecordList?id=${id}`)
    },
    goToDeductionWay () {
      const { id, payId } = this.$route.query
      this.$router.push(`/DeductionWay?id=${id}&payId=${payId}`)
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
