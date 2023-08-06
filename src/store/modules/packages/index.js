import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      section: [
        {
          title: "Our Popular Tour Packages",
          pera: "Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey!",
        },
      ],
      packages: [
        {
          thumb: "item1.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item2.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item3.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item4.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item5.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item6.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item7.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
        {
          thumb: "item8.jpg",
          title: "Dhaka to Cox's Bazar Tour",
          location: "Foy's Lake Amusement Park.",
          fare: 425,
          rating: 4.8,
          type: "Avarage",
          reviews: 68,
          discount: "-25%",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
