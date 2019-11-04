<template>
  <div class="allordersMsg">
    <div class="PODBCont">
      <div class="top">
        <div class="top-l">
          <div class="top-l-l">
            <van-icon name="shopping-cart" size="0.50rem" />
          </div>
          <div class="top-l-r">
            <p>优品商城</p>
            <van-icon name="arrow" size="0.34rem" />
          </div>
        </div>
        <div class="top-r">
          <p>{{item?'交易完成':'交易终止'}}</p>
        </div>
      </div>
      <div class="cont">
        <div class="cont-l">
          <img :src="item.product.coverImg" title="这是一张图片" />
        </div>
        <div class="cont-c">
          <div class="prdName">
            <p>{{item.product.name}}</p>
          </div>
          <div class="prdDesc">
            <p style="color:red">满199包邮🚚--></p>
            <span style="color:green  ">{{item.quantity*item.price>=199?'已包邮':'未包邮'}}</span>
          </div>

          <div class="prdAlt">
            <span>7天无理由退货</span>
          </div>
        </div>

        <div class="cont-r">
          <p>
            ¥
            <b>{{item.price}}</b>
          </p>
          <span>× {{item.quantity}}</span>
        </div>
      </div>
      <div class="heji">
        <div class="hejiCont">
          <div class="hejiCont-l">
            <p>共{{item.quantity}} 件商品</p>
          </div>
          <div class="hejiCont-r">
            <p>合计:</p>
            <p>
              <span>¥ {{item.quantity*item.price}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="btns">
        <button class="common" v-if="item" @click="logistics">查看物流</button>
        <button class="common" v-if="item" @click="sell">卖了换钱</button>
        <button class="common" @click="btnHandle(item.order)">{{ !item?'评价':'删除订单'}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex"
export default {
  name: "orderDetails",
  data() {
    return {
      price: 19.99,
      num: 1
    }
  },
  props: ["item"],
  methods: {
    btnHandle(id) {
      if (this.isShow) {
        console.log("你点击了评价按钮!")
      } else {
        console.log("你点击了删除按钮!")
        // console.log(id)
        this.delOrderById(id)
      }
    },
    logistics() {
      console.log('你点击了"查看物流"按钮')
    },
    sell() {
      console.log('你点击了"卖了换钱"按钮')
    },
    ...mapActions("orderList", ["delOrderById"])
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

  display: flex;
  flex-direction: column;
}
.cont-r p {
  font-size: 0.4rem;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: flex-end;
}
.cont-r p b {
  font-size: 0.5rem;
  font-weight: 100;
}
.cont-r span {
  font-size: 0.28rem;
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