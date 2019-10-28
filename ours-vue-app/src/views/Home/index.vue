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
          @click="$router.push({name:'Message'})"
        ></van-col>
      </van-row>
      <van-row>
        <van-col
          span="12"
          offset="2"
          class="iconfont icon-yinliang"
          style="font-size:0.58rem;font-weight:500;color:white;line-height:1.22rem"
        ></van-col>
      </van-row>

      <van-row>
        <van-col span="20" offset="2">
          <van-swipe
            :autoplay="3000"
            indicator-color="white"
            style="height:4.16rem;border-radius:0.35rem"
          >
            <van-swipe-item>
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
                alt
                style="width:100%"
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
                alt
                style="width:100%"
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
                alt
                style="width:100%"
              />
            </van-swipe-item>
            <van-swipe-item>
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2350302849,3323337377&fm=26&gp=0.jpg"
                alt
                style="width:100%"
              />
            </van-swipe-item>
          </van-swipe>
        </van-col>
      </van-row>

      <van-row>
        <van-col span="20" offset="2">
          <van-grid :border="false" :column-num="4">
            <van-grid-item
              @click="$router.push({name:'NewPhone',params:{product_category:'5db2e5635def0f05c8a70ac9'}})"
            >
              <div class="app" style="background:orange;color:white">
                <van-icon name="gold-coin" size="0.76rem" />
              </div>
              <span style="font-size:0.33rem;width:100%;text-align:center;">黄金饰品</span>
            </van-grid-item>
            <van-grid-item>
              <div class="app" style="background:#76beee;color:white">
                <van-icon name="gift-card" size="0.76rem" />
              </div>
              <span style="font-size:0.33rem;width:100%;text-align:center;">新品手机</span>
            </van-grid-item>
            <van-grid-item>
              <div class="app" style="background:#f96561;color:white">
                <van-icon name="hot" size="0.76rem" />
              </div>
              <span style="font-size:0.33rem;width:100%;text-align:center;">电子数码</span>
            </van-grid-item>

            <van-grid-item>
              <div class="app" style="background:#d6b159;color:white">
                <van-icon name="graphic" size="0.76rem" />
              </div>

              <span
                style="font-size:0.33rem;width:100%;text-align:center"
                @click="$router.push({name:'Limit'})"
              >3万额度</span>
            </van-grid-item>
          </van-grid>
        </van-col>
      </van-row>
    </div>
    <section>
      <productsList></productsList>
      <product></product>
      <Products></Products>
      <div class="guadi"></div>
    </section>
    <dibu style=" position: fixed;bottom:0rem"></dibu>
  </div>
</template>

<script>
import productsList from './productsList'
import product from './product'
import Products from './products'
import dibu from '../../components/dibu'
import { products } from '@/services/service'
export default {
  name: 'home',
  components: { productsList, product, Products, dibu },
  created() {}
}
</script>
<style scoped>
.nav {
  width: 100%;
  height: 9.8rem;
  background-image: url(../../assets/Home001.png) !important;
  background-repeat: no-repeat;
  background-size: 100% 4.18rem;
}
.guadi {
  height: 1.42rem;
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
}
.home {
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
}
.section {
  flex: 1;
}
</style>