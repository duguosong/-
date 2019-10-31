<template>
  <div id="discover">
    <header id="discImg"></header>
    <section>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <ul id="main">
          <li @click="$router.push({name:'NewsOne'})">
            <div>
              <h4>正常运营数量跌破800家，成交量同比下降62.19%</h4>
              <p>正常运营数量跌破800家，成交量同比下降62.19%</p>
            </div>
            <p>
              <img src="../../assets/discover/disc01.jpg" alt />
            </p>
          </li>
          <li @click="$router.push({name:'NewsTwo'})">
            <div>
              <h4>曲线倒挂！经济衰退预警指标全面出现 黄金再飙升</h4>
              <p>黄金价格 涨势如虹</p>
            </div>
            <img src="../../assets/discover/disc02.jpg" alt />
          </li>
          <li @click="$router.push({name:'NewsThree'})">
            <div>
              <h4>聪明人在买黄金，你知道吗?美元崩盘时它们将大放异彩</h4>
              <p>一旦市场认清这个事实，黄金还飙涨数百美元</p>
            </div>
            <img src="../../assets/discover/disc03.jpg" alt />
          </li>
          <li @click="$router.push({name:'NewsFour'})">
            <div>
              <h4>万股皆下品唯有黄金高！</h4>
              <p>正常运营数量跌破800家，成交量同比下降62.19%</p>
            </div>
            <img src="../../assets/discover/disc04.jpg" alt />
          </li>
          <li @click="$router.push({name:'NewsFive'})">
            <div>
              <h4>黄金现回调信号？不会止步</h4>
              <p>正常运营数量跌破800家，成交量同比下降62.19%</p>
            </div>
            <img src="../../assets/discover/disc05.jpg" alt />
          </li>
          <li @click="$router.push({name:'NewsSix'})">
            <div>
              <h4>疯狂！黄金狂飙超40美元</h4>
              <p>正常运营数量跌破800家，成交量同比下降62.19%</p>
            </div>
            <img src="../../assets/discover/disc06.jpg" alt />
          </li>
        </ul>
      </van-pull-refresh>
    </section>
    <dibu id="footer"></dibu>
  </div>
</template>

<script>
import dibu from "../../components/dibu"

export default {
  name: "Discover",
  components: {
    dibu
  },
  data() {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>
<style scoped>
#discover {
  display: flex;
  flex-direction: column;
}
#discImg {
  width: 100%;
  height: 1.94rem;
  background: url(../../assets/discover/discovery.png) no-repeat;
  background-size: cover;
}
section {
  flex: 1;
  overflow: auto;
}
#main {
  height: 18.6rem;
  background: #fff;
}

#main li {
  height: 2.55rem;
  border-bottom: 1px solid #bdbebd;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 0.3rem;
}
#main li h4 {
  font-size: 0.5rem;
  color: #000;
  line-height: 1rem;
  width: 6.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#main li div p {
  width: 6.9rem;
  font-size: 0.4rem;
  color: #848284;
  line-height: 0.6rem;
}
#main li .pic {
  width: 2.4rem;
  height: 1.8rem;
  margin-right: 0.5rem;
}
#main li img {
  width: 2.4rem;
  height: 1.8rem;
  margin-top: 0.3rem;
  margin-right: 0.2rem;
  border: 1px solid #ccc;
}

#footer {
  flex-shrink: 0;
  height: 1.46rem;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
