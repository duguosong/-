<template>
  <div>
    <van-swipe :autoplay="3000" class="lunbo">
      <van-swipe-item v-for="(image, index) in list" :key="index">
        <img v-lazy="image.coverImg" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { mapState } from "vuex"

export default {
  created() {
    console.log(this.list)
  },
  computed: {
    ...mapState("hot", ["list"])
  },
  methods: {
    clickhandle() {
      this.$router.push({
        name: "home"
      })
    }
  }
}
</script>
<style >
.lunbo {
  height: 4.7rem;
  width: 100%;
}
.lunbo img {
  height: 100%;
  width: auto;
  margin-left: 3rem;
}
</style>