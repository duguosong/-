<template>
  <div class="task" style="height:100%">
    <div style="height:7.71rem">
      <navTop></navTop>
      <van-row>
        <van-col span="5" style="border-right:#cccccc solid 0.03rem">
          <p style="font-size:0.32rem;text-align:center">已连续签到</p>
          <p style="font-size:0.36rem;text-align:center">
            <em style="color:orange;font-size:0.42rem">0</em>天
          </p>
        </van-col>
        <van-col span="18">
          <van-steps :active="active" active-icon="success" active-color="#38f">
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="checked" size="0.6rem" color="orange" />
            </p>
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="clear" size="0.6rem" color="orange" />
            </p>
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="checked" size="0.6rem" color="orange" />
            </p>
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="clear" size="0.6rem" color="orange" />
            </p>
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="checked" size="0.6rem" color="orange" />
            </p>
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="clear" size="0.6rem" color="orange" />
            </p>
            <p style="font-size:0.32rem;text-align:center;width:0.9rem;margin-left:0.29rem">
              10.30
              <van-icon name="clear" size="0.6rem" color="orange" />
            </p>
          </van-steps>
        </van-col>
      </van-row>
    </div>
    <gri></gri>
    <dibu></dibu>
  </div>
</template>
<script>
import dibu from "../../components/dibu"
import navTop from "./task/Img"
import gri from "./task/gri"

export default {
  name: "Task",
  components: {
    dibu,
    navTop,
    gri
  },
  data() {
    return {
      active: 1,
      months: "",
      datas: ""
    }
  }
}
</script>

<style  scoped>
.task {
  display: flex;
  flex-direction: column;
}
.van-steps {
  padding: 0;
}
.van-step__title {
  font-size: 0.08rem;
}
</style>