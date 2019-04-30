import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wendu: {
      name:'温度',
      code:'℃',
      value: 35,
      min: 0,
      max: 100
    }, //温度数据
    shidu: {
      name:'湿度',
      code:'%',
      value: 70,
      min: 0,
      max: 100
    }, //湿度数据
    dianya: {
      name:'电压',
      code:'V',
      value: 350,
      min: 0,
      max: 1000
    } //电压数据
  },
  // 用来获取store里的数据
  getters: {
    getW(state) {
      return state.wendu;
    },
    getS(state) {
      return state.shidu;
    },
    getD(state) {
      return state.dianya;
    }
  },
  // 用来同步改变store里的数据
  mutations: {
    setW(state, val) {
      state.wendu = val;
    },
    setS(state, val) {
      state.shidu = val;
    },
    setD(state, val) {
      state.dianya = val;
    }
  },
  // 异步改变store里的数据
  actions: {}
});
