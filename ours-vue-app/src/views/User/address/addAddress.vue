<template>
  <div class="addAddressBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>{{str}}</p>
      <!-- <span class="save" @click="onSave">保存</span> -->
    </div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :address-info="list1"
      @save="onSave"
    />
  </div>
</template>
<script>
import addACont from "./addAddressCont"
import areaList from "../../../assets/areaList.js"
import { mapState, mapActions } from "vuex"
export default {
  name: "addAddress",
  data() {
    return {
      areaList,
      searchResult: [],
      list1: {}
    }
  },
  created() {
    if (this.$route.query.id) {
      const id = this.$route.query.id
      this.addressOne(id)
      console.log(this.list)
      this.list1 = this.list

      this.$store.commit("ss", "修改地址")
    } else {
      this.list1 = this.listnew
      this.$store.commit("ss", "添加地址")
    }
  },
  components: {
    addACont
  },
  methods: {
    lastStep() {
      //window.history.go(-1)
      this.$router.push({
        name: "Address"
      })
    },
    onSave(p) {
      console.log(p)
      if (this.$route.query.id) {
        // 编辑
        console.log("编辑")
        const id = this.$route.query.id
        const obj1 = {
          receiver: p.name,
          mobile: p.tel,
          regions:
            p.province + "-" + p.city + "-" + p.county + "-" + p.areaCode,
          address: p.addressDetail,
          isDefault: p.isDefault
        }
        console.log(obj1)
        this.upData({ id, obj1 })
      } else {
        console.log("新增")
        this.loadData({
          receiver: p.name,
          mobile: p.tel,
          regions:
            p.province + "-" + p.city + "-" + p.county + "-" + p.areaCode,
          address: p.addressDetail,
          isDefault: p.isDefault
        })
      }

      this.$router.push({
        name: "Address"
      })
    },
    ...mapActions("addressnew", ["loadData", "upData"]),
    ...mapActions("addressOneByID", { addressOne: "loadData" })
  },
  computed: {
    ...mapState("addressOneByID", ["list", "listnew"]),
    ...mapState(["str"])
  }
}
</script>
<style scoped>
.addAddressBox {
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
.save {
  position: absolute;
  right: 0.48rem;
}
</style>