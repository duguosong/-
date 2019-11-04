<template>
  <div id="user">
    <div class="user-top">
      <div class="user-top-cont">
        <div class="user-top-cont-top">
          <div class="headPortrait">
            <span class="iconfont icon-wode"></span>
          </div>

          <div class="userName">
            <div v-if="isShow">
              <p class="tel">{{token}}</p>
              <p class="certification">未认证</p>
            </div>
            <div style="font-size:0.5rem;color:#fff;height:1.22rem;" v-else>
              <p style="height:1.22rem;line-height:1.22rem;" @click="$router.push({path:'/login'})">未登录</p>
            </div>
          </div>

          <div class="setting">
            <span class="iconfont icon-shezhi" @click="toSetting"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="user-order">
      <div class="user-order-top com2" @click="Orders">
        <p>我的订单</p>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
      <div class="user-order-bottom">
        <van-grid :border="false" :column-num="5" default>
          <van-grid-item
            icon="balance-pay"
            text="待付款"
            @click="$router.push({
              path:'/user/orders',
              name: 'Orders',
              params:{
                id:1,
              }
            })"
          ></van-grid-item>
          <van-grid-item
            icon="logistics"
            text="待发货"
            @click="$router.push({
            path:'/user/orders',
            name: 'Orders',
            params:{
              id:2,
            }
          })"
          ></van-grid-item>
          <van-grid-item
            icon="todo-list-o"
            text="待收货"
            @click="$router.push({
            path:'/user/orders',
            name: 'Orders',
            params:{
              id:3,
            }
          })"
          ></van-grid-item>
          <van-grid-item
            icon="share"
            text="可晒单"
            @click="$router.push({
            path:'/user/orders',
            name: 'Orders',
            params:{
              id:4,
            }
          })"
          ></van-grid-item>
          <van-grid-item
            icon="phone-circle-o"
            text="售后"
            @click="$router.push({path:'/user/afterSale'})"
          ></van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="user-bill">
      <div class="userCommon com2" @click="$router.push({path:'/cart'})">
        <p>我的购物车</p>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
      <div class="userCommon com2" @click="collect">
        <p>我的收藏</p>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
      <div class="userCommon com2" @click="address">
        <p>地址管理</p>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
      <div class="userCommon special com2" @click="redPack">
        <p>我的红包</p>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
    </div>
    <div class="user-feedback">
      <div class="userCommon com2" @click="feedback">
        <p>意见反馈</p>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
      <div class="userCommon special com2 special2">
        <p>联系我们</p>
        <a class="lianxi" href="tel:4001540085">4001540085</a>
        <van-icon name="arrow" color="#cecece" size="0.4rem" />
      </div>
    </div>
    <div class="user-bottom"></div>

    <dibu style="position:fixed;bottom:0;"></dibu>
  </div>
</template>

<script>
import dibu from "../../components/dibu" //../../components/dibu
import { getToken } from "../../utils/auth" //引入cookie 操作函数
import { filtration } from "../../utils/user/user"
export default {
  name: "User",
  data() {
    return {
      userName: "",
      token: getToken(),
      isShow: true
    }
  },
  components: {
    dibu
  },
  created: function() {
    if (this.token != undefined) {
      this.token = filtration(this.token)
    } else {
      this.isShow = false
    }
  },

  methods: {
    toSetting() {
      this.$router.push({ path: "/user/Setting" })
    },
    Orders() {
      this.$router.push({
        path: "/user/orders",
        name: "Orders",
        params: {
          id: 0
        }
      })
    },
    collect() {
      this.$router.push({ path: "/user/collect" })
    },
    address() {
      this.$router.push({ path: "/user/address:goSubOrder" })
    },
    redPack() {
      this.$router.push({ path: "/user/redPack" })
    },
    feedback() {
      this.$router.push({ path: "/user/feedback" })
    }
  }
}
</script>


<style scoped>
#user {
  height: 100%;
  height: 100%;
  background: #efefef;
  position: relative;
}
.user-top {
  width: 10.8rem;
  height: 4.27rem;
  background-image: url(../../assets/user-top.png);
  background-size: 10.8rem 4.57rem;
  display: flex;
  align-items: center;
}
.user-top-cont {
  width: 10.8rem;
  height: 2.63rem;
  box-sizing: border-box;
  padding: 0 0.6rem;
}
.headPortrait {
  float: left;
  width: 1.22rem;
  height: 1.22rem;
  margin-top: 0.74rem;
  box-sizing: border-box;
}
.headPortrait .iconfont {
  font-size: 1.22rem !important;
  color: #fff;
}
.userName {
  float: left;
  width: 3.73rem;
  height: 1.22rem;
  margin-top: 0.74rem;
  box-sizing: border-box;
}
.tel {
  width: 100%;
  height: 0.72rem;
  font-size: 0.42rem;
  color: #fff;
}
.certification {
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.34rem;
  color: #fff;
}
.setting {
  float: right;
  width: 1.34rem;
  height: 1.22rem;
  margin-top: 0.74rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.setting .iconfont {
  font-size: 0.74rem !important;
  color: #fff;
}
.userCommon {
  width: 8.66rem;
  height: 1.28rem;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 0.02rem solid #ccc;
}

.com2:active {
  background-color: #646464;
  color: #fff;
}
.com2:active a {
  color: #fff;
}
.special {
  border-bottom: 0;
}
.user-order {
  width: 9.6rem;
  height: 3.6rem;
  background: #fff;
  border-radius: 0.11rem;
  box-sizing: border-box;
  position: absolute;
  top: 3.45rem;
  left: 0.6rem;
}
.user-order-top {
  width: 100%;
  height: 1.28rem;
  border-top-left-radius: 0.11rem;
  box-sizing: border-box;
  border-bottom: 0.02rem solid #ccc;
}

.com2 {
  display: flex;
  padding: 0 0.5rem;
  align-items: center;
  justify-content: space-between;
}

.com2 p {
  font-size: 0.4rem;
}
.van-grid-item {
  height: 2.32rem;
}

.user-bill {
  width: 9.6rem;
  height: 5.08rem;
  background: #fff;
  border-radius: 0.11rem;
  box-sizing: border-box;
  position: absolute;
  top: 7.65rem;
  left: 0.6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.user-feedback {
  width: 9.6rem;
  height: 2.54rem;
  background: #fff;
  border-radius: 0.11rem;
  box-sizing: border-box;
  position: absolute;
  top: 13.34rem;
  left: 0.6rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.special2 {
  position: relative;
}
.lianxi {
  position: absolute;
  font-size: 0.32rem;
  color: #646464;
  right: 0.9rem;
}
.user-bottom {
  width: 9.6rem;
  height: 1.5rem;
  box-sizing: border-box;
  position: absolute;
  left: 0.6rem;
  top: 16rem;
}
</style>

<style >
.van-grid-item__icon {
  font-size: 0.75rem;
  color: #fe6d02;
}
.van-grid-item__text {
  font-size: 0.34rem;
}
</style>