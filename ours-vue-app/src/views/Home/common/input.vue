<template>
  <div class="searchBox">
    <van-icon name="search" size="1rem" color="#ee5b16" @click="searchNames" />
    <input type="text" v-model="name" placeholder="请输入搜索关键字" />
  </div>
</template>
<script>
import { searchName } from "../../../services/service"
export default {
  name: "search",
  data() {
    return {
      name: ""
    }
  },
  methods: {
    searchNames() {
      const name = this.name
      searchName(name).then(res => console.log(res))
      searchName({ params: name }).then(res => console.log(res))
    }
  }
}
</script>
<style scoped>
.searchBox {
  width: 100%;
  font-size: 0.44rem;
  height: 1.8rem;
  background: white;
  box-sizing: border-box;
  padding: 0.2rem 0.5rem;
}
input {
  height: 1.35rem;
  width: 9.82rem;
  box-sizing: border-box;
  padding: 0 1.5rem 0 0.5rem;
  border: none;
  border-radius: 0.5rem;
  position: relative;
  background: #efefef;
}
.van-icon-search {
  position: absolute;
  right: 0.8rem;
  top: 1.6rem;
  z-index: 10000;
  font-weight: 900;
}
</style>