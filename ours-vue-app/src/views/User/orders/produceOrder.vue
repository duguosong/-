<template>
  <div class="produceOrdersbox">
    <div class="PODBCont"></div>
    <div class="PODBCont"></div>
    <div class="PODBCont"></div>
    <div class="PODBCont"></div>
    <div class="PODBCont"></div>
    <div class="PODBCont"></div>
    <div class="PODBCont"></div>
  </div>
</template>
<script>
export default {
  name: "produceOrders"
}
</script>
<style scoped>
.produceOrdersbox {
  flex: 1;
  overflow: auto;
}
.PODBCont {
  width: 10.1rem;
  height: 7.1rem;
  background: red;
  border-radius: 0.3rem;
}
</style>