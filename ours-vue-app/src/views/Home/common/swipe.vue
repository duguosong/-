<template>
  <van-row>
    <van-col span="24">
      <van-swipe :autoplay="3000" indicator-color="white" style="height:4.7rem;">
        <van-swipe-item>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
            alt
            style="width:100%"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
            alt
            style="width:100%"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
            alt
            style="width:100%"
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
            alt
            style="width:100%"
          />
        </van-swipe-item>
      </van-swipe>
    </van-col>
  </van-row>
</template>


<script>
export default {
  name: "swipe"
}
</script>

<style scoped>
img {
  height: 4.7rem;
}
</style>