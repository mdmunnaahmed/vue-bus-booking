export default {
  async addReservation(context, payload) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

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
    };

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/reservations/${userId}.json?auth=` +
        token,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    context.commit("addReservation", data);
  },
};
