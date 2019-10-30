<template>
  <div
    style="width:100%;height:1.92rem;background:white;box-sizing: border-box;
  padding: 0.3rem 0.2rem;
  position: relative;"
  >
    <input type="text" class="sousuo" placeholder="请输入商品名称" />
    <van-icon
      name="search"
      style="position: absolute;top:0.6rem;right:1rem;font-size:0.75rem;font-weight:900;"
    />
  </div>
</template>

<script>
export default {
  name: "InputADD"
}
</script>
<style  scoped>
.sousuo {
  width: 90%;
  height: 1.35rem;
  border: none;
  display: block;
  margin: auto auto;
  font-size: 0.44rem;
  background: #efefef;
  border-radius: 0.2rem;
  box-sizing: border-box;
  padding: 0.6rem;
}
</style>