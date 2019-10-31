<template>
  <van-submit-bar
    style="font-size:0.31rem"
    :price="3050"
    currency="￥"
    button-text="提交订单"
    @click="onSubmit"
  >
    <van-checkbox v-model="checked">全选</van-checkbox>
    <span slot="tip" style="font-size:0.31rem">
      你的收货地址不支持同城送,
      <span @click="$router.push({name:'Address'})">修改地址</span>
    </span>
  </van-submit-bar>
</template>

<script>
import { SubmitBar } from "vant"

export default {
  name: "fote",
  data() {
    return {
      checked: false
    }
  },
  methods: {}
}
</script>
<style >
.van-submit-bar__tip {
  height: 0.5rem;
}
.van-submit-bar__bar {
  height: 1.35rem;
}
.van-checkbox__icon i {
  font-size: 0.31rem;
}
</style>