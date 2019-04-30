<template>
  <div class="stations">
    <ul>
      <li class="title title1">
        <!-- <span>序号</span> -->
        <span>站点</span>
        <span>电压</span>
        <span>温度</span>
        <span>湿度</span>
      </li>
    </ul>
    <ul class="stations-ul" :style="{transform:translate}">
      <li class="title title2" v-for="n in stationList" :key="n">
        <!-- <span>1</span> -->
        <span>站点{{n}}</span>
        <span>540v</span>
        <span>35℃</span>
        <span>50%</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      translate: "translateY(0px)", //移动的基数
      stationList: "", //所有站点,
      moveing: ""
    };
  },
  created() {
    this.stationList = [...Array(30).keys()];
    this.move();
  },
  methods: {
    move() {
      //   var that = this;
      //   this.moveing = requestAnimationFrame(function fn() {
      //     const len = that.stationList.length;
      //     console.log('长度',len)
      //     var step = 0;
      //     if (step < len * 40) {
      //       console.log("动画中");
      //       step += 40;
      //       console.log(step)
      //       that.translate = `translateY(${-step}px)`;

      //       that.moveing = requestAnimationFrame(fn);
      //     } else {
      //       console.log("结束动画");
      //       step = 0;
      //       cancelAnimationFrame(that.moveing);
      //     }
      //   });
      setInterval(() => {
        const len = this.stationList.length;
        let step = 0;
        if (step < 1200) {
          step += 40;
          console.log(step)
          this.translate = `translateY(${-step}px)`;
        }else{
            step = 0
        }
      },3000);
    }
  }
};
</script>
<style scoped>
li {
  list-style: none;
}
.title {
  display: flex;
  justify-content: space-around;
  height: 40px;
  border: 1px solid #fff;
  text-align: center;
  line-height: 40px;
}
.title1 {
  background-color: RGBA(0, 186, 255, 0.19);
  font-size: 16px;
  color: #ffffff;
}
.title2 {
  font-size: 14px;
}
.title span {
  width: 100%;
}
.stations-ul {
  /* transform: translate3d(0px, 60px, 0px); */
  /* animation: move 1s infinite; */
}
@keyframes move {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-40px);
  }
}
</style>

