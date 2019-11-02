<template>
  <!-- 注册页面组件 -->
  <div>
    <!-- 使用验证码登录 -->
    <div class="userMsg">
      <div class="userMsg-top common">
        <p>手机号</p>
        <!-- maxlength="11" 限制输入框的输入长度  在type="text"类型的input里面有效果 -->
        <input ref="loginTel" v-model="tel" type="text" maxlength="11" placeholder="请输入手机号" />
      </div>
      <div class="userMsg-btm common">
        <p>验证码</p>
        <input ref="loginYz" v-model="yanZ" type="text" placeholder="请输入验证码" />
        <button @click="sendCode">发送验证码</button>
      </div>

      <div class="userMsg-pwd common">
        <p>用户密码</p>
        <input
          ref="pwd"
          type="password"
          @blur="changeIn($event)"
          v-model="pwd"
          minlength="6"
          maxlength="20"
          placeholder="请输入6~20位密码"
        />
      </div>

      <div class="eye" @click="eye">
        <van-icon name="closed-eye" size="0.8rem" v-if="eyeOpen" color="#aaa" />
        <van-icon name="eye-o" size="0.8rem" v-else color="#aaa" />
      </div>

      <div class="protocol">
        <span class="iconfont icon-choosehandle"></span>
        <p>我已阅读并同意</p>
        <div class="protocol-btm" @click="xieYi">《产品服务协议》</div>
      </div>
      <div class="loginBtn">
        <button @click="regBtn" ref="loginBtn">注册</button>
      </div>
      <div class="handover" @click="toLogin">
        <p>已有账号,立即登录</p>
      </div>
    </div>
    <!-- 使用密码登录 -->
    <!-- <div class="userMsg2" v-else>
      <div class="userMsg-top common">
        <p>手机号</p>
        <input ref="loginTelM" v-model="tel" type="text" maxlength="11" placeholder="请输入手机号" />
      </div>
      <div class="userMsg-btm common">
        <p>登录密码</p>
        <input
          ref="loginPwd"
          v-model="pwd"
          type="text"
          minlength="6"
          maxlength="20"
          placeholder="请输入登录密码"
          @blur="changeIn($event)"
        />
      </div>
      <div class="protocol">
        <span class="iconfont icon-choosehandle"></span>
        <p>我已阅读并同意</p>
        <div class="protocol-btm" @click="xieYi">《产品服务协议》</div>
      </div>
      <div class="loginBtn">
        <button @click="loginBtn" ref="loginBtn">登陆</button>
      </div>
      <div class="handover">
        <p>切换至验证码登录</p> 
      </div>
    </div>-->
  </div>
</template>
<script>
import { reg, login } from "../../api/user"
import { Toast } from "vant" // 提示框
import { Notify } from "vant" // 通知栏
export default {
  name: "userMsgs",
  data() {
    return {
      tel: "",
      pwd: "",
      yanZ: "",
      eyeOpen: true
    }
  },
  methods: {
    sendCode() {
      //  手机号输入正确之后 才能点击 "发送验证码" 按钮
      if (
        /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(
          this.tel
        )
      ) {
        this.yanZ = Math.round(Math.random() * (10000 - 1000) + 1000)
        Notify({
          type: "primary",
          message: "验证码为:" + this.yanZ,
          duration: 6000
        })
        console.log("点击了发送验证码")
        //console.log(this.yanZ)
      } else {
        Toast("请输入正确的手机号")
      }
    },
    regBtn() {
      // 当 手机号和验证码,密码 都不为空 可以点击 注册按钮
      if (this.tel != "" && this.yanZ != "" && this.pwd != "") {
        console.log("点击了注册按钮")
        reg({
          userName: this.tel,
          password: this.pwd
        }).then(res => {
          console.log(res)
          if (res.data.code == '"success"') {
            Toast("注册成功!")
            setTimeout(() => {
              this.$router.push({ path: "/login" })
            }, 800)
          } else {
            Toast(res.data.message)
            setTimeout(() => {
              this.$router.push({ path: "/login" })
            }, 1000)
          }
        })
      }
    },
    /*      //当 手机号和验证码,密码 都不为空 可以点击 登录按钮
    loginBtn() {
      // 当 手机号和密码 都不为空 可以点击 登录按钮
      if (this.tel != "" && this.pwd != "") {
        console.log("点击了登录按钮")
        login({
          userName: this.tel,
          password: this.pwd
        }).then(res => {
          console.log(res)
          localStorage.setItem("token", res.data.token)
        })
      }
    }, */
    // 已有账号 点击 切换到登录页面
    toLogin() {
      this.$router.push({ path: "/login" })
    },

    xieYi() {
      // 点击按钮跳转到的 协议页面
      this.$router.push({ path: "/protocol" })
    },
    //失去焦点的时候  密码不为空 登录按钮变色
    changeIn(e) {
      // console.log(this.pwd)
      if (this.pwd != "") {
        this.$refs.loginBtn.style.backgroundColor = "#ff6c00"
      } else {
        this.$refs.loginBtn.style.backgroundColor = "#f4c897"
      }
    },
    // 密码的显示和隐藏 没有输入密码时点击无效果
    eye() {
      //  onsole.log(this.eyeOpen)
      // console.log(this.pwd)
      if (this.pwd) {
        this.eyeOpen = !this.eyeOpen
        if (!this.eyeOpen) {
          this.$refs.pwd.type = "text"
        } else {
          this.$refs.pwd.type = "password"
        }
      }
    }
  }
}
</script>

<style scoped>
.userMsg {
  width: 100%;
  min-height: 4.73rem;
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
.userMsg-pwd input {
  width: 100%;
  position: relative;
}
.userMsg-btm input {
  width: 7.3rem;
}
.userMsg-btm {
  border-bottom: 0.02rem solid #ccc;
}
.userMsg-btm button {
  width: 2.4rem;
  border: 0;
  height: 1.4rem;
  background: #fff;
  color: #ff6c00;
}
.eye {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 7.6rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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