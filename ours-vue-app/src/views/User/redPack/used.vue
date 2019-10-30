<template>
  <!-- 待还账单 -->
  <div class="usedBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "used",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.usedBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>