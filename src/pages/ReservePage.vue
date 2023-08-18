<template>
  <inner-banner
    v-for="con in contactPage"
    :key="con.slug"
    title="Bus Reservation"
    slug="Reserve"
    :bg="con.bg"
  ></inner-banner>

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
      <p class="text-center">Your message has been successfully sent!</p>
    </template>
    <template #actions>
      <div class="text-center">
        <button
          class="btn btn-success w-auto px-5 py-2 h-auto"
          @click="closeDialog"
        >
          Okay
        </button>
      </div>
    </template>
  </base-dialog>

  <!-- Bus Reservation Section Starts Here -->
  <section class="bus-reservation padding-top padding-bottom section-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
          <div class="section-header text-center">
            <h2 class="title">Reserve Your Favourite Bus</h2>
            <p>
              Unde neque, cupiditate dignissimos ab quidem suscipit velit a sit
              veritatis consequuntur odio ullam officia odit molestiae, aperiam
              vero voluptatem esse quo.
            </p>
          </div>
        </div>
      </div>
      <div class="bus-reservation-wrapper">
        <form @submit.prevent="reserveBus">
          <h5 class="title">Reserve Your Bus</h5>
          <div class="bus-reservation-form row gy-4">
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="start-date">Journey Starts Date :</label>
                <input
                  id="start-date"
                  type="date"
                  class="form--control"
                  placeholder="Pick a Date"
                  v-model.trim="startDay"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="end-date">Journey Ends Date :</label>
                <input
                  id="end-date"
                  type="date"
                  class="form--control"
                  placeholder="Pick a Date"
                  v-model.trim="endDay"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="bus-type">Bus Type :</label>
                <select
                  id="bus-type"
                  class="form-select form--control"
                  v-model.trim="busType"
                >
                  <option value="0">Select Type</option>
                  <option value="AC">AC</option>
                  <option value="Non-AC">Non-AC</option>
                  <option value="Business Class">Business Class</option>
                  <option value="Sleeper">Sleeper</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="bor-city">Boarding Point :</label>
                <input
                  id="bor-city"
                  type="text"
                  class="form--control"
                  placeholder="Enter a City"
                  v-model.trim="boadingPoint"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="des-city">Destination Point :</label>
                <input
                  id="des-city"
                  type="text"
                  class="form--control"
                  placeholder="Enter a City"
                  v-model.trim="droppingPoint"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="bus-seat">Number of Seats :</label>
                <select
                  id="bus-seat"
                  class="form-select form--control"
                  v-model.trim="numberOfSeats"
                >
                  <option value="0">Select Num of Seats</option>
                  <option value="25">25</option>
                  <option value="25 to 30">25 to 30</option>
                  <option value="30 to 40">30 to 40</option>
                  <option value="Above 40">Above 40</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="bus-num">Number of Buses :</label>
                <select
                  id="bus-num"
                  class="form-select form--control"
                  v-model.trim="numberOfBus"
                >
                  <option value="0">Select Num of Buses</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div>
              <h5 class="title contact">Contact Information</h5>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="contact-name">Contact Person Name :</label>
                <input
                  id="contact-name"
                  type="text"
                  class="form--control"
                  placeholder="Enter Full Name"
                  v-model.trim="fullName"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="contact-ph">Phone Number :</label>
                <input
                  id="contact-ph"
                  type="text"
                  class="form--control"
                  placeholder="Enter Phone Number"
                  v-model.trim="phoneNumber"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form--group">
                <label for="contact-email">Email Address :</label>
                <input
                  id="contact-email"
                  type="text"
                  class="form--control"
                  placeholder="Enter Email Address"
                  v-model.trim="email"
                />
              </div>
            </div>
            <div class="col-lg-12 col-md-6">
              <div class="form--group">
                <label for="contact-addr">Address :</label>
                <input
                  id="contact-addr"
                  type="text"
                  class="form--control"
                  placeholder="Enter Full Address"
                  v-model.trim="fullAddr"
                />
              </div>
            </div>
            <div class="col-12">
              <div class="form--group">
                <button class="reserve-btn h-auto">
                  Request for Reservation
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- Bus Reservation Section Ends Here -->

  <!-- How to Reserve Section Starts Here -->
  <section class="how-reserve padding-top padding-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
          <div class="section-header text-center">
            <h2 class="title">How to <span>Reserve Bus</span></h2>
            <p>
              Et, eaque ducimus dignissimos dolores esse temporibus, nesciunt
              consectetur suscipit molestias nisi cum perferendis aspernatur
              deleniti odit!
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center g-4">
        <div class="col-lg-4 col-md-6 col-sm-10">
          <div class="how-reserve-item">
            <div class="thumb">
              <i class="las la-search"></i>
            </div>
            <div class="content">
              <h5 class="title">Find a Bus for Reservation</h5>
              <p>
                Find our Bus tour packages on Packages page. Ad velit
                necessitatibus sequi blanditiis!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-10">
          <div class="how-reserve-item">
            <div class="thumb">
              <i class="las la-check-square"></i>
            </div>
            <div class="content">
              <h5 class="title">Select the Bus</h5>
              <p>
                Find our Bus tour packages on Packages page.Ad velit
                necessitatibus sequi blanditiis!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-10">
          <div class="how-reserve-item">
            <div class="thumb">
              <i class="lab la-wpforms"></i>
            </div>
            <div class="content">
              <h5 class="title">Fill the Reservation Form</h5>
              <p>
                Find our Bus tour packages on Packages page.Ad velit
                necessitatibus sequi blanditiis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- How to Reserve Section Ends Here -->
