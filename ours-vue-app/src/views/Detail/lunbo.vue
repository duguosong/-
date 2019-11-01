<template>
  <div>
    <van-swipe :autoplay="3000" class="lunbo">
      <van-swipe-item v-for="(image, index) in list" :key="index">
        <img v-lazy="image.coverImg" />
      </van-swipe-item>
    </van-swipe>
    <div class="custom-indicator fanhui" slot="indicator">
      <van-icon name="arrow-left" color="#fff" size="0.45rem" @click="clickhandle" />
    </div>
    <a class="custom-indicator kefu" slot="indicator" style="dispaly:block" href="tel:18239420717">
      <van-icon name="user-circle-o" color="#fff" size="0.48rem" />
    </a>
    <div class="custom-indicator shoucang" slot="indicator">
      <van-icon name="like-o" color="#fff" size="0.46rem" />
    </div>
    <div class="custom-indicator fenxiang" slot="indicator">
      <van-icon name="share" color="#fff" size="0.46rem" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"

export default {
  created() {
    console.log(this.list)
  },
  computed: {
    ...mapState("detail", ["list"])
  },
  methods: {
    clickhandle() {
      //window.history.go(-1)
      this.$router.push({
        name: "home"
      })
    }
  }
}
</script>
<style scoped>
.lunbo {
  height: 8.25rem;
  position: relative;
}

.lunbo img {
  height: 6.26rem;
  width: auto;
  margin: 0.6rem 0 0 2.11rem;
  position: relative;
}

.fanhui {
  height: 0.75rem;
  width: 0.75rem;
  background: #949494;
  border-radius: 50%;
  text-align: center;
  line-height: 0.45rem;
  position: absolute;
  top: 0.39rem;
  left: 0.48rem;
}
.kefu {
  height: 0.75rem;
  width: 0.75rem;
  background: #949494;
  border-radius: 50%;
  text-align: center;
  line-height: 0.48rem;
  position: absolute;
  top: 0.39rem;
  right: 2.64rem;
}
.shoucang {
  height: 0.75rem;
  width: 0.75rem;
  background: #949494;
  border-radius: 50%;
  text-align: center;
  line-height: 0.46rem;
  position: absolute;
  top: 0.39rem;
  right: 1.56rem;
}

.fenxiang {
  height: 0.75rem;
  width: 0.75rem;
  background: #949494;
  border-radius: 50%;
  text-align: center;
  line-height: 0.46rem;
  position: absolute;
  top: 0.39rem;
  right: 0.48rem;
}
</style>