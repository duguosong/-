<template>
  <div>
    <div class="addressMsgBox" v-for="i in list" :key="i._id">
      <div class="cont">
        <div class="msg">
          <p>{{i.receiver}}</p>
          <span>{{i.mobile}}</span>
        </div>
        <div class="msgAddress">
          <p>{{i.regions}} {{i.address}}</p>
        </div>
      </div>
      <!--  操作 -->
      <div class="operate">
        <div class="operate-left">
          <van-icon name="checked" size="0.37rem" :class="{moren:i.isDefault}" />
          <p>设为默认地址</p>
        </div>

        <div class="operate-right">
          <div class="operate-right-l" @click="editHandle(i)">
            <van-icon name="add" size="0.37rem" />
            <p>编辑</p>
          </div>
          <div class="operate-right-r" @click="delHandle(i)">
            <van-icon name="clear" size="0.37rem" />
            <p>删除</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "addressMsg",
  methods: {
    editHandle(i) {
      console.log(i._id)
      this.$router.push({
        name: "addAddress",
        query: {
          id: i._id
        }
      })
    },
    delHandle(i) {
      console.log("你点击了删除按钮！")
      this.loadDel(i._id)
    },
    ...mapActions("addressList", ["loadDel", "loadData"])
  },
  // lxh
  computed: {
    ...mapState("addressList", ["list"])
  }
}
</script>
<style scoped>
.cont {
  width: 100%;
  height: 2.08rem;
  box-sizing: border-box;
  padding: 0 0.48rem;
  background: #fff;
}
.msg {
  height: 1.14rem;
  font-size: 0.38rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding: 0.4rem 0 0 0;
}
.msg p {
  min-width: 0.4rem;
  height: 0.73rem;
  padding-right: 0.2rem;
}
.msgAddress {
  height: 0.92rem;
  border-bottom: 0.02rem solid #eeeeee;
}
.msgAddress p {
  font-size: 0.33rem;
  color: #7b7b7b;
}
.operate {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.48rem;
  height: 1.42rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.operate-left {
  width: 2.67rem;
  height: 1.42rem;
  display: flex;
  align-items: center;
}
.operate-left p {
  font-size: 0.33rem;
  padding-left: 0.15rem;
  color: #7b7b7b;
}
.operate-right {
  width: 3.8rem;
  height: 1.42rem;
  display: flex;
  font-size: 0.33rem;
  justify-content: space-around;
  align-items: center;
}
.operate-right p {
  padding-left: 0.15rem;
}
.operate-right-r {
  width: 1.76rem;
  height: 1.42rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.operate-right-l {
  display: flex;
  width: 1.76rem;
  height: 1.42rem;
  align-items: center;
  justify-content: center;
}

/* lxh 是否默认 */
.moren {
  color: "#000";
}
</style>
<style >
.van-icon-checked {
  color: #ccc;
}
.moren {
  color: red;
}
</style>