<template>
  <div class="flex-wrapper">
    <div class="weui-panel__bd flex-body">
        <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells" v-for="order in orders" :key="order._id">
                <a class="weui-cell weui-cell_active weui-cell_access weui-cell_example" href="javascript:;" @click="goToDetail(order)">
                    <div class="weui-cell__hd"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="" style="width: 20px; height: 20px; margin-right: 16px; display: block;"></div>
                    <div class="weui-cell__bd weui-cell_primary">
                      <h4 class="weui-media-box__title">{{order.name}}</h4>
                      <p class="weui-media-box__desc">{{order.description}}</p>
                    </div>
                    <span class="weui-cell__ft"></span>
                </a>
            </div>
        </div>
    </div>
    <div class="weui-footer">
        <p class="weui-footer__links">
            <a href="javascript:home();" class="weui-footer__link" @click="goToCloseList">已关闭服务</a>
        </p>
    </div>
  </div>
</template>

<script>
import { ORDER_STATE } from '@/constant'

export default {
  name: 'List',
  props: {
    orderState: {
      type: String
    }
  },
  data () {
    return {
      orders: []
    }
  },
  created () {
    this.initPage()
  },
  methods: {
    async initPage () {
      if (this.orderState === ORDER_STATE.VALID) {
        const data = await this.$request.getDeductionOrders()
        for (let i = 0; i < 20; i++) {
          this.orders.push(data[0])
        }
        // this.orders = data
      } else {
        const data = await this.$request.getDeductionCloseOrders()
        this.orders = data
      }
    },
    goToDetail ({ _id, payId }) {
      this.$router.push(`/detail?id=${_id}&payId=${payId}`)
    },
    goToCloseList () {
      this.$router.push('/closeList')
    }
  }
}
</script>

<style>
</style>
