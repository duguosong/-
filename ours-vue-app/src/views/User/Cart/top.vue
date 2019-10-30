<template>
  <van-row>
    <van-col span="1" offset="1" @click="onClickLeft">
      <van-icon name="arrow-left" />
    </van-col>
    <van-col span="20">
      <p class="textTop">购物车</p>
    </van-col>
  </van-row>
</template>

<script>
export default {
  name: "top",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
.van-row {
  height: 1.4rem;
  background: #f4f4f4;
}
.textTop {
  font-size: 0.48rem;
  line-height: 1.4rem;
  text-align: center;
}
</style>>

