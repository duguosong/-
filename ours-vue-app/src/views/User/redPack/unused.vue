<template>
  <!-- 待还账单 -->
  <div class="unusedBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "unused",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.unusedBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>