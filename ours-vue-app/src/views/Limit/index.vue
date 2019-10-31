<template>
  <div id="total">
    <div class="limit-top"></div>
    <div class="total-bottom">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="tips">
          <p>完成以下四项认证，5分钟内即出额度</p>
          <p>全款购买商品无需完成以下认证</p>
        </div>
        <ul id="main">
          <li class="main_name">
            <div class="name_left">
              <em class="iconfont icon-shimingyanzheng"></em>
              <div class="news">
                <h4>实名认证</h4>
                <span>必选</span>
                <p>验证身份证</p>
              </div>
            </div>
            <div class="name_right">
              <span>{{isShow?"已完善":"未完善"}}</span>
              <van-icon class="arrow" name="arrow" size="0.42rem" @click="show=!isShow" />
              <van-overlay :show="show" @click="show=false">
                <div class="ceng">
                  <div class="title">
                    <h4>授权提醒</h4>
                    <p>
                      你必须同意《个人信息使用授权书》才可以进行下一步操作，如果你已经阅读协议请
                      点击同意授权按钮后提交资料。
                    </p>
                  </div>
                  <div class="tiaozhuan">
                    <p class="read" @click="$router.push({name:'protol'})">阅读协议</p>
                    <p class="tongyi" @click="$router.push({name:'Protol_name'})">同意</p>
                  </div>
                </div>
              </van-overlay>
            </div>
          </li>
          <li class="main_name main_do">
            <div class="name_left">
              <em class="iconfont icon-wanshanziliao"></em>
              <div class="news">
                <h4>完善资料</h4>
                <span>必选</span>
                <p>完善个人信息</p>
              </div>
            </div>
            <div class="name_right">
              <span>{{data?"已完善":"未完善"}}</span>
              <van-icon class="arrow" name="arrow" size="0.42rem" @click="getNews" />
            </div>
          </li>
          <li class="main_name main_cart">
            <div class="name_left">
              <em class="iconfont icon-xinyongqiarenzheng"></em>
              <div class="news">
                <h4>信用卡认证</h4>
                <span>必选</span>
                <p>验证信用卡信息</p>
              </div>
            </div>
            <div class="name_right">
              <span>{{credit?"已完善":"未完善"}}</span>
              <van-icon class="arrow" name="arrow" size="0.42rem" @click="getNews" />
            </div>
          </li>
          <li class="main_name main_shouquan">
            <div class="name_left">
              <em class="iconfont icon-shouquanguanli"></em>
              <div class="news">
                <h4>授权协议</h4>
                <span>必选</span>
                <p>签订征信授权协议</p>
              </div>
            </div>
            <div class="name_right">
              <span>{{empower?"已完善":"未完善"}}</span>
              <van-icon class="arrow" name="arrow" size="0.42rem" @click="getNews" />
            </div>
          </li>
        </ul>
        <div id="read">
          <van-icon name="passed" size="0.4rem" style="margin: 0.7rem 0.3rem 0 0.6rem;" />
          <p>
            我已阅读并同意
            <a @click="$router.push({name:'Information'})">《个人信息使用授权书》</a>
            <a @click="$router.push({name:'Search'})">《个人征信查询授权书》</a>
            <a @click="$router.push({name:'Number'})">《数字证书服务协议》</a>
          </p>
        </div>
      </van-pull-refresh>
    </div>
    <dibu></dibu>
  </div>
</template>

