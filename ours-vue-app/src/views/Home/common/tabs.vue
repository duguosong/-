<template>
  <div>
    <van-tabs line-width="2rem">
      <van-tab v-for="(item, index) in oee" :key="item._id">
        <div slot="title" style="font-size:0.2rem" ref="dd" @click="tabHandle(index)">
          <van-icon name="fire" color="red" />
          {{item}}
        </div>
      </van-tab>
    </van-tabs>
    <van-card
      v-for="item in list"
      :key="item._id"
      :price="item.price"
      desc="描述信息"
      title="商品标题"
      :thumb="item.coverImg"
    >
      <div slot="tags">
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </div>
    </van-card>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
import { products } from "../../../services/service"

export default {
  name: "Tabs",
  data() {
    return {
      list: [],
      oee: [],
      text: [],
      descriptions: "",
      product_category: ""
    }
  },
  created() {
    // this.loadData()
    this.foo()
    this.product_category = this.$route.params.product_category
    this.descriptions = this.$route.params.descriptions
    console.log(this.descriptions)
    console.log(this.product_category)
    const one = this.descriptions.split("&")
    // console.log(one)
    this.oee = one
    console.log(this.list)
  },
  methods: {
    // ...mapActions('product', ['loadData']),
    async foo() {
      const result = await products({
        product_category: this.product_category,
        name: this.text
      })
      console.log(result)
      this.list = result.data.products
    },
    tabHandle(obj) {
      //   console.log(this.$refs.dd[obj].innerText)
      this.text = this.$refs.dd[obj].innerText
      console.log(this.text)
      this.foo()
    }
  },
  computed: {
    // ...mapState('product', ['list'])
  }
}
</script>