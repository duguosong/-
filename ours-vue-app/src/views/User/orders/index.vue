<template>
  <div class="orderBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>订单</p>
    </div>

    <van-tabs v-model="active" title-active-color="#ff7f00" color="orgin">
      <van-tab title="全部"></van-tab>
      <van-tab title="代付款"></van-tab>
      <van-tab title="代发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="可晒单"></van-tab>
    </van-tabs>

    <div style="flex: 1; overflow: auto; ">
      <allorder v-if="active==0?true:false"></allorder>
      <obligation v-if="active==1?true:false"></obligation>
      <shipments v-if="active==2?true:false"></shipments>
      <receiving v-if="active==3?true:false"></receiving>
      <shaiDan v-if="active==4?true:false"></shaiDan>
    </div>
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
      // window.history.go(-1)
      this.$router.push({
        name: "User"
      })
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
  display: flex;
  flex-direction: column;
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
</style>
