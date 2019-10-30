<template>
  <!-- 收藏 -->
  <div class="collectContBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"
export default {
  name: "collectCont",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.collectContBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
