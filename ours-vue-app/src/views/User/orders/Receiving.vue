<template>
  <!-- 待收货 -->
  <div class="receivingBox">
    <h1>待收货</h1>
    <div class="tiShi">
      <img src="../../../assets/orders1.jpg" alt />
      <van-button
        color="linear-gradient(to right, #fe6d04, #fb9806)"
        @click="$router.push({path:'/'})"
      >去逛逛</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'receiving'
}
</script>
<style scoped>
.receivingBox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.tiShi {
  width: 3.07rem;
  height: 4.57rem;
  position: absolute;
  top: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tiShi img {
  width: 3.07rem;
  height: 3.57rem;
}
</style>