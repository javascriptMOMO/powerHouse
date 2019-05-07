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
      max: 50
    }, //温度数据
    shidu: {
      name:'湿度',
      code:'%',
      value: 70,
      min: 0,
      max: 50
    }, //湿度数据
    dianya: {
      name:'电压',
      code:'KV',
      value: 3.5,
      min: 0,
      max: 10
    }, //电压数据
    id:8888,//设备号
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
    },
    getId(state){
      return state.id
    }
  },
  // 用来同步改变store里的数据
  mutations: {
    setW(state, val) {
      state.wendu.value = val;
    },
    setS(state, val) {
      state.shidu.value = val;
    },
    setD(state, val) {
      state.dianya = val;
    },
    setId(state,val){
      state.id = val;
    }
  },
  // 异步改变store里的数据
  actions: {}
});
