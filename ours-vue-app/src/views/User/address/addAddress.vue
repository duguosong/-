<template>
  <div class="addAddressBox">
    <div class="title">
      <div @click="lastStep">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>添加地址</p>
      <!-- <span class="save" @click="onSave">保存</span> -->
    </div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
    />
  </div>
</template>
<script>
import addACont from './addAddressCont'
import areaList from '../../../assets/areaList.js'
export default {
  name: 'addAddress',
  data() {
    return {
      areaList,
      searchResult: []
    }
  },
  components: {
    addACont
  },
  methods: {
    lastStep() {
      window.history.go(-1)
    },
    onSave() {}
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