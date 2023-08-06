import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      section: [
        {
          title: "Our Amenities",
          pera: "Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey!",
        },
      ],
      aminities: [
        {
          id: 1,
          icon: "pillow.svg",
          title: "Sleeping Pillow",
        },
        {
          id: 2,
          icon: "bus.svg",
          title: "Bus Tracking",
        },
        {
          id: 3,
          icon: "snack.svg",
          title: "Snakes",
        },
        {
          id: 4,
          icon: "lady.svg",
          title: "Ladies Seats",
        },
        {
          id: 5,
          icon: "port.svg",
          title: "Charging Port",
        },
        {
          id: 6,
          icon: "bottle.svg",
          title: "Water Bottle",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
