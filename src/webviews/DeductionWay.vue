<template>
  <div class="deduction-wrapper">
    <p class="hint-text">所选扣费方式无法扣除时，将改用账号中其他扣费方式</p>
    <div class="weui-cells">
        <a class="weui-cell  weui-cell_access" href="javascript:" @click="showDeductionWayActionSheet">
            <div class="weui-cell__bd">
              <span  class="deduction-way-key">优先扣费方式</span>
              <span>{{payWayMap[form.payId]}}</span>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
    </div>
    <a href="javascript:" class="weui-btn weui-btn_primary" @click="confirm">确定</a>
    <p class="hint-text center">所选扣费方式无法扣除时，将改用账号中其他扣费方式</p>
    <DeductionWayActionSheet ref="DeductionWayActionSheet" @confirm="onDeductionWayChange"/>
  </div>
</template>

<script>
import DeductionWayActionSheet from '@/components/DeductionWayActionSheet'
import { mapGetters } from 'vuex'

const defaultForm = {
  id: '',
  payId: ''
}

export default {
  name: 'DeductionWay',
  components: {
    DeductionWayActionSheet
  },
  data () {
    return {
      form: this.$utils.deepClone(defaultForm)
    }
  },
  computed: {
    ...mapGetters('userInfo', ['payWayMap'])
  },
  created () {
    this.initPage()
  },
  methods: {
    initPage () {
      const { id, payId } = this.$route.query
      this.form = Object.assign({}, defaultForm, {
        id,
        payId
      })
    },
    showDeductionWayActionSheet () {
      this.$refs.DeductionWayActionSheet.show({ id: this.form.payId })
    },
    onDeductionWayChange ({ id }) {
      this.form.payId = id
    },
    async confirm () {
      const res = await this.$request.editDeductionWay(this.form)
      this.form.payId = res.payId
      this.$router.push(`/detail?id=${res._id}&payId=${res.payId}`)
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
