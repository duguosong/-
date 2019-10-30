<template>
  <van-tabbar route>
    <van-tabbar-item class="iconfont icon-shouye2" :to="{name:'home'}">首页</van-tabbar-item>
    <van-tabbar-item class="iconfont icon-edu" :to="{name:'Limit'}">额度</van-tabbar-item>
    <van-tabbar-item class="iconfont icon-faxian" :to="{name:'Discover'}">发现</van-tabbar-item>
    <van-tabbar-item class="iconfont icon-2" :to="{name:'Task'}">任务</van-tabbar-item>
    <van-tabbar-item class="iconfont icon-04f" :to="{name:'User'}">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "dibu"
}
</script>
<style scoped>
.van-tabbar {
  height: 1.42rem;
}
</style>