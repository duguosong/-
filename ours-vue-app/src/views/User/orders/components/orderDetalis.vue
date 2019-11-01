<template>
  <div class="allordersMsg">
    <div class="PODBCont">
      <div class="top">
        <div class="top-l">
          <div class="top-l-l">
            <van-icon name="shopping-cart" size="0.50rem" />
          </div>
          <div class="top-l-r">
            <p>阿达所发生的asdasd</p>
            <van-icon name="arrow" size="0.34rem" />
          </div>
        </div>
        <div class="top-r">
          <p>{{isShow?'交易完成':'交易终止'}}</p>
        </div>
      </div>
      <div class="cont">
        <div class="cont-l">
          <img src="../../../../assets/discover/disc03.jpg" alt />
        </div>
        <div class="cont-c">
          <div class="prdName">
            <p>阿萨德按时 阿萨德蒂芬卡士大夫</p>
          </div>
          <div class="prdDesc">
            <p>asdsadf;</p>
            <span>asdfasd</span>
          </div>

          <div class="prdAlt">
            <span>7天无理由退货</span>
          </div>
        </div>

        <div class="cont-r"></div>
      </div>
      <div class="heji">
        <div class="hejiCont">
          <div class="hejiCont-l">
            <p>共1件商品</p>
          </div>
          <div class="hejiCont-r">
            <p>合计:</p>
            <p>
              <span>¥ 19.99</span>
            </p>
          </div>
        </div>
      </div>
      <div class="btns">
        <button class="common" v-if="isShow">查看物流</button>
        <button class="common" v-if="isShow">卖了换钱</button>
        <button class="common">{{ isShow?'评价':'删除订单'}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderDetails",
  data() {
    return {
      isShow: false
    }
  }
}
</script>
<style scoped>
.PODBCont {
  width: 10.1rem;
  height: 7.1rem;
  background: #fff;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 0.34rem;
  margin-top: 0.1rem;
  margin-bottom: 0.38rem;
  box-shadow: 0 0 0.2rem #bbb;
}
.top {
  width: 100%;
  height: 0.65rem;
  display: flex;
  justify-content: space-between;
}
.top-l {
  min-width: 3.2rem;
  height: 0.65rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-l-l {
  width: 0.54rem;
  height: 0.54rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-l-r {
  min-width: 2.55rem;
  height: 0.65rem;
  display: flex;
  align-items: center;
}
.top-l-r p {
  font-size: 0.44rem;
  padding: 0 0.28rem;
}
.top-r {
  width: 1.74rem;
  height: 0.65rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-r p {
  font-size: 0.36rem;
  color: #e7570e;
}
.cont {
  width: 100%;
  height: 3.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.cont-l {
  width: 2.6rem;
  height: 2.6rem;
}
.cont-l img {
  width: 2.6rem;
  height: 2.6rem;
}
.cont-c {
  width: 5.12rem;
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0 0.36rem;
}
.prdName {
  width: 100%;
  min-height: 0.6rem;
  max-height: 1.2rem;
  font-size: 0.37rem;
}
.prdName p {
  border: 0;
  width: 100%;
  min-height: 0.6rem;
  max-height: 1.2rem;
  font-size: 0.37rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.prdDesc {
  width: 100%;
  height: 0.58rem;
  font-size: 0.32rem;
  color: #9c9c9c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.prdAlt {
  height: 0.4rem;
  display: flex;
}
.prdAlt span {
  height: 0.4rem;
  background: #fff3e7;
  border-radius: 0.15rem;
  font-size: 0.28rem;
  color: #e35a23;
  padding: 0.1rem;
}
.cont-r {
  min-width: 1.73rem;
  height: 2.6rem;
  background: peru;
}

.heji {
  width: 100%;
  height: 1.32rem;

  box-sizing: border-box;
  padding-bottom: 0.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.hejiCont {
  width: 4rem;
  height: 0.9rem;

  display: flex;
  align-items: center;
  font-size: 0.33rem;
}
.hejiCont-r {
  margin-left: 0.15rem;
  display: flex;
}
.btns {
  width: 100%;
  height: 0.86rem;
  display: flex;
  justify-content: flex-end;
}
.common {
  width: 2.35rem;
  height: 0.85rem;
  box-sizing: border-box;
  border: 0.02rem solid #ccc;
  color: #626262;
  font-size: 0.38rem;
  border-radius: 0.39rem;
  background: #fff;
  margin-left: 0.3rem;
}
</style>