<template>
  <div>
      <div :class="['weui-mask', { 'mask-hide': !visible }]" ref="DeductionWayActionSheetMask" @click="cancel"></div>
      <div :class="['weui-actionsheet', { 'action-sheet-show': visible }]" id="iosActionsheet">
          <div class="weui-actionsheet__title">
              <h4>选择优先扣费方式</h4>
              <p class="weui-actionsheet__title-text">选择</p>
          </div>
          <div class="weui-actionsheet__menu">
            <div
              class="weui-actionsheet__cell"
              v-for="item in payWays"
              :key="item.id"
              @click="confirm(item.id)">
              {{item.name}}
              <i v-if="form.id === item.id" class="weui-icon-success"></i>
            </div>
          </div>
          <div class="weui-actionsheet__action">
              <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="cancel">取消</div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const defaultForm = {
  id: ''
}

export default {
  name: 'DeductionWayActionSheet',
  data () {
    return {
      form: this.$utils.deepClone(defaultForm),
      visible: false
    }
  },
  computed: {
    ...mapState('userInfo', ['payWays'])
  },
  methods: {
    show (curPayInfo = {}) {
      if (curPayInfo.id) {
        this.form = Object.assign({}, this.$utils.deepClone(defaultForm), curPayInfo)
      } else {
        this.form = this.$utils.deepClone(defaultForm)
      }
      this.visible = true
    },
    confirm (id) {
      this.form.id = id
      this.$emit('confirm', this.form)
      this.visible = false
    },
    cancel () {
      this.$emit('cancel')
      this.visible = false
    }
  }
}
</script>

<style>
.mask-hide {
  display: none;
}
.action-sheet-show {
  transform: translate(0,0);
}
</style>
