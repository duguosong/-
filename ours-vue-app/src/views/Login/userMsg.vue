<template>
  <div>
    <div class="userMsg" v-if="show">
      <div class="userMsg-top common">
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="userMsg-btm common">
        <p>验证码</p>
        <input type="text" placeholder="请输入验证码" @change="changeIn($event)" ref="txt" />
        <button @click="sendCode">发送验证码</button>
      </div>
      <div class="protocol">
        <span class="iconfont icon-choosehandle"></span>
        <p>我已阅读并同意</p>
        <div class="protocol-btm" @click="xieYi">《产品服务协议》</div>
      </div>
      <div class="loginBtn">
        <button @click="loginBtn" ref="loginBtn">登陆</button>
      </div>
      <div class="handover" @click="qieHuan">
        <p>切换至密码登录</p>
      </div>
    </div>

    <div class="userMsg2" v-else>
      <div class="userMsg-top common">
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="userMsg-btm common">
        <p>登录密码</p>
        <input type="text" placeholder="请输入登录密码" @change="changeIn($event)" ref="txt" />
      </div>
      <div class="protocol">
        <span class="iconfont icon-choosehandle"></span>
        <p>我已阅读并同意</p>
        <div class="protocol-btm" @click="xieYi">《产品服务协议》</div>
      </div>
      <div class="loginBtn">
        <button @click="loginBtn" ref="loginBtn">登陆</button>
      </div>
      <div class="handover" @click="qieHuan">
        <p>切换至验证码登录</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userMsgs',
  data() {
    return {
      show: true
    }
  },
  methods: {
    sendCode() {
      console.log(1111111)
    },
    loginBtn() {
      console.log(2222222)
    },
    xieYi() {
      this.$router.push({ path: '/protocol' })
    },
    qieHuan() {
      this.show = !this.show
      this.$refs.txt.value = ''
    },
    changeIn(e) {
      this.$refs.loginBtn.style.backgroundColor = '#ff6c00'
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
  background: #fff;
}
.common p {
  box-sizing: border-box;
  padding-top: 0.4rem;
  height: 0.96rem;
}
.common input {
  border: 0;
  height: 1.4rem;
  background: #fff;
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
  background: #fff;
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

.loginBtn {
  width: 100%;
  height: 1.4rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: center;
}
.loginBtn button {
  border: 0;
  border-radius: 0.1rem;
  background: #f4c897;
  width: 9.6rem;
  height: 1.4rem;
  color: #fff;
  font-size: 0.44rem;
}

.handover {
  width: 100%;
  height: 0.4rem;
  font-size: 0.4rem;
  line-height: 0.4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: 0.68rem;
  color: #979797;
}
</style>