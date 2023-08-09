import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      faqPage: [
        {
          title: "Frequently Asked Questions",
          slug: "FAQs",
          bg: "inner.jpg",
        },
      ],
      faqs: [
        {
          id: 1,
          title: "What are the payment options to book bus tickets?",
          ans: 'autobus accept all major payment options like Debit/Credit card or Net banking. You can also pay using autobus wallet, making the travel booking easier and quicker. Make sure that you have enough balance in your autobus wallet, as it helps you in faster checkout. Having a registered autobus wallet can also offer you loads of benefits.'
        },
        {
          id: 2,
          title: "I am unable to select a specific seat/operator/date/route. What do I do?",
          ans: 'To get information on a specific route buses, check for the buses on by entering the origin and the source destinations along with the preferred date of travel. On clicking search, you will be taken to the list of buses on the specified route for the searched date.'
        },
        {
          id: 3,
          title: "What should I do if I’ve lost my ticket?",
          ans: 'Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis libero?'
        },
        {
          id: 4,
          title: "How can I check operator information for a particular route?",
          ans: 'To get information on a specific route buses, check for the buses on by entering the origin and the source destinations along with the preferred date of travel. On clicking search, you will be taken to the list of buses on the specified route for the searched date.'
        },
        {
          id: 5,
          title: "Will I get a refund in case of a failed transaction?",
          ans: 'To get information on a specific route buses, check for the buses on by entering the origin and the source destinations along with the preferred date of travel. On clicking search, you will be taken to the list of buses on the specified route for the searched date.'
        },
        {
          id: 6,
          title: "What should I do if I’ve lost my ticket?",
          ans: 'Orangu ipsum dolor sit amet consectetur adipisicing elit. Sed minima porro aliquid eius laudantium ad quod a corrupti impedit, reiciendis iusto ut aperiam tenetur fuga repellendus tempore necessitatibus omnis libero?'
        },
        {
          id: 7,
          title: "How can I check operator information for a particular route?",
          ans: 'To get information on a specific route buses, check for the buses on by entering the origin and the source destinations along with the preferred date of travel. On clicking search, you will be taken to the list of buses on the specified route for the searched date.'
        },
        {
          id: 8,
          title: "Will I get a refund in case of a failed transaction?",
          ans: 'To get information on a specific route buses, check for the buses on by entering the origin and the source destinations along with the preferred date of travel. On clicking search, you will be taken to the list of buses on the specified route for the searched date.'
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
