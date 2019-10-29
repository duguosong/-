<template>
  <div id="main">
    <van-nav-bar title="黄金现回调信号?分析师:多头不会止步 未来还要爆发" left-arrow @click-left="onClickLeft" />
    <h2>黄金现回调信号?分析师:多头不会止步 未来还要爆发</h2>
    <span class="time">2019-08-06&nbsp;&nbsp;13:11&nbsp;&nbsp;&nbsp;&nbsp;新浪财经</span>
    <div id="news">
      <img src="../../assets/discover/news501.png" alt />
      <p>
        24K99讯 周二（8月6日）亚市盘中，现货黄金在早盘一度升穿1470关口后自高位回落，目前较日高
        大跌超过10美元，回吐日内全部涨幅，转向下跌。
      </p>
      <p>针对黄金的前景表现，分析师David Becker撰文进行简要分析，内容如下：</p>
      <p>
        周一，随着高风险资产在压力下交易，黄金价格飙升。美元兑除人民币外的主要货币全线走软。美国国
        债收益率大幅下跌，基准的10年期国债收益率领跌。
      </p>
      <p>
        上周末中美之间的紧张局势有所加剧。在特朗普总统上周五宣布计划对3000亿美元的中国进口商品加税后，
        中国宣布将采取报复行动。
      </p>
      <p>美国服务业的增长也面临压力。7月份，美国ISM服务业PMI降至3年来的最低水平。</p>
      <p>在此之际，周一中国放手让人民币兑美元在10年多来首次破七。中国商务部称中国相关企业暂停新的美国农产品采购。</p>
      <p>黄金价格周一大爆发，随着积极动能开始加速走高，金价料将测试高位。</p>
      <p>第一个目标阻力位在2013年5月的高点1478美元附近。金价短期支撑位料位于近期突破的1，453美元附近。</p>
      <p>随着快速随机指标产生交叉买入信号，短期动量已转为正值。</p>
      <p>不过，快速随机指标加速走高，目前的读数为84，高于超买触发点80，这可能预示着市场将出现回调。</p>
      <p>
        中期动能也转为正值，因MACD产生交叉买入信号。这发生在MACD线（12天移动平均线减去26天移动平均线）上穿
        MACD信号线（MACD线的9天移动平均线）之际。
      </p>
      <p>MACD动能柱呈向上倾斜的轨迹，表明金价有望走高。</p>
      <p>责任编辑：唐婧</p>
      <p>来源：新浪财经</p>
      <button @click="toTop">回到顶部</button>
      <em></em>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      window.history.go(-1)
    },
    toTop() {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<style scoped>
#main {
  padding: 0 0.42rem;
  display: flex;
  flex-direction: column;
}

#main h2 {
  height: 2rem;
  font-size: 0.7rem;
  line-height: 1rem;
  padding: 2rem 0.3rem 0.3rem;
  font-weight: normal;
  font-family: "微软雅黑";
  text-align: center;
}

#main .time {
  font-size: 0.3rem;
  line-height: 0.93rem;
  color: #6f6e74;
  border-bottom: 1px solid #cecece;
}
#news {
  margin-top: 0.6rem;
}
#news img {
  width: 10rem;
  height: 5.8rem;
  margin: 0 auto;
}
#news h4 {
  font-size: 0.4rem;
  line-height: 0.8rem;
  color: #000062;
  text-indent: 1rem;
}

#news p {
  font-size: 0.4rem;
  line-height: 0.8rem;
  text-indent: 1rem;
}
#news button {
  position: absolute;
  width: 2.4rem;
  height: 1rem;
  line-height: 0.8rem;
  font-size: 0.4rem;
  border: 0;
  background: #fbfe9d;
  color: 746e71;
  left: 50%;
  margin-left: -1.2rem;
}
#news em {
  display: block;
  width: 100%;
  height: 1.94rem;
  background: url(../../assets/discover/discovery.png) no-repeat;
  background-size: cover;
}
</style>
<style>
.van-nav-bar {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 1.2rem;
  line-height: 1.2rem;
}
.van-nav-bar .van-icon {
  font-size: 0.5rem;
  color: #6e6e6e;
}
.van-nav-bar__title {
  font-size: 0.5rem;
}
</style>