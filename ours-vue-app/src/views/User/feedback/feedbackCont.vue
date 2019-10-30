<template>
  <div class="fbC">
    <div class="txt">
      <textarea class="txtCont" name id placeholder="请输入您需要反馈的意见" @change="changeTxt"></textarea>
    </div>
    <div class="tiJiaoBtn">
      <button class="active" @click="sumbit">提交</button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant"
import { Toast } from "vant"
export default {
  name: "feedbackCont",
  data() {
    return {
      sub: false
    }
  },
  methods: {
    changeTxt() {
      this.sub = true
    },
    sumbit() {
      console.log("点击了提交按钮")
      if (this.sub == true) {
        this.$router.push({
          path: "/user"
        })
        Toast("已提交")
      } else {
        Dialog.alert({
          message: "请输入内容"
        }).then(() => {
          // on close
        })
      }
    }
  }
}
</script>
<style scoped>
.txt {
  width: 100%;
  height: 4.5rem;
  background: #fff;
  font-size: 0.44rem;
  box-sizing: border-box;
  padding: 0.48rem;
}
.txtCont {
  width: 100%;
  height: 100%;
  border: 0;
}
.tiJiaoBtn {
  width: 100%;
  height: 1.26rem;
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
}
.active {
  width: 9.6rem;
  height: 1.26rem;
  font-size: 0.34rem;
  background-image: linear-gradient(to right, #fe6d04, #fb9806);
  color: #fff;
  border: 0;
  border-radius: 0.1rem;
}
</style>
<style >
.van-dialog {
  width: 7.2rem;
  height: 2.5rem;
  font-size: 0.4rem;
}
.van-dialog__message {
  height: 0.68rem;
  font-size: 0.4rem;
  padding: 0.3rem;
  line-height: 0.68rem;
}
.van-button--large {
  height: 1rem;
}
.van-button__text {
  font-size: 0.4rem;
}
</style>