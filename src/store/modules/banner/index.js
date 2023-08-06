import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      bannerContents: [
        {
         title:  'Get Your Ticket Online, Easy & Safely',
         buttonName: 'Get Your Ticket',
         buttonLink: 'buy-tickets',
         formTitle: 'Choose Your Ticket',
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};
