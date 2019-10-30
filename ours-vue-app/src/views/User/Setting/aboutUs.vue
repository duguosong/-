<template>
  <div class="about">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>关于我们</p>
    </div>
    <aboutUsCont></aboutUsCont>
  </div>
</template>
<script>
import aboutUsCont from './aboutUsCont'
export default {
  name: 'aboutUs',
  methods: {
    lastStep() {
      window.history.go(-1)
    }
  },
  components: {
    aboutUsCont
  }
}
</script>
<style scoped>
.about {
  width: 100%;
  min-height: 100%;
  background: #efefef;
}
.title {
  width: 100%;
  height: 1.38rem;
  background: #fff;
  font-size: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 0.48rem;
  margin-bottom: 0.3rem;
}
.van-icon-arrow-left {
  position: absolute;
  left: 0.48rem;
  top: 0.5rem;
}
</style>