</template>

<script>
import InnerBanner from "@/components/layout/InnerBanner.vue";
export default {
  components: {
    InnerBanner,
  },
  data() {
    return {
      formIsValid: false,
      formNotValid: false,

      startDay: "",
      endDay: "",
      busType: "0",
      boadingPoint: "",
      droppingPoint: "",
      numberOfSeats: "0",
      numberOfBus: "0",

      // contact
      fullName: "",
      phoneNumber: "",
      email: "",
      fullAddr: "",
    };
  },
  methods: {
    reserveBus() {
      if (
        this.startDay == "" ||
        this.endDay == "" ||
        this.busType == "" ||
        this.boadingPoint == "" ||
        this.droppingPoint == "" ||
        this.numberOfSeats == "" ||
        this.numberOfBus == "" ||
        this.fullName == "" ||
        this.phoneNumber == "" ||
        this.email == "" ||
        this.fullAddr == ""
      ) {
        this.formIsValid = false;
        this.formNotValid = true;
        return;
      }
      this.$store.dispatch("reserve/addReservation", {
        startDay: this.startDay,
        endDay: this.endDay,
        busType: this.busType,
        boadingPoint: this.boadingPoint,
        droppingPoint: this.droppingPoint,
        numberOfSeats: this.numberOfSeats,
        numberOfBus: this.numberOfBus,
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        fullAddr: this.fullAddr,
      });
      this.formNotValid = false;
      this.formIsValid = true;
      this.startDay = "";
      this.endDay = "";
      this.busType = "";
      this.boadingPoint = "";
      this.droppingPoint = "";
      this.numberOfSeats = "";
      this.numberOfBus = "";
      this.fullName = "";
      this.phoneNumber = "";
      this.email = "";
      this.fullAddr = "";
    },

    closeDialog() {
      this.formNotValid = false;
      this.formIsValid = false;
    },
  },
  computed: {
    contactPage() {
      return this.$store.getters["contact/contactPage"];
    },
  },
};
</script>

<style scoped>
.how-reserve-item {
  padding: 20px 15px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
}

@media (min-width: 1400px) {
  .how-reserve-item {
    padding: 30px 25px;
  }
}

.how-reserve-item .thumb {
  width: 80px;
  height: 80px;
  margin: 0 auto 22px;
  font-size: 30px;
  background: #fff;
  color: #0e9e4d;
  border: 1px solid rgba(14, 158, 77, 0.7);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0 7px rgba(14, 158, 77, 0.3);
  box-shadow: 0 0 0 7px rgba(14, 158, 77, 0.3);
  background: rgba(14, 158, 77, 0.9);
  color: #fff;
}

@media (max-width: 1199px) {
  .how-reserve-item .thumb {
    width: 70px;
    height: 70px;
  }
}

.how-reserve-item .content .title {
  margin-bottom: 5px;
}

.bus-reservation-wrapper {
  background: #fff;
  padding: 35px 30px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 15px rgba(27, 39, 61, 0.07);
  box-shadow: 0 0 15px rgba(27, 39, 61, 0.07);
}

@media (max-width: 575px) {
  .bus-reservation-wrapper {
    padding: 20px 15px;
  }
}

.bus-reservation-wrapper .title {
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(27, 39, 61, 0.1);
  padding-bottom: 10px;
}

.bus-reservation-wrapper .title.contact {
  margin-top: 20px;
  margin-bottom: 0px;
}

.bus-reservation-form .form--group label {
  font-weight: 500;
  font-family: 14px;
}
</style>
