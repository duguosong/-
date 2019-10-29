<template>
  <div id="main">
    <van-nav-bar title="疯狂!黄金狂飙超40美元原油跌近8% 今夜非农驾到" left-arrow @click-left="onClickLeft" />
    <h2>疯狂!黄金狂飙超40美元原油跌近8% 今夜非农驾到</h2>
    <span class="time">2019-08-02&nbsp;&nbsp;08:11&nbsp;&nbsp;&nbsp;&nbsp;新浪财经</span>
    <div id="news">
      <img src="../../assets/discover/news601.png" alt />
      <p>
        24K99讯 隔夜金融市场疯狂行情再现，最新消息令投资者猝不及防，恐慌情绪卷土重来，市场瞬间大变脸：
        美元指数上演高台跳水一幕，跌超60余点；原油价格一度崩跌8%；现货黄金持续飙升，一度暴涨超40美元；
        美股大跌，道琼斯指数从日高下跌超过600点。美联储9月降息的几率再次升温，概率从61%陡然升至95%。
        周五（8月2日）市场焦点将转向晚间的美国非农就业报告。
      </p>
      <h4>一夜疯狂！全球市场巨变</h4>
      <p>
        在美联储主席鲍威尔周三浇灭对更多降息的预期后，周四起初美元持续攀升，一度逼近99大关，现货黄金
        则重挫至1400附近，但这一切却在隔夜突然巨变……
      </p>
      <p>受最新关税消息影响，隔夜全球市场恐慌情绪大爆发，VIX指数飙升10%，一度触及19.46水平。</p>
      <img src="../../assets/discover/news602.jpg" alt />
      <p>（VIX指数 来源：ZeroHedge）</p>
      <p>
        美债收益率大跌。多数期限美债收益率势将创下2018年5月以来最大单日跌幅，其中两年期美债收益率
        跌至2017年11月以来新低，势将下跌17个基点，五年期美债创下2017年9月以来新低，势将下跌近18个
        基点。
      </p>
      <p>责任编辑：唐婧</p>
      <p>来源：网易新闻</p>

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