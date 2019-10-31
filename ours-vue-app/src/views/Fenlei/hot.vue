<template>
  <div>
    <van-card
      style="background:#fff;border-bottom:1px solid #ccc"
      v-for="i in list"
      :key="i._id"
      :price="'月付'+i.price"
      :desc="'￥'+i.price"
      :title="i.name"
      :thumb="i.coverImg"
      @click="$router.push({
        name: 'Detail',
        params: {
          id: i._id
        }
      })"
    >
      <div slot="price">月付￥{{(i.price/6).toFixed(2)+"x6期"}}</div>
      <div slot="bottom">
        <van-tag plain type="danger" round>假一赔十</van-tag>
        <van-tag plain type="danger" round>金店验货</van-tag>
        <van-tag plain type="danger" round>999足金</van-tag>
      </div>
    </van-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  created() {
    const product_category = this.$route.params.product_category
    this.loadData({ product_category })
    console.log("创建完成")
  },
  methods: {
    ...mapActions("hot", ["loadData"])
  },
  computed: {
    ...mapState("hot", ["list"])
  }
}
</script>
<style >
</style>

