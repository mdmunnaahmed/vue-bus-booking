<template>
  <base-dialog v-if="formNotValid" @close="closeDialog">
    <template #ico>
      <img
        style="width: 60px; object-fit: contain"
        src="../assets/icon/close.png"
        alt="icon"
      />
    </template>
    <template #default>
      <p class="text-center">At least one input value is Invalid</p>
    </template>
    <template #actions>
      <div class="text-center">
        <button
          class="btn btn-danger shadow-lg w-auto px-5 py-2 h-auto"
          @click="closeDialog"
        >
          Recheck
        </button>
      </div>
    </template>
  </base-dialog>

  <base-dialog v-if="formIsValid" @close="closeDialog">
    <template #ico>
      <img
        style="width: 80px; object-fit: contain"
        src="../assets/icon/check.png"
        alt="icon"
      />
    </template>
    <template #default>
      <p class="text-center">Your tickets have been successfully purchased!</p>
    </template>
    <template #actions>
      <div class="text-center">
        <button
          class="btn btn-success w-auto px-5 py-2 h-auto"
          @click="toDashboard"
        >
          Go to Dashboard
        </button>
      </div>
    </template>
  </base-dialog>

  <div class="container py-5 mb-3 mt-3">
    <div class="row justify-content-center gy-4">
      <div class="col-lg-6">
        <div class="form-check">
          <label for="uk" class="form-check-label"
            >Biil to my Default Address</label
          >
          <input
            type="checkbox"
            class="form-check-input"
            id="uk"
            @change="userInfo"
          />
          <small v-if="notDefault" class="text-danger d-block"
            >You didn't update your KYC</small
          >
        </div>
        <form @submit.prevent="confirmTicket">
          <div class="formbody">
            <ul class="list-inline clearfix">
              <li class="srch_input_wd">
                <div class="form-group">
                  <label for="pname">Name<span>*</span></label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Full Name"
                    maxlength="25"
                    v-model.trim="name"
                    :disabled="billingAddr"
                  />
                </div>
              </li>
              <li class="srch_input_age hide">
                <div class="form-group">
                  <label for="page">Age<span>*</span></label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Age"
                    maxlength="2"
                    v-model.number="age"
                    :disabled="billingAddr"
                  />
                </div>
              </li>
              <li class="srch_input_gender">
                <label for="pgender">Gender<span>*</span></label
                ><br />
                <label class="radio-inline text-center">
                  <input
                    type="radio"
                    name="gender[0]"
                    id="optmale"
                    value="male"
                    checked="checked"
                    v-model="gender"
                    :disabled="billingAddr"
                  />
                  M
                </label>
                <label class="radio-inline text-center">
                  <input
                    type="radio"
                    name="gender[0]"
                    id="optfemale"
                    value="female"
                    v-model="gender"
                    :disabled="billingAddr"
                  />
                  F
                </label>
              </li>
            </ul>
            <div class="pt-4"></div>
            <hr />
            <h5 class="title my-2">Contact Info</h5>
            <ul class="list-inline clearfix">
              <li class="srch_input_wd">
                <div class="form-group">
                  <label for="pname">Mobile No<span>*</span></label>
                  <input
                    type="tel"
                    class="form-control"
                    maxlength="25"
                    v-model.number="mobile"
                    :disabled="billingAddr"
                  />
                </div>
              </li>
              <li class="srch_input_age hide">
                <div class="form-group">
                  <label for="page"
                    >Email<span class="text-info ms-2">(optional)</span></label
                  >
                  <input
                    type="email"
                    class="form-control"
                    v-model.trim="email"
                    :disabled="billingAddr"
                  />
                </div>
              </li>
            </ul>
          </div>

          <!-- Tab panes -->
          <div class="payment mt-3">
            <div class="">
              <link
                rel="stylesheet"
                type="text/css"
                href="https://www.shohoz.com/css/mfs.css?v=1.0.1"
              />
              <div class="row gx-5">
                <p>Please Select a Payment Method -</p>

                <div
                  class="col-md-3 col-xs-6 bkash_container"
                  id="bkash_payment"
                >
                  <p class="logo_svg">
                    <img
                      src="https://www.shohoz.com/img/bkash_logo.png"
                      alt="bkash"
                    />
                    <span>bKash</span>
                  </p>
                </div>

                <div
                  class="col-md-3 col-xs-6 nagad_container selected_box"
                  id="nagad"
                >
                  <p class="logo_svg">
                    <img
                      src="https://www.shohoz.com/img/Nagad-Latest.svg"
                      alt="nagad"
                    />
                    <span
                      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >
                  </p>
                </div>

                <div class="col-md-3 col-xs-6 logo_container" id="mfs_payment">
                  <p class="logo_svg">
                    <img
                      src="https://www.shohoz.com/img/rocket.svg"
                      alt="rocket"
                      style="margin-top: -7px"
                    />
                    <span style="display: inline-block; padding-bottom: 10px"
                      >rocket</span
                    >
                  </p>
                </div>
                <div class="col-md-3 col-xs-6 logo_container" id="other_mfs">
                  <p class="logo_svg">
                    <img
                      src="https://www.shohoz.com/img/other-mfs.svg"
                      alt="Other MFS"
                      style="width: 30px; margin-top: -4px"
                    />
                    <span>Other MFS</span>
                  </p>
                </div>
              </div>

              <div id="waiting_time" class="display-none">
                <div style="margin-top: 16px">
                  <i class="fa fa-info-circle"></i>
                </div>
                <div>
                  <div
                    style="
                      text-align: left;
                      margin-left: 16px;
                      margin-top: 26px;
                    "
                  >
                    <p>
                      Processing fee will be added with ticket fare during
                      payment, that will vary depending on MFS
                    </p>
                  </div>
                </div>
              </div>

              <div id="fee_message" class="">
                <div>
                  <i class="fa fa-info-circle"></i>
                </div>
                <div>
                  <div class="mfs_fee">
                    <p>
                      Processing fee will be added with ticket fare during
                      payment, that will vary depending on MFS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-danger" v-if="notLoggedIn">
            Please Log in or Create an Account.
          </p>
          <button class="btn-md cmn--btn" v-if="!isSubmitted">
            Confirm Reservation
          </button>
        </form>
      </div>

      <div class="col-lg-4">
        <aside class="aside">
          <h4 class="title mb-4">Journey Details</h4>

          <ul>
            <li class="py-0 mb-1">
              <h5 class="text--success">
                {{ receivedData.from }} - {{ receivedData.to }}
              </h5>
            </li>
            <li class="py-0" style="font-size: 14px">{{ receivedData.bus }}</li>
            <li class="py-0" style="font-size: 14px">
              {{ formattedDate }}
            </li>
            <li class="py-0" style="font-size: 14px">
              Seat No(s):
              <span
                v-for="(seat, index) in selectedSeats"
                :key="index"
                class="text--success ms-2"
                >{{ seat }}</span
              >
            </li>
            <li class="py-0" style="font-size: 14px">
              <span style="min-width: 85px">Boarding at:</span>
              {{ receivedData.boad }}
            </li>
            <li class="py-0" style="font-size: 14px">
              <span style="min-width: 85px">Dropping at:</span
              >{{ receivedData.drop }}
            </li>
          </ul>
        </aside>

        <aside class="aside mt-4" oncontextmenu="return false;">
          <h4 class="title mb-3">Fare Details</h4>

          <ul style="font-size: 14px">
            <li class="d-flex justify-content-between align-items-center py-0">
              Ticket{{ receivedData.fare == receivedData.totalFare ? "" : "s" }}
              Price
              <span id="display_ticket_price">{{
                receivedData.totalFare
              }}</span>
            </li>
            <li class="d-flex justify-content-between align-items-center py-0">
              Processing Fee
              <span id="display_shohoz_fee">{{ processFee }}</span>
            </li>
            <li class="d-flex justify-content-between align-items-center py-0">
              Discount<span id="display_discount">{{ discount }}</span>
            </li>
            <li class="d-flex justify-content-between align-items-center py-0">
              Insurance Amount<span id="total_insurance_amount">{{
                insuranceAmount
              }}</span>
            </li>
            <li>
              <hr class="m-0" />
            </li>
            <li
              class="d-flex justify-content-between align-items-center py-0 mt-2 text--base text-end"
              style="font-size: 18px"
            >
              Total <span>$ {{ totalBill }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
    {{ user }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSeats: [],
      processFee: 300,
      discount: 25,
      insuranceAmount: 30,

      name: "",
      age: "",
      gender: "",
      mobile: "",
      email: "",
      formNotValid: false,
      formIsValid: false,
      isSubmitted: false,

      ticketNo: "",
      billingAddr: false,
      notDefault: false,

      notLoggedIn: false,
    };
  },
  computed: {
    receivedData() {
      return JSON.parse(this.$route.params.data || "{}");
    },
    seats() {
      return this.receivedData.seats;
    },
    formattedDate() {
      const dateParts = this.receivedData.date.split("-");
      const year = parseInt(dateParts[2]);
      const month = parseInt(dateParts[0]) - 1;
      const day = parseInt(dateParts[1]);

      const date = new Date(year, month, day);

      const options = { year: "numeric", month: "long", day: "numeric" };
      const formatted = date.toLocaleDateString("en-US", options);

      const weekdayOptions = { weekday: "long" };
      const weekday = date.toLocaleDateString("en-US", weekdayOptions);

      return `${weekday}, ${formatted}`;
    },
    totalBill() {
      return (
        this.receivedData.totalFare +
        this.insuranceAmount +
        this.processFee -
        this.discount
      );
    },
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    bookings() {
      return this.$store.getters["ticket/bookings"];
    },
  },
  methods: {
    toDashboard() {
      this.$router.replace("/user-dashboard");
    },
    makeTicketNo() {
      // const data = this.bookings[this.bookings.length].id;
      // const text = data.slice(0, 2);
      // const number = data.slice(2, data.length);
      // const numberP = parseInt(number) + 1;
      // this.ticketNo = text + numberP;

      const randomNumber = Math.floor(Math.random() * 100000) + 10000;
      this.ticketNo = "AF" + randomNumber;
    },
    token() {
      return this.$store.getters.token;
    },

    confirmTicket() {
      if (!this.isLoggedIn) {
        this.notLoggedIn = true;
        return;
      }
      if (this.name == "" || this.age == "" || this.mobile == "") {
        this.formNotValid = true;
        this.formIsValid = false;
        return;
      }
      this.notLoggedIn = false;
      this.formNotValid = false;
      this.$store.dispatch("ticket/confirmTicket", {
        // For Customer Details
        name: this.name,
        age: this.age,
        gender: this.gender,
        mobile: this.mobile,
        email: this.email,

        // For Dashboard Details
        from: this.receivedData.from,
        to: this.receivedData.to,
        bus: this.receivedData.bus,
        boad: this.receivedData.boad,
        fare: this.totalBill,
        date: this.receivedData.date,
        seats: this.selectedSeats,
        ticketNo: this.ticketNo,
      });
      this.formIsValid = true;
      this.isSubmitted = true;
    },
    closeDialog() {
      this.formNotValid = false;
      this.formIsValid = false;
    },
    userInfo(event) {
      if (this.$store.getters.userInfo.length <= 0) {
        this.notDefault = true;
        return;
      }
      this.notDefault = false;
      if (event.target.checked) {
        this.name = this.$store.getters.userInfo.name;
        this.age = this.$store.getters.userInfo.age;
        this.gender = this.$store.getters.userInfo.gender;
        this.mobile = this.$store.getters.userInfo.mobile;
        this.email = this.$store.getters.userInfo.email;
        this.billingAddr = true;
      } else {
        this.billingAddr = false;
        this.name = "";
        this.age = "";
        this.gender = "";
        this.mobile = "";
        this.email = "";
      }
    },
  },
  created() {
    this.$store.dispatch("ticket/loadTickets");
    this.$store.dispatch("loadUser");
    this.selectedSeats = this.seats;
    this.makeTicketNo();
  },
};
</script>

<style scoped>
label span {
  color: red;
}
.aside {
  padding: 30px;
  color: #555;
  background: #f2f2f2;
}
.formbody {
  max-width: 50rem;
  padding: 40px;
  margin-inline: auto;
  background: #f2f2f2;
}
.payment {
  max-width: 50rem;
  padding: 40px;
  margin-inline: auto;
  background: #f2f2f2;
}
</style>
