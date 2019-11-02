<template>
  <!-- 收藏 -->
  <div class="collectContBox">
    <wuMsg v-if="false"></wuMsg>
    <div class="msg" v-for="(item,index) in 4" :key="index">
      <div class="cont-cent">
        <div class="c-c-l">
          <img src alt />
        </div>
        <div class="c-c-r">
          <div class="name">
            <p>阿萨斯看来房价快速,是的咖啡机爱仕达,适得府君书杜,asdjk卡上的大幅开始暗示健康的很符合时代发生的回复收到收到</p>
          </div>
          <div class="desc">
            <p>阿卡丽时代峰</p>
            <span>× 1</span>
          </div>
          <div class="price">
            <p>¥ 3188.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wuMsg from "../components/wuMsg"
export default {
  name: "collectCont",
  components: {
    wuMsg
  }
}
</script>
<style scoped>
.collectContBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.msg {
}

.cont-cent {
  width: 100%;
  height: 3.2rem;
  margin-top: 0.1rem;
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
</style>
