<template>
  <!-- 待还账单 -->
  <div class="expiredBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "expired",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.expiredBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>