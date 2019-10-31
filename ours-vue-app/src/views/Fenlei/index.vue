<template>
  <div id="big">
    <van-nav-bar class="hj" title="黄金饰品" left-arrow @click-left="onClickLeft" />
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
export default {
  data() {
    return {
      arr: [],
      isweiyi: false
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
    }
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
</style>
