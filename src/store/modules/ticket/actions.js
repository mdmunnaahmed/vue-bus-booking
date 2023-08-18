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

        const token = context.rootGetters.token;
        const response = await fetch(`https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/tickets/${userId}.json?auth=` + token, {
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

    async loadTickets(context) {
        const token = context.rootGetters.token;
        const userId = 'u1'

        const response = await fetch(`https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/tickets/${userId}.json?auth=` + token,)
        const responseData = await response.json()
        if (!response.ok) {
            // error
        }
        const tickets = []
        for (const key in responseData) {
            const ticket = {
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
                bseats: responseData[key].selectedSeats,
                ticketNo: responseData[key].ticketNo,
            }
            tickets.push(ticket)
        }
        console.log(tickets);

        context.commit('setTicket', tickets);
    }
}