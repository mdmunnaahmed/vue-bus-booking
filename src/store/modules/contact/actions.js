export default {
    async addContact(context, payload) {
        const userId = 'u1'
        const formData = {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            address: payload.address,
            message: payload.message,
        }
        const response = await fetch(`https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/${userId}.json`, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        // const responseData = await response.json()
        if (!response.ok) {
            // error
        }
        context.commit('addContact', formData);
    }
}