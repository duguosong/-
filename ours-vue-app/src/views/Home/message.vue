<template>
  <div class="message">
    <van-nav-bar
      style="margin-bottom:0.3rem"
      title="消息"
      left-text
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="objADD">
      <van-row style="height:2.25rem">
        <van-col span="2" offset="1">
          <div
            style="width:1.22rem;height:1.22rem;background:#64c46d; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="volume" style="font-size:0.71rem;" />
          </div>
        </van-col>
        <van-col span="21">
          <p>
            <span style="font-size:0.44rem;dispaly:inline-block;margin-left:0.7rem">新品上架</span>
            <span
              style="font-size:0.44rem;dispaly:inline-block;margin-left:2rem"
            >2019-10-25 17:27:02</span>
          </p>
          <p style="font-size:0.4rem;margin-left:0.7rem">你的4000额度已到账，这款手机可0元购</p>
        </van-col>
      </van-row>
      <van-row style="height:2.25rem">
        <van-col span="2" offset="1">
          <div
            style="width:1.22rem;height:1.22rem;background:#64c46d; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="volume" style="font-size:0.71rem;" />
          </div>
        </van-col>
        <van-col span="21">
          <p>
            <span style="font-size:0.44rem;dispaly:inline-block;margin-left:0.7rem">新品上架</span>
            <span
              style="font-size:0.44rem;dispaly:inline-block;margin-left:2rem"
            >2019-10-25 17:27:02</span>
          </p>
          <p style="font-size:0.4rem;margin-left:0.7rem">你的4000额度已到账，这款手机可0元购</p>
        </van-col>
      </van-row>
      <van-row style="height:2.25rem">
        <van-col span="2" offset="1">
          <div
            style="width:1.22rem;height:1.22rem;background:#64c46d; text-align:center;border-radius:50%;margin-top:0.5rem"
          >
            <van-icon name="volume" style="font-size:0.71rem;" />
          </div>
        </van-col>
        <van-col span="21">
          <p>
            <span style="font-size:0.44rem;dispaly:inline-block;margin-left:0.7rem">新品上架</span>
            <span
              style="font-size:0.44rem;dispaly:inline-block;margin-left:2rem"
            >2019-10-25 17:27:02</span>
          </p>
          <p style="font-size:0.4rem;margin-left:0.7rem">你的4000额度已到账，这款手机可0元购</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
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
}
</style>