<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <!-- <van-tabbar route>
      <van-tabbar-item class="iconfont icon-shouye2" :to="{name:'home'}">首页</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-edu" :to="{name:'Limit'}">额度</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-faxian" :to="{name:'Discover'}">发现</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-2" :to="{name:'Task'}">任务</van-tabbar-item>
      <van-tabbar-item class="iconfont icon-04f" :to="{name:'User'}">我的</van-tabbar-item>
    </van-tabbar>-->
  </div>
</template>

<script>
export default {}
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.van-tabbar--fixed {
  position: static;
}
.van-tabbar-item__text {
  font-size: 0.32rem;
}
.iconfont {
  font-size: 0.54rem !important;
}
.van-hairline--top-bottom {
  height: 1.42rem;
}
</style>