<script>
import dibu from "../../components/dibu"
export default {
  name: "Limit",
  data() {
    return {
      show: false,
      isShow: false,
      alive: false,
      data: false,
      credit: false,
      empower: false,
      count: 0,
      isLoading: false
    }
  },
  components: {
    dibu
  },
  methods: {
    getNews() {
      var cart = JSON.parse(localStorage.getItem("cart"))
      var cartName = JSON.parse(localStorage.getItem("cartName"))
      var cartImg = JSON.parse(localStorage.getItem("cartImg"))
      console.log(cart, cartName, cartImg)
      if (cart && cartName && cartImg !== "") {
        this.isShow = true
      } else {
        this.isShow = false
        this.$toast({ message: "你的身份未验证" })
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>

<style scoped>
#total {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.ceng {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -2.5rem;
  margin-left: -2.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 0.2rem;
  background: #fff;
}
.ceng .title {
  padding: 0 0.4rem;
}
.ceng .title h4 {
  padding-top: 0.4rem;
  height: 0.6rem;
  font-size: 0.5rem;
  line-height: 0.6rem;
  text-align: center;
  color: rgb(243, 126, 30);
}
.ceng .title p {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  line-height: 0.48rem;
  border-bottom: 0.02rem solid #cecece;
  padding-bottom: 0.4rem;
}

.ceng .tiaozhuan {
  padding-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.ceng .tiaozhuan .read {
  border-right: 1px solid #ccc;
  padding-right: 0.4rem;
}

.ceng .tiaozhuan .tongyi {
  color: #ff7633;
  padding-right: 0.5rem;
}

.limit-top {
  width: 10.8rem;
  height: 6.19rem;
  background: url(../../assets/limit.png) no-repeat;
  background-size: cover;
}
.total-bottom .tips {
  width: 10.3rem;
  height: 1.28rem;
  padding-top: 0.32rem;
  padding-left: 0.5rem;
  line-height: 0.5rem;
  background: #efefef;
  color: #999;
  font-size: 0.32rem;
}
#total .total-bottom {
  position: relative;
  background: #efefef;
}

#main {
  flex: 1;
  overflow: auto;
  background: #fff;
}

.main_ceng {
  width: 4rem;
  height: 4rem;
  background: #fff;
  color: #333;
}
#main .main_name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.42rem;
  color: #999;
  height: 1.97rem;
  border-bottom: 0.02rem solid #e4e4e4;
}

#main .main_name .name_left {
  width: 5.2rem;
  padding-left: 0.6rem;
  font-size: 0.36rem !important;
  display: flex;
  align-items: center;
}

.name_left .news {
  position: relative;
  margin-left: 0.65rem;
  line-height: 0.72rem;
}
.name_left em {
  display: inline-block;
  width: 1.04rem;
  height: 1.04rem;
  border-radius: 50%;
  background: #34beed;
  text-align: center;
  line-height: 1.04rem;
}
.iconfont {
  font-size: 1rem;
  color: #fff;
}

.name_left .news h4 {
  font-size: 0.44rem;
  color: #333;
}
.name_left .news span {
  position: absolute;
  left: 2rem;
  top: 0.02rem;
  display: inline-block;
  width: 1.38rem;
  height: 0.62rem;
  line-height: 0.58rem;
  border-radius: 0.5rem;
  border: 0.02rem solid #ff0101;
  color: #ff0101;
  text-align: center;
}

.main_name .name_right .arrow {
  margin: 0 0.5rem 0 0.4rem;
}

.main_do em {
  background: #ff7633;
}

.main_cart em,
.main_shouquan em {
  background: #c69c6c;
}

.main_cart .news span {
  left: 2.4rem;
}

#read {
  display: flex;
  justify-content: flex-start;
  font-size: 0.36rem;
  color: #e55c3a;
  width: 100%;
  height: 5rem;
  background: #efefef;
}

#read p {
  margin-top: 0.5rem;
  width: 8.7rem;
}
.total-top {
  width: 100%;
  height: 2rem;
  background: yellow;
}
.total-bottom {
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: auto;
}
.box {
  height: 1000px;
}
.yincang {
  position: absolute;
  left: 4.5rem;
  top: 0.2rem;
  margin: 0 auto;
  width: 3.6rem;
  height: 1.3rem;
  border-radius: 0.8rem;
  color: #fff;
  background: rgba(107, 109, 106, 0.8);
  font-size: 0.34rem;
  line-height: 1.3rem;
  text-align: center;
  display: none;
}
</style>