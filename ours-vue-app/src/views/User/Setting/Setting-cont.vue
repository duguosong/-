<template>
  <div class="SettingCont">
    <!-- 根据 cookie 内是否存在 userName_token 来判断显示那个模块 -->
    <div class="settingCont1" v-if="token==undefined?true:false">
      <div class="banBen com1">
        <p>当前版本</p>
        <span>V 4.0.8</span>
      </div>
      <div class="guanYu com1" @click="$router.push({path:'/user/Setting/aboutUs'})">
        <p>关于我们</p>
        <van-icon name="arrow" size="0.42rem;" color="gainsboro" />
      </div>
    </div>
    <div class="settingCont1 settingCont2" v-else>
      <div class="banBen com1">
        <p>当前版本</p>
        <span>V 4.0.8</span>
      </div>
      <div class="guanYu com1" @click="$router.push({path:'/user/Setting/aboutUs'})">
        <p>关于我们</p>
        <van-icon name="arrow" size="0.42rem;" color="gainsboro" />
      </div>
      <div class="xiuGai com1" @click="$router.push({path:'/user/Setting/changePassword'})">
        <p>修改密码</p>
        <van-icon name="arrow" size="0.42rem;" color="gainsboro" />
      </div>
      <div class="tuiChu" @click="tuiChu">退出</div>
    </div>
  </div>
</template>
<script>
import { getToken, removeToken } from "../../../utils/auth"
import { Toast } from "vant" // 提示框

export default {
  name: "settingCont",
  data() {
    return {
      token: getToken()
    }
  },
  methods: {
    tuiChu() {
      console.log("点击了退出按钮!")
      removeToken()
      localStorage.removeItem("token")
      Toast("退出成功!")
      setTimeout(() => {
        this.$router.push({ path: "/user" })
      }, 800)
    }
  }
}
</script>
<style scoped>
.settingCont1 {
  width: 100%;
  min-height: 2.68rem;
  background: #fff;
  font-size: 0.38rem;
}
.settingCont2 {
  position: relative;
}
.tuiChu {
  margin-top: 0.6rem;
  margin-left: 0.75rem;
  width: 9.3rem;
  height: 1.35rem;
  background: #fe0000;
  color: #fff;
  position: absolute;
  font-size: 0.44rem;
  border-radius: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.01rem solid #a02829;
}
.com1 {
  width: 9.6rem;
  height: 1.34rem;
  box-sizing: border-box;
  border-bottom: 0.02rem solid #efefef;
  margin-left: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>