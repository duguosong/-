<template>
  <div style="display:flex;flex-direction: column;">
    <div style="display:flex;flex-direction: column;background:#f7f7f7">
      <van-row>
        <van-col span="1" offset="1" style="line-height:1rem" @click="fanhui">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="15" offset="5" style="line-height:1rem">
          <p>邀请好友任务活动规则协议</p>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-row>
        <van-col span="20" offset="2">
          <p>1.通过活动页面分享到微信、QQ、朋友圈等方式邀请好友，通过链接下载并注册APP即邀请好友成功。</p>
          <p>2.每成功邀请一位好友，如该好友成功认证并下单则可额外获得 600 元额度奖励。 如好友购买月付订单，并按时还款，邀请人每期可获得100元提额奖励。 如果好友通过认证，授信额度达8750元，邀请人既可享受同额度奖励。</p>
          <p>3.每个新用户只能被邀请一次，同一个手机号、或者同一认证人，都视为同一个用户，重复参与视为无效。</p>
          <p>4.首日签到为1元奖励额度，连续签到每日可以递增1元，递增领取额度上限默认为7元，若中途中断则重新计算。</p>
          <p>5.我们会应用先进的人工智能分析您的行为，如果发现造假等违规操作，我们有权没收您的全部奖励，并拒绝您永久参与本平台任何活动。</p>
          <p>6.本活动最终解释权归优品商城平台所有。</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "huodong",
  methods: {
    fanhui() {
      window.history.go(-1)
      console.log(1)
    }
  }
}
</script>

<style scoped>
p {
  margin: 0.2rem 0;
  font-size: 0.38rem;
}
.van-ellipsis {
  font-size: 0.5rem;
  line-height: 1rem;
}
.van-icon-arrow-left {
  font-size: 0.44rem;
  line-height: 0.2rem;
}
</style>
