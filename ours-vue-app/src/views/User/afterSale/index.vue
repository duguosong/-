<template>
  <div class="afterSaleBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>售后服务</p>
    </div>
    <div style="display: flex;
  flex-direction: column;
    align-items: center;
  ">
      <wuMsg></wuMsg>
    </div>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"
export default {
  name: "afterSale",
  components: {
    wuMsg
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    }
  }
}
</script>
<style scoped>
.afterSaleBox {
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