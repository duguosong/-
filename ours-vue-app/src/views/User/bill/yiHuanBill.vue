<template>
  <!-- 已还账单 -->
  <div class="yHBillBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "YiHBill",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.yHBillBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>