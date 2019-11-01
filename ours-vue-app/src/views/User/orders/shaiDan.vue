<template>
  <!-- 可晒单 订单-->
  <div class="shaiDanBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "shaiDan",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.shaiDanBox {
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