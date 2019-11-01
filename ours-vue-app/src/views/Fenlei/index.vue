<template>
  <div id="big">
    <van-nav-bar class="hj" :title="st" left-arrow @click-left="onClickLeft" />
    <div class="dd"></div>
    <div class="searchBox">
      <van-icon name="search" size="1rem" color="#ee5b16" @click="searchNames" />
      <input type="text" v-model="name" placeholder="请输入搜索关键字" />
    </div>

    <lunbo></lunbo>
    <ul>
      <li>
        <router-link :to="{name:'Hot'}">{{arr[0]}}</router-link>
      </li>
      <li>
        <router-link :to="{name:'Jiezhi',params:{name:arr[1]}}">{{arr[1]}}</router-link>
      </li>
      <li>
        <router-link :to="{name:'Xianglian',params:{name:arr[2]}}">{{arr[2]}}</router-link>
      </li>
      <li>
        <router-link :to="{name:'Shouzhuo',params:{name:arr[3]}}">{{arr[3]}}</router-link>
      </li>
      <li>
        <router-link :to="{name:'Zhuanyunzhu',params:{name:arr[4]}}">{{arr[4]}}</router-link>
      </li>
    </ul>
    <div class="zujian">
      <router-view></router-view>
    </div>
  </div>
</template>
<script src="https://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
<script>
import lunbo from "./lunbo"
import { mapActions, mapState } from "vuex"
export default {
  data() {
    return {
      arr: [],
      isweiyi: false,
      name: ""
    }
  },
  created() {
    this.arr = this.$route.params.descriptions.split("&")
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "home"
      })
    },
    searchNames() {
      console.log(this.name)
      //发起请求
      this.loadData({ name: this.name })
    },
    ...mapActions("hot", ["loadData"])
  },
  computed: {
    ...mapState(["st"])
  },
  components: { lunbo }
}
</script>

<style>
#big {
  font-size: 0.28rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#big .hj {
  width: 100%;
  height: 1.44rem;
}
#big .dd {
  width: 100%;
  height: 1.44rem;
}
#big .sousuo {
  width: 100%;
  height: 1.44rem;
}

#big ul {
  display: flex;
  width: 100%;
  height: 1.02rem;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

#big ul li {
  height: 1.02rem;
  line-height: 1.02rem;
}
#big ul li:hover {
  border-bottom: 4px solid #df6438;
}

#big ul li:hover a {
  color: #df6438;
}

#big ul li a {
  text-decoration: none;
}

#big .zujian {
  flex: 1;
  overflow: auto;
}

/* 输入框样式 */
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
  margin-top: 6px;
}
</style>
