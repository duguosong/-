<template>
  <div
    style="margin-bottom:0.3rem;width:100%;height:5.66rem;background-image:url('https://ftp.bmp.ovh/imgs/2019/10/1c2b62e101d1ec24.jpg');
        background-size:100% 100%;box-sizing: border-box;padding: 2.5rem 4.4rem"
  >
    <p style="font-size:0.36rem;color:white;">
      <em style="font-size:0.82rem;color:white;">200</em> 元
    </p>

    <div
      @click="showPopup"
      style="color:white;font-size:0.34rem;text-align:center;line-height:0.6rem; border-radius: 0.1rem;width:2.16rem;height:0.6rem;border:white solid 0.04rem;;position:absolute;top:0.32rem;right:0.54rem"
    >
      <van-icon name="eye" style="font-size:0.36rem;line-height:0.1rem;" />奖励明细
    </div>
    <!-- 去取现 -->
    <van-popup v-model="show">该功能正在研发</van-popup>
  </div>
</template>

<script>
import { Popup } from "vant"

export default {
  name: "navTop",
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true
      console.log(1)
    }
  }
}
</script>