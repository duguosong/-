<template>
  <div class="cart">
    <tops></tops>
    <cection></cection>
    <fote></fote>
  </div>
</template>

<script>
import tops from "./top"
import cection from "./cection"
import fote from "./footer"

export default {
  name: "Cart",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  },
  components: {
    tops,
    fote,
    cection
  }
}
</script>

