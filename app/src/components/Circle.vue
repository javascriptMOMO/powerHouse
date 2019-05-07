<template>
  <div ref="chart" style="width:250px;height:250px;"></div>
</template>

<script>
import echarts from "echarts";
// var echarts = require("echarts/lib/echarts");
// require("echarts/lib/chart/gauge");
export default {
  props: {
    chartType: {
      type: Object,
      default: {
        name: "出错",
        code: "X",
        value: 10086,
        min: 0,
        max: 888
      }
    }
  },
  data() {
    return {
      circleChart: "", //实例化
      option: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: "",
            min: 0,
            max: 200,
            type: "gauge",
            axisLine: {
              //外圆内径大小
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 6,
                shadowColor: "#ffffff",
                shadowBlur: 1
              }
            },
            axisTick: {
              // 坐标轴小标记
              length: 10, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 2,
                color: "auto",
                shadowColor: "#ffffff",
                shadowBlur: 10
              }
            },
            splitLine: {
              // 分隔线
              length: 20, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 3,
                color: "auto",
                shadowColor: "#ffffff",
                shadowBlur: 10
              }
            },
            // axisLabel: {
            //   backgroundColor: "auto",
            //   borderRadius: 2,
            //   color: "#eee",
            //   padding: 3,
            //   textShadowBlur: 2,
            //   textShadowOffsetX: 1,
            //   textShadowOffsetY: 1,
            //   textShadowColor: "#222"
            // },
            title: {
              fontWeight: "bolder",
              fontSize: 16,
              fontStyle: "italic",
              color: "#fff"
            },
            pointer: {
              //指针大小
              width: 2
            },

            detail: {
              formatter: "{value}℃",
              fontWeight: "bolder",
              fontSize: 15,
              borderRadius: 3,
              backgroundColor: "#444",
              borderColor: "#aaa",
              shadowBlur: 5,
              shadowColor: "#333",
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              borderWidth: 2,
              textBorderColor: "#000",
              textBorderWidth: 2,
              textShadowBlur: 2,
              textShadowColor: "#fff",
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              fontFamily: "Arial",
              width: 30,
              color: "#eee",
              rich: {}
            },
            data: [{ value: 50, name: "温度" }]
          }
        ]
      }
    };
  },
  created() {
    const { name, code, value, min, max } = this.chartType;
    this.option.series[0].data[0].value = value;
    this.option.series[0].min = min;
    this.option.series[0].max = max;
    this.option.series[0].data[0].name = name;
    this.option.series[0].detail.formatter = `{value}${code}`;
  },
  methods: {
    chartInit() {
      this.circleChart = echarts.init(this.$refs.chart);
      this.option.series[0].data[0].value = this.chartType.value;
      this.circleChart.setOption(this.option);
    }
  },
  watch: {
    "chartType.value": {
      handler(val) {
        console.log("数据发生变化", val);
        this.option.series[0].data[0].value = val;
        this.circleChart.setOption(this.option);
      },
      deep: true
    }
  },
  mounted() {
    this.chartInit();
  }
};
</script>

<style scoped>
</style>
