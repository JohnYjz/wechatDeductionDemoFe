<template>
  <div>
    <div class="weui-form">
      <div class="weui-form__text-area">
        <h2 class="weui-form__title">添加新扣费项</h2>
      </div>
      <div class="weui-form__control-area">
        <div class="weui-cells__group weui-cells__group_form">
          <div class="weui-cells weui-cells_form">
            <div class="weui-cell weui-cell_active">
              <div class="weui-cell__hd"><label class="weui-label">商家</label></div>
              <div class="weui-cell__bd">
                  <input id="js_input" class="weui-input" v-model="form.bussinessName" placeholder="输入商家名称"/>
              </div>
            </div>
            <div class="weui-cell weui-cell_active" @click="showDeductionWayActionSheet">
              <div class="weui-cell__hd"><label class="weui-label">扣费方式</label></div>
                <div class="weui-cell__bd">
                  {{payWayMap[form.payId]}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-form__opr-area">
          <a :class="['weui-btn', 'weui-btn_primary', { 'weui-btn_disabled': disableConfirm }]" href="javascript:" id="showTooltips" @click="confirm">确定</a>
        </div>
      </div>
      <DeductionWayActionSheet ref="DeductionWayActionSheet" @confirm="onDeductionWayChange"/>
  </div>
</template>

<script>
import DeductionWayActionSheet from '@/components/DeductionWayActionSheet'
import { mapGetters } from 'vuex'

const deafultForm = {
  payId: '',
  bussinessName: ''
}

export default {
  name: 'Create',
  components: {
    DeductionWayActionSheet
  },
  data () {
    return {
      form: this.$utils.deepClone(deafultForm)
    }
  },
  computed: {
    disableConfirm () {
      if (!this.form.payId) return true
      if (!this.form.bussinessName) return true
      return false
    },
    ...mapGetters('userInfo', ['payWayMap'])
  },
  methods: {
    showDeductionWayActionSheet () {
      this.$refs.DeductionWayActionSheet.show()
    },
    onDeductionWayChange ({ id }) {
      this.form.payId = id
    },
    async confirm () {
      await this.$request.createDeduction(this.form)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
</style>
