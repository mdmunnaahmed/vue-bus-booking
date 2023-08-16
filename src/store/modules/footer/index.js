import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      footer: [
        {
          logo: "logo.png",
          footerPera: "Delectus culpa laboriosam debitis saepe. Commodi earum minus ut obcaecati veniam deserunt est!",
        },
      ],
      socialLinks: [
        {
          icon: "lab la-facebook-f",
          iconLink: "https://facebook.com/mdmunnaahmed2",
        },
        {
          icon: "lab la-twitter",
          iconLink: "https://facebook.com/mdmunnaahmed2",
        },
        {
          icon: "lab la-vimeo-v",
          iconLink: "https://facebook.com/mdmunnaahmed2",
        },
        {
          icon: "lab la-instagram",
          iconLink: "https://facebook.com/mdmunnaahmed2",
        },
      ],
      usefulLinks: ["Home", "About", "Bus Reservation", "Cancel Ticket",],
      supportLinks: ["Contact Us", "Terms of Service", "Privacy Policy", "Need Help",],
    };
  },
  mutations,
  actions,
  getters,
};
