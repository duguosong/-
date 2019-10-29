<template>
  <div id="main">
    <van-nav-bar title="聪明资金都在买黄金白银 美元崩盘时它们将大放异彩..." left-arrow @click-left="onClickLeft" />
    <h2>聪明资金都在买黄金白银 美元崩盘时它们将大放异彩</h2>
    <span class="time">2019-08-06&nbsp;&nbsp;12:06&nbsp;&nbsp;&nbsp;&nbsp;来源：新浪财经</span>
    <div id="news">
      <img src="../../assets/discover/new301.png" alt />
      <h4>一旦市场认清这个事实，黄金还将飙涨数百美元......</h4>
      <img src="../../assets/discover/new302.jpg" alt />
      <p>
        受避险情绪影响，隔夜美股市场“闪崩”，道指盘中一度崩跌超950点，三大指数均创下年内最大跌幅，恐慌
        指数VIX狂飙40%。看起来美联储降息这副“魔药”似乎已经无法在美股市场发挥作用了。在分析近期市场动态
        时，金融大佬Peter Schiff指出，美联储在说谎，美国利率将降至零，而黄金将飙涨至2000美元/盎司水平
        。
      </p>
      <p>
        首先，Schiff预计，在可预见的未来，美元还将继续走软。他提到，美元周一的走势就体现出了它的疲态。
        在黄金持续上涨逼近1470美元关口之际，美指跌破98关口收跌0.58%。Schiff 指出：
      </p>
      <p>
        在仅仅一个交易日内黄金相对美元走高逾30美元，看到这里，交易员很难再说美元强势了。现实就是，美元
        其实是疲软的。我们一直处于经济衰退期，特朗普的各种举措只不过是稍微推迟了不可避免的衰退。就算美
        联储降息，也无法阻止衰退，美股终究还是会下跌。”
      </p>
      <p>
        提到上周新闻发布会中美联储主席鲍威尔的表现，Schiff指出，鲍威尔的发言出现不少自相矛盾之处，这说明
        他是在说谎，美联储并没有说实话。
      </p>
      <p>Schiff预测美联储将会把利率降至0%水平，并再次启动量化宽松政策。Schiff提到：</p>
      <p>
        鲍威尔试图假装这（降息）是因为对海外经济的担忧，但实际上一直都是美国经济在推动美联储（降息）。这就
        是为什么上周的降息只是利率回归零的第一步。值得注意的是，上次美联储将利率降至零的时候就犯了错
        误，这次如果再那么做，其犯下的错误将更大。
      </p>
      <p>
        此外，美联储还将重新实行QE。美联储不久前才宣布量化紧缩结束， 而下一步便是回归QE，且第四轮QE的力度预计
        将比前面三轮加起来都大。“
      </p>
      <p>Schiff指出，可悲的是，这一次无论美联储做什么，都无法阻止即将到来的衰退，只会毁掉美元。</p>
      <p>
        但是，薛洪言同时也指出，“站在P2P行业角度看，龙头退出，难免引发诸多猜测，市场需要明确的预期引
        导，即假如陆金所退出P2P业务，究竟是企业自身战略定位发生变化，还是行业层面的整体风向转变？接下
        来，市场会关注其他几家龙头的动向，如果有跟随者，市场对P2P行业的信心会被继续削弱”。
      </p>
      <p>“当深陷泡沫时，你无法看到那个能戳破泡沫的钉子。”</p>
      <p>
        通过仔细研究如今的市场环境与经济大衰退之前环境之间的异同，Schiff如今更加坚信自己的判断，他过去
        一年的很多预测都得到了验证。Schiff预测，国际黄金将快速上涨至2000美元/盎司上方。就在7月底，Schiff
        提到的具体点位还没有这么高，当时他指出金价(1495.24, -0.56, -0.04%)在涨到1800美元或1900美元（接
        近2011年高点）之前都不会有太大阻力，金价甚至有可能将突破2011年的高点。
      </p>
      <p>
        可见Schiff对黄金的热情已经愈加浓烈。Schiff还指出，黄金如今涨幅相对偏小，表明黄金投资者甚至
        还没有开始关注经济将陷入衰退的事实。他预测，随着经济形势逐渐明朗，衰退迹象不断显现，黄金或
        将上涨数百美元。
      </p>
      <p>在具体投资方面，相较比特币，Schiff建议买入黄金和白银(17.79, -0.09, -0.49%)，他指出：</p>
      <p>聪明资金都在买入黄金和白银，因为这些是合法的价值储备，它们是货币资产，当美元崩盘时它们将会大放异彩。”</p>
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