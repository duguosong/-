<template>
  <div class="newPhone">
    <van-nav-bar
      title="新品手机"
      left-text
      left-arrow
      style="width:100%;display:block"
      @click-left="onClickLeft"
    />
    <InputADD style="display:block"></InputADD>
    <swipe></swipe>
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