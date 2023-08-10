export default {
    addTicket(context, payload) {
        const data = {
            selectedSeats: payload.selectedSeats
        }
        context.commit('addContact', data);
    }
}