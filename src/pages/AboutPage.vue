<template>
  <!-- About Section Starts Here -->
  <section class="about-section padding-top padding-bottom">
    <div class="container">
      <div class="about-wrapper">
        <div class="row mb-4 mb-md-5 gy-4">
          <div class="col-lg-7 col-xl-6">
            <div class="about-content">
              <div
                class="section-header"
                v-for="(ab, index) in about"
                :key="index"
              >
                <h2 class="title">{{ ab.mainTitle }}</h2>
                <p>{{ ab.mainPera }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-6">
            <div class="about-thumb" v-for="(ab, index) in about" :key="index">
              <img :src="require(`@/assets/thumb/${ab.thumb}`)" alt="thumb" />
            </div>
          </div>
        </div>
        <div class="about-details">
          <div class="item">
            <h4 class="title">About Us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel temporibus voluptatum quidem, blanditiis libero assumenda
              beatae ducimus placeat odio aperiam tenetur animi, reiciendis
              reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus
              eum non quisquam! Quo esse est minima vero dolores eveniet
              voluptatibus nam. Veniam ad quae illum tenetur voluptates
              veritatis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel temporibus voluptatum quidem, blanditiis libero assumenda
              beatae ducimus placeat odio aperiam tenetur animi, reiciendis
              reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus
              eum non quisquam! Quo esse est minima vero dolores eveniet
              voluptatibus nam. Veniam ad quae illum tenetur voluptates
              veritatis?
            </p>
          </div>
          <div class="item">
            <h4 class="title">Why Make Bus Reservations With AutoBus</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel temporibus voluptatum quidem, blanditiis libero assumenda
              beatae ducimus placeat odio aperiam tenetur animi, reiciendis
              reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus
              eum non quisquam! Quo esse est minima vero dolores eveniet
              voluptatibus nam. Veniam ad quae illum tenetur voluptates
              veritatis?
            </p>
            <ul class="info">
              <li>Free Cancellation</li>
              <li>Instant Refunds</li>
              <li>Easy & Quick Bus Booking</li>
              <li>Exciting Cashback & Bus Offers</li>
              <li>Best Price Assured</li>
              <li>24/7 Customer Assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Section Ends Here -->
</template>

<script>
export default {
  computed: {
    about() {
      return this.$store.getters["about/about"];
    },
  },
};
</script>

<style scoped>
.about-thumb img {
  width: 100%;
}

.about-content {
  padding-right: 40px;
}

@media (max-width: 1199px) {
  .about-content {
    padding-right: 10px;
  }
}

@media (max-width: 991px) {
  .about-content {
    padding-right: 0px;
  }
}

.about-content .section-header {
  margin-bottom: 20px;
}

.about-content .section-header p {
  font-size: 18px;
  color: #424248;
}

@media (max-width: 1199px) {
  .about-content .section-header p {
    font-size: 16px;
  }
}

.about-wrapper {
  margin: 0 auto;
  border-radius: 10px;
  padding: 35px 25px;
  -webkit-box-shadow: 0 0 20px 2px rgba(27, 39, 61, 0.07);
  box-shadow: 0 0 20px 2px rgba(27, 39, 61, 0.07);
  border: 1px solid rgba(27, 39, 61, 0.1);
}

@media (min-width: 1400px) {
  .about-wrapper {
    padding: 40px 35px;
  }
}

@media (max-width: 767px) {
  .about-wrapper {
    padding: 0;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

.about-wrapper .item {
  margin-bottom: 30px;
}

.about-wrapper .item:last-child {
  margin-bottom: 0;
}

.about-wrapper .item .title {
  margin-bottom: 10px;
}

.about-wrapper .item .info {
  margin-top: 15px;
  margin-left: 15px;
}

.about-wrapper .item .info li {
  padding: 3px 0;
  list-style-type: disc;
}

.about-wrapper .item p {
  margin-bottom: 10px;
}
</style>