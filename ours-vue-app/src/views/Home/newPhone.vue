<template>
  <div class="newPhone" style="display:flex;">
    <div>
      <van-row style="margin-bottom:0.3rem">
        <van-col span="1" offset="1" style="line-height:1rem;" @click="onClickLeft">
          <van-icon name="arrow-left" />
        </van-col>
        <van-col span="2" offset="9" style="line-height:1rem">
          <p>消息</p>
        </van-col>
      </van-row>
      <InputADD style="display:block"></InputADD>
      <swipe></swipe>
    </div>
    <tab></tab>
  </div>
</template>

<script>
import swipe from "./common/swipe"
import tab from "./common/tabs"
import InputADD from "./common/input"

export default {
  name: "NewPhone",
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
  flex-direction: column;
}
</style>

<style>
.objADD {
  background: white;
  width: 100%;
  height: 2.25rem;
}
.van-row {
  background: white;
}
.van-nav-bar {
  position: relative;
}
</style>