<template>
  <!-- Dashboard Section Starts Here -->
  <section class="dashboard-section padding-top padding-bottom">
    <div class="container">
      <div class="dashboard-wrapper">
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
                <th>Action</th>
              </tr>
              <tr class="bg-transparent">
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(booking, index) in bookings" :key="index">
                <td class="serial" data-label="Serial">{{ index + 1 }}</td>
                <td class="ticket-no" data-label="Ticket Number">AF05</td>
                <td class="route" data-label="Bus Route">
                  {{ booking.from }} to {{ booking.to }}
                </td>
                <td class="date" data-label="Journey Date">
                  {{ booking.date }}
                </td>
                <td class="seats" data-label="Booked Seats">
                  <span v-for="(seat, index) in booking.seats" :key="index">{{
                    seat
                  }}</span>
                </td>
                <td class="fare" data-label="Fare">$ {{ booking.fare }}</td>
                <td class="action" data-label="Action">
                  <div class="action-button-wrapper">
                    <a href="#0" class="print"><i class="las la-print"></i></a>
                    <a href="#0" class="del"><i class="las la-trash"></i></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {{ bookings }}
        <ul class="pagination">
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
  computed: {
    bookings() {
      return this.$store.getters["ticket/bookings"];
    },
  },
  //   created() {
  //     console.log(this.bookings());
  //   },
};
</script>

<style scoped>
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

.booking-table {
  margin: 0;
  border: none;
  width: 100%;
  text-align: center;
}

.booking-table thead tr {
  background: #fff;
}

.booking-table thead tr:nth-child(even) {
  /* background: transparent; */
}

.booking-table thead tr:nth-child(even) th {
  padding: 6px 0 !important;
}

.booking-table thead tr th {
  padding: 20px 15px;
  font-family: "Georama", sans-serif;
  color: #1f1f1f;
  border: none;
  font-size: 18px;
  font-weight: 500;
}

.booking-table thead tr th:first-child {
  border-radius: 15px 0 0 15px;
}

.booking-table thead tr th:last-child {
  border-radius: 0px 15px 15px 0px;
}

.booking-table tbody {
  font-size: 14px;
}

.booking-table tbody tr {
  background: #fff;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.booking-table tbody tr:nth-child(even) {
  /* background: transparent; */
}

.booking-table tbody tr:nth-child(even) td {
  padding: 6px 0 !important;
}

.booking-table tbody tr .action-button-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  max-width: 200px;
  margin-left: auto;
}

.booking-table tbody tr .action-button-wrapper a {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 3px;
}

.booking-table tbody tr .action-button-wrapper .print {
  font-size: 18px;
  color: #0e9e4d;
  background: rgba(14, 158, 77, 0.1);
}

.booking-table tbody tr .action-button-wrapper .del {
  font-size: 18px;
  color: #f53b57;
  margin-left: 10px;
  background: rgba(245, 59, 87, 0.1);
}

.booking-table tbody tr .serial {
  font-size: 18px;
  font-weight: 500;
  color: #1f1f1f;
}

.booking-table tbody tr .ticket-no {
  color: #554bb9;
  font-size: 16px;
}

.booking-table tbody tr .route {
  color: #0e9e4d;
}

.booking-table tbody tr .date {
  font-size: 14px;
}

.booking-table tbody tr .time {
  color: #554bb9;
}

.booking-table tbody tr .seats {
  color: #0e9e4d;
}

.booking-table tbody tr .fare {
  font-size: 18px;
  font-weight: 500;
  color: #554bb9;
}

.booking-table tbody tr td {
  color: #777;
  vertical-align: middle;
  padding: 12px 15px;
}

.booking-table tbody tr td:first-child {
  border-radius: 5px 0 0 5px;
}

.booking-table tbody tr td:last-child {
  border-radius: 0px 5px 5px 0px;
}

.booking-table tbody tr td .badge {
  text-transform: capitalize;
}

@media (max-width: 991px) {
  .booking-table tbody tr td {
    border: none;
    border-bottom: 1px solid rgba(27, 39, 61, 0.1);
  }
  .booking-table tbody tr td:last-child {
    border: none;
  }
}

.booking-table .details {
  max-width: 250px;
  margin: 0 auto;
}

@media (max-width: 991px) {
  .booking-table thead {
    display: none;
  }
  .booking-table tbody tr {
    display: block;
  }
  .booking-table tbody tr td {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-collapse: collapse;
    padding: 10px 15px;
    border-radius: 0 !important;
  }
  .booking-table tbody tr td::before {
    content: attr(data-label);
    font-family: "Georama", sans-serif;
    font-size: 17px;
    color: #424248;
    font-weight: 500;
  }
  .booking-table tbody tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.3);
  }
}
</style>
