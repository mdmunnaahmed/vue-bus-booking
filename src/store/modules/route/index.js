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
          from: 'Dhaka',
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Kushtia Stand",
          to: 'Kushtia',
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
        {
          id: 2,
          pickTitle: "Chittagong Buses",
          from: 'Chittagong',
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Kushtia Stand",
          to: 'Kushtia',
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
        {
          id: 3,
          pickTitle: "Kushtia Buses",
          from: 'Kushtia',
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Faridpur Stand",
          to: 'Rajbari',
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
        {
          id: 4,
          pickTitle: "Jineidah Buses",
          from: 'Jineidah',
          pickLocations: ["Jatrabari", "Alamdanga", "Faridpur"],
          desTitle: "Chittagong Stand",
          to: 'Chittagong',
          desLocations: ["Khoksha", "Janipur", "Kushtia"],
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
