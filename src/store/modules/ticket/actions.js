export default {
  addTicket(context, payload) {
    const data = {
      selectedSeats: payload.selectedSeats,
    };
    context.commit("addContact", data);
  },
  async confirmTicket(context, payload) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const data2 = {
      // For Customers
      name: payload.name,
      age: payload.age,
      gender: payload.gender,
      mobile: payload.mobile,
      email: payload.email,

      // For Dashboard
      from: payload.from,
      to: payload.to,
      bus: payload.bus,
      boad: payload.boad,
      fare: payload.fare,
      date: payload.date,
      seats: payload.seats,
      ticketNo: payload.ticketNo,
    };

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/tickets/${userId}.json?auth=` +
        token,
      {
        method: "POST",
        body: JSON.stringify(data2),
      }
    );

    // const responseData = await response.json()
    if (!response.ok) {
      // error
    }

    context.commit("confirmTicket", {
      ...data2,
      id: userId,
    });
  },

  removeTicket({ commit, state }, itemToRemove) {
    const index = state.bookings.findIndex(
      (item) => item.ticketNo === itemToRemove.ticketNo
    ); // Adjust the condition as needed
    if (index !== -1) {
      commit("removeTicket", index);
    }
  },

  async loadTickets(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/tickets/${userId}.json?auth=` +
        token
    );
    const responseData = await response.json();
    if (!response.ok) {
      // error
    }
    const tickets = [];
    for (const key in responseData) {
      const ticket = {
        id: key,
        // For Customers
        name: responseData[key].name,
        age: responseData[key].age,
        gender: responseData[key].gender,
        mobile: responseData[key].mobile,
        email: responseData[key].email,

        // For Dashboard
        from: responseData[key].from,
        to: responseData[key].to,
        bus: responseData[key].bus,
        boad: responseData[key].boad,
        fare: responseData[key].fare,
        date: responseData[key].date,
        seats: responseData[key].seats,
        ticketNo: responseData[key].ticketNo,
      };
      tickets.push(ticket);
    }
    context.commit("setTicket", tickets);
  },
};
