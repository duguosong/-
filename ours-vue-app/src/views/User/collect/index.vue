<template>
  <div class="collectBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>我的收藏</p>
    </div>
    <div class="collectCont">
      <collectCont></collectCont>
    </div>
  </div>
</template>
<script>
import collectCont from "./collectCont"
export default {
  name: "collect",
  components: {
    collectCont
  },
  methods: {
    lastStep() {
      this.$router.push({ path: "/user" })
    }
  }
}
</script>
<style scoped>
.collectBox {
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