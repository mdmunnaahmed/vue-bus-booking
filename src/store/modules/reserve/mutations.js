export default {
    reserveBus(state, payload) {
        state.reservations.push(payload);
    },
}