export default {
    addTicket(context, payload) {
        const data = {
            selectedSeats: payload.selectedSeats
        }
        context.commit('addContact', data);
    },
    confirmTicket(context, payload) {
        const data2 = {
            // For Customers
            // name: payload.name,
            // age: payload.age,
            // gender: payload.gender,
            // mobile: payload.mobile,
            // email: payload.email,

            // For Dashboard
            from: payload.from,
            to: payload.to,
            bus: payload.bus,
            boad: payload.boad,
            user: payload.username,
            tickets: payload.seats,
            fare: payload.totalBill,
            date: payload.date,
        }
        console.log(data2);
        context.commit('confirmTicket', data2);
    },
}