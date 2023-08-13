export default {
    addTicket(state, payload) {
        state.tickets.push(payload);
    },
    confirmTicket(state, payload) {
        state.bookings.push(payload);
    },
}