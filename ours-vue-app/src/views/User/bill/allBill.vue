<template>
  <!-- 全部账单 -->
  <div class="allBillBox">
    <wuMsg></wuMsg>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"

export default {
  name: "AllBill",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.allBillBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>