import { ActionTree, GetterTree, MutationTree } from "vuex";
import axios from "axios";

export interface RootState {
  user_id?: string;
}

export interface HomeState {
  tel?: string;
  address?: string;
}

const init_state: HomeState = {
  tel: "110",
  address: "二仙桥",
};
const state: HomeState = {
  ...init_state,
};

const getters = {
  getter_tel: (state) => {
    return "0086-" + state.tel;
  },
};

const actions: ActionTree<HomeState, RootState> = {
  setConfig({ state, rootState, commit }, user_id: string) {
    // return axios
    //   .get("/api/set_config", {
    //     params: {
    //       user_id,
    //     },
    //   })
    //   .then((res) => {
    //     const { code, data } = res.data;
    //     if (code === 200) {
    //       commit("muta_set_config", {
    //         tel: data.tel,
    //         address: data.address,
    //       });
    //     }
    //     return res;
    //   });
    commit("muta_set_config", {
      tel: "18938035770",
      address: "深圳市龙华区",
    });
  },
};

const mutations: MutationTree<HomeState> = {
  ["muta_reset_config"](state) {
    state = Object.assign(state, init_state);
  },
  ["muta_set_config"](state, params: { tel: string; address: string }) {
    console.log(`muta_set_config: tel=${params.tel} address=${params.address}`);
    state.tel = params.tel;
    state.address = params.address;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
