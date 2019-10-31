<template>
  <div>
    <van-row style="background:#f8f8fa">
      <van-col span="1" offset="2">
        <div
          style="width:0.12rem;height:0.46rem;background:#ff6c00;border-radius:0.3rem;height:0.71rem;text-align:center;line-height:0.71rem;"
        ></div>
      </van-col>
      <van-col
        span="7"
        style="font-size:0.38rem;color:#e86709;height:0.71rem;text-align:center;line-height:0.71rem;"
      >电子数码推荐</van-col>
      <van-col span="5" offset="7" style="font-size:0.38rem;color:#e86709;color:#818183">查看更多>></van-col>
    </van-row>
    <van-grid :border="false" :column-num="2" class="aa">
      <van-grid-item
        style="border-bottom: #efefef solid 1px; border-right: #efefef solid 1px;display:flex"
        v-for="item in list"
        :key="item._id"
        :to="{name:'Detail',params:{
          id:item._id
        }}"
      >
        <van-image :src="item.coverImg" style="width:1.73rem" />
        <van-tag
          style="margin:0.5rem 1.9rem 0.3rem 0;width:1.rem;height:0.3rem;text-align: center;border-radius: 0.3rem;background:white;border: #dead84 solid 0.02rem;"
        >
          <em style="font-size:0.25rem;color:#f3ad58">假一赔十</em>
        </van-tag>
        <div
          style="font-size:0.31rem;box-sizing:border-box;padding: 0rem 0.35rem;width:4.4rem;overflow: hidden;marigin-bottom:0.3rem;display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;"
        >{{item.name}}</div>
        <div style="width:100%;height:0.8rem">
          <div
            style="font-size:0.33rem;margin-left:0.55rem;color:#ff6a00;display: inline-block;float:left"
          >月付</div>&nbsp;
          <div style="font-size:0.33rem;color:#ff6a00;display: inline-block;float:left">￥</div>
          <div
            style="font-size:0.33rem;color:#ff6a00;display: inline-block;float:left"
          >{{(item.price/6).toFixed(2)}}</div>&nbsp;&nbsp;
          <div
            style="font-size:0.33rem;color:#989898;display: inline-block;float:left;margin-left:0.2rem"
          >×6期</div>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "productS",
  created() {
    // 发起ajsx的函数
    this.loadData()
  },
  methods: {
    ...mapActions("product", ["loadData"])
  },
  computed: {
    ...mapState("product", ["list"])
  }
}
</script>



