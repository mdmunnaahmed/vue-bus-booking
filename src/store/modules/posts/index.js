import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      section: [
        {
          title: "Recent Blog Post",
          pera: "Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey!",
        },
      ],
      posts: [
        {
          thumb: "item1.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          thumb: "item2.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          thumb: "item3.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
