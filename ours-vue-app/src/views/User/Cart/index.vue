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
  data() {
    return {
      name: ""
    }
  },
  methods: {
    onClickLeft() {}
  },
  components: {
    tops,

    cection
  },
  beforeRouteEnter: (to, from, next) => {
    console.log(from)
    next(vm => {
      if (from.name != "submitOrder") {
        if (from.name == "Detail") {
          localStorage.setItem(
            "cartname",
            JSON.stringify(from.name + "-" + from.params.id)
          )
        } else {
          localStorage.setItem("cartname", JSON.stringify(from.name))
        }
      }
      // vm.name = JSON.parse(localStorage.getItem("cartname"))
    })
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

