<template>
  <div class="addressBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>地址管理</p>
    </div>
    <div style="flex:1;overflow:auto;">
      <addressMsg></addressMsg>
    </div>
    <div class="btm">
      <van-button
        type="primary"
        size="large"
        color="linear-gradient(to right, #fe6d04, #fb9806)"
        @click="$router.push({path:'/user/address/addAddress'})"
      >添加地址</van-button>
    </div>
  </div>
</template>
<script>
import addAddress from './addAddress'
import addressMsg from './addressMsg'
export default {
  name: 'address',
  components: {
    addAddress,
    addressMsg
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    }
  }
}
</script>
<style scoped>
.addressBox {
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
  margin-bottom: 0.3rem;
}
.van-icon-arrow-left {
  position: absolute;
  left: 0.48rem;
  top: 0.5rem;
}
.btm {
  font-size: 0.4rem;
}
</style>