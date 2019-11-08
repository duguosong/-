<template>
  <div class="home">
    <div class="nav">
      <van-row>
        <van-col
          span="8"
          offset="2"
          style="font-size:0.3rem;margin-top:0.3rem;color:white;leine-hight:0.43rem"
        >信用额度（元）</van-col>
      </van-row>

      <van-row>
        <van-col
          offset="2"
          span="4"
          style="font-size:0.55rem;font-weight:700;color:white;line-height:0.84rem"
        >30000</van-col>
        <van-col
          offset="1"
          span="5"
          style="font-size:0.47rem;font-weight:700;color:white;line-height:0.84rem"
          @click="$router.push({name:'Limit'})"
        >免费领取</van-col>
        <van-col
          span="1"
          offset="9"
          class="iconfont icon-talk"
          style="font-size:0.58rem;font-weight:500;color:white;line-height:0.84rem"
          @click="message"
        ></van-col>
      </van-row>
      <van-row>
        <van-col
          span="2"
          offset="2"
          class="iconfont icon-yinliang"
          style="font-size:0.58rem;font-weight:500;color:white;line-height:1.22rem"
        ></van-col>
        <van-col span="17">
          <van-notice-bar
            style
            text="自古表白多白表，从来情痴枉痴情。
笑叹少年多年少，哪知自负终负自。
悠长情书难书情，誓说长久少久长。
往昔事故成故事，曾经情人欠人情。
难有现实能实现，哪来情调益调情。
佳艳千万叹万千，怎知俗世多世俗。
莫怨好友不友好，唯与生人道人生。"
          />
        </van-col>
      </van-row>

      <van-row>
        <van-col span="20" offset="2">
          <van-swipe
            :autoplay="3000"
            indicator-color="white"
            style="height:4.16rem;border-radius:0.35rem"
          >
            <van-swipe-item
              v-for="(item,index) in list"
              :key="index"
              @click="clickhandle22(list[index]?list[index].name:'',{name:'Hot',params:{product_category:list[index]?list[index]._id:'',descriptions:list[index]?list[index].descriptions:''}})"
            >
              <img :src="item.coverImg" alt style="width:100%" />
            </van-swipe-item>
          </van-swipe>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="20" offset="2">
          <van-grid :border="false" :column-num="4">
            <van-grid-item
              :to="{name:'Hot',params:{product_category:list[0]?list[0]._id:'',descriptions:list[0]?list[0].descriptions:''}}"
              @click="clickhandle(list[0]?list[0].name:'')"
            >
              <div class="app" style="background:orange;color:white">
                <van-icon name="gold-coin" size="0.76rem" />
              </div>
              <span
                style="font-size:0.33rem;width:100%;text-align:center;"
              >{{list[0]?list[0].name:''}}</span>
            </van-grid-item>
            <van-grid-item
              :to="{name:'Hot',params:{product_category:list[1]?list[1]._id:'',descriptions:list[1]?list[1].descriptions:''}}"
              @click="clickhandle(list[1]?list[1].name:'')"
            >
              <div class="app" style="background:#76beee;color:white">
                <van-icon name="gift-card" size="0.76rem" />
              </div>
              <span
                style="font-size:0.33rem;width:100%;text-align:center;"
              >{{list[1]?list[1].name:''}}</span>
            </van-grid-item>
            <van-grid-item
              :to="{name:'Hot',params:{product_category:list[2]?list[2]._id:'',descriptions:list[2]?list[2].descriptions:''}}"
              @click="clickhandle(list[2]?list[2].name:'')"
            >
              <div class="app" style="background:#f96561;color:white">
                <van-icon name="hot" size="0.76rem" />
              </div>
              <span
                style="font-size:0.33rem;width:100%;text-align:center;"
              >{{list[2]?list[2].name:''}}</span>
            </van-grid-item>

            <van-grid-item @click="$router.push({name:'Limit'})">
              <div class="app" style="background:#d6b159;color:white">
                <van-icon name="graphic" size="0.76rem" />
              </div>

              <span style="font-size:0.33rem;width:100%;text-align:center">3万额度</span>
            </van-grid-item>
          </van-grid>
        </van-col>
      </van-row>
    </div>
    <div style="flex:1;overflow: auto;">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <productsList></productsList>
        <product></product>
        <Products></Products>
      </van-pull-refresh>
    </div>

    <dibu></dibu>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
import productsList from "./productsList"
import product from "./product"
import Products from "./products"
import dibu from "../../components/dibu"
import { products } from "@/services/service"

export default {
  name: "home",
  data() {
    return {
      obj: {},
      // count: 0,
      isLoading: false
    }
  },
  computed: {
    ...mapState("categoriesList", ["list"])
  },
  created() {
    this.loadData()
  },
  components: { productsList, product, Products, dibu },
  methods: {
    ...mapActions("categoriesList", ["loadData"]),
    message() {
      this.$router.push({ path: "/message" })
    },
    clickhandle22(v, i) {
      console.log(v)
      this.$store.commit("sav", v)
      this.$router.push(i)
    },
    clickhandle(v) {
      console.log(v)
      this.$store.commit("sav", v)
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast.setDefaultOptions({
          duration: 800
        })
        this.$toast("刷新成功")
        this.isLoading = false
        // this.count++
      }, 1000)
      this.loadData()
    }
  }
}
</script>
<style scoped>
.nav {
  width: 100%;
  height: 10rem;
  background-image: url(../../assets/Home001.png) !important;
  background-repeat: no-repeat;
  background-size: 100% 4.18rem;
}

.van-grid-item div {
  display: inline-block;
  width: 1.04rem;
  height: 1.04rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.04rem;
}
.app {
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 50% !important;
  margin-bottom: 0.3rem;
}
.home {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
}
.van-swipe__track img {
  width: 9.6rem;
  height: 4.18rem;
}
.van-notice-bar {
  background: transparent;
  color: white;
  height: 1.2rem;
  margin: auto;
  padding: 0;
}
</style>