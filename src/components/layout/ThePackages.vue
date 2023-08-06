<template>
  <!-- Packages Section Starts Here -->
  <section class="packages-section padding-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10">
          <section-header
            class="text-center"
            v-for="sec in section"
            :key="sec.title"
            :title="sec.title"
            :pera="sec.pera"
          ></section-header>
        </div>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-xl-3 col-lg-4 col-md-6 col-sm-10"
          v-for="(pack, index) in packages"
          :key="index"
        >
          <div class="package-item">
            <div class="package-thumb">
              <img :src="require(`@/assets/packages/${pack.thumb}`)" alt="" />
              <span class="discount"> Discount {{ pack.discount }} </span>
            </div>
            <div class="package-content">
              <h5 class="tour">{{ pack.title }}</h5>
              <span class="location">
                <i class="las la-map-marked-alt"></i>
                {{ pack.location }}
              </span>
              <ul class="ratting">
                <li class="rate">{{ pack.rating }}/5</li>
                <li class="txt">Avarage</li>
                <li class="total-reviews">( {{ pack.reviews }} reviews )</li>
              </ul>
              <div class="package-price">
                <div class="price">
                  <p class="fare">
                    From <span>$ {{ pack.fare }}</span>
                  </p>
                  <p class="per">Per Day</p>
                </div>
                <router-link to="/buy-package" class="buy-package-btn"
                  >Buy Package</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Packages Section Ends Here -->
</template>

<script>
import SectionHeader from "./SectionHeader.vue";
export default {
  components: {
    SectionHeader,
  },

  computed: {
    packages() {
      return this.$store.getters["packages/packages"];
    },
    section() {
      return this.$store.getters["packages/section"];
    },
  },
};
</script>

<style scoped>
.package-item {
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.1);
  border-radius: 5px;
  overflow: hidden;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.package-item:hover {
  -webkit-box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.2);
  box-shadow: 0 0 15px 3px rgba(27, 39, 61, 0.2);
}

.package-item:hover .package-thumb {
  overflow: hidden;
}

.package-item:hover .package-thumb img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.package-thumb {
  position: relative;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}

.package-thumb .discount {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #0e9e4d;
  color: #fff;
  padding: 8px;
  padding-left: 20px;
  border-radius: 0 3px 3px 0;
  line-height: 1;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 8% 50%);
  font-size: 14px;
}

.package-thumb img {
  width: 100%;
}

.package-content {
  padding: 20px 15px;
  border-radius: 0 0 5px 5px;
}

.package-content .tour {
  font-weight: 500 !important;
}

.package-content .location {
  margin-bottom: 15px;
  font-size: 14px;
}

.package-content .location i {
  color: #0e9e4d;
  font-size: 16px;
  margin-right: 5px;
}

.package-content .ratting {
  margin: 0;
}

.package-content .ratting li {
  line-height: 1;
  margin-right: 5px;
}

.package-content .ratting li:last-child {
  margin-right: 0;
}

.package-content .ratting .rate {
  padding: 4px 6px;
  border-radius: 3px;
  color: #fff;
  background: #0e9e4d;
}

.package-content .ratting .txt {
  color: #0e9e4d;
}

.package-content .ratting .total-reviews {
  color: #777;
}

.package-content .package-price {
  margin-top: 12px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.package-content .package-price .price .fare span {
  font-size: 20px;
  font-weight: 500;
  color: #0e9e4d;
}

.package-content .package-price .per {
  font-size: 14px;
  line-height: 1;
}

.package-content .package-price .buy-package-btn {
  border-bottom: 1px solid rgba(27, 39, 61, 0.3);
  line-height: 1.2;
}

.package-content .package-price .buy-package-btn:hover {
  border-color: #0e9e4d;
}
</style>