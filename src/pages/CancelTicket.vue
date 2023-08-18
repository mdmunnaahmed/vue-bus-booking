<template>
  <!-- Cancel Ticket Section Starts Here -->
  <section class="ticket-cancellation padding-top padding-bottom section-bg">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-7">
          <div class="ticket-cancellation-wrapper">
            <h3 class="title">Cancellation and Refunds</h3>
            <p>
              Verify Your Details And Cancel Your Tickets. That’s a promise!
            </p>
            <form
              class="ticket-cancellation-form row gy-3"
              @submit.prevent="cancelTicket"
            >
              <div class="col-lg-6">
                <div class="form--group" :class="ticket ? '' : 'invalid'">
                  <label for="pnr">Ticket Number <span>*</span></label>
                  <input
                    id="pnr"
                    type="text"
                    class="form--control"
                    placeholder="Enter Ticket Number"
                    v-model.trim="ticketNo"
                    @blur="checkTicketNo"
                  />
                  <small v-if="!ticket && ticketNo == ''" class="text-danger"
                    >Enter you ticket No</small
                  >
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form--group">
                  <label for="number01">Mobile Number <span>*</span></label>
                  <input
                    id="number01"
                    type="text"
                    class="form--control"
                    placeholder="Enter Mobile Number"
                    v-model.number="mobile"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form--group">
                  <label for="otp">OTP <span>*</span></label>
                  <input
                    id="otp"
                    type="text"
                    class="form--control"
                    placeholder="Enter OTP"
                    :disabled="mobile == ''"
                    v-model="otp"
                    maxlength="6"
                    minlength="6"
                  />
                  <button
                    class="otp-btn"
                    :class="mobile == '' ? 'disabled' : ''"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form--group">
                  <button
                    class="h-auto"
                    :class="
                      ticketNo == '' || mobile == '' || otp == ''
                        ? 'disabled'
                        : ''
                    "
                  >
                    Cancel Your Ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="cancellation-notice text-start">
            <h5 class="title">
              Have a Look at our Ticket Cancellation <br />
              and Refund Policy
            </h5>
            <p>
              If you have a confirmed ticket booked through Us, please enter
              your ticket PNR and the mobile number you useded during ticket
              during ticket purchase.
            </p>
            <p>
              In case you have reserved a ticket thorugh bKash or opted for Cash
              on Delivery, and you want to cancel it, don't worry, it would be
              cancelled automatically due to non-receipt of payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Cancel Ticket Section End Here -->
</template>

<script>
export default {
  data() {
    return {
      ticket: true,
      ticketNo: "",
      mobile: "",
      otp: "",
      ticketNos: [],
    };
  },
  methods: {
    cancelTicket() {
      this.$store.dispatch("ticket/removeTicket", {
        ticketNo: this.ticketNo,
      });
    },
    checkTicketNo() {
      if (!this.ticketNos.length) {
        this.getAllTicketNo();
      }
      if (this.ticketNos.includes(this.ticketNo.toLowerCase())) {
        this.ticket = true;
      } else {
        this.ticket = false;
      }
    },

    getAllTicketNo() {
      const tickets = this.$store.getters["ticket/bookings"];
      for (let i = 0; i < tickets.length; i++) {
        this.ticketNos.push(tickets[i].ticketNo.toLowerCase());
      }
    },
  },
};
</script>

<style scoped>
button.disabled {
  pointer-events: none;
  opacity: 0.35;
}
.invalid input {
  border-color: red;
}
.ticket-cancellation .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.ticket-cancellation-wrapper {
  max-width: 740px;
  padding: 40px 35px;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  background: #fff;
}

@media (max-width: 575px) {
  .ticket-cancellation-wrapper {
    padding: 20px 15px;
  }
}

.ticket-cancellation-wrapper .title {
  margin-bottom: 10px;
}

.ticket-cancellation-wrapper p {
  margin-bottom: 35px;
}

.ticket-cancellation-form {
  text-align: left;
}

.ticket-cancellation-form .form--group {
  position: relative;
}

.ticket-cancellation-form .form--group label span {
  color: #f53b57;
}

.ticket-cancellation-form .form--group .otp-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
}

.ticket-cancellation-form .otp-btn {
  height: 40px;
  margin: 0;
  line-height: 1;
  padding: 0 18px;
  font-size: 13px;
}

.ticket-cancellation-form button {
  margin-top: 10px;
}

.cancellation-notice {
  text-align: center;
  background: #fff;
  padding: 35px 30px;
  border-radius: 5px;
}

@media (max-width: 575px) {
  .cancellation-notice {
    padding: 25px 15px;
  }
}

.cancellation-notice .title {
  margin-bottom: 15px;
}

.cancellation-notice p {
  margin-bottom: 8px;
}
</style>
