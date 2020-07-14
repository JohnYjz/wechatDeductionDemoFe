<template>
  <div class="flex-wrapper">
    <div v-if="records.length" class="flex-body">
      <div v-for="record in records" :key="record.id">
        <h4 class="record-list-title">{{record.month}}</h4>
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_small-appmsg">
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_example" href="javascript:;">
                        <div class="weui-cell__hd"></div>
                        <div class="weui-cell__bd weui-cell_primary">
                          <h4 class="weui-media-box__title">{{record.bussinessName}}</h4>
                          <p class="weui-media-box__desc">{{record.meta.createAt | formatDate}}</p>
                        </div>
                        <span class="weui-cell__ft">
                          {{record.amount}}
                        </span>
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
    <p v-else class="hint-text center">没有记录</p>
    <div class="button-sp-area cell">
      <div class="weui-cell weui-cell_active record-list-mock-new">
        <div class="weui-cell__hd"><label class="weui-label">金额</label></div>
        <div class="weui-cell__bd">
            <input id="js_input" class="weui-input" type="number" placeholder="输入金额（数字）" v-model="amount"/>
        </div>
      </div>
      <a href="javascript:" class="weui-btn_cell weui-btn_cell-default" @click="create">点击添加一条记录（mock）</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordList',
  data () {
    return {
      records: [],
      amount: ''
    }
  },
  created () {
    this.initPage()
  },
  methods: {
    async initPage () {
      const id = this.$route.query.id
      const data = await this.$request.getDeductionRecordsByOrderId({ id })
      this.records = data
    },
    async create () {
      if (!this.amount) return
      const id = this.$route.query.id
      const data = {
        order: id,
        amount: this.amount
      }
      await this.$request.createRecord(data)
      this.initPage()
    }
  }
}
</script>

<style>
.record-list-mock-new {
  background-color: white;
}
.record-list-title {
  padding: 0 15px;
  line-height: 2;
}
</style>
