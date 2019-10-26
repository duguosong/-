<template>
  <div id="total">
    <div class="limit-top"></div>
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
          待完善
          <van-icon class="arrow" name="arrow" size="0.42rem" @click="show = true" />
          <van-overlay :show="show" @click="show = false">
            <div class="ceng">
              <div>
                <h4>授权提醒</h4>
                <p>
                  你必须同意《个人信息使用授权书》才可以进行下一步操作，如果你已经阅读协议请
                  点击同意授权按钮后提交资料。
                </p>
              </div>
              <van-tabs>
                <van-tab title="阅读协议"></van-tab>
                <van-tab title="同意"></van-tab>
              </van-tabs>
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
          待完善
          <van-icon class="arrow" name="arrow" size="0.42rem" />
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
          待完善
          <van-icon class="arrow" name="arrow" size="0.42rem" />
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
          待完善
          <van-icon class="arrow" name="arrow" size="0.42rem" />
        </div>
      </li>
    </ul>
    <div id="read">
      <van-icon name="passed" size="0.4rem" style="margin: 0.7rem 0.3rem 0 0.6rem;" />
      <p>我已阅读并同意《个人信息使用授权书》《个人征信查询授权书》《数字证书服务协议》</p>
    </div>
    <dibu></dibu>
  </div>
</template>

<script>
import dibu from '../../components/dibu'

export default {
  name: 'Limit',
  data() {
    return {
      // isShow: false,
      show: false
    }
  },
  components: {
    dibu
  }
}
</script>

<style scoped>
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
#total {
  display: flex;
  flex-direction: column;
}
.limit-top {
  width: 10.8rem;
  height: 6.19rem;
  background: url(../../assets/limit.png) no-repeat;
  background-size: cover;
}
#total .tips {
  width: 10.3rem;
  height: 1.28rem;
  padding-top: 0.32rem;
  padding-left: 0.5rem;
  line-height: 0.5rem;
  background: #efefef;
  color: #999;
  font-size: 0.32rem;
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
</style>
