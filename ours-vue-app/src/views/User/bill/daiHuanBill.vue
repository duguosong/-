<template>
  <!-- 待还账单 -->
  <div class="dHBillBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "DaiHBill",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.dHBillBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>