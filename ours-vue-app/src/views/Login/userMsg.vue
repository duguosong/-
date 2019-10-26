<template>
  <div class="userMsg">
    <div class="userMsg-top common">
      <p>手机号</p>
      <input type="text" placeholder="请输入手机号" />
    </div>
    <div class="userMsg-btm common">
      <p>验证码</p>
      <input type="text" placeholder="请输入验证码" />
      <button @click="sendCode">发送验证码</button>
    </div>
    <div class="protocol">
      <span class="iconfont icon-choosehandle"></span>
      <p>我已阅读并同意</p>
      <div class="protocol-btm">《产品服务协议》</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userMsgs',
  methods: {
    sendCode() {
      console.log(1111111)
    }
  }
}
</script>

<style scoped>
.userMsg {
  width: 100%;
  height: 4.73rem;
}
.common {
  width: 100%;
  height: 2.38rem;
  box-sizing: border-box;
  font-size: 0.44rem;
  padding: 0 0.48rem;
  background: #efefef;
}
.common p {
  box-sizing: border-box;
  padding-top: 0.4rem;
  height: 0.96rem;
}
.common input {
  border: 0;
  height: 1.4rem;
  background: #efefef;
}
.userMsg-top {
  border-bottom: 0.02rem solid #ccc;
}
.userMsg-top input {
  width: 100%;
}

.userMsg-btm input {
  width: 7.3rem;
}
.userMsg-btm button {
  width: 2.4rem;
  border: 0;
  height: 1.42rem;
  background: #efefef;
  color: #ff6c00;
}

.protocol {
  width: 100%;
  height: 1.16rem;
  box-sizing: border-box;
  padding: 0 0.48rem;
  font-size: 0.36rem;
  display: flex;
  align-items: center;
}
.protocol .iconfont {
  color: #51b304;
  padding-right: 0.1rem;
}
.protocol-btm {
  color: #ef7720;
}
</style>