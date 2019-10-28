<template>
  <div class="box">
    <div class="top">
      <img src="../../../assets/aboutUsCont.jpg" alt />
    </div>
    <div class="btm">
      <img src="../../../assets/aboutUs1.jpg" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: 'aboutUsCont'
}
</script>
<style scoped>
.box {
  height: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
.top {
  width: 100%;
  height: 8.28rem;
  margin-top: 1.28rem;
}
.top img {
  width: 100%;
  height: 8.28rem;
}
.btm {
  width: 2.4rem;
  height: 3.36rem;
  position: absolute;
  bottom: 0.65rem;
  margin-top: 2rem;
}
.btm img {
  width: 2.4rem;
  height: 3.36rem;
}
</style>