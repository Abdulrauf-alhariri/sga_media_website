import { createStore } from "vuex";

export default createStore({
  state: {
    current_opt: 0,
  },
  getters: {
    getCurrentOpt: (state) => state.current_opt,
    getCurrentLang: (state) => {
      // 0 represent the primary language of the website which it is swedish
      if (state.current_opt == 0) {
        return "SV";
      } else {
        return "EN";
      }
    },

    getSecondaryLang: (state) => {
      if (state.current_opt == 0) {
        return "EN";
      } else {
        return "SV";
      }
    },
  },
  mutations: {
    changeLang(state) {
      // Checking the current lang
      if (state.current_opt == 0) {
        state.current_opt = 1;
      } else {
        state.current_opt = 0;
      }
    },
  },
  actions: {},
  modules: {},
});
