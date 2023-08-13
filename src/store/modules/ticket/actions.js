export default {
    addTicket(context, payload) {
        const data = {
            selectedSeats: payload.selectedSeats
        }
        context.commit('addContact', data);
    },
    confirmTicket(context, payload) {
        const data = {
            name: payload.name,
            age: payload.age,
            gender: payload.gender,
            mobile: payload.mobile,
            email: payload.email,
        }
        // console.log(data);
        context.commit('confirmTicket', data);
    },
}