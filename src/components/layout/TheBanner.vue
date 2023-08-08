
<template>
  <!-- Banner Section Starts Here -->
  <section class="banner-section">
    <img src="../../assets/bg/banner3.png" alt="" class="banner-shape" />
    <div class="container">
      <div
        class="banner-wrapper"
        v-for="banner in bannerContents"
        :key="banner.title"
      >
        <div class="banner-content">
          <h1 class="title">{{ banner.title }}</h1>
          <router-link :to="banner.buttonLink" class="cmn--btn">{{
            banner.buttonName
          }}</router-link>
        </div>
        <div class="ticket-form-wrapper">
          <div class="ticket-header nav-tabs nav border-0">
            <h4 class="title">{{ banner.formTitle }}</h4>
            <ul class="ticket-type">
              <li>
                <a class="active" href="#one-way" data-bs-toggle="tab"
                  >One Way</a
                >
              </li>
              <li>
                <a href="#round-trip" data-bs-toggle="tab">Round Trip</a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="one-way">
              <form class="ticket-form row g-3 justify-content-center m-0">
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-location-arrow"></i>
                    <input
                      type="text"
                      class="form--control"
                      placeholder="Enter Pickup City"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-map-marker"></i>
                    <input
                      type="text"
                      class="form--control"
                      placeholder="Enter Destination City"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-calendar-check"></i>
                    <input
                      type="text"
                      id="start-date"
                      class="form--control"
                      placeholder="Departure Date"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-calendar-check"></i>
                    <input
                      type="text"
                      id="end-date"
                      class="form--control"
                      placeholder="Return Date"
                      disabled
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <button>Find Tickets</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="tab-pane fade" id="round-trip">
              <form class="ticket-form row g-3 justify-content-center m-0">
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-location-arrow"></i>
                    <input
                      type="text"
                      class="form--control"
                      placeholder="Enter Pickup City"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-map-marker"></i>
                    <input
                      type="text"
                      class="form--control"
                      placeholder="Enter Destination City"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-calendar-check"></i>
                    <input
                      type="text"
                      id="start-date2"
                      class="form--control"
                      placeholder="Departure Date"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <i class="las la-calendar-check"></i>
                    <input
                      type="text"
                      id="end-date2"
                      class="form--control"
                      placeholder="Return Date"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form--group">
                    <button>Find Tickets</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape">
      <img src="../../assets/bg/bus.png" alt="bg" />
    </div>
  </section>
  <!-- Banner Section Ends Here -->
</template>




<script>
export default {
  computed: {
    bannerContents() {
      return this.$store.getters["banner/bannerContents"];
    },
  },
};
</script>


<style scoped>
.banner-section {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.banner-shape {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
}

@media (max-width: 1199px) {
  .banner-section {
    padding: 90px 0;
    padding-top: 100px;
  }
}

@media (max-width: 991px) {
  .banner-section {
    padding: 80px 0;
    padding-top: 70px;
  }
}

@media (max-width: 575px) {
  .banner-section {
    padding: 70px 0;
  }
}

.banner-section::before {
  content: "";
  background-color: rgba(14, 158, 77, 0.3);
  position: absolute;
  -webkit-transform: translate(50%);
  transform: translate(50%);
  border-radius: 50%;
  width: 900px;
  height: 800px;
  right: 100px;
  top: -500px;
}

@media (max-width: 767px) {
  .banner-section::before {
    top: -570px;
  }
}

@media (max-width: 575px) {
  .banner-section::before {
    top: -640px;
    right: 0px;
  }
}

.banner-section::after {
  content: "";
  background-color: rgba(14, 158, 77, 0.4);
  position: absolute;
  -webkit-transform: translate(50%);
  transform: translate(50%);
  border-radius: 50%;
  width: 900px;
  height: 800px;
  right: 100px;
  top: -520px;
}

@media (max-width: 767px) {
  .banner-section::after {
    top: -600px;
  }
}

@media (max-width: 575px) {
  .banner-section::after {
    top: -660px;
    right: -20px;
  }
}

.banner-section .container {
  position: relative;
  z-index: 3;
}

.banner-section .shape {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  -webkit-animation: run 20s linear infinite;
  animation: run 20s linear infinite;
}

@media (max-width: 991px) {
  .banner-section .shape {
    width: 150px;
  }
}

@media (max-width: 767px) {
  .banner-section .shape {
    width: 130px;
  }
}

.banner-section .shape img {
  width: 100%;
}

@-webkit-keyframes run {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes run {
  0% {
    right: 0;
  }
  100% {
    right: 100%;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.banner-wrapper {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.banner-content {
  width: 600px;
  margin-top: -10px;
}

@media (max-width: 1199px) {
  .banner-content {
    width: 480px;
  }
}

@media (max-width: 991px) {
  .banner-content {
    margin-bottom: 20px;
  }
}

@media (max-width: 575px) {
  .banner-content {
    margin-bottom: 20px;
  }
}

@media (max-width: 1199px) {
  .banner-content .title {
    font-size: 42px;
  }
}

@media (max-width: 767px) {
  .banner-content .title {
    font-size: 38px;
  }
}

@media (max-width: 575px) {
  .banner-content .title {
    font-size: 30px;
  }
}

.banner-content .cmn--btn {
  margin-top: 35px;
  word-spacing: 2px;
  font-weight: 600;
}

@media (max-width: 575px) {
  .banner-content .cmn--btn {
    margin-top: 25px;
  }
}

.inner-banner {
  position: relative;
  padding: 70px 0;
}

.inner-banner::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(27, 39, 61, 0.4);
}

.inner-banner .inner-banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.inner-banner .inner-banner-content .title {
  font-size: 40px;
  color: #fff;
}

@media (max-width: 767px) {
  .inner-banner .inner-banner-content .title {
    font-size: 34px;
  }
}

@media (max-width: 767px) {
  .inner-banner .inner-banner-content .title {
    font-size: 30px;
  }
}

.inner-banner .inner-banner-content .breadcums {
  margin-top: 15px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: -30px;
}

.inner-banner .inner-banner-content .breadcums li {
  padding: 0;
  padding-right: 30px;
  color: #fff;
}

.inner-banner .inner-banner-content .breadcums li a {
  position: relative;
  font-size: 18px;
  color: #fff;
}

.inner-banner .inner-banner-content .breadcums li a:hover {
  color: #0e9e4d;
}

.inner-banner .inner-banner-content .breadcums li .home {
  padding-right: 10px;
}

.inner-banner .inner-banner-content .breadcums li .home::before {
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  font-family: "Line Awesome Free";
  content: "\f061";
  left: 100%;
  top: 2px;
  color: #fff;
}
</style>