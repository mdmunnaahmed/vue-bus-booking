<template>
  <div class="booking-table-wrapper">
    <h5 class="mb-4">My Reservations</h5>
    <base-spinner v-if="isLoading"></base-spinner>
    <table class="booking-table" v-else>
      <thead>
        <tr>
          <th>Serial</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Message</th>
        </tr>
        <tr class="bg-transparent">
          <th></th>
        </tr>
      </thead>
      <tbody v-if="contacts.length">
        <tr v-for="(contact, index) in contacts" :key="index">
          <td class="serial" data-label="Serial">{{ index + 1 }}</td>
          <td class="route" data-label="Name">
            {{ contact.name }}
          </td>
          <td class="ticket-no" data-label="Email">
            {{ contact.email }}
          </td>
          <td class="ticket-no" data-label="Address">
            {{ contact.address }}
          </td>
          <td class="fare" data-label="Mobile">{{ contact.mobile }}</td>
          <td class="date" data-label="Message">
            {{ contact.message }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6">
            <p class="text-center">No contacts found</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    contacts() {
      return this.$store.getters["contact/contacts"];
    },
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("contact/loadContacts");
    this.isLoading = false;
  },
};
</script>
