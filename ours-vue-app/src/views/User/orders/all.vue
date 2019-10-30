<template>
  <!-- 全部 -->
  <div class="allorderBox">
    <wuMsg></wuMsg>
    <div class="allordersMsg"></div>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"
export default {
  name: "allorder",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.allorderBox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>