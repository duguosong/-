<template>
  <div class="cPwd">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>修改密码</p>
    </div>
    <changePwd></changePwd>
  </div>
</template>
<script>
import changePwd from './changePassword-cont'
export default {
  name: 'changePassword',
  components: {
    changePwd
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
.cPwd {
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