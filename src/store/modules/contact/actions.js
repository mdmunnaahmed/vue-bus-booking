export default {
    addContact(context, payload) {
        const formData = {
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            address: payload.address,
            message: payload.message,
        }
        context.commit('addContact', formData);
    }
}