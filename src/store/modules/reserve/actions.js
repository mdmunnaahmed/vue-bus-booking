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

  async loadReservations(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/reservations/${userId}.json?auth=` +
        token
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    const reservations = [];

    for (let key in responseData) {
      const res = {
        boadingPoint: responseData[key].boadingPoint,
        droppingPoint: responseData[key].droppingPoint,
        busType: responseData[key].busType,
        startDay: responseData[key].startDay,
        endDay: responseData[key].endDay,
        fullName: responseData[key].fullName,
        email: responseData[key].email,
        phoneNumber: responseData[key].phoneNumber,
        fullAddr: responseData[key].fullAddr,
        numberOfBus: responseData[key].numberOfBus,
        numberOfSeats: responseData[key].numberOfSeats,
      };
      reservations.push(res);
    }

    context.commit("addReservation", reservations);
  },
};
