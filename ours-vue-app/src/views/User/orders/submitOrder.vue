<template>
  <div class="subOrderBox">
    <div class="title">
      <div @click="lastStep(plist)">
        <van-icon name="arrow-left" size="0.44rem" color="#555" />
      </div>
      <p>订单信息</p>
    </div>
    <div class="cont">
      <div class="cont-top" @click="toAddress">
        <div class="c-t-l">
          <van-icon name="location-o" size="1.1rem" />
        </div>
        <div class="c-t-r">
          <p>{{add.receiver?add.receiver+' '+add.mobile:'请填写收货信息'}}</p>
          <p>{{add.regions?add.regions+' '+add.address:'请输入详细的收货地址和门牌号'}}</p>
        </div>
        <van-icon name="arrow" size="0.6rem" color="#ccc" />
      </div>
      <div v-for="i in plist" :key="i._id">
        <div class="cont-cent">
          <div class="c-c-l">
            <img :src="i.product?i.product.coverImg:i.coverImg" alt />
          </div>
          <div class="c-c-r">
            <div class="name">
              <p>{{i.product?i.product.name:i.name}}</p>
            </div>
            <div class="desc">
              <p>阿卡丽时代峰</p>
              <span>× {{i.product?i.quantity:1}}</span>
            </div>
            <div class="price">
              <p>¥ {{i.product?i.product.price:i.price}}</p>
            </div>
          </div>
        </div>
        <div class="cont-btm">
          <div class="c-b-l">
            <p>商品金额</p>
          </div>
          <div class="c-b-r">
            <p>¥ {{i.product?i.product.price*i.quantity:i.price}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-l">
        <p>
          ¥
          <b>{{plist[0].product?zongjia:plist[0].price}}</b>
        </p>
      </div>
      <div class="footer-r">
        <button @click="nextStep(add,plist)">下一步</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import { Toast } from "vant"
export default {
  name: "submitOrder",
  data() {
    return {
      name: ""
    }
  },
  created() {},
  computed: {
    ...mapState(["plist", "add"]),
    ...mapState("orderList", ["obj"]),
    ...mapGetters("addCart", ["zongjia"])
  },
  methods: {
    lastStep(p) {
      console.log(this.name)
      if (!this.name) {
        this.$router.push({
          name: "User"
        })
      }
      if (this.name == "Detail") {
        this.$router.push({
          name: this.name,
          params: {
            id: p[0]._id
          }
        })
      } else {
        this.$router.push({
          name: this.name
        })
      }
    },
    toAddress() {
      this.$router.push({
        name: "Address",
        params: {
          goSubOrder: "1"
        }
      })
    },
    nextStep(add, plist) {
      console.log("你点击了下一步")
      console.log(add, plist)
      let orderDetails = []
      if (plist[0].product) {
        plist.forEach(i => {
          orderDetails.push({
            quantity: i.quantity,
            product: i.product._id,
            price: i.product.price
          })
        })
      } else {
        orderDetails.push({
          quantity: 1,
          product: plist[0]._id,
          price: plist[0].price
        })
      }
      console.log({
        receiver: add.receiver,
        regions: add.regions,
        address: add.address,
        orderDetails
      })
      Toast.setDefaultOptions({
        duration: 700
      })
      if (add.receiver && add.regions && add.address) {
        this.createOrder({
          receiver: add.receiver,
          regions: add.regions,
          address: add.address,
          orderDetails
        })

        setTimeout(() => {
          if (this.obj.code && this.obj.code == "success") {
            Toast.success("订单保存成功")
            this.$router.push({
              name: "Orders"
            })
          } else if (this.obj.code && this.obj.code !== "success") {
            Toast.fail("用户地址输入有误")
          }
        }, 50)
      } else {
        Toast("请输入收货地址")
      }
    },
    ...mapActions("orderList", ["createOrder"])
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (from.name != "Address") {
        localStorage.setItem("ordername", JSON.stringify(from.name))
      }
      vm.name = JSON.parse(localStorage.getItem("ordername"))
    })
  }
}
</script>
<style scoped>
.subOrderBox {
  width: 100%;
  height: 100%;
  background: #efefef;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 1.38rem;
  background: #fff;
  font-size: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  padding: 0 0.48rem;
  margin-bottom: 0.3rem;
}
.van-icon-arrow-left {
  position: absolute;
  left: 0.48rem;
  top: 0.5rem;
}

.cont-top {
  width: 100%;
  height: 2.6rem;
  background: #fff;
  margin-bottom: 0.3rem;
  display: flex;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.c-t-l {
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.c-t-r {
  width: 8.2rem;
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0.7rem 0.8rem 0.7rem 0.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.c-t-r p:first-child {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.42rem;
  font-weight: 700;
}
.c-t-r p:last-child {
  font-size: 0.37rem;
  color: #888;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-icon-arrow {
  position: absolute;
  right: 0.2rem;
  top: 2.6rem;
}
.cont-cent {
  width: 100%;
  height: 3.2rem;
  margin-bottom: 0.3rem;
  background: #fff;
  display: flex;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.c-c-l {
  width: 2.6rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-c-l img {
  width: 2rem;
  height: 2.2rem;
  background: orange;
}
.c-c-r {
  width: 8.2rem;
  height: 3.2rem;
  box-sizing: border-box;
  padding: 0.5rem 0.8rem 0 0.2rem;
  color: #888;
}
.name {
  width: 100%;
  min-height: 0.6rem;
  max-height: 1.2rem;
  font-size: 0.42rem;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.desc {
  width: 100%;
  height: 0.6rem;
  font-size: 0.36rem;
  line-height: 0.6rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.desc p {
  width: 80%;
}
.desc span {
}
.price {
  width: 100%;
  height: 0.75rem;
  font-size: 0.5rem;
  color: orangered;
  line-height: 0.75rem;
}
.cont-btm {
  width: 100%;
  height: 1.3rem;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.5rem;
  border-top: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.c-b-l {
  color: #888;
}
.footer {
  width: 100%;
  height: 1.4rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
}
.footer-l {
  width: 7rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  color: orangered;
  box-sizing: border-box;
  padding-left: 0.4rem;
}
.footer-l p {
  font-size: 0.3rem;
}
.footer-l p b {
  font-size: 0.6rem;
}
.footer-r {
  width: 3.8rem;
  height: 1.4rem;
  display: flex;
}
.footer-r button {
  width: 3.8rem;
  height: 1.4rem;
  border: 0;
  font-size: 0.44rem;
  color: #fff;
  background-image: linear-gradient(to right, orangered, orange);
}
</style>