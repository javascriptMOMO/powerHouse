<template>
  <div id="app" :style="{height:trueHeight+'px'}">
    <div class="head">涟水供电站数据总览</div>
    <div class="main" :style="{height:mainHeight+'px'}">
      <div class="left">
        <div ref="leftUp" class="left-up">
          <stations :pHeight="leftHeight"/>
        </div>
        <div class="splite"></div>
        <div class="left-bottom">人员信息</div>
      </div>
      <div class="mid">
        <div class="mid-up">
          <bmap/>
        </div>
        <div class="splite"></div>

        <div class="mid-bottom">
          <livevideo/>
        </div>
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
        <div class="splite"></div>

        <div class="right-mid">开关量区域</div>
        <div class="splite"></div>

        <div class="right-bottom">设备数量区域</div>
      </div>
    </div>
  </div>
</template>
<script>
// import myvideo from "./components/Video";
import livevideo from "./components/LivePlay";
import mycircle from "./components/Circle";
import stations from "./components/Stations";
import bmap from "./components/BMap";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      fullHeight: "", //当前浏览器的高度
      leftHeight: "", //左侧区域的每个的高度
      webSockUrl: "ws://47.98.236.27:8088/ws",
      webSock: "",//长连接实例化
    };
  },
  components: {
    livevideo,
    mycircle,
    stations,
    bmap
  },
  created() {
    this.fullHeight = document.documentElement.clientHeight;
    this.webSockInit();
  },
  methods: {
    webSockInit() {
      this.webSock = new WebSocket(this.webSockUrl);
      this.webSock.onmessage = this.webSockOnMessage;
    },
    webSockOnMessage(data) {
      //1-->正常 2-->烟感 3-->水位 4-->门禁
      let totalData = JSON.parse(data.data);
      switch (totalData.nodeid) {
        case 1:
        this.setW(totalData.tem)
        this.setS(totalData.hum)
        this.setId(totalData.deviceid)
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;

        default:
          break;
      }
    },
    ...mapMutations({
      setW: "setW",
      setS: "setS",
      setD: "setD",
      setId:'setId'
    })
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
    this.leftHeight = this.$refs.leftUp.clientHeight;

    window.onresize = () => {
      this.leftHeight = this.$refs.leftUp.clientHeight;
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
/* ./assets/xingkong.png */
#app {
  width: 100%;
  background: url("./assets/xingkong.png") no-repeat center;
  color: #fff;
  background-size: cover;
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
  background-color: rgba(0, 0, 0, 0.6);
}
/* 左侧部分 */
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 20%;
  margin-left: 0px !important;
}
.left-up {
  overflow-y: scroll !important;
}
.left-up::-webkit-scrollbar {
  width: 1px;
}
.left-up,
.left-bottom,
.mid-up,
.mid-bottom {
  height: 50%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
}

/* 中间部分 */
.mid {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 35%;
}

/* 右侧部分 */
.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  /* width: 45%; */
}
.right-up,
.right-mid,
.right-bottom {
  display: flex;
  justify-content: space-between;
  /* min-width: 690px; */
  background-color: rgba(0, 0, 0, 0.6);
}
.right-up-1,
.right-up-2,
.right-up-3 {
  background: url("./assets/circle.png") no-repeat center;
  background-size: cover;
}
/* 分割线 */
.splite {
  height: 10px;
}
</style>
