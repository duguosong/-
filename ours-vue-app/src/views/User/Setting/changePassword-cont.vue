<template>
  <div class="changePwdBox">
    <div class="tiShi"></div>
    <div class="userMsg2">
      <div class="common">
        <p>原密码</p>
        <input type="text" placeholder="请输入原登陆密码" v-model="oldPwd" />
      </div>
      <div class="common">
        <p>新密码</p>
        <input type="text" placeholder="请输入6~20位密码" />
      </div>
      <div class="common">
        <p>确认密码</p>
        <input type="text" placeholder="请输入6~20位密码" />
      </div>

      <div class="loginBtn">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import { getInfo } from "../../../api/user"
import { getToken } from "../../../utils/auth"
import { Dialog } from "vant"
export default {
  name: "changePwd",
  data() {
    return {
      oldPwd: "",
      token: ""
    }
  },
  created: function() {
    Dialog.alert({
      message: "该功能正在开发中,敬请期待!"
    }).then(() => {
      this.$router.push({ path: "/user/Setting" })
    })
  }
}
</script>

<style scoped>
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
.loginBtn {
  width: 100%;
  height: 1.4rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
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
</style>