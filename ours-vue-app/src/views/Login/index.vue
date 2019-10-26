<template>
  <div class="login">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>登录</p>
    </div>
    <userMsgs></userMsgs>
    <!--  <div class="userMsg">
      <van-panel title="标题" desc="描述信息" status="状态"></van-panel>
      <van-panel title="标题" desc="描述信息" status="状态"></van-panel>
    </div>-->
  </div>
</template>

<script>
import userMsgs from './userMsg'
export default {
  name: 'login',
  components: {
    userMsgs
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