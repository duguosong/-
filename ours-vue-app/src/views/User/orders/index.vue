<template>
  <div class="orderBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>订单</p>
    </div>

    <van-tabs v-model="active" title-active-color="#ff7f00" color="#fff">
      <van-tab title="全部" class="active">
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
import allorder from "./all" //全部
import receiving from "./Receiving" //待收货
import obligation from "./obligation" //待付款
import shaiDan from "./shaiDan" //可晒单
import shipments from "./shipments" //待发货

export default {
  name: "order",
  components: {
    allorder,
    receiving,
    obligation,
    shaiDan,
    shipments
  },
  data() {
    return {
      active: this.$route.params.id
    }
  },
  methods: {
    lastStep() {
      window.history.go(-1)
      console.log(this.$route.params.id)
      console.log(this.active)
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
<style>
.van-tabs--line .van-tabs__wrap {
  height: 1.68rem;
  box-sizing: border-box;
}
.van-tab {
  font-size: 0.4rem;
  box-sizing: border-box;
  padding-top: 0.38rem;
  margin: 0 0.3rem;
}
.van-ellipsis {
  width: 2.16rem;
  height: 0.9rem;
  line-height: 0.9rem;
  border-radius: 0.4rem;
  box-sizing: border-box;
  border: 0.03rem solid #b2b2b2;
}

/* .active {
  background-image: linear-gradient(to right, #fe6d04, #fb9806);
  color: #fff;
  border: 0;
} */
.van-ellipsis:hover {
  background-image: linear-gradient(to right, #fe6d04, #fb9806);
  color: #fff;
  border: 0;
}
</style>