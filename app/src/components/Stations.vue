<template>
  <div class="stations">
    <ul>
      <li class="title title1">
        <!-- <span>序号</span> -->
        <span>设备号</span>
        <span>站点</span>
        <span>温度</span>
        <span>湿度</span>
      </li>
    </ul>
    <ul ref="stationsUl" class="stations-ul" :style="{transform:translate}">
      <li class="title title2" v-for="n in stationList" :key="n">
        <span>{{id}}</span>
        <span>站点1</span>
        <span>{{wendu.value}}℃</span>
        <span>{{shidu.value}}%</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: {
    pHeight: {
      type: Number
    }
  },
  data() {
    return {
      translate: "translateY(0px)", //移动的基数
      stationList: "", //所有站点,
      moveing: ""
    };
  },
  created() {
    this.stationList = [...Array(1).keys()];
    // this.move();
  },
  methods: {
    move() {
      let step = 0;
      this.timer = setInterval(() => {
        const len = this.stationList.length;
        const ulOffSet = this.$refs.stationsUl.clientHeight;
        if (step < len * 40) {
          step += 40;
          this.translate = `translateY(${-step}px)`;
        } else {
          step = 0;
          this.translate = `translateY(${-step}px)`;
        }
        // console.log("本身真实高度", ulOffSet);
        console.log("父级真实高度", this.pHeight);
        // console.log("向上便宜的高度", step);
        if (step + this.pHeight - 40 >= ulOffSet) {
          console.log("到底了");
          step = -40;
          // this.translate = `translateY(${this.pHeight - 40}px)`;
          this.$refs.stationsUl.style.top = this.pHeight;
        }
        if (len * 40 <= this.pHeight - 45) {
          clearInterval(this.timer);
          this.translate = `translateY(0px)`;
        }
      }, 1000);
    }
  },
  computed:{
    ...mapState(['id','wendu','shidu'])
  },
  mounted() {
    // const len = this.stationList.length;
    // const ulOffSet = this.$refs.stationsUl.clientHeight;
    // console.log(len * 40);
    // console.log(this.pHeight);
    // if (len * 40 <= this.pHeight - 40) {
    //   clearInterval(this.timer);
    // }
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
  /* border: 1px solid #fff; */
  text-align: center;
  line-height: 40px;
}
.title1 {
  background-color: rgba(0, 186, 255, 0.19);
  font-size: 16px;
  color: #ffffff;
  overflow: hidden;
}
.title2 {
  font-size: 12px;
}
.title2:hover {
  cursor: pointer;
  background-color: rgba(0, 186, 255, 0.19);
}
.title span {
  width: 100%;
}
.stations {
  position: relative;
}
.stations-ul {
  transition: all 1s;
}
</style>

