<template>
<<<<<<< HEAD
  <van-row class="varT">
    <van-col span="2" offset="1" style="margin-top:1.3rem">
      <van-checkbox v-model="checked"></van-checkbox>
    </van-col>
    <van-col span="20">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </van-col>
  </van-row>
</template>
=======
  <div class="myCart">
    <header>
      <van-nav-bar title="购物车" class="cart">
        <van-icon name="arrow-left" slot="left" @click="clickhandle" />
        <van-icon name="delete" slot="right" />
      </van-nav-bar>
    </header>
>>>>>>> b2cf73464f3dd31bce08ebd685138dbafbcfea55

    <div class="had">
      <div class="container" v-for="item in list" :key="item._id">
        <!-- 单选 -->
        <!--  @change="danclick(item,list)" -->
        <input class="check" type="checkbox" v-model="item.isCheck" />
        <img :src="item.product.coverImg" alt />
        <div class="item">
          <p class="ipp">{{item.product.name}}</p>
          <span class="itt" style="color:red">库存{{item.product.quantity}}</span>
          <div class="list">
            <span>￥{{item.product.price}}</span>
            <div class="add">
              <span @click="subOne(item.product._id,item.quantity)">-</span>
              <span>{{item.quantity}}</span>
              <span @click="addOne(item.product._id,item.quantity,item.product.quantity)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fote">
      <van-submit-bar style="font-size:0.31rem" :price="3050" button-text="提交订单">
        <!--@change="quanclick" checked -->
        <van-checkbox v-model="checkAll">全选</van-checkbox>
        <!-- <input type="checkbox" v-model="checkAll" /> -->
        <span slot="tip" style="font-size:0.31rem">
          你的收货地址不支持同城送,
          <span @click="$router.push({name:'Address'})">修改地址</span>
        </span>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex"
export default {
  name: "Carts",
  data() {
    return {
      checked: false
    }
  },
  created() {
    // 发起请求
    console.log(1)
    this.loadCartList()
    console.log(this.list)
    // this.list.forEach(v => (v.isCheck = false))
    console.log(this.list)
  },
  methods: {
    ...mapActions("addCart", ["loadCartList", "loadData"]),
    clickhandle() {
      window.history.go(-1)
    },
    addOne(id, quantity, kucun) {
      if (quantity >= kucun) {
        alert("亲亲😙😙 超过库存了呢")
      } else {
        this.loadData({ product: id })
      }
    },
    subOne(id, quantity) {
      if (quantity > 1) {
        this.loadData({ product: id, quantity: -1 })
      } else {
        alert("亲亲😙😙不能再减了呢")
      }
    }
    // 单选
    // danclick(i, list) {
    //   let xzArr = list.filter(i => i.isCheck == true)
    //   xzArr.length == list.length
    //     ? (this.checked = true)
    //     : (this.checked = false)
    // },
    // //全选
    // quanclick() {
    //   this.list.forEach(i => {
    //     i.isCheck = this.checked
    //   }, 0)
    // }
  },
  computed: {
    ...mapState("addCart", ["list"]),
    checkAll: {
      // 用来获取计算属性的值
      get() {
        return (
          this.list.filter(person => person.isCheck).length == this.list.length
        )
      },
      // 设置值
      set(val) {
        console.log(val)
        this.list.forEach(person => (person.isCheck = val))
      }
    }
  }
}
</script>

<<<<<<< HEAD
<style>
.varT {
  width: 95%;
  border-radius: 0.3rem;
  margin: 0.3rem auto;
  box-shadow: -0rem 0.01rem 0.3rem #b3e0d1;
}
</style>
=======
<style type='text/css'>
/* * {
  margin: 0;
  padding: 0;
} */
.myCart {
  font-size: 0.12rem;
}
.myCart .cart {
  height: 1rem;
  line-height: 1rem;
  background: #000;
}
.myCart header {
  height: 1rem;
}
.myCart .itt {
  display: inline-block;
  margin-bottom: 0.2rem;
}
.myCart .f-add span {
  color: red;
}
.myCart .van-nav-bar__title {
  color: #fff;
  font-size: 0.5rem;
}
.myCart .had {
  margin-top: 0.2rem;
  flex: 1;
  overflow: auto;
}
.myCart .ipp {
  margin-top: -0.1rem;
}
.myCart .container {
  margin-top: -0.15rem;
  padding: 0.2rem 0;
  width: 100%;
  min-height: 3rem;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #eee;
}
.myCart .check {
  margin: 0 0.2rem;
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.myCart .item {
  width: 100%;
  min-height: 1.9rem;
  margin-left: 0.1rem;
}

.myCart .list span {
  color: red;
}
.myCart .add {
  /* background: #f00; */
  position: relative;
  margin-right: 0.2rem;
}
.myCart .list {
  display: flex;
  justify-content: space-between;
  /* background: #000; */
  position: relative;
  bottom: -0.1rem;
}
.myCart .add input {
  text-align: center;
  border: 0;
}
.myCart .add span {
  color: #000;
  line-height: 0.75rem;
  display: inline-block;
  width: 1rem;
  height: 0.75rem;
  text-align: center;
  cursor: pointer;
  border: 1px solid #ccc;
}
.myCart .container img {
  width: 1.5rem;
  height: 1.5rem;
}
.myCart footer {
  width: 100%;
  position: fixed;
  left: 0;
  height: 1rem;
  line-height: 1rem;
  bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  background: #eee;
  margin-bottom: -0.25rem;
}
.myCart .f-right {
  width: 3.5rem;
  text-align: center;
  background: red;
  color: #fff;
}
.myCart .left {
  width: 1.5rem;
  text-align: center;
}
.myCart .f-add {
  width: 3.5rem;
  flex: 1;
  text-align: right;
  padding: 0 0.2rem;
}
.fote {
  height: 2.8rem;
}

.van-submit-bar__tip {
  height: 0.5rem;
}
.van-submit-bar__bar {
  height: 1.35rem;
}
.van-checkbox__icon i {
  font-size: 0.31rem;
}
</style>


>>>>>>> b2cf73464f3dd31bce08ebd685138dbafbcfea55
