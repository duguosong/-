<template>
  <div id="main">
    <van-nav-bar title="万股皆下品唯有黄金高！金价突破千五或指日可待？" left-arrow @click-left="onClickLeft" />
    <h2>万股皆下品唯有黄金高！金价突破千五或指日可待？</h2>
    <span class="time">2019-08-16&nbsp;&nbsp;08:17:19&nbsp;&nbsp;&nbsp;&nbsp;环球外汇官网</span>
    <div id="news">
      <img src="../../assets/discover/new401.png" alt />
      <p>
        周二（6月6日）亚市盘中，现货黄金价格高位整理，最新交投于1467美元/盎司附近。当前贸易紧张局势促
        投资者涌向避险资产，金价周一大涨2%，升至逾六年高位。不少业内人士表示，黄金突破千五关口或已指日可待！
      </p>
      <img src="../../assets/discover/new402.jpg" alt />
      <p>
        全球股市目前仍延续大跌势头，追踪47个国家股市表现的MSCI明晟全球指数延续上周跌势，周一跌2.5%至
        两个月低位。
      </p>
      <p>
        在美国市场上，美股周一遭遇了今年最为惨痛的一天！截至收盘，股市市值蒸发超过7000亿美元，道指
        跌2.90%，标普指数跌2.98%，纳斯达克指数跌3.47%，三大股指均创年内最大单日跌幅。
      </p>
      <p>如下图所示，美股市场隔夜可谓“满江红”，而唯一的一点“绿”——则是黄金股！</p>
      <img src="../../assets/discover/new403.jpg" alt />

      <p>
        股市的表现无疑反映出，如今在市场上“万股皆下品，唯有黄金高”。金价年初至今涨幅已达13%，
        而标普500指数年内涨幅已缩窄至14%。
      </p>
      <img src="../../assets/discover/new404.jpg" alt />

      <p>
        此外，美元兑主要竞争货币跌至近两周低点，令持有其他货币的投资者能够以更低的价格购买黄金，
        同时美元兑人民币却上涨。对贸易的担忧也推动了全球股市的抛售。
      </p>
      <p>
        分析人士指出，特朗普的最新加税威胁，可能迫使美国联邦储备委员会（FED）下调利率，幅度可能
        超过其原本预期的必要幅度，以保护美国经济免受贸易相关风险影响。
      </p>
      <p>
        利率市场的数据显示，投资者现预计美联储9月降息概率为100%，其中降息25个基点的概率为69%，
        降息50个基点的概率为31%。
      </p>
      <img src="../../assets/discover/new405.jpg" alt />

      <p>
        美联储官员周一表示，他们正在密切关注美国股票的大跌走势，评估美国和中国之间再度出现的
        贸易紧张局势可能对经济和货币政策进程产生何种影响。“毋庸置疑，我正在密切监控事态发展对
        经济前景的影响，我将继续密切关注事态发展，”布雷纳德在堪萨斯城联邦储备银行的一个论坛上
        表示。
      </p>
      <p>
        目前，多数市场人士均预计黄金突破千五关口或已指日可待。MKS PAMP集团在一份报告中写道，
        由于美国和中国之间的贸易争端，黄金价格在本周开始上涨。根据该报告，黄金下一个目标是
        1500美元/盎司。
      </p>
      <p>
        “推动金价上涨的是对加税的担忧”，U.S． Global Investors首席交易员Michael Matousek表
        示。他补充称，围绕全球经济的一系列不确定性、公债收益率为负的环境以及持续不断的汇率战争，
        都为黄金上涨提供了充足的理由。
      </p>
      <p>
        他说：“黄金处于牛市，并将继续走高。这只是另一波上涨的开始。如果金价在11月至12月达到1500
        美元的水平，并保持在这一水平，我不会感到意外。”
      </p>
      <p>
        此外，伦敦资本集团（London Capital Group）研究主管Jasper Lawler表示：金价最有可能的走
        势是上涨。他说道：“从技术上讲，黄金看起来不错。金价在1500美元/盎司之前不会有太多阻力。”
      </p>
      <p>责任编辑：唐婧</p>
      <p>来源：环球外汇网官网</p>
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