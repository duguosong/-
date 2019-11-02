<template>
  <div class="subOrderBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>订单信息</p>
    </div>
    <div class="cont">
      <div class="cont-top" @click="toAddress">
        <div class="c-t-l">
          <van-icon name="location-o" size="1.1rem" />
        </div>
        <div class="c-t-r">
          <p>{{isShow?'':'请填写收货信息'}}</p>
          <p>{{isShow?'':'请输入详细的收货地址和门牌号'}}</p>
        </div>
        <van-icon name="arrow" size="0.6rem" color="#ccc" />
      </div>
      <div class="cont-cent">
        <div class="c-c-l">
          <img src alt />
        </div>
        <div class="c-c-r">
          <div class="name">
            <p>阿萨斯看来房价快速,是的咖啡机爱仕达,适得府君书杜,asdjk卡上的大幅开始暗示健康的很符合时代发生的回复收到收到</p>
          </div>
          <div class="desc">
            <p>阿卡丽时代峰</p>
            <span>× 1</span>
          </div>
          <div class="price">
            <p>¥ 3188.00</p>
          </div>
        </div>
      </div>
      <div class="cont-btm">
        <div class="c-b-l">
          <p>商品金额</p>
        </div>
        <div class="c-b-r">
          <p>￥ 3188.00</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-l">
        <p>
          ¥
          <b>3188.00</b>
        </p>
      </div>
      <div class="footer-r">
        <button @click="nextStep">下一步</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "submitOrder",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    },
    toAddress() {
      this.$router.push({
        name: "Address",
        params: {
          goSubOrder: "1"
        }
      })
    },
    nextStep() {
      console.log("你点击了下一步")
    }
  }
}
</script>
<style scoped>
.subOrderBox {
  width: 100%;
  height: 100%;
  background: #efefef;
  display: flex;
  flex-direction: column;
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

.cont-top {
  width: 100%;
  height: 2.6rem;
  background: #fff;
  margin-bottom: 0.3rem;
  display: flex;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.c-t-l {
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.c-t-r {
  width: 8.2rem;
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0.7rem 0.8rem 0.7rem 0.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.c-t-r p:first-child {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.42rem;
  font-weight: 700;
}
.c-t-r p:last-child {
  font-size: 0.37rem;
  color: #888;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-icon-arrow {
  position: absolute;
  right: 0.2rem;
  top: 2.6rem;
}
.cont-cent {
  width: 100%;
  height: 3.2rem;
  margin-bottom: 0.3rem;
  background: #fff;
  display: flex;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.c-c-l {
  width: 2.6rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-c-l img {
  width: 2rem;
  height: 2.2rem;
  background: orange;
}
.c-c-r {
  width: 8.2rem;
  height: 3.2rem;
  box-sizing: border-box;
  padding: 0.5rem 0.8rem 0 0.2rem;
  color: #888;
}
.name {
  width: 100%;
  min-height: 0.6rem;
  max-height: 1.2rem;
  font-size: 0.42rem;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.desc {
  width: 100%;
  height: 0.6rem;
  font-size: 0.36rem;
  line-height: 0.6rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.desc p {
  width: 80%;
}
.desc span {
}
.price {
  width: 100%;
  height: 0.75rem;
  font-size: 0.5rem;
  color: orangered;
  line-height: 0.75rem;
}
.cont-btm {
  width: 100%;
  height: 1.3rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.5rem;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.c-b-l {
  color: #888;
}
.footer {
  width: 100%;
  height: 1.4rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
}
.footer-l {
  width: 7rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  color: orangered;
  box-sizing: border-box;
  padding-left: 0.4rem;
}
.footer-l p {
  font-size: 0.3rem;
}
.footer-l p b {
  font-size: 0.6rem;
}
.footer-r {
  width: 3.8rem;
  height: 1.4rem;
  display: flex;
}
.footer-r button {
  width: 3.8rem;
  height: 1.4rem;
  border: 0;
  font-size: 0.44rem;
  color: #fff;
  background-image: linear-gradient(to right, orangered, orange);
}
</style>