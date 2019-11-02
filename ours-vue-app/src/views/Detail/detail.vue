<template>
  <div>
    <lunbo></lunbo>
    <div id="name">
      <van-tag round type="warning">假一赔十</van-tag>
      {{list[0]?list[0].name:""}}
    </div>
    <div id="price">
      ￥{{list[0]?list[0].price:""}}.00
      <span>有货</span>
    </div>
    <div style="height:0.3rem;width:100%;background:#efefef"></div>
    <div class="neicun">
      <p>内存</p>
      <div class="biaoqian">
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem;">128G</van-tag>
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem">256G</van-tag>
        <van-tag plain color="#000" size="large">64G</van-tag>
      </div>
    </div>
    <div class="neicun">
      <p>颜色</p>
      <div class="biaoqian">
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem;">白色</van-tag>
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem">紫色</van-tag>
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem;">红色</van-tag>
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem">绿色</van-tag>
        <van-tag plain color="#000" size="large" style="margin-right:0.3rem;">黄色</van-tag>
        <van-tag plain color="#000" size="large">黑色</van-tag>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" :info="cartCount" :to="{name:'Cart'}" />
      <van-goods-action-icon icon="shop-o" text="店铺" info="12" />
      <van-goods-action-button type="warning" text="加入购物车" @click="clickhandle" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        :to="{name:'submitOrder'}"
        @click="buyHandle(list[0])"
      />
    </van-goods-action>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex"
import lunbo from "./lunbo"
export default {
  name: "detail",
  data() {
    return {
      ID: ""
    }
  },
  created() {
    const id = this.$route.params.id
    this.ID = id
    console.log(id)
    this.loadData(id)
    console.log(this.list)
    if (localStorage.getItem("token")) {
      this.loadCartList()
    }
  },
  methods: {
    ...mapActions("detail", ["loadData"]),
    ...mapActions("addCart", {
      loadCart: "loadData",
      loadCartList: "loadCartList"
    }),
    clickhandle() {
      this.loadCart({ product: this.ID })
    },
    buyHandle(i) {
      console.log(i)

      this.$store.commit("product", [i])
    }
  },
  computed: {
    ...mapState("detail", ["list"]),
    ...mapGetters("addCart", ["cartCount"])
  },
  components: { lunbo }
}
</script>
<style scoped>
#name {
  min-height: 1.13rem;
  width: 100%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  font-size: 0.34rem;
  color: #636363;
}
#price {
  height: 1.38rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.3rem;
  font-size: 0.8rem;
  color: #f9710d;
  line-height: 1.38rem;
  position: relative;
}
#price span {
  font-size: 0.38rem;
  color: #000;
  position: absolute;
  right: 0.5rem;
}
.neicun {
  height: 1.8rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.neicun p {
  height: 1.1rem;
  width: 100%;
  line-height: 1.1rem;
  font-size: 0.35rem;
  padding: 0;
  margin: 0;
}
.neicun .biaoqian {
  min-height: 0.7rem;
  width: 100%;
  font-size: 0.2rem;
}
</style>
