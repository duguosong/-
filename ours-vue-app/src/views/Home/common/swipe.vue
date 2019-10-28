<template>
  <div>
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
    <van-tabs>
      <van-tab>
        <div slot="title" @click="onClick">
          <van-icon name="fire" color="red" />华为
        </div>
      </van-tab>
      <van-tab>
        <div slot="title">
          <van-icon color="red" />选项
        </div>
      </van-tab>
      <van-tab>
        <div slot="title">
          <van-icon color="red" />选项
        </div>
      </van-tab>
      <van-tab>
        <div slot="title">
          <van-icon color="red" />选项
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>


<script>
export default {
  name: 'swipe'
}
</script>

<style scoped>
img {
  width: 100%;
  height: 4.7rem;
}
</style>