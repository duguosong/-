<template>
  <div>
    <van-card v-for="item in list" :key="item._id" :price="item.price" :thumb="item.coverImg">
      <div slot="tags">
        <van-tag
          style="display
          inline-block;width:1.rem;height:0.3rem;text-align: center;border-radius: 0.3rem;background:white;border: #dead84 solid 0.02rem;"
        >
          <em style="font-size:0.25rem;color:#f3ad58">假一赔十</em>
        </van-tag>
        <van-tag
          style="display inline-block;width:1.rem;height:0.3rem;text-align: center;border-radius: 0.3rem;background:white;border: #dead84 solid 0.02rem;"
        >
          <em style="font-size:0.25rem;color:#f3ad58">金店验货</em>
        </van-tag>
        <van-tag
          style="display inline-block;width:1.rem;height:0.3rem;text-align: center;border-radius: 0.3rem;background:white;border: #dead84 solid 0.02rem;"
        >
          <em style="font-size:0.25rem;color:#f3ad58">999足金</em>
        </van-tag>
        <p>sdasd</p>
      </div>
    </van-card>
  </div>
</template>
<script>
// import { mapState, mapActions } from 'vuex'
import { products } from '../../../services/service'

export default {
  name: 'Tabs',
  data() {
    return {
      list: []
    }
  },
  created() {
    // this.loadData()
    this.foo()
  },
  methods: {
    onClick(name, title) {
      //   console.log(this.list)
    },
    // ...mapActions('product', ['loadData']),
    async foo() {
      const result = await products({
        product_category: '5db2e5635def0f05c8a70ac9',
        name: '华为'
      })
      console.log(result)
      this.list = result.data.products
    }
  },
  computed: {
    // ...mapState('product', ['list'])
  }
}
</script>
