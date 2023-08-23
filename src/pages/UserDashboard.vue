<template>
  <!-- Dashboard Section Starts Here -->
  <section class="dashboard-section padding-top padding-bottom">
    <div class="container">
      <ul
        class="nav-tabs nav mb-5 gap-3 justify-content-end"
        v-if="this.$route.path == '/user-dashboard'"
      >
        <li>
          <router-link class="btn btn-sm" to="user-dashboard/contact-requests"
            >My Contact Request</router-link
          >
        </li>
        <li>
          <router-link class="btn btn-sm" to="user-dashboard/my-reservations"
            >My Reservations</router-link
          >
        </li>
      </ul>
      <ul class="nav-tabs nav mb-5 gap-3 justify-content-end" v-else>
        <li>
          <span class="btn btn-sm" @click="goBack"
            ><i class="las la-angle-left"></i> Go Back to Dashboard</span
          >
        </li>
      </ul>
      <div
        class="card mb-4"
        v-if="
          this.$route.path != '/user-dashboard/update-profile' &&
          this.$route.path != '/user-dashboard/contact-requests' &&
          this.$route.path != '/user-dashboard/my-reservations'
        "
      >
        <div class="card-header">
          <h5 class="d-inline-block me-4">User Info</h5>
          <router-link to="user-dashboard/update-profile" class="text-primary"
            >({{ userInfo.length >= 0 ? "Update" : "Edit" }})</router-link
          >
        </div>
        <div class="card-body">
          <ul>
            <li>
              <span style="min-width: 80px">Name</span>
              <span>:</span>
              <span class="ms-4">{{ userInfo.name }}</span>
            </li>
            <li>
              <span style="min-width: 80px">Age</span>
              <span>:</span>
              <span class="ms-4">{{ userInfo.age }}</span>
            </li>
            <li>
              <span style="min-width: 80px">Gender</span>
              <span>:</span>
              <span class="ms-4">{{ userInfo.gender }}</span>
            </li>
            <li>
              <span style="min-width: 80px">Mobile</span>
              <span>:</span>
              <span class="ms-4">{{ userInfo.mobile }}</span>
            </li>
            <li>
              <span style="min-width: 80px">Email</span>
              <span>:</span>
              <span class="ms-4">{{ userInfo.email }}</span>
            </li>
          </ul>
        </div>
      </div>
      <router-view></router-view>
      <div
        class="dashboard-wrapper"
        v-if="this.$route.path == '/user-dashboard'"
      >
        <h4 class="title">Your Booking History</h4>
        <div class="booking-table-wrapper">
          <table class="booking-table">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Ticket Number</th>
                <th>Bus Route</th>
                <th>Journey Date</th>
                <th>Booked Seats</th>
                <th>Fare</th>
              </tr>
              <tr class="bg-transparent">
                <th></th>
              </tr>
            </thead>
            <tbody v-if="bookings.length && !isLoading">
              <tr v-for="(booking, index) in bookings" :key="index">
                <td class="serial" data-label="Serial">{{ index + 1 }}</td>
                <td class="ticket-no" data-label="Ticket Number">
                  #{{ booking.ticketNo }}
                </td>
                <td class="route" data-label="Bus Route">
                  {{ booking.from }} to {{ booking.to }}
                </td>
                <td class="date" data-label="Journey Date">
                  {{ booking.date }}
                </td>
                <td class="seats" data-label="Booked Seats">
                  <span
                    class="ms-2"
                    v-for="(seat, index) in booking.seats"
                    :key="index"
                    >{{ seat }}</span
                  >
                </td>
                <td class="fare" data-label="Fare">$ {{ booking.fare }}</td>
              </tr>
            </tbody>
            <tbody v-if="!bookings.length && !isLoading">
              <tr>
                <td colspan="6">
                  <p class="text-center">No bookings found</p>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="text-center">
            <base-spinner v-if="isLoading" class="mx-auto"></base-spinner>
          </div>
        </div>
        <ul class="pagination" v-if="!bookings.length >= 10">
          <li>
            <a href="#0"><i class="las la-arrow-left"></i></a>
          </li>
          <li>
            <a href="#0">01</a>
          </li>
          <li>
            <a href="#0"><i class="las la-arrow-right"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- Dashboard Section Ends Here -->
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    bookings() {
      return this.$store.getters["ticket/bookings"].slice().reverse();
    },
    userInfo() {
      return this.$store.getters.userInfo;
    },
    host() {
      return window.location.hostname;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Go back one step in history
    },
  },
  async created() {
    this.$store.dispatch("loadUser");
    this.isLoading = true;
    await this.$store.dispatch("ticket/loadTickets");
    this.isLoading = false;
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #0e9e4d;
}
.dashboard-wrapper .title {
  margin-bottom: 25px;
}

.dashboard-section {
  background: rgba(27, 39, 61, 0.06);
}

.dashboard-section .pagination {
  margin-top: 30px;
}

@media (max-width: 575px) {
  .dashboard-section .pagination {
    margin-top: 20px;
  }
}

.dashboard-section .pagination li a {
  background: #fff;
}

.dashboard-section .pagination li a.active,
.dashboard-section .pagination li a:hover {
  background: #0e9e4d;
}
</style>
