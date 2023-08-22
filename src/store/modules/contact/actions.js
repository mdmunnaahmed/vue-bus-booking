export default {
  async addContact(context, payload) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const formData = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      message: payload.message,
    };
    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/${userId}.json?auth=` +
        token,
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
    // const responseData = await response.json()
    if (!response.ok) {
      // error
    }
    context.commit("addContact", formData);
  },

  async loadContacts(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const response = await fetch(
      `https://bus-booking-155ef-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/${userId}.json?auth=` +
        token
    );
    const responseData = await response.json();
    if (!response.ok) {
      // error
    }
    const contacts = [];
    for (const key in responseData) {
      const contact = {
        id: key,
        // For Customers
        name: responseData[key].name,
        email: responseData[key].email,
        mobile: responseData[key].phone,
        address: responseData[key].address,
        message: responseData[key].message,
      };
      contacts.push(contact);
    }
    
    context.commit("loadContacts", contacts);
  },
};
