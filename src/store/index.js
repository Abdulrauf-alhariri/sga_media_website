import { createStore } from "vuex";

export default createStore({
  state: {
    current_opt: 0,
    english_status: false,
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
    getEnglishStatus: (state) => state.english_status,
  },
  mutations: {
    changeLang(state) {
      // Checking the current lang
      if (state.current_opt == 0) {
        state.current_opt = 1;
        state.english_status = true;
      } else {
        state.current_opt = 0;
        state.english_status = false;
      }
    },
  },
  actions: {},
  modules: {},
});
