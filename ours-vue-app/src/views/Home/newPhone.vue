<template>
  <div class="newPhone" style="display: flex">
    <div style="height:9.33rem">
      <van-nav-bar title="新品手机" left-text left-arrow @click-left="onClickLeft" />
      <InputADD></InputADD>
      <swipe style></swipe>
    </div>
    <tab></tab>
  </div>
</template>

<script>
import swipe from './common/swipe'
import tab from './common/tabs'
import InputADD from './common/input'

export default {
  name: 'NewPhone',
  components: {
    swipe,
    tab,
    InputADD
  },

  methods: {
    onClickLeft() {
      window.history.go(-1)
    },
    onSearch() {}
  }
}
</script>

<style scoped>
.newPhone {
  height: 100%;
  width: 100%;
  background: #efefef;
}
</style>

<style scoped>
.objADD {
  background: white;
  width: 100%;
  height: 2.25rem;
}
.van-row {
  background: white;
}
</style>