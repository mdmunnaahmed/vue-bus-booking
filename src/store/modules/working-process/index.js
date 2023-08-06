import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      section: [
        {
          title: 'Get Your Tickets With Just 3 Steps',
          pera: 'Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey!'
        }
      ],
      process: [
        {
          id: 1,
          icon: 'las la-search',
          title: "Search Your Bus",
          pera: "Choose your origin, destination,Just choose a Bus journey dates and search for buses",
        },
        {
          id: 2,
          icon: 'las la-crosshairs',
          title: "Choose The Ticket",
          pera: "Choose your origin, destination,Just choose a Bus journey dates and search for buses",
        },
        {
          id: 3,
          icon: 'las la-receipt',
          title: "Pay Bill",
          pera: "Choose your origin, destination,Just choose a Bus journey dates and search for buses",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
