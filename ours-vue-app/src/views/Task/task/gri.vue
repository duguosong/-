<template>
  <div style="flex:1;overflow:auto">
    <!-- 取现 -->
    <van-row style="height:2.25rem">
      <van-col span="2" offset="1">
        <div
          style="width:1.05rem;height:1.05rem;background:#64c46d;line-height:0.9rem; text-align:center;border-radius:50%;margin-top:0.5rem"
        >
          <van-icon name="volume" style="font-size:0.6rem;" color="white" size="0.6rem" />
        </div>
      </van-col>
      <van-col
        span="14"
        style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
      >
        <span style="font-size:0.37rem;margin-left:0.7rem;color:#61a268;font-weight:600">
          新品上架
          <em
            style="display:inline-block;width:1.02rem;height:0.54rem;background:red;border-radius:0.3rem;font-size:0.32rem;text-align:center;line-height:0.54rem;color:white;font-weight:900"
          >推荐</em>
        </span>

        <p style="font-size:0.31rem;margin-left:0.7rem;color:#646464">
          会员专属，申请即可获得
          <em>200-1000</em>元永提额奖励，申请越多，奖励越大
        </p>
      </van-col>

      <van-col
        span="7"
        style="height:2.25rem;display:flex;justify-content: center;align-items: center"
      >
        <span
          is-link
          @click="showPopup"
          style="display:block;width:2.19rem;height:0.84rem;background:#3ab54a;font-size:0.39rem;text-align:center;line-height:0.84rem;color:white;border-radius:0.5rem"
        >去取现</span>
      </van-col>
    </van-row>
    <!-- 签到 -->
    <van-row style="height:2.25rem">
      <van-col span="2" offset="1">
        <div
          style="width:1.05rem;height:1.05rem;background:#c4996c;line-height:0.8rem; text-align:center;border-radius:50%;margin-top:0.5rem"
        >
          <span style="font-size:0.6rem;color:white;font-weight:900">签</span>
        </div>
      </van-col>
      <van-col
        span="14"
        style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
      >
        <span style="font-size:0.37rem;margin-left:0.7rem;font-weight:600">会员签到</span>

        <p style="font-size:0.31rem;margin-left:0.7rem;color:#646464">
          坚持签到最高可获得
          <em>196</em>元每月奖额
        </p>
      </van-col>

      <van-col
        span="7"
        style="height:2.25rem;display:flex;justify-content: center;align-items: center"
      >
        <span
          @click="fn($event)"
          style="display:block;width:2.19rem;height:0.84rem; background: linear-gradient(to right, #e27401 0%,#fab208 100%);font-size:0.39rem;text-align:center;line-height:0.84rem;color:white;border-radius:0.5rem"
        >{{qe}}</span>
      </van-col>
    </van-row>
    <!-- 好友注册 -->
    <van-row style="height:2.25rem">
      <van-col span="2" offset="1">
        <div
          style="width:1.05rem;height:1.05rem;background:#64c46d;line-height:0.8rem; text-align:center;border-radius:50%;margin-top:0.5rem"
        >
          <div
            style="width:1.05rem;height:1.05rem;background:#ff5500;line-height:0.9rem; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="friends-o" style="font-size:0.6rem;" color="white" size="0.6rem" />
          </div>
        </div>
      </van-col>
      <van-col
        span="14"
        style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
      >
        <span style="font-size:0.37rem;margin-left:0.7rem;font-weight:600">好友注册</span>

        <p style="font-size:0.31rem;margin-left:0.7rem;color:#646464">
          邀请好友注册,通过认证审核并下 单,邀请人即可获得
          <em>200</em>元永久提额奖励
        </p>
      </van-col>

      <van-col
        span="7"
        style="height:2.25rem;display:flex;justify-content: center;align-items: center"
      >
        <span
          @click="showPopups"
          style="display:block;width:2.19rem;height:0.84rem; background: linear-gradient(to right, #e27401 0%,#fab208 100%);font-size:0.39rem;text-align:center;line-height:0.84rem;color:white;border-radius:0.5rem"
        >去邀请</span>
      </van-col>
    </van-row>
    <!-- 好友下单 -->
    <van-row style="height:2.25rem">
      <van-col span="2" offset="1">
        <div
          style="width:1.05rem;height:1.05rem;background:#64c46d;line-height:0.8rem; text-align:center;border-radius:50%;margin-top:0.5rem"
        >
          <div
            style="width:1.05rem;height:1.05rem;background:#33bbed;line-height:0.9rem; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="balance-list-o" style="font-size:0.6rem;" color="white" size="0.6rem" />
          </div>
        </div>
      </van-col>
      <van-col
        span="14"
        style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
      >
        <span style="font-size:0.37rem;margin-left:0.7rem;font-weight:600">好友下单</span>

        <p style="font-size:0.31rem;margin-left:0.7rem;color:#646464">
          如好友购买月付订单，并按时还款，邀请人每期可获得
          <em>300</em>元提额奖励
        </p>
      </van-col>

      <van-col
        span="7"
        style="height:2.25rem;display:flex;justify-content: center;align-items: center"
      >
        <span
          @click="showPopups"
          style="display:block;width:2.19rem;height:0.84rem; background: linear-gradient(to right, #e27401 0%,#fab208 100%);font-size:0.39rem;text-align:center;line-height:0.84rem;color:white;border-radius:0.5rem"
        >去邀请</span>
      </van-col>
    </van-row>
    <!-- 锦鲤 -->
    <van-row style="height:2.25rem">
      <van-col span="2" offset="1">
        <div
          style="width:1.05rem;height:1.05rem;background:#64c46d;line-height:0.8rem; text-align:center;border-radius:50%;margin-top:0.5rem"
        >
          <div
            style="width:1.05rem;height:1.05rem;background:#9fd29a;line-height:0.9rem; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="diamond-o" style="font-size:0.6rem;" color="white" size="0.6rem" />
          </div>
        </div>
      </van-col>
      <van-col
        span="14"
        style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
      >
        <span style="font-size:0.37rem;margin-left:0.7rem;font-weight:600">锦鲤好友</span>

        <p style="font-size:0.31rem;margin-left:0.7rem;color:#646464">
          邀请好友为优质用户最高获得
          <em>8750</em>元奖额
        </p>
      </van-col>

      <van-col
        span="7"
        style="height:2.25rem;display:flex;justify-content: center;align-items: center"
      >
        <span
          @click="showPopups"
          style="display:block;width:2.19rem;height:0.84rem; background: linear-gradient(to right, #e27401 0%,#fab208 100%);font-size:0.39rem;text-align:center;line-height:0.84rem;color:white;border-radius:0.5rem"
        >去邀请</span>
      </van-col>
    </van-row>
    <p style="font-size:0.32rem;text-align:center;margin:0.3rem 0 1rem 0">
      我已经阅读并同意
      <em
        style="color:orange;font-size:0.4rem"
        @click="$router.push({name:'huodong'})"
      >《邀请好友任务活动规则协议》</em>
    </p>
    <!-- 去取现 -->
    <van-popup v-model="show">该功能正在研发</van-popup>
    <!-- 微信邀请 -->
    <van-popup
      v-model="f"
      style="display:flex;box-sizing: border-box;padding:1rem 3rem"
      closeable
      position="bottom"
      :style="{ height: '20%' }"
    >
      <div
        style="width:1.35rem;height:1.35rem;background:#9fd29a;line-height:1.7rem; text-align:center;border-radius:50%;margin-top:0.5rem"
      >
        <van-icon
          @click="fns($event)"
          name="chat"
          style="font-size:0.8rem;"
          color="white"
          size="0.9rem"
        />
      </div>
      <div
        style="width:1.35rem;height:1.35rem;background:#9fd29a;line-height:1.7rem; text-align:center;border-radius:50%;margin-top:0.5rem"
      >
        <van-icon
          @click="fns($event)"
          name="smile-comment"
          style="font-size:0.8rem;"
          color="white"
          size="0.9rem"
        />
      </div>
    </van-popup>
  </div>
</template>>

<script>
import { Popup } from "vant"

export default {
  name: "gri",
  data() {
    return {
      qe: "去签到",
      show: false,
      f: false
    }
  },
  methods: {
    fn(event) {
      event.currentTarget.style.background = "#cccccc"
      this.qe = "已签到"
    },
    fns(event) {
      window.location.href =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=公众号appid&redirect_uri=http%3A%2F%2Fdev.spbcn.org%2Fwechat-vote-phone?type=weixin&scope=snsapi_userinfo&response_type=code&state=STATE#wechat_redirect"
    },
    showPopup() {
      this.show = true
    },
    showPopups() {
      this.f = true
    }
  }
}
</script>

<style>
.van-popup--center {
  width: 8rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.7rem;
  border-radius: 0.3rem;
  text-align: center;
  color: deeppink;
  background: -webkit-linear-gradient(top, white, lightblue, skyblue);
}
.van-popup--bottom {
  background: #b2e0f4;
  width: 100%;
  border-radius: 0.3rem 0.3rem 0 0;
  justify-content: space-around;
}
em {
  color: #f66804;
}
</style>