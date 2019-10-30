<template>
  <div id="total">
    <!-- @click="$router.push({name:'protol'})" -->
    <van-nav-bar title="实名认证" left-text left-arrow @click-left="onClickLeft" />
    <p class="tips">请确定以下信息与证件上一直，如果错误请直接修改</p>
    <div class="yanzheng">
      <div class="yan-left">
        <p>
          身份证号
          <input type="text" placeholder="请输入身份证号码" id="cart" />
        </p>
        <p>
          真实姓名
          <input type="text" placeholder="请输入真实姓名" id="cartName" />
        </p>
      </div>
      <div class="yan-right">
        <van-uploader :after-read="onRead" accept="image/*" multiple class="pic">
          <img class="head-img" src="../../assets/card.jpg" ref="goodsImg" id="cartImg" />
        </van-uploader>
        <p>点此传身份证</p>
      </div>
    </div>
    <button class="done" @click="finshCart">完成</button>
  </div>
</template>
<style scoped>
#total {
  position: relative;
}
#total .tips {
  font-size: 0.34rem;
  height: 1rem;
  line-height: 1rem;
  color: #b5b2b5;
  text-align: center;
  background: #efefef;
}
.yanzheng {
  width: 100%;
  height: 3rem;
  font-size: 0.4rem;
  display: flex;
  border-bottom: 1px solid #cecece;
}
.yan-left {
  width: 8.38rem;
  border-right: 1px;
  border-right: 1px solid #cecece;
}
.yan-left input {
  border: 0;
  padding-left: 0.2rem;
}
.yan-left p:last-child {
  border-bottom: none;
}
.yan-left p {
  height: 1.44rem;
  padding-left: 0.5rem;
  line-height: 1.42rem;
  border-bottom: 1px solid #cecece;
}
.yan-right {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0.4rem 0.32rem;
  font-size: 0.12rem;
}
.yan-right img {
  width: 2.4rem;
  height: 1.52rem;
}
.yan-right p:last-child {
  color: #f75921;
}
#total .done {
  position: absolute;
  width: 2rem;
  height: 1rem;
  background: #3769fa;
  color: #fff;
  font-size: 0.36rem;
  border: 0;
  left: 50%;
  top: 6rem;
  margin-left: -1rem;
}
</style>
<script>
export default {
  methods: {
    onRead(file) {
      console.log(file)
      //将原图片显示为选择的图片
      this.$refs.goodsImg.src = file.content
    },
    finshCart() {
      var cart = document.getElementById("cart").value
      var cartName = document.getElementById("cartName").value
      if (cart == "" && cartName == "") {
        alert("请完善个人信息！")
      } else {
        if (cart !== "" && cartName !== "") {
          var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
          if (reg.test(cart) === false) {
            alert("身份证输入不合法")
            return false
          } else {
            localStorage.setItem("cart", JSON.stringify(cart))
          }
          var regExp = /[^\u4e00-\u9fa5]/g
          if (regExp.test(cartName)) {
            alert("请输入中文")
          } else {
            localStorage.setItem("cartName", JSON.stringify(cartName))
          }
          var cartImg = document.getElementById("cartImg").src
          localStorage.setItem("cartImg", JSON.stringify(cartImg))
          alert("验证成功！点击<按钮返回上一页")
        }
      }
    },
    onClickLeft() {
      window.history.go(-2)
    }
  }
}
</script>
<style>
.van-nav-bar {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #ccc;
}
.van-nav-bar .van-icon {
  font-size: 0.5rem;
  color: #6e6e6e;
}
.van-nav-bar__title {
  font-size: 0.5rem;
}
</style>