import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      contacts: [],
      contactPage: [
        {
          title: "Contact Page",
          slug: "Contact",
          bg: "inner.jpg",
        },
      ],
      contactInfo: [
        {
          phone: '+89 123-7409152',
          email: 'username@gmail.com',
          addr: 'Address : 420 West Bengla Road Suite Dhaka 1209'
        }
      ],
    };
  },
  mutations,
  actions,
  getters,
};
