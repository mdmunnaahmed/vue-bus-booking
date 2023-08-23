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
          <th>Start Day</th>
          <th>End Day</th>
          <th>Number of Bus</th>
          <th>Number of Seats</th>
          <th>Boading Point</th>
          <th>Dropping Point</th>
        </tr>
        <tr class="bg-transparent">
          <th></th>
        </tr>
      </thead>
      <tbody v-if="reservations.length">
        <tr v-for="(reservation, index) in reservations" :key="index">
          <td class="serial" data-label="Serial">{{ index + 1 }}</td>
          <td class="route" data-label="Name">
            {{ reservation.fullName }}
          </td>
          <td data-label="Email">
            {{ reservation.email }}
          </td>
          <td data-label="Address">
            {{ reservation.fullAddr }}
          </td>
          <td data-label="Mobile">
            {{ reservation.phoneNumber }}
          </td>
          <td data-label="Start Day">
            {{ reservation.startDay }}
          </td>
          <td data-label="End Day">
            {{ reservation.endDay }}
          </td>
          <td data-label="Number of Bus">
            {{ reservation.numberOfBus }}
          </td>
          <td data-label="Number of Seats">
            {{ reservation.numberOfSeats }}
          </td>
          <td data-label="Boading Point">
            {{ reservation.boadingPoint }}
          </td>
          <td data-label="Dropping Point">
            {{ reservation.droppingPoint }}
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="6">
            <p class="text-center">No reservations found</p>
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
    reservations() {
      return this.$store.getters["reserve/reservations"];
    },
  },
  async created() {
    this.isLoading = true;
    await this.$store.dispatch("reserve/loadReservations");
    this.isLoading = false;
  },
};
</script>
