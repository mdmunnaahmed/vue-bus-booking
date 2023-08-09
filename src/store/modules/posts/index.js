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
      blogPage: [
        {
          title: "Blog Page",
          slug: "Blog",
          bg: "inner.jpg",
        },
      ],
      posts: [
        {
          id: 'p1',
          thumb: "item1.jpg",
          title: "This is a special day for me. Because of my Birthday is today",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p2',
          thumb: "item2.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p3',
          thumb: "item3.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p4',
          thumb: "item1.jpg",
          title: "This is a special day for me. Because of my Birthday is today",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p5',
          thumb: "item2.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p6',
          thumb: "item3.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p7',
          thumb: "item1.jpg",
          title: "This is a special day for me. Because of my Birthday is today",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p8',
          thumb: "item2.jpg",
          title: "What to do if your bus has met with an accident",
          pera: "Expedita reprehenderit assumenda cum, id accusamus ad obcaecati fugit volupta Dolore?",
          date: "12 Apr 23",
          comments: 567,
          seen: 426,
        },
        {
          id: 'p9',
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
