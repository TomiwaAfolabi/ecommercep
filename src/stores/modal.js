import { defineStore } from "pinia";

export default defineStore("modal", {
  state: () => ({
    isRegisterOpen: false,
    isLoginOpen: false,
  }),
  getters: {
    hiddenLoginClass(state) {
      return !state.isLoginOpen ? "hidden" : "";
    },
    hiddenRegClass(state) {
      return !state.isRegisterOpen ? "hidden" : "";
    },
  },
});
