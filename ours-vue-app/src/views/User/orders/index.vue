<template>
  <div class="orderBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>订单</p>
    </div>

    <van-tabs v-model="active" title-active-color="#ff7f00">
      <van-tab title="全部">
        <allorder></allorder>
      </van-tab>
      <van-tab title="代付款">
        <obligation></obligation>
      </van-tab>
      <van-tab title="代发货">
        <shipments></shipments>
      </van-tab>
      <van-tab title="待收货">
        <receiving></receiving>
      </van-tab>
      <van-tab title="可晒单">
        <shaiDan></shaiDan>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import allorder from './all' //全部
import receiving from './Receiving' //待收货
import obligation from './obligation' //待付款
import shaiDan from './shaiDan' //可晒单
import shipments from './shipments' //待发货

export default {
  name: 'order',
  components: {
    allorder,
    receiving,
    obligation,
    shaiDan,
    shipments
  },
  data() {
    return {
      active: 0
    }
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    }
  }
}
</script>
<style scoped>
.orderBox {
  width: 100%;
  height: 100%;
  background: #efefef;
}
.title {
  width: 100%;
  height: 1.38rem;
  background: #fff;
  font-size: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 0.48rem;
}
.van-icon-arrow-left {
  position: absolute;
  left: 0.48rem;
  top: 0.5rem;
}
.van-tab {
  color: red !important;
}
</style>