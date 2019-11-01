<template>
  <div class="cart">
    <tops></tops>
    <div class="sec">
      <cection></cection>
    </div>
    <!-- <div class="fote">
      <fote></fote>
    </div>-->
  </div>
</template>

<script>
import tops from "./top"
import cection from "./cection"
// import fote from "./footer"

export default {
  name: "Cart",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  },
  components: {
    tops,

    cection
  }
}
</script>
<style>
.cart {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.sec {
  flex: 1;
}
</style>

