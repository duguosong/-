<template>
  <!-- 我的账单 -->
  <div class="redPackBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>我的红包</p>
    </div>
    <div class="nav">
      <van-button
        class="navBtn"
        :class="{active:0==isActive}"
        ref="navBtn0"
        type="default"
        @click="allBill"
      >未使用</van-button>
      <van-button
        class="navBtn"
        :class="{active:1==isActive}"
        ref="navBtn1"
        type="default"
        @click="weiBill"
      >已使用</van-button>
      <van-button
        class="navBtn"
        :class="{active:2==isActive}"
        ref="navBtn2"
        type="default"
        @click="yiBill"
      >已过期</van-button>
    </div>
    <!-- 组件限制区域 -->
    <div class="billCont">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "redPack",
  data() {
    return {
      isActive: ""
    }
  },
  methods: {
    lastStep() {
      this.$router.push({ path: "/user" })
    },
    allBill() {
      console.log("点击了未使用")
      this.isActive = 0
      this.$router.push({
        name: "Unused"
      })
    },
    weiBill() {
      console.log("点击了已使用")
      this.isActive = 1
      this.$router.push({
        name: "Used"
      })
    },
    yiBill() {
      console.log("点击了已过期")
      this.isActive = 2
      this.$router.push({
        name: "Expired"
      })
    }
  }
}
</script>
<style scoped>
.redPackBox {
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
.nav {
  width: 100%;
  height: 2.1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.2rem;
}
.navBtn {
  color: #b2b2b2;
  width: 2.6rem;
  height: 0.9rem;
  line-height: 0.9rem;
  box-sizing: border-box;
  border: 0.03rem solid #b2b2b2;
  border-radius: 0.4rem;
}
.active {
  background-image: linear-gradient(to right, #fe6d04, #fb9806);
  color: #fff;
  border: 0;
}
.billCont {
  flex: 1;
  overflow: auto;
}
</style>