<template>
  <div class="addressMsgBox">
    <div class="cont">
      <div class="msg">
        <p>收件人</p>
        <span>收件人电话</span>
      </div>
      <div class="msgAddress">
        <p>数据的粉红色</p>
      </div>
    </div>
    <!--  操作 -->
    <div class="operate">
      <div class="operate-left">
        <van-icon name="checked" size="0.37rem" color="#31c442" />
        <p>设为默认地址</p>
      </div>

      <div class="operate-right">
        <div class="operate-right-l" @click="editHandle">
          <van-icon name="add" size="0.37rem" />
          <p>编辑</p>
        </div>
        <div class="operate-right-r" @click="delHandle">
          <van-icon name="clear" size="0.37rem" />
          <p>删除</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addressMsg',
  methods: {
    editHandle() {
      console.log('你点击了编辑按钮！')
    },
    delHandle() {
      console.log('你点击了删除按钮！')
    }
  }
}
</script>
<style scoped>
.cont {
  width: 100%;
  height: 2.08rem;
  box-sizing: border-box;
  padding: 0 0.48rem;
  background: #fff;
}
.msg {
  height: 1.14rem;
  font-size: 0.38rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  box-sizing: border-box;
  padding: 0.4rem 0 0 0;
}
.msg p {
  min-width: 0.4rem;
  height: 0.73rem;
  padding-right: 0.2rem;
}
.msgAddress {
  height: 0.92rem;
  border-bottom: 0.02rem solid #eeeeee;
}
.msgAddress p {
  font-size: 0.33rem;
  color: #7b7b7b;
}
.operate {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.48rem;
  height: 1.42rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.operate-left {
  width: 2.67rem;
  height: 1.42rem;
  display: flex;
  align-items: center;
}
.operate-left p {
  font-size: 0.33rem;
  padding-left: 0.15rem;
  color: #7b7b7b;
}
.operate-right {
  width: 3.8rem;
  height: 1.42rem;
  display: flex;
  font-size: 0.33rem;
  justify-content: space-around;
  align-items: center;
}
.operate-right p {
  padding-left: 0.15rem;
}
.operate-right-r {
  width: 1.76rem;
  height: 1.42rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.operate-right-l {
  display: flex;
  width: 1.76rem;
  height: 1.42rem;
  align-items: center;
  justify-content: center;
}
</style>