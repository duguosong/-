<template>
  <!-- 全部订单-->
  <div class="allorderBox">
    <wuMsg v-if="list.length==0?true:false"></wuMsg>
    <!--  <div class="allordersMsg">
      <div class="PODBCont">
        <div class="top">
          <div class="top-l">
            <div class="top-l-l">
              <van-icon name="shopping-cart" size="0.50rem" />
            </div>
            <div class="top-l-r">
              <p>阿达所发生的asdasd</p>
              <van-icon name="arrow" size="0.34rem" />
            </div>
          </div>
          <div class="top-r">
            <p>交易终止</p>
          </div>
        </div>
        <div class="cont">
          <div class="cont-l">
            <img src="../../../assets/discover/disc03.jpg" alt />
          </div>
          <div class="cont-c">
            <div class="prdName">
              <p>阿萨德按时 阿萨德蒂芬卡士大夫</p>
            </div>
            <div class="prdDesc">
              <p>asdsadf;</p>
              <span>asdfasd</span>
            </div>
            <div class="prdAlt">
              <p>7天无理由退货</p>
            </div>
          </div>
          <div class="cont-r"></div>
        </div>
        <div class="heji">
          <div class="hejiCont">
            <div class="hejiCont-l">
              <p>共1件商品</p>
            </div>
            <div class="hejiCont-r">
              <p>合计:</p>
              <p>
                <span>¥ 19.99</span>
              </p>
            </div>
          </div>
        </div>
        <div class="btns">
          <button class="common">删除订单</button>
          <button class="common">删除订单</button>
          <button class="common">删除订单</button>
        </div>
      </div>
    </div>-->
    <div v-for="(items,index) in list" :key="index">
      <orderDetails :item="items"></orderDetails>
    </div>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg" // 无订单时显示
import orderDetails from "./components/orderDetalis"
import { mapActions, mapState } from "vuex"
export default {
  name: "allorder",
  data() {
    return {}
  },
  created() {
    this.getOrderList()
    console.log(this.list)
  },
  methods: {
    ...mapActions("orderList", ["getOrderList"])
  },
  computed: {
    ...mapState("orderList", ["list"])
  },
  components: {
    wuMsg,
    orderDetails
  }
}
</script>
<style scoped>
.allorderBox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>