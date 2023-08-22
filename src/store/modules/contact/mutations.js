export default {
  addContact(state, payload) {
    state.contacts.push(payload);
  },
  loadContacts(state, payload) {
    state.contacts = payload;
  },
};
