<template>
  <div>
    <van-card
      style="background:#fff;border-bottom:1px solid #ccc"
      v-for="i in list.products"
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
    <van-pagination
      v-model="currentPage"
      @change="clickhandle"
      :total-items="list.totalCount"
      :show-page-size="5"
      force-ellipses
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  data() {
    return {
      currentPage: 1,
      product_category: "",
      name: ""
    }
  },
  created() {
    this.name = this.$route.params.name
    this.product_category = this.$route.params.product_category
    this.loadData({ name: this.name, product_category: this.product_category })
  },
  methods: {
    ...mapActions("xianglian", ["loadData"]),
    clickhandle(page) {
      this.loadData({
        name: this.name,
        product_category: this.product_category,
        page
      })
    }
  },
  computed: {
    ...mapState("xianglian", ["list"])
  }
}
</script> 