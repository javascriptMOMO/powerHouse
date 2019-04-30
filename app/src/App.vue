<template>
  <div id="app" :style="{height:trueHeight+'px'}">
    <div class="head">涟水供电站数据总览</div>
    <div class="main" :style="{height:mainHeight+'px'}">
      <div class="left">
        <div class="left-up">
          <stations/>
        </div>
        <div class="left-bottom">人员信息</div>
      </div>
      <div class="mid">
        <div class="mid-up">地图区域</div>
        <div class="mid-bottom">监控视频区域</div>
      </div>
      <div class="right">
        <div class="right-up">
          <div class="right-up-1">
            <mycircle :chartType="wendu"/>
          </div>
          <div class="right-up-2">
            <mycircle :chartType="shidu"/>
          </div>
          <div class="right-up-3">
            <mycircle :chartType="dianya"/>
          </div>
        </div>
        <div class="right-mid">开关量区域</div>
        <div class="right-bottom">设备数量区域</div>
      </div>
    </div>
  </div>
</template>
<script>
// import myvideo from "./components/Video";
import livevideo from "./components/LivePlay";
import mycircle from "./components/Circle";
import stations from './components/Stations';
import { mapState } from "vuex";
export default {
  data() {
    return {
      fullHeight: ""
    };
  },
  components: {
    // myvideo,
    livevideo,
    mycircle,
    stations
  },
  created() {
    this.fullHeight = document.documentElement.clientHeight;
  },
  computed: {
    // 当前主页面的高度
    trueHeight() {
      return this.fullHeight;
    },
    // 页面内主要内容的高度
    mainHeight() {
      return this.fullHeight - 60;
    },
    //获取store数据
    ...mapState(["wendu", "shidu", "dianya"])
  },
  mounted() {
    // 计算当前屏幕的高度
    const that = this;
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        that.fullHeight = window.fullHeight;
      })();
    };
    //
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  width: 100%;
  background: url("./assets/xingkong.png");
  color: #fff;
}
.main {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 20px;
}
.head,
.mid,
.right {
  margin-left: 10px;
}
.head {
  height: 60px;
  text-align: center;
  font-size: 30px;
  color: #fff;
  line-height: 60px;
  background-color: rgba(0, 0, 0, 0.3);
}
/* 左侧部分 */
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 20%;
  margin-left: 0px !important;
  background-color: rgba(0, 0, 0, 0.3);
}
.left-up,
.left-bottom {
  height: 50%;
  flex-flow: 1;
  border: 1px solid red;
  overflow: hidden;
}

/* 中间部分 */
.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 35%;
  background-color: rgba(0, 0, 0, 0.3);
}

/* 右侧部分 */
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 45%;
  background-color: rgba(0, 0, 0, 0.3);
}
.right-up,
.right-mid,
.right-bottom {
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  min-width: 690px;
}
.right-up-1,
.right-up-2,
.right-up-3 {
  background:url("./assets/circle.png") no-repeat center;
  background-size: cover;
}
</style>
