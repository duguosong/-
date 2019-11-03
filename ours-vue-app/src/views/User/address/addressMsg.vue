<template>
  <div>
    <div class="addressMsgBox" v-for="i in list" :key="i._id" @click="clickhandle(i)">
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
          <div class="operate-right-l" @click.stop="editHandle(i)">
            <van-icon name="add" size="0.37rem" />
            <p>编辑</p>
          </div>
          <div class="operate-right-r" @click.stop="delHandle(i)">
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
import { Toast } from "vant"
export default {
  name: "addressMsg",
  methods: {
    editHandle(i) {
      console.log(i._id)
      //event.stopPropagation()
      this.$router.push({
        name: "addAddress",
        query: {
          id: i._id
        }
      })
    },
    clickhandle(i) {
      console.log(1)
      if (JSON.parse(localStorage.getItem("addressname")) == "submitOrder") {
        this.$router.push({
          name: "submitOrder"
        })
        this.$store.commit("address", i)
        localStorage.removeItem("addressname")
      }
    },
    delHandle(i) {
      // if (JSON.parse(localStorage.getItem("addressname")) == "submitOrder") {
      //   console.log("你点击了删除按钮！")
      //   let obj2 = JSON.parse(localStorage.getItem("vuex"))
      //   console.log(obj2)
      //   obj2.add = {}
      //   console.log(obj2)
      //   localStorage.setItem("vuex", JSON.stringify(obj2))
      //   console.log(JSON.parse(localStorage.getItem("vuex")))
      // }
      if (this.list.length > 1) {
        this.loadDel(i._id)
      } else {
        Toast.setDefaultOptions({
          duration: 800
        })
        Toast("亲亲😙😙只有一个地址了 您可以选择修改地址的呢!")
      }
    },
    ...mapActions("addressList", ["loadDel"])
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