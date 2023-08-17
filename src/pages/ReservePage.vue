<template>
  <!-- Bus Reservation Section Starts Here -->
  <section class="bus-reservation padding-top padding-bottom section-bg">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-10">
          <div class="section-header text-center">
            <h2 class="title">
              Reserve Your Favourite Bus <span>With Autobus</span>
            </h2>
            <p>
              Unde neque, cupiditate dignissimos ab quidem suscipit velit a sit
              veritatis consequuntur odio ullam officia odit molestiae, aperiam
              vero voluptatem esse quo.
            </p>
          </div>
        </div>
      </div>
      <div class="bus-reservation-wrapper">
        <h5 class="title">Reserve Your Bus</h5>
        <div class="bus-reservation-form row gy-4">
          <div class="col-lg-4 col-md-6">
            <div class="form--group">
              <label for="start-date">Journey Starts Date :</label>
              <input
                id="start-date"
                type="text"
                class="form--control"
                placeholder="Pick a Date"
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="form--group">
              <label for="end-date">Journey Ends Date :</label>
              <input
                id="end-date"
                type="text"
                class="form--control"
                placeholder="Pick a Date"
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="form--group">
              <label for="bus-type">Bus Type :</label>
              <select id="bus-type" class="form-select form--control">
                <option value="01">Select Type</option>
                <option value="02">AC</option>
                <option value="03">Non-AC</option>
                <option value="04">Business Class</option>
                <option value="05">Sleeper</option>
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
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="form--group">
              <label for="bus-seat">Number of Seats :</label>
              <select id="bus-seat" class="form-select form--control">
                <option value="01">Select Num of Seats</option>
                <option value="02">25</option>
                <option value="03">25 to 30</option>
                <option value="04">30 to 40</option>
                <option value="05">Above 40</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="form--group">
              <label for="bus-num">Number of Buses :</label>
              <select id="bus-num" class="form-select form--control">
                <option value="01">Select Num of Buses</option>
                <option value="02">1</option>
                <option value="03">2</option>
                <option value="04">3</option>
                <option value="05">4</option>
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
              />
            </div>
          </div>
          <div class="col-12">
            <div class="form--group">
              <button class="reserve-btn h-auto" type="submit">
                Request for Reservation
              </button>
            </div>
          </div>
        </div>
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
export default {};
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
