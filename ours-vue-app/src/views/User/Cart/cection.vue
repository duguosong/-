<template>
  <van-row>
    <van-col span="2" offset="1" style="margin-top:1.3rem">
      <van-checkbox v-model="checked"></van-checkbox>
    </van-col>
    <van-col span="20">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: "Carts",
  data() {
    return {
      checked: false
    }
  }
}
</script>

