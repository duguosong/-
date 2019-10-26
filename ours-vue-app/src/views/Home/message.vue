<template>
  <div class="message">
    <van-nav-bar title="消息" left-text left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  name: 'Message',
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
.message {
  height: 100%;
  width: 100%;
  background: red;
}
</style>
