<template>
  <div class="message">
    <van-row style="margin-bottom:0.3rem">
      <van-col span="1" offset="1" style="line-height:1rem;" @click="onClickLeft">
        <van-icon name="arrow-left" />
      </van-col>
      <van-col span="2" offset="9" style="line-height:1rem">
        <p>消息</p>
      </van-col>
    </van-row>
    <div class="objADD">
      <van-row>
        <van-col span="2" offset="1">
          <div
            style="width:1.05rem;height:1.05rem;background:#64c46d;line-height:0.9rem; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="volume" style="font-size:0.6rem;" color="white" size="0.6rem" />
          </div>
        </van-col>
        <van-col
          span="19"
          style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
        >
          <span style="font-size:0.43rem;margin-left:0.7rem;font-weight:600">
            新品上架
            <span style="font-size:0.27rem;color:#808080;font-weight:300;float:right">2019-10-29</span>
          </span>

          <p
            style="font-size:0.39rem;margin-left:0.7rem;color:#646464;overflow: hidden;"
          >你的4000额度已到账,这款手机可0元购….</p>
        </van-col>
      </van-row>
      <van-row style="height:2.25rem">
        <van-col span="2" offset="1">
          <div
            style="width:1.05rem;height:1.05rem;background:#33bbef;line-height:0.9rem; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="coupon-o" style="font-size:0.6rem;" color="white" size="0.6rem" />
          </div>
        </van-col>
        <van-col
          span="19"
          style="height:2.25rem;display:flex;flex-direction: column;;justify-content: center"
        >
          <span style="font-size:0.43rem;margin-left:0.7rem;font-weight:600">
            优惠活动
            <span style="font-size:0.27rem;color:#808080;font-weight:300;float:right">2019-09-04</span>
          </span>

          <p
            style="font-size:0.39rem;margin-left:0.7rem;color:#646464;overflow: hidden;"
          >商城门槛再次降低持续放水中，提交资料...</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
.message {
  height: 100%;
  width: 100%;
  background: #efefef;
}
</style>

<style scoped>
.objADD {
  background: white;
  width: 100%;
  height: 2.25rem;
}
.van-row {
  background: white;
  border-bottom: #cccccc solid 0.001rem;
}
.van-ellipsis {
  font-size: 0.5rem;
  line-height: 1rem;
}
.van-icon-arrow-left {
  font-size: 0.44rem;
  line-height: 0.2rem;
}
p {
  margin: 0.2rem 0;
  font-size: 0.38rem;
}
</style>