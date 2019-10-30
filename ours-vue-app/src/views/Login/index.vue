<template>
  <div class="login">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>登录</p>
    </div>
    <userMsgs2></userMsgs2>
  </div>
</template>
   
<script>
import userMsgs2 from "./userMsg2"

export default {
  name: "login",
  components: {
    userMsgs2
  },
  methods: {
    lastStep() {
      this.$router.push({ path: "/user" })
    }
  }
}
</script>

<style scoped>
.login {
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
  margin-bottom: 0.3rem;
}
.van-icon-arrow-left {
  position: absolute;
  left: 0.48rem;
  top: 0.5rem;
}
</style>