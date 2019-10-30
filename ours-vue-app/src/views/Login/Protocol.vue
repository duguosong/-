<template>
  <div>
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>产品服务协议</p>
    </div>
    <protocolTxt></protocolTxt>
  </div>
</template>
<script>
import protocolTxt from '../Login/protocolTxt'
export default {
  name: 'protocol',
  components: {
    protocolTxt
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    }
  }
}
</script>
<style scoped>
.title {
  width: 100%;
  height: 1.38rem;
  background: #efefef;
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
</style>