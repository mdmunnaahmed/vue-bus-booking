import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      section: [
        {
          title: "Our Popular Bus Routes",
          pera: "Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey!",
        },
      ],
      process: [
        {
          id: 1,
          pickTitle: "Dhaka Buses",
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Kushtia Stand",
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
        {
          id: 1,
          pickTitle: "Chittagong Buses",
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Kushtia Stand",
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
        {
          id: 1,
          pickTitle: "Kushtia Buses",
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Faridpur Stand",
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
        {
          id: 1,
          pickTitle: "Dhaka Buses",
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Kushtia Stand",
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
