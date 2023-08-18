export default {
    addReservation(context, payload) {
        const data = {
            startDay: payload.startDay,
            endDay: payload.endDay,
            busType: payload.busType,
            boadingPoint: payload.boadingPoint,
            droppingPoint: payload.droppingPoint,
            numberOfSeats: payload.numberOfSeats,
            numberOfBus: payload.numberOfBus,
            fullName: payload.fullName,
            phoneNumber: payload.phoneNumber,
            email: payload.email,
            fullAddr: payload.fullAddr,
        }
        console.log(data);
        context.commit('addReservation', data)
    }
}