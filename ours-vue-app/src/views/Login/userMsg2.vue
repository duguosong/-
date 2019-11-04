<template>
  <!-- 登录页面组件 -->
  <div class="userMsg2">
    <div class="userMsg-top common">
      <p>手机号</p>
      <input
        type="text"
        v-model="tel"
        minlength="11"
        maxlength="11"
        placeholder="请输入手机号"
        @blur="sendCode"
      />
    </div>
    <div class="userMsg-btm common">
      <p>登录密码</p>
      <input
        ref="pwd"
        type="password"
        v-model="pwd"
        minlength="6"
        maxlength="20"
        placeholder="请输入6~20位登录密码"
        @blur="changIn($event)"
      />
    </div>

    <!--密码的显示和隐藏 -->
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
      <button @click="loginBtn" ref="loginBtn">登陆</button>
    </div>
    <div class="handover" @click="toReg">
      <p>还没账号?点击立即注册</p>
    </div>
  </div>
</template>
<script>
import { reg, login } from "../../api/user"
import { setToken } from "../../utils/auth"
import { Toast } from "vant" // 提示框
export default {
  name: "userMsgs2",
  data() {
    return {
      tel: "",
      pwd: "",
      yanzheng: false,
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
        this.yanzheng = true
      } else {
        Toast("请输入正确的手机号")
      }
    },
    loginBtn() {
      // 当 手机号和密码 都不为空 可以点击 登录按钮
      if (this.tel != "" && this.pwd != "" && this.yanzheng == true) {
        console.log("点击了登录按钮")
        login({
          userName: this.tel,
          password: this.pwd
        }).then(res => {
          console.log(res.data.code)
          if (res.data.code == "success") {
            Toast("登陆成功!")
            localStorage.setItem("token", res.data.token)
            setToken(this.tel)
            setTimeout(() => {
              this.$router.push({ path: "/user" })
            }, 800)
          } else {
            Toast(res.data.message)
          }
        })
      }
    },
    xieYi() {
      this.$router.push({ path: "/protocol" })
    },
    toReg() {
      this.$router.push({ path: "/reg" })
    },
    changIn(e) {
      // console.log(this.pwd)
      if (this.pwd != "" && this.yanzheng == true) {
        this.$refs.loginBtn.style.backgroundColor = "#ff6c00"
      } else {
        Toast("请输入正确的账户和密码!")
        this.$refs.loginBtn.style.backgroundColor = "#f4c897"
      }
    },
    // 密码的显示和隐藏 没有输入密码时点击无效果
    eye() {
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
  background: #efefef;
  color: #ff6c00;
}
.eye {
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 5.2rem;
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