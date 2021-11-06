import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
    issueToken: "",
    remainMillisecond: 0,
    confirmToken: "",
  },
  mutations: {
    setEmail(state, payload) {
      state.email = payload;
    },
    setIssueToken(state, payload) {
      state.issueToken = payload;
    },
    setRemainMillisecond(state, payload) {
      state.remainMillisecond = payload;
    },
    setConfirmToken(state, payload) {
      state.confirmToken = payload;
    },
    reset(state) {
      state.email = "";
      state.issueToken = "";
      state.remainMillisecond = 0;
      state.confirmToken = "";
    },
  },
  actions: {},
});
