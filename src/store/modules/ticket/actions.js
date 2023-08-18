export default {
    addTicket(context, payload) {
        const data = {
            selectedSeats: payload.selectedSeats
        }
        context.commit('addContact', data);
    },
    async confirmTicket(context, payload) {
        const userId = 'u1'
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
            bseats: payload.selectedSeats,
            ticketNo: payload.ticketNo,
        }

        const response = await fetch(`https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/tickets/${userId}.json`, {
            method: 'POST',
            body: JSON.stringify(data2)
        })

        // const responseData = await response.json()
        if (!response.ok) {
            // error
        }

        context.commit('confirmTicket', {
            ...data2,
            id: userId
        });
    },
    // removeTicket(context, payload) {
    //     const data3 = {
    //         ticketNo: payload.ticketNo
    //     }
    //     context.commit('removeTicket', data3)
    // }

    removeTicket({ commit, state }, itemToRemove) {
        const index = state.bookings.findIndex(item => item.ticketNo === itemToRemove.ticketNo); // Adjust the condition as needed
        if (index !== -1) {
            commit('removeTicket', index);
        }
    },
}