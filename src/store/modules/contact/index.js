import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      contactPage: [
        {
          title: "Contact Page",
          slug: "Contact",
          bg: "inner.jpg",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
