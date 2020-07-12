<template>
  <div>
    <div v-if="records.length">
      <div v-for="record in records" :key="record.id">
        <h4 class="record-list-title">{{record.month}}</h4>
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_small-appmsg">
                <div class="weui-cells">
                    <a class="weui-cell weui-cell_example" href="javascript:;">
                        <div class="weui-cell__hd"></div>
                        <div class="weui-cell__bd weui-cell_primary">
                          <h4 class="weui-media-box__title">{{record.bussinessName}}</h4>
                          <p class="weui-media-box__desc">{{record.createAt | formatDate}}</p>
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
  </div>
</template>

<script>
export default {
  name: 'RecordList',
  data () {
    return {
      records: []
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
    }
  }
}
</script>

<style scoped>
.record-list-title {
  padding: 0 15px;
  line-height: 2;
}
</style>
