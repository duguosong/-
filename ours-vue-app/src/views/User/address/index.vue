<template>
  <div class="addressBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>地址管理</p>
    </div>
    <div style="flex:1;overflow:auto;">
      <addressMsg></addressMsg>
    </div>
    <div class="btm">
      <van-button
        type="primary"
        size="large"
        color="linear-gradient(to right, #fe6d04, #fb9806)"
        @click="$router.push({path:'/user/address/addAddress'})"
      >添加地址</van-button>
    </div>
  </div>
</template>
<script>
import addAddress from "./addAddress"
import addressMsg from "./addressMsg"
import { mapActions } from "vuex"
export default {
  // lxh 它不让名字是address
  name: "addresss",
  components: {
    addAddress,
    addressMsg
  },
  methods: {
    lastStep() {
      if (this.$route.params.goSubOrder == "1") {
        this.$router.push({
          name: "submitOrder"
        })
      } else {
        this.$router.push({
          name: "User"
        })
      }
      // window.history.go(-1)
      localStorage.removeItem("addressname")
      //window.history.go(-1)
    },
    // lxh
    ...mapActions("addressList", ["loadData"])
  },
  //发起请求 拿到用户所有的的收货地址 Lxh0223
  created() {
    this.loadData(1)
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (from.name == "submitOrder") {
        localStorage.setItem("addressname", JSON.stringify(from.name))
      }
    })
  }
}
</script>
<style scoped>
.addressBox {
  width: 100%;
  height: 100%;
  background: #efefef;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 1.38rem;
  background: #fff;
  font-size: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 0.48rem;
  margin-bottom: 0.3rem;
}
.van-icon-arrow-left {
  position: absolute;
  left: 0.48rem;
  top: 0.5rem;
}

.btm {
  font-size: 0.4rem;
}
</style>