<template>
  <van-swipe :autoplay="3000" style="height:200px">
    <van-swipe-item v-for="(image, index) in list" :key="index">
      <img v-lazy="image.coverImg" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      images: [
        'http://img10.360buyimg.com/n7/jfs/t1/76250/24/297/233375/5ce7903eE67914ca9/e9568645afa2de70.jpg',
        '//img14.360buyimg.com/n7/jfs/t1/56485/3/10037/364862/5d72419aE34d89f6c/60a61f9abba9ad4a.jpg'
      ]
    }
  },
  created() {
    console.log(this.list)
  },
  computed: {
    ...mapState('detail', ['list'])
  }
}
</script>