export default {
  addTicket(state, payload) {
    state.tickets = payload;
  },
  confirmTicket(state, payload) {
    state.bookings = payload;
  },
  removeTicket(state, payload) {
    state.bookings.splice(payload, 1);
  },
  setTicket(state, payload) {
    state.bookings = payload;
  },
};
