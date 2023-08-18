export default {
    addTicket(state, payload) {
        state.tickets.push(payload);
    },
    confirmTicket(state, payload) {
        state.bookings.push(payload);
    },
    removeTicket(state, payload) {
        state.bookings.splice(payload, 1)
    }
}